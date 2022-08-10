<script lang="ts">
	import { onDestroy } from 'svelte'
	import Container from 'typedi'
	import { SidebarBloc } from '../../bloc/SidebarBloc'
	import Navbar from '../../components/panel/Navbar.svelte'
	import Sidebar from '../../components/panel/Sidebar.svelte'

	const sidebarBloc = Container.get(SidebarBloc)

	let state = sidebarBloc.state
	let sidebarSub = sidebarBloc.listen((newState) => (state = newState))

	onDestroy(() => {
		sidebarSub.unsubscribe()
	})
</script>

<div class="flex h-full w-full">
	<Sidebar />

	<div class="flex-auto transition-all" class:md:pl-72={state.isOpen}>
		<Navbar />

		<slot />
	</div>
</div>
