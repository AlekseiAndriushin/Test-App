import RequestService from "./RequestService";

class NetworkService {

	getAuth() {
		const url =
			'./users.json'
		return RequestService.getRequest(url);
	}
}
export default new NetworkService();