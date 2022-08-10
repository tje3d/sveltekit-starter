<script lang="ts">
	import IconSettings from '~icons/mdi/cog'
	import IconExport from '~icons/mdi/export'
</script>

<div class="w-full max-w-screen-xl mx-auto px-6 xl:px-0">
	<div class="flex items-center p-6 md:p-8">
		<div class="flex items-center justify-between w-full">
			<div>
				<div class="text-3xl font-semibold tracking-tight leading-8 mb-1">Analytics dashboard</div>
				<div class="font-light tracking-tight text-gray-500">
					Monitor metrics, check reports and review performance
				</div>
			</div>
		</div>

		<div class="flex space-x-2 rtl:space-x-reverse">
			<button class="btn btn-outline rounded-3xl dark:text-gray-300">
				<span class="flex items-center text-gray-700 dark:text-gray-300">
					<IconSettings class="w-5 h-5 mr-2" />
					Settings
				</span>
			</button>
			<button class="btn btn-primary rounded-3xl">
				<IconExport class="w-5 h-5 mr-2" />
				Export
			</button>
		</div>
	</div>

	<div class="grid grid-cols-1 sm:grid-cols-6 gap-6 w-full min-w-0 mx-auto">
		<div
			class="sm:col-span-6 flex flex-col flex-auto bg-[#1e293b] shadow rounded-2xl overflow-hidden"
		>
			<div class="flex items-center justify-between mt-10 ml-10 mr-6 sm:mr-10">
				<div class="flex flex-col">
					<div class="mr-4 text-2xl md:text-3xl font-semibold tracking-tight leading-7 text-white">
						Visitors Overview
					</div>
					<div class="font-medium text-gray-500">Number of unique visitors</div>
				</div>
			</div>
			{#await import('../../components/panel/charts/VisitorsChart.svelte') then c}
				<svelte:component this={c.default} />
			{/await}
		</div>

		<div
			class="sm:col-span-3 lg:col-span-4 flex flex-col flex-auto p-6 bg-white dark:bg-[#1e293b] shadow rounded-2xl overflow-hidden"
		>
			{#await import('../../components/panel/charts/PreciousRadarChart.svelte') then c}
				<svelte:component this={c.default} />
			{/await}
		</div>
		<div class="sm:col-span-3 lg:col-span-2 grid grid-cols-1 gap-y-6">
			<div
				class="sm:col-span-2 flex flex-col flex-auto p-6 bg-white dark:bg-[#1e293b] shadow rounded-2xl overflow-hidden"
			>
				<div class="text-lg font-medium tracking-tight leading-6 truncate">Weekly Expenses</div>

				<div class="flex items-center space-x-6">
					<div class="flex flex-col">
						<div class="text-2xl font-semibold tracking-tight leading-tight">$17,663.00</div>
						<div class="flex items-center space-x-2">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 20 20"
								fill="currentColor"
								height="100%"
								width="100%"
								preserveAspectRatio="xMidYMid meet"
								focusable="false"
								class="w-5 h-5 text-green-500"
							>
								<path
									fill-rule="evenodd"
									d="M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z"
									clip-rule="evenodd"
								/>
							</svg>
							<div class="font-medium text-xs text-gray-500 leading-none whitespace-nowrap">
								<span class="text-green-500">2%</span> above projected
							</div>
						</div>
					</div>

					{#await import('../../components/panel/charts/PreciousLineChart.svelte') then c}
						<svelte:component this={c.default} />
					{/await}
				</div>
			</div>
			<div
				class="sm:col-span-2 flex flex-col flex-auto p-6 bg-white dark:bg-[#1e293b] shadow rounded-2xl overflow-hidden"
			>
				<div class="text-lg font-medium tracking-tight leading-6 truncate">Monthly Expenses</div>

				<div class="flex items-center space-x-6">
					<div class="flex flex-col">
						<div class="text-2xl font-semibold tracking-tight leading-tight">$17,663.00</div>
						<div class="flex items-center space-x-2">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 20 20"
								fill="currentColor"
								height="100%"
								width="100%"
								preserveAspectRatio="xMidYMid meet"
								focusable="false"
								class="w-5 h-5 text-green-500"
							>
								<path
									fill-rule="evenodd"
									d="M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z"
									clip-rule="evenodd"
								/>
							</svg>
							<div class="font-medium text-xs text-gray-500 leading-none whitespace-nowrap">
								<span class="text-green-500">2%</span> above projected
							</div>
						</div>
					</div>

					{#await import('../../components/panel/charts/PreciousLineChart.svelte') then c}
						<svelte:component this={c.default} />
					{/await}
				</div>
			</div>
			<div
				class="sm:col-span-2 flex flex-col flex-auto p-6 bg-white dark:bg-[#1e293b] shadow rounded-2xl overflow-hidden"
			>
				<div class="text-lg font-medium tracking-tight leading-6 truncate">Yearly Expenses</div>

				<div class="flex items-center space-x-6">
					<div class="flex flex-col">
						<div class="text-2xl font-semibold tracking-tight leading-tight">$17,663.00</div>
						<div class="flex items-center space-x-2">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 20 20"
								fill="currentColor"
								height="100%"
								width="100%"
								preserveAspectRatio="xMidYMid meet"
								focusable="false"
								class="w-5 h-5 text-green-500"
							>
								<path
									fill-rule="evenodd"
									d="M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z"
									clip-rule="evenodd"
								/>
							</svg>
							<div class="font-medium text-xs text-gray-500 leading-none whitespace-nowrap">
								<span class="text-green-500">2%</span> above projected
							</div>
						</div>
					</div>

					{#await import('../../components/panel/charts/PreciousLineChart.svelte') then c}
						<svelte:component this={c.default} />
					{/await}
				</div>
			</div>
		</div>
	</div>
</div>
