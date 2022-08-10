<script lang="ts">
	import ApexCharts from 'apexcharts'
	import dayjs from 'dayjs'
	import { onDestroy, onMount } from 'svelte'

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
			animations: {
				speed: 400,
				animateGradually: {
					enabled: false
				}
			},
			fontFamily: 'inherit',
			foreColor: 'inherit',
			width: '100%',
			height: '100%',
			type: 'area',
			toolbar: {
				show: false
			},
			zoom: {
				enabled: false
			}
		},
		colors: ['#818CF8'],
		dataLabels: {
			enabled: false
		},
		fill: {
			colors: ['#312E81']
		},
		grid: {
			show: true,
			borderColor: '#334155',
			padding: {
				top: 10,
				bottom: -40,
				left: 0,
				right: 0
			},
			position: 'back',
			xaxis: {
				lines: {
					show: true
				}
			}
		},
		series: [
			{
				name: 'Visitors',
				data: [
					{
						x: dayjs().subtract(12, 'months').day(1).toDate(),
						y: 4884
					},
					{
						x: dayjs().subtract(12, 'months').day(4).toDate(),
						y: 5351
					},
					{
						x: dayjs().subtract(12, 'months').day(7).toDate(),
						y: 5293
					},
					{
						x: dayjs().subtract(12, 'months').day(10).toDate(),
						y: 4908
					},
					{
						x: dayjs().subtract(12, 'months').day(13).toDate(),
						y: 5027
					},
					{
						x: dayjs().subtract(12, 'months').day(16).toDate(),
						y: 4837
					},
					{
						x: dayjs().subtract(12, 'months').day(19).toDate(),
						y: 4484
					},
					{
						x: dayjs().subtract(12, 'months').day(22).toDate(),
						y: 4071
					},
					{
						x: dayjs().subtract(12, 'months').day(25).toDate(),
						y: 4124
					},
					{
						x: dayjs().subtract(12, 'months').day(28).toDate(),
						y: 4563
					},
					{
						x: dayjs().subtract(11, 'months').day(1).toDate(),
						y: 3820
					},
					{
						x: dayjs().subtract(11, 'months').day(4).toDate(),
						y: 3968
					},
					{
						x: dayjs().subtract(11, 'months').day(7).toDate(),
						y: 4102
					},
					{
						x: dayjs().subtract(11, 'months').day(10).toDate(),
						y: 3941
					},
					{
						x: dayjs().subtract(11, 'months').day(13).toDate(),
						y: 3566
					},
					{
						x: dayjs().subtract(11, 'months').day(16).toDate(),
						y: 3853
					},
					{
						x: dayjs().subtract(11, 'months').day(19).toDate(),
						y: 3853
					},
					{
						x: dayjs().subtract(11, 'months').day(22).toDate(),
						y: 4069
					},
					{
						x: dayjs().subtract(11, 'months').day(25).toDate(),
						y: 3879
					},
					{
						x: dayjs().subtract(11, 'months').day(28).toDate(),
						y: 4298
					},
					{
						x: dayjs().subtract(10, 'months').day(1).toDate(),
						y: 4355
					},
					{
						x: dayjs().subtract(10, 'months').day(4).toDate(),
						y: 4065
					},
					{
						x: dayjs().subtract(10, 'months').day(7).toDate(),
						y: 3650
					},
					{
						x: dayjs().subtract(10, 'months').day(10).toDate(),
						y: 3379
					},
					{
						x: dayjs().subtract(10, 'months').day(13).toDate(),
						y: 3191
					},
					{
						x: dayjs().subtract(10, 'months').day(16).toDate(),
						y: 2968
					},
					{
						x: dayjs().subtract(10, 'months').day(19).toDate(),
						y: 2957
					},
					{
						x: dayjs().subtract(10, 'months').day(22).toDate(),
						y: 3313
					},
					{
						x: dayjs().subtract(10, 'months').day(25).toDate(),
						y: 3708
					},
					{
						x: dayjs().subtract(10, 'months').day(28).toDate(),
						y: 3586
					},
					{
						x: dayjs().subtract(9, 'months').day(1).toDate(),
						y: 3965
					},
					{
						x: dayjs().subtract(9, 'months').day(4).toDate(),
						y: 3901
					},
					{
						x: dayjs().subtract(9, 'months').day(7).toDate(),
						y: 3410
					},
					{
						x: dayjs().subtract(9, 'months').day(10).toDate(),
						y: 3748
					},
					{
						x: dayjs().subtract(9, 'months').day(13).toDate(),
						y: 3929
					},
					{
						x: dayjs().subtract(9, 'months').day(16).toDate(),
						y: 3846
					},
					{
						x: dayjs().subtract(9, 'months').day(19).toDate(),
						y: 3771
					},
					{
						x: dayjs().subtract(9, 'months').day(22).toDate(),
						y: 4015
					},
					{
						x: dayjs().subtract(9, 'months').day(25).toDate(),
						y: 3589
					},
					{
						x: dayjs().subtract(9, 'months').day(28).toDate(),
						y: 3150
					},
					{
						x: dayjs().subtract(8, 'months').day(1).toDate(),
						y: 3050
					},
					{
						x: dayjs().subtract(8, 'months').day(4).toDate(),
						y: 2574
					},
					{
						x: dayjs().subtract(8, 'months').day(7).toDate(),
						y: 2823
					},
					{
						x: dayjs().subtract(8, 'months').day(10).toDate(),
						y: 2848
					},
					{
						x: dayjs().subtract(8, 'months').day(13).toDate(),
						y: 3000
					},
					{
						x: dayjs().subtract(8, 'months').day(16).toDate(),
						y: 3216
					},
					{
						x: dayjs().subtract(8, 'months').day(19).toDate(),
						y: 3299
					},
					{
						x: dayjs().subtract(8, 'months').day(22).toDate(),
						y: 3768
					},
					{
						x: dayjs().subtract(8, 'months').day(25).toDate(),
						y: 3524
					},
					{
						x: dayjs().subtract(8, 'months').day(28).toDate(),
						y: 3918
					},
					{
						x: dayjs().subtract(7, 'months').day(1).toDate(),
						y: 4145
					},
					{
						x: dayjs().subtract(7, 'months').day(4).toDate(),
						y: 4378
					},
					{
						x: dayjs().subtract(7, 'months').day(7).toDate(),
						y: 3941
					},
					{
						x: dayjs().subtract(7, 'months').day(10).toDate(),
						y: 3932
					},
					{
						x: dayjs().subtract(7, 'months').day(13).toDate(),
						y: 4380
					},
					{
						x: dayjs().subtract(7, 'months').day(16).toDate(),
						y: 4243
					},
					{
						x: dayjs().subtract(7, 'months').day(19).toDate(),
						y: 4367
					},
					{
						x: dayjs().subtract(7, 'months').day(22).toDate(),
						y: 3879
					},
					{
						x: dayjs().subtract(7, 'months').day(25).toDate(),
						y: 4357
					},
					{
						x: dayjs().subtract(7, 'months').day(28).toDate(),
						y: 4181
					},
					{
						x: dayjs().subtract(6, 'months').day(1).toDate(),
						y: 4619
					},
					{
						x: dayjs().subtract(6, 'months').day(4).toDate(),
						y: 4769
					},
					{
						x: dayjs().subtract(6, 'months').day(7).toDate(),
						y: 4901
					},
					{
						x: dayjs().subtract(6, 'months').day(10).toDate(),
						y: 4640
					},
					{
						x: dayjs().subtract(6, 'months').day(13).toDate(),
						y: 5128
					},
					{
						x: dayjs().subtract(6, 'months').day(16).toDate(),
						y: 5015
					},
					{
						x: dayjs().subtract(6, 'months').day(19).toDate(),
						y: 5360
					},
					{
						x: dayjs().subtract(6, 'months').day(22).toDate(),
						y: 5608
					},
					{
						x: dayjs().subtract(6, 'months').day(25).toDate(),
						y: 5272
					},
					{
						x: dayjs().subtract(6, 'months').day(28).toDate(),
						y: 5660
					},
					{
						x: dayjs().subtract(5, 'months').day(1).toDate(),
						y: 5836
					},
					{
						x: dayjs().subtract(5, 'months').day(4).toDate(),
						y: 5659
					},
					{
						x: dayjs().subtract(5, 'months').day(7).toDate(),
						y: 5575
					},
					{
						x: dayjs().subtract(5, 'months').day(10).toDate(),
						y: 5474
					},
					{
						x: dayjs().subtract(5, 'months').day(13).toDate(),
						y: 5427
					},
					{
						x: dayjs().subtract(5, 'months').day(16).toDate(),
						y: 5865
					},
					{
						x: dayjs().subtract(5, 'months').day(19).toDate(),
						y: 5700
					},
					{
						x: dayjs().subtract(5, 'months').day(22).toDate(),
						y: 6052
					},
					{
						x: dayjs().subtract(5, 'months').day(25).toDate(),
						y: 5760
					},
					{
						x: dayjs().subtract(5, 'months').day(28).toDate(),
						y: 5648
					},
					{
						x: dayjs().subtract(4, 'months').day(1).toDate(),
						y: 5435
					},
					{
						x: dayjs().subtract(4, 'months').day(4).toDate(),
						y: 5239
					},
					{
						x: dayjs().subtract(4, 'months').day(7).toDate(),
						y: 5452
					},
					{
						x: dayjs().subtract(4, 'months').day(10).toDate(),
						y: 5416
					},
					{
						x: dayjs().subtract(4, 'months').day(13).toDate(),
						y: 5195
					},
					{
						x: dayjs().subtract(4, 'months').day(16).toDate(),
						y: 5119
					},
					{
						x: dayjs().subtract(4, 'months').day(19).toDate(),
						y: 4635
					},
					{
						x: dayjs().subtract(4, 'months').day(22).toDate(),
						y: 4833
					},
					{
						x: dayjs().subtract(4, 'months').day(25).toDate(),
						y: 4584
					},
					{
						x: dayjs().subtract(4, 'months').day(28).toDate(),
						y: 4822
					},
					{
						x: dayjs().subtract(3, 'months').day(1).toDate(),
						y: 4582
					},
					{
						x: dayjs().subtract(3, 'months').day(4).toDate(),
						y: 4348
					},
					{
						x: dayjs().subtract(3, 'months').day(7).toDate(),
						y: 4132
					},
					{
						x: dayjs().subtract(3, 'months').day(10).toDate(),
						y: 4099
					},
					{
						x: dayjs().subtract(3, 'months').day(13).toDate(),
						y: 3849
					},
					{
						x: dayjs().subtract(3, 'months').day(16).toDate(),
						y: 4010
					},
					{
						x: dayjs().subtract(3, 'months').day(19).toDate(),
						y: 4486
					},
					{
						x: dayjs().subtract(3, 'months').day(22).toDate(),
						y: 4403
					},
					{
						x: dayjs().subtract(3, 'months').day(25).toDate(),
						y: 4141
					},
					{
						x: dayjs().subtract(3, 'months').day(28).toDate(),
						y: 3780
					},
					{
						x: dayjs().subtract(2, 'months').day(1).toDate(),
						y: 3524
					},
					{
						x: dayjs().subtract(2, 'months').day(4).toDate(),
						y: 3212
					},
					{
						x: dayjs().subtract(2, 'months').day(7).toDate(),
						y: 3568
					},
					{
						x: dayjs().subtract(2, 'months').day(10).toDate(),
						y: 3800
					},
					{
						x: dayjs().subtract(2, 'months').day(13).toDate(),
						y: 3796
					},
					{
						x: dayjs().subtract(2, 'months').day(16).toDate(),
						y: 3870
					},
					{
						x: dayjs().subtract(2, 'months').day(19).toDate(),
						y: 3745
					},
					{
						x: dayjs().subtract(2, 'months').day(22).toDate(),
						y: 3751
					},
					{
						x: dayjs().subtract(2, 'months').day(25).toDate(),
						y: 3310
					},
					{
						x: dayjs().subtract(2, 'months').day(28).toDate(),
						y: 3509
					},
					{
						x: dayjs().subtract(1, 'months').day(1).toDate(),
						y: 3187
					},
					{
						x: dayjs().subtract(1, 'months').day(4).toDate(),
						y: 2918
					},
					{
						x: dayjs().subtract(1, 'months').day(7).toDate(),
						y: 3191
					},
					{
						x: dayjs().subtract(1, 'months').day(10).toDate(),
						y: 3437
					},
					{
						x: dayjs().subtract(1, 'months').day(13).toDate(),
						y: 3291
					},
					{
						x: dayjs().subtract(1, 'months').day(16).toDate(),
						y: 3317
					},
					{
						x: dayjs().subtract(1, 'months').day(19).toDate(),
						y: 3716
					},
					{
						x: dayjs().subtract(1, 'months').day(22).toDate(),
						y: 3260
					},
					{
						x: dayjs().subtract(1, 'months').day(25).toDate(),
						y: 3694
					},
					{
						x: dayjs().subtract(1, 'months').day(28).toDate(),
						y: 3598
					}
				]
			}
		],
		stroke: {
			width: 2
		},
		tooltip: {
			followCursor: true,
			theme: 'dark',
			x: {
				format: 'MMM dd, yyyy'
			},
			y: {
				formatter: (value: number): string => `${value}`
			}
		},
		xaxis: {
			axisBorder: {
				show: false
			},
			axisTicks: {
				show: false
			},
			crosshairs: {
				stroke: {
					color: '#475569',
					dashArray: 0,
					width: 2
				}
			},
			labels: {
				offsetY: -20,
				style: {
					colors: '#CBD5E1'
				}
			},
			tickAmount: 20,
			tooltip: {
				enabled: false
			},
			type: 'datetime'
		},
		yaxis: {
			axisTicks: {
				show: false
			},
			axisBorder: {
				show: false
			},
			min: (min: any): number => min - 750,
			max: (max: any): number => max + 250,
			tickAmount: 5,
			show: false
		}
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
