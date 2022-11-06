import { map, shareReplay, zip } from 'rxjs'
import BlocLoader from '/src/loaders/BlocLoader'
import DayjsLoader from '/src/loaders/DayjsLoader'

export default zip([DayjsLoader, BlocLoader]).pipe(
	map(() => true),
	shareReplay({
		refCount: true
	})
)
