<template>
	<view class="channel-wrap" @click="toChannelTab(url)">
		<text :class="['iconfont',icon, 'channel-icon']" :style="{color: color}"></text>
		<view class="channel-title">
			<text class="title">{{title}}</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		props: {
			title: {
				default: ''
			},
			icon: {
				default: 'icon-cs-dw-xs-1'
			},
			url: {
				default: ''
			},
			color:{
				defalut:''
			}
		},
		methods: {
			toChannelTab(e) {
				uni.navigateTo({
					url: e
				})
			}
		}
	}
</script>

<style lang="scss">
	.channel-wrap {
		width: 20%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		overflow: hidden;

		.channel-icon {
			font-size: 32px;
		}

		.channel-title {
			font-size: 12px;
			line-height: 20px;
		}
	}
</style>