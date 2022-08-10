import { Bloc } from '@felangel/bloc'
import { Service } from 'typedi'
import { getValIfDefined as v } from '../helpers/utils'

@Service()
export class SidebarBloc extends Bloc<SidebarEvent, SidebarState> {
	async *mapEventToState(event: SidebarEvent): AsyncIterableIterator<SidebarState> {
		// ─────────────────────────────────────────────────────────────────

		if (
			event instanceof SidebarOpen ||
			event instanceof SidebarClose ||
			event instanceof SidebarToggle
		) {
			const isOpen =
				event instanceof SidebarOpen
					? true
					: event instanceof SidebarClose
					? false
					: !this.state.isOpen

			yield this.state.copyWith({ isOpen })
			return
		}

		// ─────────────────────────────────────────────────────────────────
	}
}

//
// ─── EVENTS ─────────────────────────────────────────────────────────────────────
//

export class SidebarEvent {}

export class SidebarOpen extends SidebarEvent {}

export class SidebarClose extends SidebarEvent {}

export class SidebarToggle extends SidebarEvent {}

//
// ─── STATE ──────────────────────────────────────────────────────────────────────
//

export interface SidebarStateProperties {
	isOpen: boolean
}

export class SidebarState implements SidebarStateProperties {
	isOpen: boolean = true

	constructor(input: Partial<SidebarStateProperties>) {
		for (let i in input) {
			;(this as any)[i] = (input as any)[i]
		}
	}

	static new() {
		return new SidebarState({})
	}

	copyWith(i: Partial<SidebarStateProperties>) {
		return new SidebarState({
			isOpen: v(i['isOpen'], this.isOpen)
		})
	}
}
