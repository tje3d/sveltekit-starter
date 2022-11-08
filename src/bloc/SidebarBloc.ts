import { BehaviorSubject, map, Observable, of, switchMap } from 'rxjs'
import { sidebarData, type SidebarItem } from '/src/assets/data/SidebarData'
import { Bloc, BlocState } from '/src/bloc/Bloc'
import { getValIfDefined as v } from '/src/helpers/utils'

export class SidebarBloc extends Bloc<SidebarEvent, SidebarState> {
	routeId$ = new BehaviorSubject<string | null>(null)

	actives$: Observable<SidebarItem[]>

	constructor(_state: SidebarState) {
		super(_state)

		this.actives$ = this.routeId$.pipe(
			switchMap((routeId) => {
				if (!routeId) {
					return of([])
				}

				return this.state$.pipe(
					map((state) => {
						let output: SidebarItem[] = [...state.forceActives]

						getActiveItems(output, state.items, routeId)

						return output
					})
				)
			})
		)
	}

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

		if (event instanceof SidebarToggleForceActiveItem) {
			const forceActives = [...this.state.forceActives]
			const index = forceActives.indexOf(event.item)

			if (index === -1) {
				forceActives.push(event.item)
			} else {
				forceActives.splice(index, 1)
			}

			yield this.state.copyWith({
				forceActives
			})
			return
		}

		// ─────────────────────────────────────────────────────────────────

		if (event instanceof SidebarResetForceActive) {
			yield this.state.copyWith({
				forceActives: []
			})
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

export class SidebarToggleForceActiveItem extends SidebarEvent {
	constructor(public item: SidebarItem) {
		super()
	}
}

export class SidebarResetForceActive extends SidebarEvent {}

//
// ─── STATE ──────────────────────────────────────────────────────────────────────
//

export interface SidebarStateProperties {
	isOpen: boolean
	items: SidebarItem[]
	forceActives: SidebarItem[]
}

export class SidebarState extends BlocState implements SidebarStateProperties {
	isOpen: boolean = true
	items: SidebarItem[] = sidebarData
	forceActives: SidebarItem[] = []

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
			forceActives: v(i['forceActives'], this.forceActives)
		})
	}
}

// ─── Helpers ─────────────────────────────────────────────────────────────────

function getActiveItems(actives: SidebarItem[], items: SidebarItem[], routeId: string) {
	for (let i = 0; i < items.length; i++) {
		const item = items[i]
		let activated = false

		if (!item.href && !item.matchPattern) {
			continue
		}

		if (item.matchPattern) {
			if (new RegExp(item.matchPattern).test(routeId)) {
				!actives.includes(item) && actives.push(item)
				activated = true
			}
		}

		if (item.href && !activated) {
			if (item.href === routeId) {
				!actives.includes(item) && actives.push(item)
				activated = true
			}
		}

		if (item.childs) {
			getActiveItems(actives, item.childs, routeId)
		}
	}
}
