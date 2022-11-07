import { map, shareReplay, zip } from 'rxjs'
import AuthBlocLoader from '/src/loaders/AuthBlocLoader'
import DayjsLoader from '/src/loaders/DayjsLoader'
import SidebarBlocLoader from '/src/loaders/SidebarBlocLoader'
import ThemeBlocLoader from '/src/loaders/ThemeBlocLoader'

export default zip([DayjsLoader, AuthBlocLoader, ThemeBlocLoader, SidebarBlocLoader]).pipe(
	map(() => true),
	shareReplay({
		refCount: true
	})
)
