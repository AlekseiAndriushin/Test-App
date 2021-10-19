import RequestService from './RequestService';
import { Followers, Gaearon, User } from './types';

class NetworkService {
  getGaearon() {
    const url = 'https://api.github.com/users/gaearon';
    return RequestService.getRequest<Gaearon>(url);
  }

  getFollowers() {
    const url = 'https://api.github.com/users/gaearon/followers';
    return RequestService.getRequest<Followers>(url);
  }

  getUser() {
    const url = 'https://api.github.com/users/AlexeyAndryushin';
    return RequestService.getRequest<User>(url);
  }
}
export default new NetworkService();
