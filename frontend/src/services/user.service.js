import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://localhost:3000/api/test/';
const QR_API_URL = 'http://localhost:3000/';

class UserService {
  getUserQRs(userID) {
    return axios.get(QR_API_URL + 'qr/getQRCodes?' + new URLSearchParams({
      userID
    }), { headers: authHeader() })
  }

  createQR(id, name, url) {
    return axios.post(QR_API_URL + 'qr/createQR', {
      userID: id,
      name,
      url
    }, { headers: authHeader() })
  }

  updateQR(id, name, url, description) {
    return axios.patch(QR_API_URL + 'update/updateQRCodes', {
      qrID: id,
      name,
      url,
      description
    }, { headers: authHeader() })
  }
}

export default new UserService();