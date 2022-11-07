import { browser, dev } from '$app/environment'
import { filter, Observable } from 'rxjs'
import {
	AuthBloc,
	AuthState,
	AuthUserFromStorage,
	AuthUserStorageCorrupted
} from '/src/bloc/AuthBloc'
import Container from '/src/di/Di'
import User from '/src/models/UserModel'

export default new Observable((observer) => {
	dev && console.log('Loading AuthBloc')

	if (!Container.has(AuthBloc)) {
		Container.set(AuthBloc, new AuthBloc(AuthState.new()))
	}

	if (!browser) {
		return
	}

	// Load
	const currentUser = localStorage.getItem('user')

	if (currentUser) {
		try {
			const user = User.fromJson(JSON.parse(currentUser))
			Container.get(AuthBloc).add(new AuthUserFromStorage(user))
		} catch (error) {
			console.error(error)
			Container.get(AuthBloc).add(new AuthUserStorageCorrupted())
		}
	}

	// Save
	const sub = Container.get(AuthBloc)
		.state$.pipe(
			filter((state) => !!state.eventName && state.eventName !== AuthUserFromStorage.name)
		)
		.subscribe((state) => {
			if (state.user) {
				localStorage.setItem('user', JSON.stringify(state.user))
			} else {
				localStorage.removeItem('user')
			}
		})

	observer.next()

	return () => {
		sub.unsubscribe()
	}
})
