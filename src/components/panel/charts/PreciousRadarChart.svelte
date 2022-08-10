<script lang="ts">
	import ApexCharts from 'apexcharts'
	import { onDestroy, onMount } from 'svelte'

	export let height = 470

	// const options = {
	// 	series: [
	// 		{
	// 			name: 'Series 1',
	// 			data: [80, 50, 30, 40, 100, 20]
	// 		}
	// 	],
	// 	chart: {
	// 		height: 350,
	// 		type: 'radar'
	// 	},
	// 	title: {
	// 		text: 'Basic Radar Chart'
	// 	},
	// 	xaxis: {
	// 		categories: ['January', 'February', 'March', 'April', 'May', 'June']
	// 	}
	// }

	const options = {
		chart: {
			fontFamily: 'inherit',
			foreColor: 'inherit',
			height: '100%',
			type: 'radar',
			sparkline: {
				enabled: true
			}
		},
		colors: ['#818CF8'],
		dataLabels: {
			enabled: true,
			formatter: (val: number): string | number => `${val}%`,
			textAnchor: 'start',
			style: {
				fontSize: '13px',
				fontWeight: 500
			},
			background: {
				borderWidth: 0,
				padding: 4
			},
			offsetY: -15
		},
		markers: {
			strokeColors: '#818CF8',
			strokeWidth: 4
		},
		plotOptions: {
			radar: {
				polygons: {
					strokeColors: '#e2e8f0',
					connectorColors: '#e2e8f0'
				}
			}
		},
		series: [
			{
				name: 'Budget',
				data: [12, 20, 28, 15, 25]
			}
		],
		stroke: {
			width: 2
		},
		tooltip: {
			theme: 'dark',
			y: {
				formatter: (val: number): string => `${val}%`
			}
		},
		xaxis: {
			labels: {
				show: true,
				style: {
					fontSize: '12px',
					fontWeight: '500'
				}
			},
			categories: ['Concept', 'Design', 'Development', 'Extras', 'Marketing']
		}
		// yaxis: {
		// 	max: (max: number): number => parseInt((max + 10).toFixed(0), 10),
		// 	tickAmount: 7
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

<div class="text-lg font-medium tracking-tight leading-6 truncate">Budget Distribution</div>
<div class="h-full" bind:this={target} style={`height: ${height}px`} />
