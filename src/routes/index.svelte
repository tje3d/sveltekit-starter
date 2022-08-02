<script context="module">
	export async function load() {
		return {
			status: 302,
			redirect: '/login'
		}
		// const url = `https://cms.example.com/article/${params.slug}.json`
		// const response = await fetch(url)

		// return {
		// 	status: response.status,
		// 	props: {
		// 		article: response.ok && (await response.json())
		// 	}
		// }
	}
</script>
