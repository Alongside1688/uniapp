export default {
	ak: "dsss"
}

export const paddingBottomHeight = (
	function() {
		let defaultHeight = 0;
		uni.getSystemInfo({
			success: function(res) {
				let model = ['X', 'XR', 'XS', '11', '12', '13', '14', '15'];
				model.forEach(item => {
					//适配iphoneX以上的底部，给tabbar一定高度的padding-bottom
					if (res.model.indexOf(item) != -1 && res.model.indexOf('iPhone') != -1) {
						defaultHeight = 40;
					}
				})
			}
		});
		return defaultHeight
	}
)()

export const statusBarHeight = (() => {
	return uni.getSystemInfoSync().statusBarHeight
})()