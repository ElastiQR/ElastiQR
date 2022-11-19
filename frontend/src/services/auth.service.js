import axios from "axios";

const API_URL = "http://localhost:3000/auth/";
const CLI_SERVER_URL = "http://localhost:8080";

class AuthService {
  login(username, password, staySignedIn) {
    return axios
      .post(API_URL + "login", {
        "name": username,
        "password": password,
        "staySignedIn": staySignedIn
      })
      .then(response => {
        console.log("RESPONSE: " + response);
        if (response.data.accessToken) {
          localStorage.setItem("user", JSON.stringify({
            username, 
            password, 
            ...response.data
          }));
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

        return response.data;
      })
  }

  logout() {
    localStorage.removeItem("user");
  }

  register(username, password) {
    return axios.post(API_URL + "signUp", {
      "name": username,
      "password": password
    });
  }

  async setAuthCode(username, authCode) {
    var userID;
    await axios.patch(API_URL + "updateAuthCode?", {
      "name": username,
      "code": authCode
    })
    .then(
      (response) => {
        console.log(response)
        userID = parseInt(response.data.id);
        console.log("userid1: " + userID);
      },
      (error) => {
        console.log(error);
      }
    )
    console.log("userid2: " + userID);
    return axios.request(CLI_SERVER_URL + '?' + new URLSearchParams({
      code: authCode,
      id: userID
    }))
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));
  }
}

export default new AuthService();
