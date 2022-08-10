import { browser } from '$app/env'
import Container from 'typedi'
import { sidebarData } from '../assets/data/SidebarData'
import { AuthBloc, AuthState, AuthUserUpdate } from '../bloc/AuthBloc'
import { SidebarBloc, SidebarClose, SidebarItemsSet, SidebarState } from '../bloc/SidebarBloc'
import { ThemeBloc, ThemeDark, ThemeLight, ThemeLTR, ThemeRTL, ThemeState } from '../bloc/ThemeBloc'
import User from '../models/UserModel'

export default async function () {
	if (!browser) {
		return
	}

	await authBlocInit()
	await themeBlocInit()
	await sidebarBlocInit()
}

async function authBlocInit() {
	console.log('Loading AuthBloc')

	const authBloc = new AuthBloc(AuthState.new())

	Container.set(AuthBloc, authBloc)

	// Load AuthBLOC
	const currentUser = localStorage.getItem('user')

	if (currentUser) {
		try {
			const user = await User.fromJson(JSON.parse(currentUser))
			authBloc.add(new AuthUserUpdate(user))
		} catch (error) {
			console.error(error)
		}
	}

	// Save AuthBloc
	authBloc.listen((state) => {
		if (state.user) {
			localStorage.setItem('user', JSON.stringify(state.user))
		} else {
			localStorage.removeItem('user')
		}
	})
}

async function themeBlocInit() {
	console.log('Loading ThemeBloc')
	const themeBloc = new ThemeBloc(ThemeState.new())

	Container.set(ThemeBloc, themeBloc)

	// Color
	const currentTheme = localStorage.getItem('theme')

	switch (currentTheme) {
		case 'dark':
			themeBloc.add(new ThemeDark())
			break
		case 'light':
		default:
			themeBloc.add(new ThemeLight())
			break
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
	themeBloc.listen((state) => {
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
}

async function sidebarBlocInit() {
	console.log('Loading SidebarBloc')

	const sidebarBloc = new SidebarBloc(SidebarState.new())

	// Set Default State
	if (window.innerWidth <= 960) {
		sidebarBloc.add(new SidebarClose())
	}

	// Set Items
	sidebarBloc.add(new SidebarItemsSet(sidebarData))

	Container.set(SidebarBloc, sidebarBloc)
}
