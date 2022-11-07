import { browser, dev } from '$app/environment'
import { Observable, tap } from 'rxjs'
import type { Unsubscriber } from 'svelte/store'
import {
	ThemeBloc,
	ThemeDark,
	ThemeLight,
	ThemeLTR,
	ThemeRTL,
	ThemeState
} from '/src/bloc/ThemeBloc'
import Container from '/src/di/Di'
import { toUnsubscriber } from '/src/helpers/utils'

let subs: Unsubscriber[] = []

export default new Observable((observer) => {
	dev && console.log('Loading ThemeBloc')

	if (!Container.has(ThemeBloc)) {
		Container.set(ThemeBloc, new ThemeBloc(ThemeState.new()))
	}

	if (!browser) {
		return
	}

	let preferColor: string | undefined

	if (window.matchMedia) {
		if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
			preferColor = 'dark'
		} else {
			preferColor = 'light'
		}
	}

	// Color
	const currentTheme = localStorage.getItem('theme') || preferColor

	switch (currentTheme) {
		case 'dark':
			Container.get(ThemeBloc).add(new ThemeDark())
			break
		case 'light':
		default:
			Container.get(ThemeBloc).add(new ThemeLight())
			break
	}

	// Detect ColorScheme
	if (window.matchMedia) {
		window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', onMediaChanges)

		subs.push(() => {
			window
				.matchMedia('(prefers-color-scheme: dark)')
				.removeEventListener('change', onMediaChanges)
		})
	}

	// Dir
	const currentDir = localStorage.getItem('dir')

	switch (currentDir) {
		case 'rtl':
			Container.get(ThemeBloc).add(new ThemeRTL())
			break
		case 'ltr':
		default:
			Container.get(ThemeBloc).add(new ThemeLTR())
			break
	}

	// Save
	subs.push(
		toUnsubscriber(
			Container.get(ThemeBloc)
				.state$.pipe(
					tap((state) => {
						// Color
						if (state.theme) {
							localStorage.setItem('theme', state.theme)
						} else {
							localStorage.removeItem('theme')
						}

						// Dir
						if (state.dir) {
							localStorage.setItem('dir', state.dir)
						} else {
							localStorage.removeItem('dir')
						}
					})
				)
				.subscribe()
		)
	)

	observer.next()

	return () => {
		for (const key in subs) {
			subs[key]()
		}

		subs = []
	}
})

function onMediaChanges(event: MediaQueryListEvent) {
	if (event.matches) {
		Container.get(ThemeBloc).add(new ThemeDark())
	} else {
		Container.get(ThemeBloc).add(new ThemeLight())
	}
}
