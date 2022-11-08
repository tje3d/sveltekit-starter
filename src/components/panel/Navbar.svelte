<script lang="ts">
	import IconBell from '~icons/heroicons-outline/bell'
	import IconMenu from '~icons/heroicons-outline/menu-alt-2'
	import IconMoon from '~icons/heroicons-outline/moon'
	import IconSearch from '~icons/heroicons-outline/search'
	import IconSun from '~icons/heroicons-outline/sun'
	import { SidebarBloc, SidebarToggle } from '/src/bloc/SidebarBloc'
	import { ThemeBloc, ThemeLTR, ThemeRTL, ThemeToggle } from '/src/bloc/ThemeBloc'
	import Container from '/src/di/Di'

	const themeBloc = Container.get(ThemeBloc)
	const themeState = themeBloc.state$

	function toggleDir() {
		themeBloc.add($themeState.dir === 'ltr' ? new ThemeRTL() : new ThemeLTR())
	}

	function toggleTheme() {
		themeBloc.add(new ThemeToggle())
	}

	function sidebarToggle() {
		Container.get(SidebarBloc).add(new SidebarToggle())
	}
</script>

<div
	class="navbar bg-white px-4 shadow-sm dark:bg-[#0f172a] dark:border-b border-b-white/10 dark:text-[#94a2b8] relative z-20"
>
	<div class="navbar-start">
		<button tabindex="0" class="btn btn-ghost btn-circle" on:click={sidebarToggle}>
			<IconMenu class="w-6 h-6" />
		</button>
	</div>

	<div class="navbar-end">
		<button class="btn btn-ghost btn-circle" on:click={toggleDir}>
			<label class="swap">
				<input type="checkbox" on:click={toggleDir} checked={$themeState.dir === 'ltr'} />
				<div class="swap-on">LTR</div>
				<div class="swap-off">RTL</div>
			</label>
		</button>
		<button class="btn btn-ghost btn-circle" on:click={toggleTheme}>
			<label class="swap swap-rotate">
				<input type="checkbox" on:change={toggleTheme} checked={$themeState.theme === 'dark'} />

				<IconSun class="swap-on fill-current w-5 h-5" />

				<IconMoon class="swap-off fill-current w-5 h-5" />
			</label>
		</button>
		<button class="btn btn-ghost btn-circle">
			<IconSearch class="w-5 h-5" />
		</button>
		<button class="btn btn-ghost btn-circle">
			<div class="indicator">
				<IconBell class="w-5 h-5" />
				<span class="badge badge-xs badge-primary indicator-item" />
			</div>
		</button>
		<div class="dropdown dropdown-end ml-2">
			<label tabindex="0" class="btn btn-ghost btn-circle avatar">
				<div class="w-8 rounded-full">
					<img src="https://placeimg.com/80/80/people" alt="Avatar" />
				</div>
			</label>
			<ul
				tabindex="0"
				class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-white dark:bg-[#1d293c] rounded-xl w-52"
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
	</div>
</div>
