import { Bloc } from '@felangel/bloc'
import { getValIfDefined as v } from '../helpers/utils'

export class ThemeBloc extends Bloc<ThemeEvent, ThemeState> {
	async *mapEventToState(event: ThemeEvent): AsyncIterableIterator<ThemeState> {
		// ─────────────────────────────────────────────────────────────────

		if (event instanceof ThemeToggle) {
			const theme = this.state.theme === 'light' ? 'dark' : 'light'

			document.documentElement.className = theme

			yield this.state.copyWith({
				theme
			})
			return
		}

		// ─────────────────────────────────────────────────────────────────

		if (event instanceof ThemeDark) {
			if (this.state.theme === 'dark') {
				return
			}

			document.documentElement.className = 'dark'

			yield this.state.copyWith({
				theme: 'dark'
			})
			return
		}

		// ─────────────────────────────────────────────────────────────────

		if (event instanceof ThemeLight) {
			if (this.state.theme === 'light') {
				return
			}

			document.documentElement.className = 'light'

			yield this.state.copyWith({
				theme: 'light'
			})
			return
		}

		// ─────────────────────────────────────────────────────────────────

		if (event instanceof ThemeRTL || event instanceof ThemeLTR) {
			const dir = event instanceof ThemeLTR ? 'ltr' : 'rtl'

			document.body.dir = dir

			yield this.state.copyWith({ dir })
			return
		}

		// ─────────────────────────────────────────────────────────────────
	}
}

//
// ─── EVENTS ─────────────────────────────────────────────────────────────────────
//

export class ThemeEvent {}

export class ThemeDark extends ThemeEvent {}

export class ThemeLight extends ThemeEvent {}

export class ThemeToggle extends ThemeEvent {}

export class ThemeRTL extends ThemeEvent {}

export class ThemeLTR extends ThemeEvent {}

//
// ─── STATES ─────────────────────────────────────────────────────────────────────
//

export interface ThemeStateProperties {
	theme: Themes
	dir: 'ltr' | 'rtl'
}

export class ThemeState implements ThemeStateProperties {
	theme!: Themes
	dir!: 'ltr' | 'rtl'

	constructor(input: Partial<ThemeStateProperties>) {
		for (let i in input) {
			;(this as any)[i] = (input as any)[i]
		}
	}

	static new() {
		return new ThemeState({})
	}

	copyWith(i: Partial<ThemeStateProperties>) {
		return new ThemeState({
			theme: v(i['theme'], this.theme),
			dir: v(i['dir'], this.dir)
		})
	}
}

export type Themes = 'dark' | 'light'
