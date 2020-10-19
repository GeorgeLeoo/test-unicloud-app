<template>
	<view class="home-header">
		<view class="search">
			<image class="search-icon" src="../../static/search.png" mode="aspectFill"></image>
			<text class="hot-key">{{hotKey}}</text>
		</view>
		<view class="icon">
			<image class="scan-icon" src="../../static/scan.png" mode="aspectFill"></image>
			<text class="icon-text">扫啊扫</text>
		</view>
		<view class="icon">
			<image class="msg-icon" src="../../static/msg.png" mode="aspectFill"></image>
			<text class="icon-text">消息</text>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			hotKey: {
				type: String,
				default: '前端'
			}
		},
		data() {
			return {
			};
		}
	}
</script>

<style lang="scss">
.home-header {
	display: flex;
	background-color: $uni-color-primary;
	height: 100rpx;
	align-items: center;
	padding: 0 30rpx;
}
.search {
	display: flex;
	background-color: #FFFFFF;
	border-radius: 100rpx;
	height: 50rpx;
	flex: 1;
	align-items: center;
	padding: 0 34rpx;
}
.icon {
	display: flex;
	flex-direction: column;
	align-items: center;
}
.icon-text {
	font-size: 8rpx;
	color: $uni-text-color-inverse;
	margin-top: 8rpx;
}
.search-icon {
	width: 30rpx;
	height: 30rpx;
}
.scan-icon {
	width: 30rpx;
	height: 30rpx;
	margin: 0 40rpx;
}
.msg-icon {
	width: 30rpx;
	height: 30rpx;
}
.hot-key {
	font-size: $uni-font-size-sm;
	color: $uni-text-color-grey;
}
</style>
