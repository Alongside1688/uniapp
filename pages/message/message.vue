<template>

	<view class="message-container">
		<van-nav-bar title="信息" fixed @click-right="showSlider">
			<template #right>
				<text class="iconfont icon-haoyouliebiao" style="font-size: 12px;"></text>
			</template>
		</van-nav-bar>
		<view class="search-wrap">
			<text class="iconfont icon-search light-gray"></text>
			<text>搜索</text>
		</view>
		<view class="section-message">
			<template v-for="item in messageList">
				<view class="">
					<as-message :id="item._id" :avatar="item.avatar" :nickName="item.nickName" :message="item.message"
						:date="item.date"></as-message>
				</view>
				<view class="line"></view>
			</template>
		</view>
		<van-overlay :show="show" @click="show = false">
			<transition name="leftMenu">
				<view class="contracts-wrap" v-show="show" @click.stop>
					<van-nav-bar title="联系人" @click-left="showSlider" @click-right="show=false">
						<template #left>
							<text class="iconfont icon-yaoqinghaoyou"></text>
						</template>
						<template #right>
							<van-icon name="cross" color="black"/>
						</template>
					</van-nav-bar>
					<view class="search-wrap">
						<text class="iconfont icon-search light-gray"></text>
						<text>搜索</text>
					</view>
					<view class="section-message">
						<template v-for="item in messageList">
							<view class="">
								<as-message :id="item._id" :avatar="item.avatar" :nickName="item.nickName"></as-message>
							</view>
							<view class="line"></view>
						</template>
					</view>
				</view>
			</transition>
		</van-overlay>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				show: false,
				voiceUrl: 'https://dds.dui.ai/runtime/v1/synthesize?voiceId=qianranfa&speed=0.8&volume=100&audioType=wav&text=hi',
				messageList: [{
					_id: 31581,
					avatar: 'http://p2.music.126.net/ih3CGgbFJXngi3uh4-KUIQ==/2330964650906317.jpg?param=130y130',
					nickName: '海子',
					message: '拜拜！',
					date: '07:01'
				}, {
					_id: 31581,
					avatar: 'http://p1.music.126.net/dyoIU_JBPGCNKMRfD6tDJg==/5927467185588380.jpg?param=50y50',
					nickName: '汽笛',
					message: '准备放假了！',
					date: '07:01'
				}, {
					_id: 31581,
					avatar: 'http://p1.music.126.net/29CE_tfHaGK1AKbiGn5K2Q==/5936263278631849.jpg?param=50y50',
					nickName: '莫',
					message: '准备放假了！',
					date: '07:01'
				}, {
					_id: 31581,
					avatar: 'https://tse4-mm.cn.bing.net/th/id/OIP-C.lcexMjUyoE6qSsz7_kVmVQAAAA?w=210&h=210&c=7&r=0&o=5&dpr=1.3&pid=1.7',
					nickName: '阿霞',
					message: '在干嘛！',
					date: '6/28'
				}, {
					_id: 31581,
					avatar: 'http://p2.music.126.net/GKoiSnOu27HoMw6kTzKnXw==/109951163265474040.jpg?param=50y50',
					nickName: '小贤',
					message: '还在北海吗！',
					date: '6/23'
				}, ]
			}
		},
		methods: {
			showSlider() {
				this.show = true
			}
		},
		onShow() {
			this.audio = `<audio controls autoplay src="${this.voiceUrl}"></audio> `
		},
		onHide() {
			this.show = false
		}
	}
</script>

<style lang="scss">
	.message-container {
		padding-top: 46px;

		.contracts-wrap {
			position: absolute;
			left: 0;
			height: 100%;
			width: 600rpx;
			background-color: #F2F2F2;
		}

		.leftMenu-enter {
			animation: leftMenu-dialog-fade-in 0.3s ease;
		}

		.leftMenu-leave {
			animation: leftMenu-dialog-fade-out 0.1s ease forwards;
		}

		.leftMenu-enter-active {
			animation: leftMenu-dialog-fade-in 0.3s ease;
		}

		.leftMenu-leave-active {
			animation: leftMenu-dialog-fade-out 0.1s ease forwards;
		}

		@keyframes leftMenu-dialog-fade-in {
			0% {
				transform: translate3d(-100%, 0, 0);
				opacity: 1;
			}

			100% {
				transform: translate3d(0, 0, 0);
				opacity: 1;
			}
		}

		@keyframes leftMenu-dialog-fade-out {
			0% {
				transform: translate3d(0, 0, 0);
				opacity: 1;
			}

			100% {
				transform: translate3d(-100%, 0, 0);
				opacity: 1;
			}
		}
	}

	.search-wrap {
		margin: 20rpx;
		padding: 20rpx;
		background-color: white;
		border-radius: 5px;
	}

	.section-message {

		.line {
			width: 120rpx;
			height: 1px;
			background-color: white;

			&:last-child {
				display: none;
			}
		}
	}
</style>