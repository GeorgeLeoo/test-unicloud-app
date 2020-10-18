<template>
	<view class="block" @tap="handlerClick">
		<view class="button" :class="[size, circle ? 'circle' : '']">
			<slot></slot>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			size: {
				type: String,
				default: 'middle'
			},
			block: {
				type: Boolean,
				default: true
			},
			circle: {
				type: Boolean,
				default: false
			}
		},
		data() {
			return {

			};
		},
		mounted() {
		},
		methods: {
			handlerClick() {
				this.$emit('click')
			}
		}
	}
</script>

<style lang="scss">
	@import '../../uni.scss';
	
	.block {
		display: block;
	}
	
	.button {
		display: flex;
		background-color: $uni-color-primary;
		color: $uni-text-color-inverse;
		font-size: $uni-font-size-subtitle;
		align-items: center;
		justify-content: center;
		height: 90rpx;
		border-radius: $uni-border-radius-base;
	}
	
	.circle {
		border-radius: 100rpx;
	}

	.large {}

	.middle {}

	.small {}
</style>
