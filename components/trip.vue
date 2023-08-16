<template>
	<view class="as-trip">
		<view class="trip-head">
			<view class="trip-route">
				<text :class="['iconfont', tripType?'icon-toyCar-fill':'icon-tabhangren', 'type-icon']"></text>
				<text class="route-start">{{start}}</text>
				<view class="date-wrap">
					<text class="date">{{schedule}}</text>
					<text class="iconfont icon-luxian"></text>
				</view>
				<text class="route-end">{{destination}}</text>
				</div>
			</view>
			<view class="trip-type">{{tripType?'车找人':'人找车'}}</view>
		</view>
		<view class="trip-body">
			<label v-for="item in labels">
				<text>{{item}}</text>
			</label>
		</view>
		<view class="trip-footer">
			<view class="profile">
				<image :src="userAvatar" mode="aspectFill"></image>
				<text>{{nickName}}</text>
			</view>
			<view class="share">
				<text class="iconfont icon-ic_share"></text>
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
		props:{
			tripType: 0,
			start: {
				default:''
			},
			destination: '',
			schedule: '',
			userAvatar: '',
			nickName: '',
			labels:''
		},
		methods: {

		}
	}
</script>

<style lang="scss">
	.as-trip {
		display: flex;
		flex-direction: column;
		padding: 20rpx;
		background-color: white;
		margin-bottom: 20rpx;
		border-radius: 5px;
	}

	.trip-head {
		display: flex;
		align-items: center;
		justify-content: space-between;

		.trip-route {
			display: flex;
			align-items: center;

			.route-start,
			.route-end {
				font-size: 20px;
				font-weight: bold;
			}

			.date-wrap {
				display: flex;
				align-items: center;
				flex-direction: column;
				padding: 0 20rpx;

				.date {
					color: gray;
					font-size: 12px;
				}

				.icon-luxian {
					color: $uni-color-theme;
					font-size: 42px;
					line-height: 10px;
					font-weight: bold;
				}
			}
		}

		.type-icon {
			font-size: 32px;
			margin-right: 10px;
			color: $uni-color-theme;
		}



		.trip-type {
			padding: 2px 3px;
			text-align: center;
			font-size: 13px;
			color: white;
			border-radius: 3px;
			background-color: $uni-color-theme;
		}
	}

	.trip-body {
		padding: 40rpx 0;

		label {
			background-color: #a6a6a6;
			color: white;
			padding: 2px 3px;
			border-radius: 2px;
			font-size: 13px;
			margin-right: 10rpx;
		}
	}

	.trip-footer {
		display: flex;
		align-items: center;
		justify-content: space-between;

		.profile {
			display: flex;
			align-items: center;
		}

		.profile image,
		.share image {
			width: 20px;
			height: 20px;
			border-radius: 50%;
		}

		.profile image {
			margin-right: 10rpx;
		}
	}
</style>