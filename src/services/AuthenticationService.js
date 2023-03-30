import http from "../http-common";

class AuthenticationService {
  checkPassword(password) {
    const body = {
        "password": password
    };
    return http.post("/authentication/authenticate", body);
  }
}

export default new AuthenticationService();