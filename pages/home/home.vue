<template>
	<view>
		<HomeHeader />
		<slot></slot>
		<TabBar :tab-list="tabList" />
	</view>
</template>

<script>
	import HomeHeader from '../../components/HomeHeader/HomeHeader.vue'
	import TabBar from '../../components/TabBar/TabBar.vue'
	export default {
		components: {
			HomeHeader,
			TabBar
		},
		data() {
			return {
				tabList: [
					{
						text: '首页',
						path: '',
						selected: '../../static/edit.png',
						unselected: '../../static/scan.png'
					},
					{
						text: '分类',
						path: '',
						selected: '../../static/msg.png',
						unselected: '../../static/qq.png'
					},
					{
						text: '发现',
						path: '',
						selected: '../../static/qq.png',
						unselected: '../../static/wechat.png'
					},
					{
						text: '我的',
						path: '',
						selected: '../../static/edit.png',
						unselected: '../../static/edit.png'
					},
				]
			};
		}
	}
</script>

<style lang="scss">

</style>
