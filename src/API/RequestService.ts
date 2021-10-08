class RequestService {
	async getRequest(url) {
		let data = await fetch(url)
			.then((res) => {
				return res.json();
			})
			.catch((err) => {
				{ throw new Error(`Oh we have a error${err}`) };
			});
		return data;
	}
}

export default new RequestService();
