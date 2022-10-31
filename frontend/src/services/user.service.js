import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://localhost:3000/api/test/';
const QR_API_URL = 'http://localhost:3000/';

class UserService {
  getUserQRs() {
    return axios.get(API_URL + 'user', { headers: authHeader() });
  }

  createQR(id, name, url) {
    return axios.post(QR_API_URL + 'qr/createQR', {
      userID: id,
      name,
      url
    })
  }
}

export default new UserService();