const utils = {
	/**
	 * 拼接 url 和 参数对象
	 * @param {String} url
	 * @param {Object} params
	 */
	concatParamsWithURL(url, params) {
		const paramArray = []

		const paramsKey = Object.keys(params)

		paramsKey.forEach(key => {
			paramArray.push(`${key}=${encodeURIComponent(params[key])}`)
		})

		return url + '?' + paramArray.join('&')
	},
	/**
	 * 防抖
	 */
	debounce(fn, delay = 300) {
		let timer;
		return () => {
			if (timer) {
				clearTimeout(timer)
			}
			timer = setTimeout(() => {
				fn && fn.call && fn.call(this, arguments);
				timer = null;
			}, delay)
		}
	},
	/**
	 * 节流
	 */
	throttle(fn, delay = 100) {
		let timer;
		return () => {
			if (timer) {
				return;
			}
			timer = setTimeout(() => {
				fn && fn.call && fn.call(this);
				timer = null;
			}, delay)
		}
	}
}

export default utils
