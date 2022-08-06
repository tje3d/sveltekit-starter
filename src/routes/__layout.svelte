<script lang="ts">
	import 'reflect-metadata'
	import '../assets/css/app.scss'
	import loaders from '../loaders/index'
</script>

{#await loaders() then _}
	<slot />
{/await}
