import { dev } from '$app/environment'
import { updated } from '$app/stores'
import { Observable } from 'rxjs'

export default new Observable((observer) => {
	dev && console.log('Loading Update')

	updated.subscribe((val) => {
		if (val) {
			onUpdate()
		}
	})

	observer.next()
})

function onUpdate() {
	location.reload()
	console.log('🎉🎉 Application Updated Successful 🎉🎉')
}
