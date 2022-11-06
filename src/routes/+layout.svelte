<script lang="ts">
	import '/src/assets/css/app.scss'
	import loaders from '/src/loaders/index'
</script>

{#if $loaders}
	<slot />
{/if}
