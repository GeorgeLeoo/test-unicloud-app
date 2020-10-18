const router = {
	push(url, params) {
		uni.navigateTo({url, params});
	}
}

export default router