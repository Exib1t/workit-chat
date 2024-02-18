import api from '../api.ts';

class UserApi {
  getUserById(bodyParams: number) {
    return api.get(`users/${bodyParams}`);
  }
}

export default new UserApi();
