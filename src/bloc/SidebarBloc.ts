import { sidebarData, type SidebarItem } from '/src/assets/data/SidebarData'
import { Bloc, BlocState } from '/src/bloc/Bloc'
import { getValIfDefined as v } from '/src/helpers/utils'

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

		if (event instanceof SidebarActivesToggle) {
			const actives = [...this.state.actives]
			const index = actives.indexOf(event.item)

			if (index === -1) {
				actives.push(event.item)
			} else {
				actives.splice(index, 1)
			}

			yield this.state.copyWith({
				actives
			})
			return
		}

		// ─────────────────────────────────────────────────────────────────

		if (event instanceof SidebarCalculateActives) {
			const actives: SidebarItem[] = []

			getActiveItems(actives, this.state.items, event.routeId)

			yield this.state.copyWith({
				actives
			})
			return
		}

		// ─────────────────────────────────────────────────────────────────
	}
}

function getActiveItems(actives: SidebarItem[], items: SidebarItem[], routeId: string) {
	for (let i = 0; i < items.length; i++) {
		const item = items[i]
		let activated = false

		if (!item.href && !item.matchPattern) {
			continue
		}

		if (item.matchPattern) {
			if (new RegExp(item.matchPattern).test(routeId)) {
				actives.push(item)
				activated = true
			}
		}

		if (item.href && !activated) {
			if (item.href === routeId) {
				actives.push(item)
				activated = true
			}
		}

		if (item.childs) {
			getActiveItems(actives, item.childs, routeId)
		}
	}
}

//
// ─── EVENTS ─────────────────────────────────────────────────────────────────────
//

export class SidebarEvent {}

export class SidebarOpen extends SidebarEvent {}

export class SidebarClose extends SidebarEvent {}

export class SidebarToggle extends SidebarEvent {}

export class SidebarActivesToggle extends SidebarEvent {
	constructor(public item: SidebarItem) {
		super()
	}
}

export class SidebarCalculateActives extends SidebarEvent {
	constructor(public routeId: string) {
		super()
	}
}

//
// ─── STATE ──────────────────────────────────────────────────────────────────────
//

export interface SidebarStateProperties {
	isOpen: boolean
	items: SidebarItem[]
	actives: SidebarItem[]
}

export class SidebarState extends BlocState implements SidebarStateProperties {
	isOpen: boolean = true
	items: SidebarItem[] = sidebarData
	actives: SidebarItem[] = []

	constructor(input: Partial<SidebarStateProperties>) {
		super()

		for (let key in input) {
			// @ts-ignore
			this[key] = input[key]
		}
	}

	static new() {
		return new SidebarState({})
	}

	copyWith(i: Partial<SidebarStateProperties>) {
		return new SidebarState({
			isOpen: v(i['isOpen'], this.isOpen),
			items: v(i['items'], this.items),
			actives: v(i['actives'], this.actives)
		})
	}
}
