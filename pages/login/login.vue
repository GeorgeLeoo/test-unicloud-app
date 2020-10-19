<template>
	<view class="login-wrapper">
		<view class="title-wrapper">
			<text class="title">Hi，nemo</text>
			<text class="title">欢迎回来</text>
		</view>
		<view class="input-wrapper">
			<text class="input-area">{{ area }}</text>
			<input v-model.number="phone" class="input-phone" type="text" placeholder="请输入手机号" />
		</view>
		<view class="login-tip">
			<text class="tip" @tap="handlerToForgetPwd">忘记密码</text>
			<text class="tip" @tap="handlerToUsePwd">使用密码登录</text>
		</view>
		<Button circle @click="handlerToLogin">一键登录</Button>
		<view class="other">
			<text class="other-text">其他登录方式</text>
			<view class="icon-wrapper">
				<image class="other-icon" src="../../static/wechat.png" mode="scaleToFill"></image>
				<image class="other-icon" src="../../static/qq.png" mode="scaleToFill"></image>
			</view>
		</view>
	</view>
</template>

<script>
import Button from '../../components/Button/index.vue';
import { toNextPage } from './handler.js';
import { LOGIN_EVENT_TYPE } from '../../constance/index.js';

export default {
	components: {
		Button
	},
	data() {
		return {
			/**
			 * @desc 手机号 区位号
			 * @type String
			 */
			area: '+86',
			/**
			 * @desc 手机号
			 * @type String
			 */
			phone: '18921483103'
		};
	},
	methods: {
		/**
		 * @desc 跳转到【验证码】
		 */
		handlerToLogin() {
			uni.reLaunch({
				url: '/pages/home/home'
			})
			// toNextPage({
			// 	area: this.area,
			// 	phone: this.phone,
			// 	eventType: LOGIN_EVENT_TYPE.CODE
			// });
		},
		/**
		 * @desc 跳转到【使用密码登录】
		 */
		handlerToUsePwd() {
			if (!this.phone) {
				uni.showToast({
					icon: 'none',
					title: '请先输入手机号'
				})
				return
			}
			toNextPage({
				area: this.area,
				phone: this.phone,
				eventType: LOGIN_EVENT_TYPE.PWD
			});
		},

		/**
		 * @desc 跳转到【忘记密码】
		 */
		handlerToForgetPwd() {
			if (!this.phone) {
				uni.showToast({
					title: '请选输入手机号'
				})
				return
			}
			toNextPage({
				area: this.area,
				phone: this.phone,
				eventType: LOGIN_EVENT_TYPE.FORGET_PWD
			});
		}
	}
};
</script>

<style lang="scss" scoped>
.login-wrapper {
	height: 100%;
	padding: 30px;
}

.title-wrapper {
	display: flex;
	flex-direction: column;
	margin-top: $uni-spacing-col-supper-lg;
}

.title {
	font-size: $uni-font-size-title;
	color: $uni-text-color;
	margin-bottom: $uni-spacing-col-mini-lg;
}

.title:first-child {
	margin-bottom: $uni-spacing-col-md;
}

.input-wrapper {
	margin-bottom: $uni-spacing-col-md;
	display: flex;
	border-bottom: 1px solid $uni-border-color;
}

.input-area {
	height: $uni-input-size-base;
	line-height: $uni-input-size-base;
	font-size: $uni-font-size-lg;
	color: $uni-text-color;
	margin-right: $uni-spacing-row-base;
}

.input-phone {
	flex: 1;
	height: $uni-input-size-base;
	line-height: $uni-input-size-base;
	font-size: $uni-font-size-lg;
	color: $uni-text-color;
}

.login-tip {
	display: flex;
	justify-content: space-between;
	margin-top: $uni-spacing-col-lg;
	margin-bottom: $uni-spacing-col-mini-lg;
}

.tip {
	font-size: $uni-font-size-sm;
	color: $uni-text-color-grey;
}
.other {
	width: 100%;
	position: absolute;
	bottom: 100rpx;
	left: 0;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
}

.other-text {
	width: 100%;
	font-size: $uni-font-size-sm;
	color: $uni-text-color-grey;
	margin-bottom: 60rpx;
	text-align: center;
	display: flex;
	align-items: center;
	justify-content: center;
}

.other-text::before, .other-text::after {
	content: "";
	display: inline-block;
	width: 20%;
	height: 1rpx;
	background-color: $uni-border-color;
}

.other-text::before {
	margin-right: 20rpx;
}

.other-text::after {
	margin-left: 20rpx;
}

.icon-wrapper {
	width: 50%;
	display: flex;
	align-items: center;
	justify-content: space-around;
}

.other-icon {
	width: 70rpx;
	height: 70rpx;
}
</style>
