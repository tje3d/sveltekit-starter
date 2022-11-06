import { Bloc, BlocState } from '/src/bloc/Bloc'
import { getValIfDefined as v } from '/src/helpers/utils'
import type User from '/src/models/UserModel'

export class AuthBloc extends Bloc<AuthEvent, AuthState> {
	async *mapEventToState(event: AuthEvent): AsyncIterableIterator<AuthState> {
		// ─────────────────────────────────────────────────────────────────

		if (
			event instanceof AuthLogin ||
			event instanceof AuthUserUpdate ||
			event instanceof AuthUserFromStorage
		) {
			yield this.state.copyWith({
				user: event.user
			})
			return
		}

		// ─────────────────────────────────────────────────────────────────

		if (event instanceof AuthLogout || event instanceof AuthUserStorageCorrupted) {
			yield this.state.copyWith({
				user: null
			})
			return
		}

		// ─────────────────────────────────────────────────────────────────
	}
}

//
// ─── EVENTS ─────────────────────────────────────────────────────────────────────
//

export class AuthEvent {}

export class AuthLogin extends AuthEvent {
	constructor(public user: User) {
		super()
	}
}

export class AuthUserUpdate extends AuthEvent {
	constructor(public user?: User) {
		super()
	}
}

export class AuthLogout extends AuthEvent {
	constructor() {
		super()
	}
}

export class AuthUserFromStorage extends AuthEvent {
	constructor(public user: User) {
		super()
	}
}

export class AuthUserStorageCorrupted extends AuthEvent {}

//
// ─── STATE ──────────────────────────────────────────────────────────────────────
//

export interface AuthStateProperties {
	user?: User | null
}

export class AuthState extends BlocState implements AuthStateProperties {
	user?: User | null

	constructor(input: Partial<AuthStateProperties>) {
		super()

		for (let key in input) {
			// @ts-ignore
			this[key] = input[key]
		}
	}

	static new() {
		return new AuthState({})
	}

	copyWith(i: Partial<AuthStateProperties>) {
		return new AuthState({
			user: v(i['user'], this.user)
		})
	}
}
