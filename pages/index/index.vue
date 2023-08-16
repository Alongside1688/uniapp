<template>
	<view class="page-body">
		<van-nav-bar :title="title" fixed @click-left="toRoute" @click-right="showPopup">
			<template #left>
				<view class="route-box">
					<text class="iconfont icon-tabhangren"></text>
					<text class="start">{{start?start:'在哪儿'}}</text>
					<text class="iconfont icon-cs-dw-xs-1"></text>
					<text class="destination">{{destination ? destination : '在哪儿'}}</text>
				</view>
			</template>
			<template #right>
				<van-icon name="wap-nav" size="18px" color="white" />
			</template>
		</van-nav-bar>

		<van-overlay :show="show" @click="show = false">
			<view class="options-wrap" @click.stop="show = false">
				<template v-for="item in optionList">
					<view class="option-item">
						<text :class="['iconfont', item.icon]"></text>
						<text>{{item.title}}</text>
					</view>
					<view class="line"></view>
				</template>
			</view>
		</van-overlay>

		<view class="page-section-head">
			<view class="logo-wrap">
				<image class="as-logo" src="../../static/images/alongside-logo.png" mode=""></image>
				<view class="as-title-box">
					<text class="as-title-top">随行</text>
					<text class="as-title-bottom">Alongside</text>
				</view>
			</view>
			<view class="search-wrap" @click="toChat">
				<text class="iconfont icon-search light-gray"></text>
				<input disabled type="text" placeholder="随心问问">
			</view>
		</view>
		<view class="page-section-channel">
			<template v-for="(item,index) in channelList">
				<as-channel :title="item.title" :icon="item.icon" :url="item.urlPath"></as-channel>
			</template>
		</view>
		<div class="page-section-trips">
			<template v-for="(item, index) in tripList">
				<as-trip :id="item._id" :tripType="item.tripType" :start="item.start" :destination="item.destination"
					:schedule="item.schedule" :userAvatar="item.userAvatar" :nickName="item.nickName"
					:labels="item.labels"></as-trip>
			</template>
		</div>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: '',
				start: '灵山',
				destination: '',
				show: false,
				optionList: [{
					title: '添加好友',
					icon: 'icon-yaoqinghaoyou',
					urlPath: '/pages/index/bus/bus'
				}, {
					title: '扫二维码',
					icon: 'icon-saoyisao',
					urlPath: ''
				}, {
					title: '发布行程',
					icon: 'icon-fabu1',
					urlPath: ''
				}],
				channelList: [{
					title: '公交地铁',
					icon: 'icon-ditiepiao',
					urlPath: '/pages/index/bus/bus'
				}, {
					title: '出租车',
					icon: 'icon-zizhi-chuzuchegongsi',
					urlPath: ''
				}, {
					title: '客运轮船',
					icon: 'icon-bus-fill',
					urlPath: ''
				}, {
					title: '飞机高铁',
					icon: 'icon-feiji-01',
					urlPath: ''
				}, {
					title: '城际专线',
					icon: 'icon-car',
					iconPath: ''
				}],
				tripList: [{
					_id: 32134,
					tripType: 1,
					start: '武利镇',
					destination: '天河区',
					schedule: '7月3日',
					userAvatar: 'https://img95.699pic.com/photo/50099/7678.jpg_wh860.jpg',
					nickName: '我讨厌爱上你',
					labels: ['随时出发', '接送上门']
				}, {
					_id: 351134,
					tripType: 0,
					start: '文利镇',
					destination: '虎门镇',
					schedule: '7月4日',
					userAvatar: 'https://tse4-mm.cn.bing.net/th/id/OIP-C.5isgAoANo5vkmlXRaA3nawHaEK?w=226&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
					nickName: '可能',
					labels: ['要副驾', '无行李', '纯顺风车']
				}, {
					_id: 32154,
					tripType: 1,
					start: '灵山',
					destination: '海珠广场',
					schedule: '7月2日',
					userAvatar: 'https://tse1-mm.cn.bing.net/th/id/OIP-C.40p5lFd8X5Iz1bQVfmwbkwHaEK?w=311&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
					nickName: '雾化',
					labels: ['随时出发', '接送上门']
				}, {
					_id: 351134,
					tripType: 0,
					start: '平山镇',
					destination: '厚街镇',
					schedule: '7月1日',
					userAvatar: 'https://tse2-mm.cn.bing.net/th/id/OIP-C.qmqRtfd-SuNd-idO8ZYi2gHaGA?w=184&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
					nickName: '秦云',
					labels: ['要副驾', '无行李', '纯顺风车']
				}, {
					_id: 351134,
					tripType: 0,
					start: '文利镇',
					destination: '虎门镇',
					schedule: '7月4日',
					userAvatar: 'https://tse4-mm.cn.bing.net/th/id/OIP-C.5isgAoANo5vkmlXRaA3nawHaEK?w=226&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
					nickName: '清贫',
					labels: []
				}, ]
			}
		},
		onLoad() {

		},
		onHide() {
			this.show = false
		},
		methods: {
			toRoute() {
				uni.navigateTo({
					url: './route/route'
				})
			},
			toChat() {
				uni.navigateTo({
					url: './chat/chat'
				})
			},
			showPopup() {
				this.show = !this.show
			}
		}
	}
