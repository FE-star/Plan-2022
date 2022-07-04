<script context="module">
	export const prerender = false;
</script>

<script>
	import Grid from '$lib/Grid.svelte';
	import data from '$lib/data/data';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="page transformer" />
</svelte:head>

<Grid floor={{
	title: '猜你喜欢',
	// 用grid布局
	type: 'grid',
	// 2栏
	col: 2,
	// 数据源ID
	dataId: '384121',
	// 使用普通卡片
	card: 'normal',
	data: data.data ? data.data.result : []
}} />

<style>
</style>
