import RequestService from './RequestService';

class NetworkService {
  getGaearon() {
    const url = 'https://api.github.com/users/gaearon';
    return RequestService.getRequest(url);
  }
  getFollowers() {
    const url = 'https://api.github.com/users/gaearon/followers';
    return RequestService.getRequest(url);
  }
  getUser() {
    const url = 'https://api.github.com/users/AlexeyAndryushin';
    return RequestService.getRequest(url);
  }
}
export default new NetworkService();
