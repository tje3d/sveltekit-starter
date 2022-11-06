export interface UserProperties {
	id: number
	access_token: string
	token_type: string
	expires_in: number
	display_name: string
}

export default class User implements UserProperties {
	id!: number
	access_token!: string
	token_type!: string
	expires_in!: number
	display_name!: string

	//
	// ─── FACTORY ────────────────────────────────────────────────────────────────────
	//

	static fromJson(input: UserProperties) {
		const instance = new User()

		for (const key in input) {
			;(instance as any)[key] = (input as any)[key]
		}

		return instance
	}

	toJson() {
		return {
			id: this.id,
			access_token: this.access_token,
			token_type: this.token_type,
			expires_in: this.expires_in,
			display_name: this.display_name
		}
	}
}
