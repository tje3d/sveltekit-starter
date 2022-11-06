import { dev } from '$app/environment'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import { Observable } from 'rxjs'

export default new Observable((observer) => {
	dev && console.log('Loading Dayjs')

	dayjs.extend(relativeTime)

	observer.next()

	return () => {
		// unsub...
	}
})
