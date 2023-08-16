<template>
	<view class="as-post">
		<view class="trip-head">
			<image class="cover-img" :src="cover" mode="widthFix"></image>
		</view>
		<view class="trip-title">
			<text class="title">{{title}}</text>
		</view>

		<view class="trip-footer">
			<view class="profile">
				<image :src="userAvatar" mode="aspectFill"></image>
				<text>{{nickName}}</text>
			</view>
			<view class="share">
				<text class="iconfont icon-star"></text>
				<text>{{like}}</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		props: ['id', 'cover', 'title', 'userAvatar', 'nickName', 'like'],
		methods: {

		}
	}
</script>

<style lang="scss">
	.as-post {
		display: flex;
		flex-direction: column;
		background-color: white;
		border-radius: 7px;
		box-sizing: border-box;
		overflow: hidden;
	}

	.trip-head {
		display: flex;
		flex-direction: column;

		.cover-img {
			width: 100%;
			padding-bottom: 20rpx;
		}

	}

	.trip-title {
		padding: 10rpx;

		.title {
			font-weight: bold;
			overflow: hidden;
			-webkit-line-clamp: 2;
			text-overflow: ellipsis;
			display: -webkit-box;
			-webkit-box-orient: vertical;
		}
	}


	.trip-footer {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding-top: 30rpx;
		padding: 10rpx;

		.profile {
			display: flex;
			align-items: center;
		}

		.profile image {
			width: 30px;
			height: 30px;
			margin-right: 20rpx;
			border-radius: 50%;
		}

		.icon-star {
			color: red;
			margin-right: 10rpx;
		}
	}
</style>