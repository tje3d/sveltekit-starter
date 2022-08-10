<script lang="ts">
	import { onDestroy } from 'svelte'
	import Container from 'typedi'
	import IconContact from '~icons/mdi/account-group-outline'
	import IconBitcoin from '~icons/mdi/bitcoin'
	import IconTask from '~icons/mdi/calendar-check-outline'
	import IconCart from '~icons/mdi/cart-outline'
	import IconChart from '~icons/mdi/chart-arc'
	import IconChat from '~icons/mdi/chat-processing-outline'
	import IconRight from '~icons/mdi/chevron-right'
	import IconProduct from '~icons/mdi/clipboard-check-outline'
	import IconCloud from '~icons/mdi/cloud-outline'
	import IconEmail from '~icons/mdi/email-outline'
	import IconFinance from '~icons/mdi/finance'
	import IconAcademy from '~icons/mdi/school-outline'
	import logo from '../../assets/img/logo-text.svg'
	import male1 from '../../assets/img/male-1.jpeg'
	import { SidebarBloc, SidebarClose } from '../../bloc/SidebarBloc'
	import SidebarItemDivider from './SidebarItemDivider.svelte'

	const sidebarBloc = Container.get(SidebarBloc)

	let state = sidebarBloc.state
	let sidebarSub = sidebarBloc.listen((newState) => (state = newState))

	onDestroy(() => {
		sidebarSub.unsubscribe()
	})

	function onBackdropClick() {
		sidebarBloc.add(new SidebarClose())
	}
</script>

