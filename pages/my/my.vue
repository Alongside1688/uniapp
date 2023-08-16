<template>
	<view>
		<div class="user-info-wrap">
			<image class="user-avatar"
				src="https://tse1-mm.cn.bing.net/th/id/OIP-C.a6ur0i2oqaBsuPdybPdckAAAAA?w=210&h=210&c=7&r=0&o=5&dpr=1.3&pid=1.7">
			</image>
			<view class="user-profile">
				<text class="username">云亭</text>
				<view class="identify-box">
					<text class="user-id">ID:yunting9791</text>
					<view class="QRcode">
						<text class="iconfont icon-qrcode"></text>
						<text class="iconfont icon-Right"></text>
					</view>
				</view>
			</view>
		</div>
		<template v-for="item in cellList">
			<van-cell-group>
				<template v-for="sub in item">
					<!-- <as-cell :title="sub.title" :icon="sub.icon" :path="sub.path"></as-cell> -->
					<van-cell :title="sub.title" is-link>
						<template #icon>
							<text :class="['iconfont', sub.icon]"></text>
						</template>
					</van-cell>
				</template>
			</van-cell-group>
		</template>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				cellList: [
					[{
						title: '服务',
						icon: 'icon-qianbao',
						path: ''
					}],
					[{
							title: '行程',
							icon: 'icon-hangcheng2',
							path: ''
						},
						{
							title: '卡片',
							icon: 'icon-line-105',
							path: ''
						},
						{
							title: '收藏',
							icon: 'icon-collect',
							path: ''
						}
					],
					[{
						title:'设置',
						icon:'icon-icon_shezhi',
						path:''
					}]
				]
			}
		},
		onPullDownRefresh() {
			uni.showLoading({
				mask: true,
				title: "loading..."
			})
			setTimeout(function() {
				uni.hideLoading()
			}, 3000);
		},
		methods: {
			showAlert() {
				uni.showToast({
					title: "Hey"
				})
			}
		}
	}
</script>

<style lang="scss">
	.user-info-wrap {
		display: flex;
		background-color: white;
		padding: 40rpx;

		.user-avatar {
			width: 80px;
			height: 80px;
			margin-right: 20rpx;
		}

		.user-profile {
			flex: 1;
			display: flex;
			flex-direction: column;
			justify-content: space-around;

			.username {
				font-size: 26px;
				font-weight: bold;
			}

			.identify-box {
				display: flex;
				align-items: center;
				justify-content: space-between;
				vertical-align: middle;

				.icon-qrcode {
					margin-right: 20rpx;
					color: gray;
					font-size: 20px;
				}
			}
		}
	}


	.van-cell-group {
		margin: 20rpx 0;
		font-size: 32rpx;
		.van-cell {
			padding: 30rpx;
			font-size: 16px;
			.iconfont {
				font-size: 22px;
				margin-right: 20rpx;
			}
		}
	}
</style>