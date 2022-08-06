<script lang="ts">
	import { browser } from '$app/env'
	import IconSettings from '~icons/mdi/cog'
	import IconExport from '~icons/mdi/export'
</script>

<div class="flex items-center w-full max-w-screen-xl mx-auto p-6 md:p-8">
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
