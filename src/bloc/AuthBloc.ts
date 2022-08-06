import { Bloc } from '@felangel/bloc'
import { Service } from 'typedi'
import { getValIfDefined as v } from '../helpers/utils'
import type User from '../models/UserModel'

@Service()
export class AuthBloc extends Bloc<AuthEvent, AuthState> {
	async *mapEventToState(event: AuthEvent): AsyncIterableIterator<AuthState> {
		// ─────────────────────────────────────────────────────────────────

		if (event instanceof AuthLogin || event instanceof AuthUserUpdate) {
			yield this.state.copyWith({
				user: event.user
			})
			return
		}

		// ─────────────────────────────────────────────────────────────────

		if (event instanceof AuthLogout) {
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

//
// ─── STATE ──────────────────────────────────────────────────────────────────────
//

export interface AuthStateProperties {
	user?: User | null
}

export class AuthState implements AuthStateProperties {
	user?: User | null

	constructor(input: Partial<AuthStateProperties>) {
		for (let i in input) {
			;(this as any)[i] = (input as any)[i]
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
