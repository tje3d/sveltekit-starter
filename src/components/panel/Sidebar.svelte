<script lang="ts">
	import { afterNavigate } from '$app/navigation'
	import { page } from '$app/stores'
	import { onDestroy, onMount } from 'svelte'
	import { slide } from 'svelte/transition'
	import Container from 'typedi'
	import IconChevronRight from '~icons/heroicons-outline/chevron-right'
	import IconChevronDown from '~icons/heroicons-outline/chevron-down'
	import type { SidebarItem } from '../../assets/data/SidebarData'
	import logo from '../../assets/img/logo-text.svg'
	import male1 from '../../assets/img/male-1.jpeg'
	import {
		SidebarActivesToggle,
		SidebarBloc,
		SidebarCalculateActives,
		SidebarClose
	} from '../../bloc/SidebarBloc'
	import SidebarItemDivider from './SidebarItemDivider.svelte'

	const sidebarBloc = Container.get(SidebarBloc)

	let state = sidebarBloc.state
	let sidebarSub = sidebarBloc.listen((newState) => (state = newState))

	function onBackdropClick() {
		sidebarBloc.add(new SidebarClose())
	}

	function onItemHasChildClick(item: SidebarItem) {
		sidebarBloc.add(new SidebarActivesToggle(item))
	}

	afterNavigate(({ from, to }) => {
		sidebarBloc.add(new SidebarCalculateActives($page.routeId!))
	})

	onMount(() => {
		sidebarBloc.add(new SidebarCalculateActives($page.routeId!))
	})

	onDestroy(() => {
		sidebarSub.unsubscribe()
	})
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
			{#each state.items as item, i (item)}
				{#if !item.href && !item.childs}
					<SidebarItemDivider />

					<li class="py-3 px-4 text-xs mx-3">
						<span class="font-bold text-[#818cf8] uppercase">{item.text}</span>
					</li>
				{:else}
					<li class="mb-1">
						<a
							class={`flex mx-3 items-center cursor-pointer justify-start py-2.5 px-4 text-sm hover:bg-white/10 rounded-lg select-none ${
								state.actives.includes(item) ? 'bg-white/10' : 'opacity-75 hover:opacity-100'
							}`}
							href={item.href}
							rel={item.childs ? 'external' : null}
							on:click={item.childs ? () => onItemHasChildClick(item) : null}
						>
							<svelte:component this={item.icon} class="h-6 w-6 mr-4" />
							<span class="flex-auto">{item.text}</span>

							{#if item.childs}
								{#if state.actives.includes(item)}
									<IconChevronDown class="w-4 h-4" />
								{:else}
									<IconChevronRight class="w-4 h-4 transform rtl:rotate-180 rtl:rotate-z-[90deg]" />
								{/if}
							{/if}

							{#if item.label}
								<div class="indicator mr-4">
									<span
										class="indicator-item indicator-middle indicator-end badge badge-secondary text-xs"
									>
										{item.label}
									</span>
								</div>
							{/if}
						</a>
					</li>

					{#if item.childs && state.actives.includes(item)}
						<ul class="py-1" transition:slide|local>
							{#each item.childs as child}
								<li class="mb-1">
									<a
										class={`flex mx-3 items-center justify-start py-2.5 px-4 pl-14 text-sm rounded-lg hover:bg-white/10 ${
											state.actives.includes(child) ? 'bg-white/10' : 'opacity-75 hover:opacity-100'
										}`}
										href={child.href}
									>
										<span class="flex-auto">{child.text}</span>
									</a>
								</li>
							{/each}
						</ul>
					{/if}
				{/if}
			{/each}

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
