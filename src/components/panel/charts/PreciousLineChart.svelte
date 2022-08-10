<script lang="ts">
	import ApexCharts from 'apexcharts'
	import { onDestroy, onMount } from 'svelte'

	const options = {
		chart: {
			animations: {
				enabled: false
			},
			fontFamily: 'inherit',
			foreColor: 'inherit',
			height: '85px',
			type: 'line',
			sparkline: {
				enabled: true
			}
		},
		colors: ['#22D3EE'],
		series: [
			{
				name: 'Expenses',
				data: [19, 21, 22, 21, 18, 20]
			}
		],
		stroke: {
			curve: 'smooth'
		},
		tooltip: {
			theme: 'dark'
		},
		xaxis: {
			type: 'category',
			categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep']
		}
		// yaxis: {
		// 	labels: {
		// 		formatter: (val: any): string => `$${val}`
		// 	}
		// }
	}

	let target: HTMLDivElement
	let chart: ApexCharts | undefined

	onMount(() => {
		chart = new ApexCharts(target, options)
		chart.render()
	})

	onDestroy(() => {
		chart?.destroy()
	})
</script>

<div bind:this={target} />
