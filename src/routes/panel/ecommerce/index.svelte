<script lang="ts">
	import { fly } from 'svelte/transition'
	import IconCheck from '~icons/heroicons-outline/check-circle'
	import IconClock from '~icons/heroicons-outline/clock'
	import IconEye from '~icons/heroicons-outline/eye'
	import IconPencil from '~icons/heroicons-outline/pencil-alt'
	import IconPlus from '~icons/heroicons-outline/plus'
	import IconSearch from '~icons/heroicons-outline/search'
	import IconTrash from '~icons/heroicons-outline/trash'
	import IconX from '~icons/heroicons-outline/x'

	let id = 0
	let totalItems = 100
	let currentPage = 1
	let pageSize = 10
	let items = [
		{
			id: ++id,
			image: 'https://placeimg.com/80/80/people?260',
			name: 'Hart Hagerty',
			country: 'United States',
			category: 'Zemlak, Daniel and Leannon',
			subcategory: 'Desktop Support Technician',
			status: 'confirmed'
		},
		{
			id: ++id,
			image: 'https://placeimg.com/80/80/people?259',
			name: 'Brice Swyre',
			country: 'Iran',
			category: 'Carroll Group',
			subcategory: 'Tax Accountant',
			status: 'pending'
		},
		{
			id: ++id,
			image: 'https://placeimg.com/80/80/people?258',
			name: 'Marjy Ferencz',
			country: 'Russia',
			category: 'Rowe-Schoen',
			subcategory: 'Office Assistant',
			status: 'confirmed'
		},
		{
			id: ++id,
			image: 'https://placeimg.com/80/80/people?257',
			name: 'Yancy Tear',
			country: 'Brazil',
			category: 'Wyman-Ledner',
			subcategory: 'Community Outreach Specialist',
			status: 'confirmed'
		},
		{
			id: ++id,
			image: 'https://placeimg.com/80/80/people?260',
			name: 'Hart Hagerty',
			country: 'United States',
			category: 'Zemlak, Daniel and Leannon',
			subcategory: 'Desktop Support Technician',
			status: 'confirmed'
		},
		{
			id: ++id,
			image: 'https://placeimg.com/80/80/people?259',
			name: 'Brice Swyre',
			country: 'Iran',
			category: 'Carroll Group',
			subcategory: 'Tax Accountant',
			status: 'pending'
		},
		{
			id: ++id,
			image: 'https://placeimg.com/80/80/people?258',
			name: 'Marjy Ferencz',
			country: 'Russia',
			category: 'Rowe-Schoen',
			subcategory: 'Office Assistant',
			status: 'confirmed'
		},
		{
			id: ++id,
			image: 'https://placeimg.com/80/80/people?257',
			name: 'Yancy Tear',
			country: 'Brazil',
			category: 'Wyman-Ledner',
			subcategory: 'Community Outreach Specialist',
			status: 'confirmed'
		},
		{
			id: ++id,
			image: 'https://placeimg.com/80/80/people?258',
			name: 'Marjy Ferencz',
			country: 'Russia',
			category: 'Rowe-Schoen',
			subcategory: 'Office Assistant',
			status: 'confirmed'
		},
		{
			id: ++id,
			image: 'https://placeimg.com/80/80/people?257',
			name: 'Yancy Tear',
			country: 'Brazil',
			category: 'Wyman-Ledner',
			subcategory: 'Community Outreach Specialist',
			status: 'confirmed'
		}
	]
	let selection: number[] = []

	function onTopCheckbox(this: HTMLInputElement) {
		if (selection.length) {
			selection = []
			this.checked = false
		} else {
			selection = items.map((i) => i.id)
		}
	}

	function onSetPage(e: CustomEvent<number>) {
		currentPage = e.detail
	}
</script>

