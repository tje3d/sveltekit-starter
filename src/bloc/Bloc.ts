import {
	BehaviorSubject,
	catchError,
	concatMap,
	EMPTY,
	map,
	Observable,
	Subject,
	Subscription
} from 'rxjs'

export abstract class Bloc<Event extends {}, State extends { eventName?: string }> {
	public event$ = new Subject<Event>()
	public state$: SvelteSubject<State>
	public transitionSubscription: Subscription = Subscription.EMPTY

	constructor(private _state: State) {
		this.state$ = new SvelteSubject<State>(_state)

		this.bindStateSubject()
	}

	/**
	 * Returns the current state of the bloc.
	 *
	 * @readonly
	 * @type {State}
	 */
	get state(): State {
		return this._state
	}

	/**
	 * This method should be called when a `Bloc` is no longer needed.
	 * Disposes the resources held by the bloc which means the `Bloc` will
	 * no longer process new events after `close` has been called.
	 */
	close(): void {
		this.state$.complete()
		this.event$.complete()
		this.transitionSubscription.unsubscribe()
	}

	/**
	 * Notifies the bloc of a new event which triggers `mapEventToState`.
	 *
	 * @param {Event} event
	 * @memberof Bloc
	 */
	add(event: Event): void {
		this.event$.next(event)
	}

	/**
	 * Must be implemented when a class extends `Bloc`.
	 * Called whenever an event is added to the bloc and
	 * is responsible for converting incoming events into outgoing states.
	 *
	 * @abstract
	 * @param {Event} event
	 * @return {*}  {AsyncIterableIterator<State>}
	 * @memberof Bloc
	 */
	abstract mapEventToState(event: Event): AsyncIterableIterator<State>

	private bindStateSubject(): void {
		this.transitionSubscription = this.event$
			.pipe(
				concatMap((event: Event) => {
					return asyncToObservable(this.mapEventToState(event)).pipe(
						map((nextState, _) => {
							nextState.eventName = event.constructor.name

							return nextState
						}),

						catchError((error) => {
							console.error(error)
							return EMPTY
						})
					)
				})
			)
			.subscribe((nextState) => {
				if (this.state === nextState) {
					return
				}

				this._state = nextState

				this.state$.next(nextState)
			})
	}
}

export class SvelteSubject<T> extends BehaviorSubject<T> {
	set(value: T): void {
		super.next(value)
	}
}

export abstract class BlocState {
	eventName?: string
}

function asyncToObservable<T>(iterable: AsyncIterableIterator<T>): Observable<T> {
	return new Observable<T>(
		(observer) =>
			void (async () => {
				try {
					for await (const item of iterable) {
						if (observer.closed) return
						observer.next(item)
					}
					observer.complete()
				} catch (e) {
					observer.error(e)
				}
			})()
	)
}
