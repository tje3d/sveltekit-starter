import { browser, dev } from '$app/environment'
import { filter, Observable, tap } from 'rxjs'
import type { Unsubscriber } from 'svelte/store'
import {
	AuthBloc,
	AuthState,
	AuthUserFromStorage,
	AuthUserStorageCorrupted
} from '/src/bloc/AuthBloc'
import { SidebarBloc, SidebarClose, SidebarState } from '/src/bloc/SidebarBloc'
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
import User from '/src/models/UserModel'

let subs: Unsubscriber[] = []

export default new Observable((observer) => {
	dev && console.log('Loading Bloc')

	authBlocInit()
	themeBlocInit()
	sidebarBlocInit()

	observer.next()

	return () => {
		for (const key in subs) {
			subs[key]()
		}

		subs = []
	}
})

function authBlocInit() {
	dev && console.log('Loading AuthBloc')

	if (!Container.has(AuthBloc)) {
		Container.set(AuthBloc, new AuthBloc(AuthState.new()))
	}

	if (!browser) {
		return
	}

	// Load AuthBLOC
	const currentUser = localStorage.getItem('user')

	if (currentUser) {
		try {
			const user = User.fromJson(JSON.parse(currentUser))
			Container.get(AuthBloc).add(new AuthUserFromStorage(user))
		} catch (error) {
			console.error(error)
			Container.get(AuthBloc).add(new AuthUserStorageCorrupted())
		}
	}

	// Save AuthBloc
	subs.push(
		toUnsubscriber(
			Container.get(AuthBloc)
				.state$.pipe(
					filter((state) => !!state.eventName && state.eventName !== AuthUserFromStorage.name)
				)
				.subscribe((state) => {
					if (state.user) {
						localStorage.setItem('user', JSON.stringify(state.user))
					} else {
						localStorage.removeItem('user')
					}
				})
		)
	)
}

function themeBlocInit() {
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

	// Save ThemeBloc
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
}

function sidebarBlocInit() {
	dev && console.log('Loading SidebarBloc')

	const sidebarBloc = new SidebarBloc(SidebarState.new())
	Container.set(SidebarBloc, sidebarBloc)

	// Set Default State
	if (browser && window.innerWidth <= 960) {
		sidebarBloc.add(new SidebarClose())
	}
}

function onMediaChanges(event: MediaQueryListEvent) {
	if (event.matches) {
		Container.get(ThemeBloc).add(new ThemeDark())
	} else {
		Container.get(ThemeBloc).add(new ThemeLight())
	}
}
