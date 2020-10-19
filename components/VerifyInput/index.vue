<template>
	<view class="verify-input">
		<input
			v-for="(i, index) in maxLength"
			:key="i"
			:ref="`vItem-${index}`"
			:focus="focusIndex === index"
			class="verify-item"
			type="number"
			:maxlength="1"
			@input="throttle(handlerInput(index, $event), 500)()"
			@focus="handlerFocus(index)"
		/>
	</view>
</template>

<script>
import utils from '../../utils/index.js'
	
export default {
	data() {
		return {
			maxLength: 4,
			focusIndex: 0,
			value: [],
		};
	},
	watch: {
		value: {
			handler(val) {
				for (let i = this.focusIndex; i < this.maxLength; i++) {
					const index = i;
					if (val[i] && this.focusIndex === index) {
						this.focusIndex = ++index;
						if (this.focusIndex === 4) {
							this.$emit('submit');
						}
						break;
					}
				}
			}
		}
	},
	mounted() {
		for (let i = 0; i < this.maxLength; i++) {
			this.value.push('');
		}
	},
	onLoad() {},
	methods: {
		debounce: utils.debounce,
		throttle: utils.throttle,
		/**
		 * 获得焦点
		 * @param {Number} index 索引
		 */
		handlerFocus(index) {
			this.focusIndex = index;
		},
		/**
		 * input事件
		 * @param {Number} index 索引
		 */
		handlerInput(index, {detail}) {
			let value = detail.value
			if (value.length !== 0) {
				value = value.substr(value.length - 1, 1)
			}
			this.$set(this.value, index, value)
		}
	}
};
</script>

<style lang="scss" scoped>
.verify-input {
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-around;
}
.verify-item {
	display: inline-block;
	width: 100rpx;
	border-bottom: 1px solid $uni-border-color;
	text-align: center;
	height: $uni-input-size-base;
	line-height: $uni-input-size-base;
	font-weight: bold;
	font-size: $uni-font-size-title;
}
</style>
