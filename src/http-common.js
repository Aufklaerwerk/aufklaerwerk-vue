import axios from "axios";

export default axios.create({
  baseURL: "https://express-akw.herokuapp.com/api",
  headers: {
    "Content-type": "application/json"
  }
});