import type { Subscription } from 'rxjs'
import type { Unsubscriber } from 'svelte/store'
import type { OptionalObjectSchema } from 'yup/lib/object'

export function bytesToSize(bytes: number): string {
	const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB']
	if (bytes === 0) return '0 Byte'
	const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)).toString())
	return (bytes / Math.pow(1024, i)).toString().substring(0, 4) + '' + sizes[i]
}

export function abbreviateNumber(value: number, decimals: number = 2) {
	return Intl.NumberFormat('en-US', {
		notation: 'compact',
		maximumFractionDigits: decimals,
		minimumFractionDigits: decimals
	}).format(value)
}

export function getValIfDefined<T, D>(value?: T, def?: D): T | D | undefined {
	if (value === undefined) {
		return def
	}

	return value
}

export async function validateYup(
	schema: OptionalObjectSchema<any, any, any>,
	values: any,
	abortEarly = false
) {
	try {
		const data = await schema.validate(values, {
			abortEarly,
			stripUnknown: true
		})

		return data
	} catch (error: any) {
		const errors = error.inner.reduce((p: any, c: any) => {
			p[c.path] = c.message

			return p
		}, {})

		throw errors
	}
}

export function toUnsubscriber(sub: Subscription): Unsubscriber {
	return () => {
		sub.unsubscribe()
	}
}

export function addCommas(input: string) {
	var x = input.split('.')
	var x1 = x[0]
	var x2 = x.length > 1 ? '.' + x[1] : ''
	var rgx = /(\d+)(\d{3})/
	while (rgx.test(x1)) {
		x1 = x1.replace(rgx, '$1' + ',' + '$2')
	}
	return x1 + x2
}