<div class="w-full max-w-screen-xl mx-auto px-6 xl:px-0">
	<div class="flex items-center py-6 md:py-8 relative">
		{#if !!selection.length}
			<div
				class="absolute top-0 right-0 bottom-0 left-0 py-6 md:py-8 z-10 bg-[#f1f5f9] dark:bg-[#0f172a] flex justify-between"
				transition:fly|local={{ y: -20, duration: 150 }}
			>
				<div>
					<button on:click={() => (selection = [])} class="btn btn-ghost">
						<IconX class="w-6 h-6 ltr:mr-2 rtl:ml-2" />
						{selection.length}
						Products Selected
					</button>
				</div>

				<div>
					<button class="btn btn-outline btn-secondary">
						<IconTrash class="w-6 h-6 ltr:mr-1 rtl:ml-1" />
						Delete
					</button>
				</div>
			</div>
		{/if}

		<div class="flex-auto">
			<div class="text-3xl font-semibold tracking-tight leading-8 mb-1">Ecommerce</div>
			<div class="font-light tracking-tight text-gray-500">Manage whole the website products</div>
		</div>

		<div class="flex space-x-2 rtl:space-x-reverse">
			<span class="flex items-center text-gray-700 dark:text-gray-300">
				<div class="relative">
					<IconSearch class="w-5 h-5 absolute top-1/2 -mt-2.5 ml-4 text-gray-400" />
					<input
						type="text"
						class="w-full rounded-3xl border border-gray-300 dark:border-gray-500 focus:outline-none bg-transparent shadow-sm px-4 min-h-[3rem] focus:border-blue-500 pl-12 bg-white dark:bg-transparent"
						placeholder="Search products"
					/>
				</div>
			</span>
			<a href="/panel/ecommerce/add" class="btn btn-primary rounded-3xl">
				<IconPlus class="w-5 h-5 mr-2" />
				Add Product
			</a>
		</div>
	</div>

	<div class="overflow-x-auto w-full mb-10">
		<table class="table w-full">
			<!-- head -->
			<thead>
				<tr>
					<th>
						<label>
							<input
								type="checkbox"
								class="checkbox checkbox-primary"
								indeterminate={selection.length && selection.length != items.length ? true : false}
								checked={selection.length && selection.length == items.length ? true : false}
								on:change={onTopCheckbox}
							/>
						</label>
					</th>
					<th>#</th>
					<th>Name</th>
					<th>Job</th>
					<th>Status</th>
					<th />
				</tr>
			</thead>
			<tbody>
				{#each items as item (item.id)}
					<tr>
						<th>
							<label>
								<input
									type="checkbox"
									class="checkbox checkbox-primary"
									value={item.id}
									bind:group={selection}
								/>
							</label>
						</th>
						<td>{item.id}</td>
						<td>
							<div class="flex items-center space-x-3 rtl:space-x-reverse">
								<div class="avatar">
									<div class="mask mask-squircle w-12 h-12">
										<img src={item.image} alt="Avatar" />
									</div>
								</div>
								<div>
									<div class="font-bold">{item.name}</div>
									<div class="text-sm opacity-50">{item.country}</div>
								</div>
							</div>
						</td>
						<td>
							{item.category}
							<br />
							<span class="badge badge-primary mt-2 badge-sm">{item.subcategory}</span>
						</td>
						<td>
							{#if item.status === 'confirmed'}
								<div class="flex items-center space-x-1 text-xs">
									<IconCheck class="w-6 h-6 text-green-500" />
									<span>Confirmed</span>
								</div>
							{:else}
								<div class="flex items-center space-x-1 text-xs">
									<IconClock class="w-6 h-6 text-orange-500" />
									<span>Pending</span>
								</div>
							{/if}
						</td>
						<th>
							<div class="flex space-x-2 rtl:space-x-reverse justify-end">
								<button class="btn btn-success btn-outline btn-sm">
									<IconEye class="w-4 h-4" />
									view
								</button>
								<button class="btn btn-outline dark:btn-info btn-sm">
									<IconPencil class="w-4 h-4" />
									edit
								</button>
							</div>
						</th>
					</tr>
				{/each}
			</tbody>
		</table>
	</div>

	<div class="grid grid-cols-3 items-center justify-between">
		<div class="text-start">
			{#await import('../../../components/Paginate.svelte') then c}
				<svelte:component
					this={c.default}
					{currentPage}
					{totalItems}
					{pageSize}
					on:setPage={onSetPage}
				/>
			{/await}
		</div>
		<div class="text-center text-gray-500">
			{currentPage * pageSize - pageSize + 1} - {currentPage * pageSize} of {totalItems}
		</div>
		<div class="text-end">
			Items per page:
			<select
				class="select select-bordered select-sm rounded-3xl dark:bg-[#111d35]"
				bind:value={pageSize}
			>
				<option value={5}>5</option>
				<option value={10}>10</option>
				<option value={25}>25</option>
				<option value={100}>100</option>
			</select>
		</div>
	</div>
</div>
