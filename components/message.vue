<template>
	<view class="message-cell" @click="toDialog(id)">
		<image class="avatar" :src="avatar" mode="aspectFill"></image>
		<view class="content-wrap">
			<view class="name-wrap">
				<text class="name">{{nickName}}</text>
				<text class="date">{{date}}</text>
			</view>
			<text class="msg">{{message}}</text>
		</view>
	</view>
</template>

<script>
	export default {
		name:"message",
		data() {
			return {
				
			};
		},
		props:['id', 'avatar', 'nickName', 'message', 'date'],
		methods:{
			toDialog(e){
				uni.navigateTo({
					url:'./dialog/dialog?id=' + e
				})
			}
		}
	}
</script>

<style lang="scss">
	.message-cell{
		display: flex;
		align-items: center;
		padding: 20rpx;
		background-color: white;
		.avatar{
			width: 80rpx;
			height: 80rpx;
			border-radius: 5px;
			margin-right: 20rpx;
		}
		.content-wrap{
			flex: 1;
			display: flex;
			flex-direction: column;
			.name-wrap{
				display: flex;
				align-items: center;
				justify-content: space-between;
				.name{
					font-weight: bold;
				}
				.date{
					font-size: 12px;
					color: gray;
				}
			}
			.msg{
				font-size: 14px;
				color: gray;
			}
		}
	}
</style>