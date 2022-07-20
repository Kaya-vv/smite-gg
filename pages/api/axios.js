import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.smitegame.com/smiteapi.svc",
  withCredentials: false,
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
  },
});

export default instance;
