<script lang="ts">
	import Navbar from '../../components/panel/Navbar.svelte'
	import Sidebar from '../../components/panel/Sidebar.svelte'
</script>

<div class="flex h-full w-full">
	<Sidebar />

	<div class="flex-auto pl-72">
		<Navbar />

		<slot />
	</div>
</div>
