<template>
	<view class="as-cell">
		<view class="title-wrap" @click="onSwitch(path)">
			<text :class="['iconfont', icon, 'icon']"></text>
			<text class="title">{{title}}</text>
		</view>
		<text class="iconfont icon-Right"></text>
	</view>
</template>

<script>
	export default {
		name: "cell",
		data() {
			return {

			};
		},
		props: ['title', 'icon', 'path'],
		methods: {
			onSwitch(e) {
				console.log(e);
				wx.navigateTo({
					url: e.path
				})
			}
		}
	}
</script>

<style lang="scss">
	.as-cell {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 20rpx;
		background-color: white;
		border-bottom: 1px solid #F2F2F2;

		.title-wrap {
			display: flex;
			align-items: center;

		}

		.icon {
			font-size: 30px;
			margin-right: 20rpx;
		}
		
		.icon-Right{
			color: gray;
		}
		&:last-of-type{
			border: none;
		}
	}
</style>