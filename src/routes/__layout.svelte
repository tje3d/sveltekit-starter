<script lang="ts">
	import 'reflect-metadata'
	import { browser } from '$app/env'
	import '../assets/css/app.scss'
	import loaders from '../loaders/index'
</script>

{#if !browser}
	<slot />
{:else}
	{#await loaders() then _}
		<slot />
	{/await}
{/if}
