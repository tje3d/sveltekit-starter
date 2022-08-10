<script context="module">
	/** @type {import('./__types/[...catch]').Load} */
	export function load({}) {
		return {
			status: 404,
			error: new Error(`Not found`)
		}
	}
</script>
