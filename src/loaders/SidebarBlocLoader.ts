import { browser, dev } from '$app/environment'
import { page } from '$app/stores'
import { Observable } from 'rxjs'
import { SidebarBloc, SidebarClose, SidebarState } from '/src/bloc/SidebarBloc'
import Container from '/src/di/Di'

export default new Observable((observer) => {
	dev && console.log('Loading SidebarBloc')

	if (!Container.has(SidebarBloc)) {
		Container.set(SidebarBloc, new SidebarBloc(SidebarState.new()))
	}

	// Set Default State
	if (browser && window.innerWidth <= 960) {
		Container.get(SidebarBloc).add(new SidebarClose())
	}

	const sub = page.subscribe((page) => Container.get(SidebarBloc).routeId$.next(page.route.id))

	observer.next()

	return () => {
		sub()
	}
})
