<template>
	<view class="chat">
		<view class="page-section-dialog">
			<template v-for="item in chatList">
				<view :class="item.type">
					<image v-if="'receiver' === item.type" mode="aspectFill" class="avatar" :src="receiverAvatar">
					</image>
					<image v-if="'sender' === item.type" mode="aspectFill" class="avatar" :src="senderAvatar"></image>
					<view class="mesage-box">
						<text>{{item.message}}</text>
					</view>
				</view>
			</template>
		</view>
		<view class="page-section-entry">
			<button class="change-entry" size="mini" type="default">
				<text class="iconfont icon-manyi"></text>
			</button>
			<input type="text" v-model="queryWords" placeholder="去哪儿">
			<button @click="submit" :class="['send-btn', queryWords ? 'send-active-btn':'']" size="mini" type="primary">
				<text class="iconfont icon-message"></text>
			</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				queryWords: null,
				receiverAvatar: '/static/logo.png',
				senderAvatar: 'https://tse3-mm.cn.bing.net/th/id/OIP-C.qIu2wcvur-VB04HW0V0j0QHaFj?w=220&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
				chatList: [{
					type: 'receiver',
					message: 'hi',
				}, {
					type: 'receiver',
					message: '你最近过得怎样',
				}, {
					type: 'sender',
					message: '很好'
				}, {
					type: 'sender',
					message: '多谢'
				}, {
					type: 'receiver',
					message: '不用客气',
				}, ]
			}
		},
		onLoad(e){
			console.log(e);
		},
		methods: {
			async submit() {
				if (!this.queryWords) {
					uni.showToast({
						icon: 'error',
						title: '请输入内容'
					})
					return
				}
				this.chatList.push({
					type: 'sender',
					message: this.queryWords
				})
				let spoken = this.queryWords
				this.queryWords = null
				let {
					data: res
				} = await uni.request({
					url: 'https://ajax-base-api-t.itheima.net/api/robot',
					data: {
						spoken
					}
				})
				this.chatList.push({
					type: 'receiver',
					message: res.data.info.text
				})
				
			}
		}
	}
</script>

<style lang="scss">
	.chat {
		padding-bottom: 54px + 200px;
	}
	.page-section-dialog {
		display: flex;
		flex-direction: column;

		.receiver,
		.sender {
			display: flex;
			margin: 20rpx;

			.mesage-box {
				max-width: 500rpx;
				min-width: 30px;
				padding: 10px;
				border-radius: 5px;
				text-align: justify;
				font-size: 16px;
			}
		}

		.receiver {
			.mesage-box {
				color: white;
				margin-left: 20rpx;
				background-color: $uni-color-theme;
			}
		}

		.sender {
			display: flex;
			flex-direction: row-reverse;

			.mesage-box {
				margin-right: 20rpx;
				background-color: white;
			}
		}

		.avatar {
			width: 42px;
			height: 42px;
			background-color: white;
			border-radius: 5px;
		}

	}

	.page-section-entry {
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		display: flex;
		align-items: center;
		background-color: white;
		padding: 20rpx;

		button {
			border: none;
			padding: 0;
			margin: 0;
			line-height: normal;
			width: 40px;
			border-radius: 5px;
			background: none;

			&::after {
				border: none;
			}

			text {
				font-size: 25px;
			}

		}

		.change-entry {}

		.send-btn {
			color: black;
			line-height: 30px;
		}

		.send-active-btn {
			line-height: 30px;
			color: $uni-color-theme;
		}

		input {
			flex: 1;
			margin: 0 20rpx;
			height: 30px;
			border-radius: 5px;
			padding: 10rpx;
			background-color: #eaeaea;
			box-sizing: border-box;
			font-size: 16px;
		}
	}
</style>