<script lang="ts">
	import { map } from 'rxjs'
	import { SidebarBloc } from '/src/bloc/SidebarBloc'
	import Navbar from '/src/components/panel/Navbar.svelte'
	import Sidebar from '/src/components/panel/Sidebar.svelte'
	import Container from '/src/di/Di'

	const isOpen = Container.get(SidebarBloc).state$.pipe(map((state) => state.isOpen))
</script>

<div class="flex h-full w-full">
	<Sidebar />

	<div class="flex-auto transition-all" class:md:pl-72={$isOpen}>
		<Navbar />

		<slot />
	</div>
</div>
