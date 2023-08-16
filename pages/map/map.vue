<template>
	<view class="map-container">
		<van-nav-bar title="导航" fixed="top">
			<template #right>
				<text class="iconfont icon-floor-settings"></text>
			</template>
		</van-nav-bar>
		<map :title="title" :latitude="latitude" enable-zoom :longitude="longitude" :markers="covers">
		</map>
		<view class="page-section-form">
			<view class="search-box">
				<input type="text" placeholder="查询地方或地址">
				<text class="iconfont icon-message"></text>
			</view>
			<view class="favorites-box">
				<text>收藏</text>
				<view class="favorites-list">

					<view class="favorites-item">

					</view>
					<view class="favorites-add">
						<view class="add-box">
							<text class="iconfont icon-add"></text>
						</view>
						<text>添加</text>
					</view>
				</view>
			</view>
			<view class="favorites-box">
				<text>最近</text>
				<view class="favorites-list">

					<view class="favorites-item">

					</view>
					<view class="favorites-add">
						<view class="add-box">
							<text class="iconfont icon-add"></text>
						</view>
						<text>添加</text>
					</view>
				</view>
			</view>
			<view class="favorites-box">
				<text>标记</text>
				<view class="favorites-list">

					<view class="favorites-item">

					</view>
					<view class="favorites-add">
						<view class="add-box">
							<text class="iconfont icon-add"></text>
						</view>
						<text>添加</text>
					</view>
				</view>
				<van-button size="large">分享我的位置</van-button>
				<van-button size="large">标记我的位置</van-button>
				<van-button size="large">报告问题</van-button>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				id: 0, // 使用 marker点击事件 需要填写id
				title: 'map',
				latitude: 22.161744,
				longitude: 109.237423,
				covers: [{
					title: '武利镇',
					width: 28,
					height: 28,
					latitude: 22.161234,
					longitude: 109.237523,
					iconPath: '/static/icons/location.svg'
				}, {
					latitude: 39.90,
					longitude: 116.39,
					iconPath: '../../../static/location.png'
				}]
			}
		},
		methods: {

		}
	}
</script>

<style lang="scss">
	page {
		width: 100%;
		height: 100%;

		.map-container,
		map {
			width: 100%;
			height: 100%;

			.van-nav-bar {
				opacity: 0.9;
			}
			.page-section-form {
				position: absolute;
				bottom: 0px;
				min-height: 600px;
				padding: 20rpx;
				left: 0;
				right: 0;
				background-color: $uni-bg-color-grey;
				border-top-left-radius: 10px;
				border-top-right-radius: 10px;

				.search-box {
					display: flex;
					align-items: center;
					padding: 20rpx;
					background-color: white;
					border-radius: 10px;

					.icon-message {
						color: $uni-color-theme;
					}

					input {
						flex: 1;
						margin-right: 20rpx;
					}

				}

				.favorites-box {
					margin-top: 30rpx;

					.favorites-list {
						padding: 20rpx;
						border-radius: 10px;
						margin-top: 10rpx;
						background-color: white;

						.favorites-add,
						.favorites-add {
							width: fit-content;
							text-align: center;
						}

						.add-box {
							width: 60px;
							height: 60px;
							display: flex;
							align-items: center;
							justify-content: center;
							border-radius: 50%;
							margin-bottom: 10rpx;
							background-color: $uni-bg-color-grey;

							.icon-add {
								font-size: 22px;
								font-weight: bold;
							}
						}
					}
				}
			}
		}
	}
</style>