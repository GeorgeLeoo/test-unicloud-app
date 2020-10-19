<template>
	<view class="tab-bar">
		<view v-for="(item, index) in tabList" :key="item.text" class="tab-item">
			<text>{{item.text}}</text> 
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			tabList: {
				type: Array,
				default: () => []
			}
		},
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">
.tab-bar {
	position: fixed;
	bottom: 0;
	left: 0;
	width: 100%;
	display: flex;
	height: 90rpx;
	align-items: center;
	justify-content: space-around;
	background-color: #007AFF;
}
.tab-item {
	width: 100%;
}
</style>