</script>

<style lang="scss" scoped>
	.van-nav-bar {
		color: white;
		background-color: $uni-color-theme;

		.route-box {
			display: flex;
			align-items: center;
			line-height: initial;

			.icon-tabhangren {
				margin-right: 10rpx;
			}

			.start,
			.destination {
				font-weight: bold;
			}

			.icon-cs-dw-xs-1 {
				font-size: 14px;
				margin: 0 6rpx;
			}
		}
	}

	.van-hairline--bottom::after {
		border: 0;
	}

	.van-overlay {
		background: none;

		.options-wrap {
			position: relative;
			float: right;
			margin-top: 40px;
			margin-right: 20rpx;
			color: white;
			border-radius: 5px;
			opacity: .9;
			background-color: black;

			&::before {
				display: inline-block;
				position: absolute;
				top: -15px;
				right: 7px;
				content: '';
				border: 10px solid transparent;
				border-bottom: 10px solid black;
			}

			.option-item {
				padding: 30rpx;
				letter-spacing: 2px;

				.iconfont {
					margin-right: 20rpx;
				}
			}
		}

		.line {
			border-bottom: 1px solid #F2F2F2;
			margin-left: 48px;
		}
	}

	.van-popup--center {
		color: white;
		width: 120px;
		position: absolute;
		top: 10px;
		left: auto;
		right: 20rpx;
		padding: 20rpx;
		border-radius: 5px;
		background-color: black;
		opacity: 0.9;
		transform: translate3d(0, 0, 0);
	}

	.page-section-head {
		margin-top: 45px;
		display: flex;
		flex-direction: column;
		padding: 20rpx 20rpx 40rpx;
		box-sizing: border-box;
		background-color: $uni-color-theme;

		.logo-wrap {
			display: flex;
			justify-content: center;
			align-items: center;
			padding: 20rpx 0 40rpx;

			.as-logo {
				width: 80px;
				height: 80px;
				margin-right: 10rpx;
			}

			.as-title-box {
				display: flex;
				flex-direction: column;
				color: white;
				font-weight: bold;
				text-align: center;

				.as-title-top {
					font-size: 38px;
				}

				.as-title-bottom {
					font-size: 15px;
				}
			}


		}

		.search-wrap {
			display: flex;
			align-items: center;
			line-height: 40px;
			border-radius: 25px;
			padding: 0 20rpx;
			background-color: white;

			.icon-search {
				color: $uni-text-color-placeholder;
			}

			input {
				margin-left: 10rpx;
			}
		}
	}

	.page-section-channel {
		display: flex;
		flex-wrap: wrap;
		margin: 40rpx 20rpx;
	}

	.page-section-trips {
		margin: 20rpx;
	}
</style>