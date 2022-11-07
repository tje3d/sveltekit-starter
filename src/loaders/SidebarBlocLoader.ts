import { browser, dev } from '$app/environment'
import { Observable } from 'rxjs'
import { SidebarBloc, SidebarClose, SidebarState } from '/src/bloc/SidebarBloc'
import Container from '/src/di/Di'

export default new Observable((observer) => {
	dev && console.log('Loading SidebarBloc')

	const sidebarBloc = new SidebarBloc(SidebarState.new())
	Container.set(SidebarBloc, sidebarBloc)

	// Set Default State
	if (browser && window.innerWidth <= 960) {
		sidebarBloc.add(new SidebarClose())
	}

	observer.next()

	return () => {
		// ...
	}
})
