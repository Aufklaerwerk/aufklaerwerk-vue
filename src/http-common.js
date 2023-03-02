import axios from "axios";

export default axios.create({
  baseURL: "https://express-akw.onrender.com",
  //baseURL: "http://localhost:8080/api", 
  headers: {
    "Content-type": "application/json"
  }
});