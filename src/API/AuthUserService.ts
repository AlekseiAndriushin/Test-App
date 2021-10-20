import RequestService from './RequestService';
import { IUser } from './types';

class NetworkService {
  getAuth() {
    const url = './users.json';
    return RequestService.getRequest<IUser[]>(url);
  }
}
export default new NetworkService();
