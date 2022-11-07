import axios from "axios";

const API_URL = "http://localhost:3000/auth/";

class AuthService {
  login(username, password) {
    return axios
      .post(API_URL + "login", {
        "name": username,
        "password": password
      })
      .then(response => {
        console.log("RESPONSE: " + response);
        if (response.data.accessToken) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }

        return response.data;
      });
  }

  async googleLogin(googleData) {
    return await axios
      .post(API_URL + "googleLogin", {
        "token": googleData.tokenId
      })
      .then(response => {
        console.log("RESPONSE: " + response);
        if (response.data.accessToken) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }
      })
  }

  logout() {
    localStorage.removeItem("user");
  }

  register(username, password, notify) {
    return axios.post(API_URL + "signUp", {
      "name": username,
      "password": password,
      "wantsnotifications": notify
    });
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));;
  }
}

export default new AuthService();