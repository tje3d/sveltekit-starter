<script lang="ts">
	import IconLeft from '~icons/heroicons-outline/chevron-left'
	import focus from '../../../directives/Focus'
</script>

<div class="w-full max-w-screen-xl mx-auto px-6 xl:px-0">
	<div class="flex items-center py-6 md:py-8 relative">
		<div class="flex-auto flex items-center space-x-4 rtl:space-x-reverse">
			<div>
				<a href="/panel/ecommerce" class="btn btn-ghost btn-circle">
					<IconLeft class="w-4 h-4 rtl:rotate-180" />
				</a>
			</div>
			<div>
				<div class="text-3xl font-semibold tracking-tight leading-8 mb-1">Add Product</div>
				<div class="font-light tracking-tight text-gray-500">Add new products to your website</div>
			</div>
		</div>
	</div>

	<ul class="steps w-full">
		<li class="step step-primary">Register</li>
		<li class="step step-primary">Choose plan</li>
		<li class="step">Purchase</li>
		<li class="step">Receive Product</li>
	</ul>

	<div class="grid sm:grid-cols-4 gap-6 w-full mt-8">
		<div class="form-control w-full sm:col-span-4">
			<label class="label">
				<span class="label-text">Name</span>
			</label>
			<input
				type="text"
				class="input input-bordered focus:input-primary shadow-sm dark:shadow-none dark:bg-transparent dark:border-gray-500"
				use:focus
			/>
		</div>

		<div class="form-control w-full sm:col-span-4">
			<label class="label">
				<span class="label-text">Username</span>
			</label>
			<input
				type="text"
				class="input input-bordered focus:input-primary shadow-sm dark:shadow-none dark:bg-transparent dark:border-gray-500"
			/>
		</div>

		<!-- <div class="my-10 border-t sm:col-span-4" /> -->

		<div class="form-control w-full sm:col-span-2">
			<label class="label">
				<span class="label-text">Title</span>
			</label>
			<input
				type="text"
				class="input input-bordered focus:input-primary shadow-sm dark:shadow-none dark:bg-transparent dark:border-gray-500"
			/>
		</div>

		<div class="form-control w-full sm:col-span-2">
			<label class="label">
				<span class="label-text">Company</span>
			</label>
			<input
				type="text"
				class="input input-bordered focus:input-primary shadow-sm dark:shadow-none dark:bg-transparent dark:border-gray-500"
			/>
		</div>

		<div class="form-control w-full sm:col-span-4">
			<label class="label">
				<span class="label-text">About</span>
			</label>
			<textarea
				type="text"
				class="textarea textarea-bordered focus:input-primary shadow-sm dark:shadow-none h-48 dark:bg-transparent dark:border-gray-500"
			/>
		</div>

		<div class="my-10 border-t sm:col-span-4 dark:border-white/10" />

		<div class="sm:col-span-4">
			<div class="flex justify-end space-x-2 rtl:space-x-reverse">
				<button class="btn btn-ghost">Cancel</button>
				<button class="btn btn-primary">Save</button>
			</div>
		</div>
	</div>
</div>
