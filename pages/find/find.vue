<template>
	<view class="find-container">
		<van-nav-bar title="发现" fixed="top">
		  <template #right>
			  <text class="iconfont icon-xiangji1"></text>
		  </template>
		</van-nav-bar>
		<swiper class="swiper" circular :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval"
			:duration="duration">
			<template v-for="item in bannerList">
				<swiper-item>
					<image class="banner" :src="item.img" mode="aspectFill">
					</image>
				</swiper-item>
			</template>
		</swiper>
		<view class="page-section-channel">
			<template v-for="(item,index) in channelList">
				<as-channel :title="item.title" :icon="item.icon" :url="item.urlPath" :color="item.color"></as-channel>
			</template>
		</view>
		<view class="page-section-posts">
			<as-post v-for="(item, index) in postList" :key="item._id" :id="item.id" :cover="item.cover"
				:title="item.title" :userAvatar="item.userAvatar" :nickName="item.nickName" :like="item.like"></as-post>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				background: ['color1', 'color2', 'color3'],
				indicatorDots: true,
				autoplay: true,
				interval: 2000,
				duration: 500,
				bannerList: [{
					img: 'https://img.zcool.cn/community/01c34658c93e4da801219c779fdcd3.jpg@2o.jpg',
					title: '咱们出游吧！',
					path: ''
				}, {
					img: 'https://img.zcool.cn/community/019a335a6eef2ba801213466941a2b.jpg@1280w_1l_2o_100sh.jpg',
					title: '咱们出游吧！',
					path: ''
				}, {
					img: 'https://img.zcool.cn/community/01989f59a166bba801211d25704f08.jpg@1280w_1l_2o_100sh.jpg',
					title: '咱们出游吧！',
					path: ''
				}],
				channelList: [{
					title: '酒店民宿',
					icon: 'icon-jiudian',
					urlPath: '/pages/index/bus/bus'
				}, {
					title: '美食外卖',
					icon: 'icon-meishi',
					urlPath: ''
				}, {
					title: '周边旅游',
					icon: 'icon-lvyouziyuan',
					urlPath: ''
				}, {
					title: '电影演出',
					icon: 'icon-dianyingyanchu',
					urlPath: ''
				}, {
					title: '休闲娱乐',
					icon: 'icon-xiuxianqu',
					iconPath: ''
				}],
				postList: [{
					_id: 31341,
					cover: 'https://img.tukuppt.com/ad_preview/00/20/43/5c9a14bc12419.jpg!/fw/980',
					title: '体验两小时骑行之旅，欣赏迈阿密最美的风景',
					userAvatar: 'https://tse4-mm.cn.bing.net/th/id/OIP-C.uqusUKF0VRAwO65jKzRzagHaFS?w=233&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
					nickName: '曲园',
					like: 130
				}, {
					_id: 11346,
					cover: 'https://tse2-mm.cn.bing.net/th/id/OIP-C.AYwNZTtCAhHAD3qz8lReeQHaKD?w=150&h=204&c=7&r=0&o=5&dpr=1.3&pid=1.7',
					title: '家庭旅游户外出行游玩',
					userAvatar: 'https://tse3-mm.cn.bing.net/th/id/OIP-C.oZp_RgLsW-hmJhPziqenmgHaE8?w=284&h=189&c=7&r=0&o=5&dpr=1.3&pid=1.7',
					nickName: '细致',
					like: 10
				}, {
					_id: 351341,
					cover:'https://ts1.cn.mm.bing.net/th/id/R-C.390cd66ca47f95c7800a3d52a5705fd0?rik=E9u%2f2ruJXsiMow&riu=http%3a%2f%2fimg.sccnn.com%2fbimg%2f339%2f21149.jpg&ehk=6g9%2f0xjgej3ZOI0%2bHvgBdYPGq7eyycgX2xyqX6roUJA%3d&risl=&pid=ImgRaw&r=0',
					title: '桂林·给你不一样的味道',
					userAvatar: 'https://tse3-mm.cn.bing.net/th/id/OIP-C.oZp_RgLsW-hmJhPziqenmgHaE8?w=284&h=189&c=7&r=0&o=5&dpr=1.3&pid=1.7',
					nickName: '金鑫',
					like: 10
				}, {
					_id: 36341,
					cover: 'https://img.zcool.cn/community/019b545d65d834a8012187f4e6a55a.jpg@1280w_1l_2o_100sh.jpg',
					title: '山东之旅，欣赏中原最美的风景',
					userAvatar: 'https://tse4-mm.cn.bing.net/th/id/OIP-C.uqusUKF0VRAwO65jKzRzagHaFS?w=233&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
					nickName: '归去',
					like: 130
				}, {
					_id: 318842,
					cover:'https://imgs.design006.com/202007/Design006_ZR4WPfY7rJ.jpg?x-oss-process=style/prev_w_460_mh_1600',
					title:'3晚轻奢五星酒店，1晚西江精品客栈',
					userAvatar: 'https://tse4-mm.cn.bing.net/th/id/OIP-C.uqusUKF0VRAwO65jKzRzagHaFS?w=233&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
					nickName: '归去',
					like: 130
				}]
			}
		},
		methods: {
			changeIndicatorDots(e) {
				this.indicatorDots = !this.indicatorDots
			},
			changeAutoplay(e) {
				this.autoplay = !this.autoplay
			},
			intervalChange(e) {
				this.interval = e.target.value
			},
			durationChange(e) {
				this.duration = e.target.value
			}
		}
	}
</script>

<style lang="scss">
	.find-container {
		padding-top: 46px;
		.van-nav-bar {
			background-color: #F2F2F2;
		}
	}
	.swiper {
		width: 100%;
		height: 300rpx;
		padding: 0 20rpx 20rpx;
		box-sizing: border-box;
	}

	swiper-item {
		height: 300rpx;
		line-height: 300rpx;
		text-align: center;

		.banner {
			width: 100%;
			height: 100%;
			border-radius: 5px;
		}
	}

	.page-section-channel {
		display: flex;
		flex-wrap: wrap;
		padding: 20rpx 0 40rpx;
	}


	.page-section-posts {
		padding: 0 20rpx 20rpx;
		column-count: 2;
		column-gap: 20rpx;		
		.as-post{
			background-color: white;
			margin-bottom: 20rpx;
		}
	}
</style>