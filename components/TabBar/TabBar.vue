<template>
	<view class="tab-bar">
		<view v-for="(item, index) in tabList" :key="item.text" class="tab-item">
			<image class="tab-icon" :src="item.selected" mode="aspectFill"></image>
			<text class="tab-text">{{item.text}}</text> 
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
	background-color: #fff;
	border-top: 1px solid $uni-text-color-grey;
}
.tab-item {
	width: 100%;
	text-align: center;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
}
.tab-text {
	font-size: $uni-font-size-sm;
	color: $uni-text-color-grey;
}
.tab-icon {
	width: 30rpx;
	height: 30rpx;
}
</style>
