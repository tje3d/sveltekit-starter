export default function focus(node: HTMLElement) {
	setTimeout(() => {
		node.focus()
	})

	return {
		destroy() {
			// ...
		}
	}
}
