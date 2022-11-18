import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://localhost:3000/';

class UserService {
  getUserQRs(userID) {
    return axios.get(API_URL + 'qr/getQRCodes?' + new URLSearchParams({
      userID
    }), { headers: authHeader() })
  }

  countQR(id, span) {
    return axios.get(API_URL + 'qr/count?' + new URLSearchParams({
      qrID: id,
      span
    }));
  }

  recentActivity(userID) {
    return axios.get(API_URL + 'qr/recent?' + new URLSearchParams({
      userID
    }), { headers: authHeader() })
  }

  /*recentActivity(userID) {
    return axios.get(API_URL + 'qr/recent?' + new URLSearchParams({
      userID
    }));
  }*/

  createQR(id, name, url, description) {
    return axios.post(API_URL + 'qr/createQR', {
      userID: id,
      name,
      url,
      description
    }, { headers: authHeader() })
  }

  updateQR(id, name, url, description) {
    return axios.patch(API_URL + 'update/updateQRCodes', {
      qrID: id,
      name,
      url,
      description
    }, { headers: authHeader() })
  }
}

export default new UserService();