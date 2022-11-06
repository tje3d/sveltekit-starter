import { browser, dev } from '$app/environment'
import { filter, Observable, tap } from 'rxjs'
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
import User from '/src/models/UserModel'

export default new Observable((observer) => {
	dev && console.log('Loading Bloc')

	authBlocInit()
	themeBlocInit()
	sidebarBlocInit()

	observer.next()

	return () => {
		// unsub...
	}
})

function authBlocInit() {
	dev && console.log('Loading AuthBloc')

	const authBloc = new AuthBloc(AuthState.new())

	Container.set(AuthBloc, authBloc)

	if (!browser) {
		return
	}

	// Load AuthBLOC
	const currentUser = localStorage.getItem('user')

	if (currentUser) {
		try {
			const user = User.fromJson(JSON.parse(currentUser))
			authBloc.add(new AuthUserFromStorage(user))
		} catch (error) {
			console.error(error)
			authBloc.add(new AuthUserStorageCorrupted())
		}
	}

	// Save AuthBloc
	authBloc.state$
		.pipe(filter((state) => !!state.eventName && state.eventName !== AuthUserFromStorage.name))
		.subscribe((state) => {
			if (state.user) {
				localStorage.setItem('user', JSON.stringify(state.user))
			} else {
				localStorage.removeItem('user')
			}
		})
}

function themeBlocInit() {
	dev && console.log('Loading ThemeBloc')
	const themeBloc = new ThemeBloc(ThemeState.new())

	Container.set(ThemeBloc, themeBloc)

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
			themeBloc.add(new ThemeDark())
			break
		case 'light':
		default:
			themeBloc.add(new ThemeLight())
			break
	}

	// Detect ColorScheme
	if (window.matchMedia) {
		window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (event) => {
			if (event.matches) {
				themeBloc.add(new ThemeDark())
			} else {
				themeBloc.add(new ThemeLight())
			}
		})
	}

	// Dir
	const currentDir = localStorage.getItem('dir')

	switch (currentDir) {
		case 'rtl':
			themeBloc.add(new ThemeRTL())
			break
		case 'ltr':
		default:
			themeBloc.add(new ThemeLTR())
			break
	}

	// Save ThemeBloc
	themeBloc.state$
		.pipe(
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
