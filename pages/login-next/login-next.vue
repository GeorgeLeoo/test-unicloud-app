<template>
	<view class="login-wrapper">
		<view class="title-wrapper">
			<text class="title">{{ pageInfo.title }}</text>
			<view class="area-phone-wrapper">
				<text class="title area-phone">{{ area }}-{{ phone }}</text>
				<image class="edit-icon" src="../../static/edit.png" mode="" @tap="handlerBack"></image>
			</view>
		</view>
		<VerifyInput
			v-if="[LOGIN_EVENT_TYPE.CODE, LOGIN_EVENT_TYPE.FORGET_PWD].includes(eventType)"
			v-model="inputValue"
			class="verify-content"
			@submit="handlerToVerify"
		/>
		<view v-else-if="[LOGIN_EVENT_TYPE.PWD, LOGIN_EVENT_TYPE.SET_PWD].includes(eventType)" class="input-wrapper">
			<input v-model="inputValue" class="input-phone" password :focus="true" type="text" placeholder="请设置密码" />
		</view>
		<Button circle @tap="handlerToVerify">验证</Button>
		<view class="login-tip">
			<text v-if="[LOGIN_EVENT_TYPE.CODE, LOGIN_EVENT_TYPE.FORGET_PWD].includes(eventType) && !isCountDownOver" class="tip">重新发送{{ second }}S</text>
			<text v-if="[LOGIN_EVENT_TYPE.CODE, LOGIN_EVENT_TYPE.FORGET_PWD].includes(eventType) && isCountDownOver" class="tip blue" @tap="handlerToResendCode">重新发送</text>
			<text v-else-if="[LOGIN_EVENT_TYPE.PWD].includes(eventType)" class="tip">忘记密码？</text>
		</view>
	</view>
</template>

<script>
import Button from '../../components/Button/index.vue';
import VerifyInput from '../../components/VerifyInput/index.vue';
import { LOGIN_EVENT_TYPE } from '../../constance/index.js';
import { toNextPage } from './handler.js';

const pageInfoMap = {
	CODE: {
		title: '请输入验证码'
	},
	FORGET_PWD: {
		title: '请输入验证码'
	},
	PWD: {
		title: '请设置密码'
	},
	SET_PWD: {
		title: '请设置密码'
	}
};

const MAX_SECOND = 5;

export default {
	components: {
		VerifyInput,
		Button
	},
	data() {
		return {
			LOGIN_EVENT_TYPE,
			/**
			 * @desc 手机号 区位号
			 * @type String
			 */
			area: '+86',
			/**
			 * @desc 手机号
			 * @type String
			 */
			phone: '18921483103',
			/**
			 * @desc 类型
			 * @type String
			 */
			eventType: 'CODE',
			/**
			 * @desc 页面信息
			 * @type Object
			 */
			pageInfo: {},
			/**
			 * @desc 重新发送的秒数
			 * @type Number
			 */
			second: MAX_SECOND,
			/**
			 * @desc 输入框数据 验证码 或 密码
			 * @type String
			 */
			inputValue: '',
			isCountDownOver: false
		};
	},
	onLoad: function({ area, phone, eventType }) {
		this.area = area;
		this.phone = phone;
		this.eventType = eventType;

		this.pageInfo = pageInfoMap[this.eventType];

		this.setCountDown();
	},
	methods: {
		setCountDown() {
			this.isCountDownOver = false;

			this.timer = setInterval(() => {
				if (this.second <= 0) {
					clearInterval(this.timer);

					this.second = MAX_SECOND;
					this.isCountDownOver = true;
				}
				this.second--;
			}, 1000);
		},
		/**
		 * @desc 重新发送验证码
		 */
		handlerToResendCode() {
			this.setCountDown();
		},
		/**
		 * @desc 跳转到【验证码】
		 */
		handlerToVerify() {
			if (this.eventType === LOGIN_EVENT_TYPE.FORGET_PWD) {
				toNextPage({
					area: this.area,
					phone: this.phone,
					eventType: LOGIN_EVENT_TYPE.SET_PWD
				});
			} else if (this.eventType === LOGIN_EVENT_TYPE.CODE) {
				console.log('ok', this.eventType)
				uni.navigateTo({
					url: '/pages/home/home'
				})
			}
		},
		handlerBack() {
			uni.navigateBack();
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
	text-align: center;
}

.title:first-child {
	margin-bottom: $uni-spacing-col-md;
}

.area-phone-wrapper {
	display: flex;
	align-items: center;
	justify-content: center;
}

.area-phone {
	font-size: $uni-font-size-base;
}

.input-wrapper {
	margin: $uni-spacing-col-supper-lg 0;
	display: flex;
	border-bottom: 1px solid $uni-border-color;
}

.input-phone {
	flex: 1;
	height: $uni-input-size-base;
	line-height: $uni-input-size-base;
	font-size: $uni-font-size-lg;
	color: $uni-text-color;
	text-align: center;
}

.login-tip {
	display: flex;
	justify-content: center;
	margin-top: $uni-spacing-col-lg;
	margin-bottom: $uni-spacing-col-mini-lg;
}

.tip {
	font-size: $uni-font-size-sm;
	color: $uni-text-color-grey;
}
.edit-icon {
	width: 30rpx;
	height: 30rpx;
	margin-bottom: $uni-spacing-col-md;
	margin-left: $uni-spacing-row-sm;
}

.verify-content {
	margin: $uni-spacing-col-supper-lg 0;
}

.blue {
	color: $uni-color-primary;
}
</style>
