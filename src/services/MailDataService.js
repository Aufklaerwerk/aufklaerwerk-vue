import http from "../http-common";

class MailDataService {
  sendMail(data) {
    return http.post("/mails", data);
  }

}

export default new MailDataService();