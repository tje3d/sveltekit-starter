<script lang="ts">
	import { createEventDispatcher } from 'svelte'
	import { PaginationNav } from 'svelte-paginate'
	import IconLeft from '~icons/heroicons-outline/chevron-left'
	import IconRight from '~icons/heroicons-outline/chevron-right'

	export let totalItems = 1000
	export let pageSize = 10
	export let currentPage = 1
	export let showStepOptions = true

	const dispatcher = createEventDispatcher()

	function onSetPage(e: CustomEvent) {
		dispatcher('setPage', e.detail.page)
		currentPage = e.detail.page
	}
</script>

<PaginationNav
	{totalItems}
	{pageSize}
	{currentPage}
	limit={1}
	{showStepOptions}
	on:setPage={onSetPage}
>
	<div slot="next">
		<IconRight class="w-4 h-4" />
	</div>
	<div slot="prev">
		<IconLeft class="w-4 h-4" />
	</div>
</PaginationNav>