{#if state.isOpen}
	<div
		class="bg-black bg-opacity-50 fixed top-0 right-0 bottom-0 left-0 z-40 md:hidden"
		on:click={onBackdropClick}
	/>
{/if}

<div
	class="sidebar fixed top-0 bottom-0 w-72 bg-[#3830a3] dark:bg-[#131d35] flex flex-col z-50"
	class:ltr:-left-full={!state.isOpen}
	class:rtl:-right-full={!state.isOpen}
	class:ltr:left-0={state.isOpen}
	class:rtl:right-0={state.isOpen}
>
	<!-- Header - Start -->
	<div class="flex items-center h-20 p-6 pb-0">
		<img src={logo} class="w-32" alt="Logo" />
	</div>
	<!-- Header - End -->

	<!-- Content - Start -->
	<div class="flex-auto text-white overflow-auto">
		<ul>
			<SidebarItemDivider />

			<li class="py-3 px-4 text-xs mx-3">
				<span class="font-bold text-[#818cf8]">DASHBOARDS</span>
			</li>

			<li class="mb-1">
				<a
					class="flex mx-3 items-center justify-start py-2.5 px-4 text-sm bg-white/10 rounded-lg"
					href="/"
				>
					<IconProduct class="h-6 w-6 mr-4" />
					<span class="flex-auto">Project</span>
				</a>
			</li>

			<li class="mb-1">
				<a
					class="flex mx-3 items-center justify-start py-2.5 px-4 text-sm rounded-lg opacity-75 hover:opacity-100 hover:bg-white/10"
					href="/"
				>
					<IconChart class="h-6 w-6 mr-4" />
					<span class="flex-auto">Analytics</span>
				</a>
			</li>

			<li class="mb-1">
				<a
					class="flex mx-3 items-center justify-start py-2.5 px-4 text-sm rounded-lg opacity-75 hover:opacity-100 hover:bg-white/10"
					href="/"
				>
					<IconFinance class="h-6 w-6 mr-4" />
					<span class="flex-auto">Finance</span>
				</a>
			</li>

			<li class="mb-1">
				<a
					class="flex mx-3 items-center justify-start py-2.5 px-4 text-sm rounded-lg opacity-75 hover:opacity-100 hover:bg-white/10"
					href="/"
				>
					<IconBitcoin class="h-6 w-6 mr-4" />
					<span class="flex-auto">Crypto</span>
				</a>
			</li>

			<SidebarItemDivider />

			<li class="py-3 px-4 text-xs mx-3">
				<span class="font-bold text-[#818cf8]">APPS</span>
			</li>

			<li class="mb-1">
				<a
					class="flex mx-3 items-center justify-start py-2.5 px-4 text-sm rounded-lg opacity-75 hover:opacity-100 hover:bg-white/10"
					href="/"
				>
					<IconAcademy class="h-6 w-6 mr-4" />
					<span class="flex-auto">Academy</span>
				</a>
			</li>

			<li class="mb-1">
				<a
					class="flex mx-3 items-center justify-start py-2.5 px-4 text-sm rounded-lg opacity-75 hover:opacity-100 hover:bg-white/10"
					href="/"
				>
					<IconChat class="h-6 w-6 mr-4" />
					<span class="flex-auto">Chat</span>
					<IconRight class="w-4 h-4 transform rtl:rotate-180" />
				</a>
			</li>

			<ul class="py-1">
				<li class="mb-1">
					<a
						class="flex mx-3 items-center justify-start py-2.5 px-4 pl-14 text-sm rounded-lg opacity-75 hover:opacity-100 hover:bg-white/10"
						href="/"
					>
						<span class="flex-auto">Home</span>
					</a>
				</li>
				<li class="mb-1">
					<a
						class="flex mx-3 items-center justify-start py-2.5 px-4 pl-14 text-sm rounded-lg opacity-75 hover:opacity-100 hover:bg-white/10"
						href="/"
					>
						<span class="flex-auto">FAQ's</span>
					</a>
				</li>
				<li class="mb-1">
					<a
						class="flex mx-3 items-center justify-start py-2.5 px-4 pl-14 text-sm rounded-lg opacity-75 hover:opacity-100 hover:bg-white/10"
						href="/"
					>
						<span class="flex-auto">Guides</span>
					</a>
				</li>
				<li class="mb-1">
					<a
						class="flex mx-3 items-center justify-start py-2.5 px-4 pl-14 text-sm rounded-lg opacity-75 hover:opacity-100 hover:bg-white/10"
						href="/"
					>
						<span class="flex-auto">Support</span>
					</a>
				</li>
			</ul>

			<li class="mb-1">
				<a
					class="flex mx-3 items-center justify-start py-2.5 px-4 text-sm rounded-lg opacity-75 hover:opacity-100 hover:bg-white/10"
					href="/"
				>
					<IconContact class="h-6 w-6 mr-4" />
					<span class="flex-auto">Contacts</span>
				</a>
			</li>

			<li class="mb-1">
				<a
					class="flex mx-3 items-center justify-start py-2.5 px-4 text-sm rounded-lg opacity-75 hover:opacity-100 hover:bg-white/10"
					href="/"
				>
					<IconCart class="h-6 w-6 mr-4" />
					<span class="flex-auto">Ecommerce</span>
				</a>
			</li>

			<li class="mb-1">
				<a
					class="flex mx-3 items-center justify-start py-2.5 px-4 text-sm rounded-lg opacity-75 hover:opacity-100 hover:bg-white/10"
					href="/"
				>
					<IconCloud class="h-6 w-6 mr-4" />
					<span class="flex-auto">File Manager</span>
				</a>
			</li>

			<li class="mb-1">
				<a
					class="flex mx-3 items-center justify-start py-2.5 px-4 text-sm rounded-lg opacity-75 hover:opacity-100 hover:bg-white/10"
					href="/"
				>
					<IconEmail class="h-6 w-6 mr-4" />
					<span class="flex-auto">Mailbox</span>
					<div class="indicator mr-4">
						<span
							class="indicator-item indicator-middle indicator-end badge badge-secondary text-xs"
						>
							27
						</span>
					</div>
				</a>
			</li>

			<li class="mb-1">
				<a
					class="flex mx-3 items-center justify-start py-2.5 px-4 text-sm rounded-lg opacity-75 hover:opacity-100 hover:bg-white/10"
					href="/"
				>
					<IconTask class="h-6 w-6 mr-4" />
					<span class="flex-auto">Tasks</span>
				</a>
			</li>

			<SidebarItemDivider />
		</ul>
	</div>
	<!-- Content - end -->

	<!-- Footer - start -->
	<div class="py-8 px-6 border-t border-t-white/10 flex items-center">
		<!-- Avatar -->
		<div class="dropdown dropdown-top">
			<label tabindex="0" class="btn btn-ghost btn-circle avatar online">
				<div class="w-8 rounded-full">
					<img src={male1} />
				</div>
			</label>

			<ul
				tabindex="0"
				class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-white dark:bg-[#1d293c] rounded-box w-52"
			>
				<li>
					<a class="justify-between">
						Profile
						<span class="badge">New</span>
					</a>
				</li>
				<li><a>Settings</a></li>
				<li><a href="/login">Logout</a></li>
			</ul>
		</div>
		<!-- Avatar -->

		<!-- Info -->
		<div class="flex flex-col w-full ml-4 overflow-hidden text-white">
			<div
				class="w-full whitespace-nowrap text-ellipsis overflow-hidden leading-normal text-current opacity-80"
			>
				Brian Hughes
			</div>
			<div
				class="w-full mt-0.5 whitespace-nowrap text-sm text-ellipsis overflow-hidden leading-normal text-current opacity-50"
			>
				brian.hughes@company.com
			</div>
		</div>
		<!-- Info -->
	</div>
	<!-- Footer - end -->
</div>
