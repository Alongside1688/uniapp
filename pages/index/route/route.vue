<template>
	<view class="as-route">
		<view class="page-section-map">
			<map></map>
		</view>
		<view class="page-section-route">
	
			<view class="type">
				<view></view>
				<input type="text" placeholder="在哪儿">
			</view>
			<view class="type">
				<view></view>
				<input type="text" placeholder="去哪儿">
			</view>
			<van-button type="danger" size="large">submit</van-button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss">
	page {
		background-color: white;
	}
	map {
		width: 100%;
		height: 300px;
	}
	.page-section-route {
		padding: 20rpx;
		position: relative;
		background-color: white;
		border-radius: 10px;
		margin-top: -10px;
		z-index: 99;
		.type {
			display: flex;
			align-items: center;
			padding: 20rpx 0;
			view {
				width: 10px;
				height: 10px;
				border-radius: 50%;
				background-color: $uni-color-error;
				margin-right: 10rpx;
			}
			.input {
				font-weight: bold;
			}
		}
	}
</style>
