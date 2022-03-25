import { IUser } from '../types';
import { Controller } from '../config';

class AuthController extends Controller {
	public constructor() {
		super({
			requestUrl: './users.json'
		});
	}

	public async getUser() {
		return (await this.get<IUser[]>()).data;
	}
}

export const AuthAPI = new AuthController();