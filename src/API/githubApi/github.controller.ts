import { IFollowers, IGaearon, IUser } from '.';
import { Controller } from '../config';
import { IGetFollowers } from './request.types';

class GithubController extends Controller {
	public constructor() {
		super({
			requestUrl: 'https://api.github.com/users'
		});
	}

	public async getGaearon() {
		return this.get<IGaearon>('/gaearon');
	}

	public async getFollowers({...params}: IGetFollowers) {
		return this.get<IFollowers[]>('/gaearon/followers', {
			params
		});
	}

	public async getUser() {
		return this.get<IUser>('/AlexeyAndryushin');
	}
}

export const GithubAPI = new GithubController();