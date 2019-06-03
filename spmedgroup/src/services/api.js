import axios from "axios";

const api = axios.create({
  baseURL: "http://192.168.3.70:5000/api"
});

//talvez modificar a url

export default api;
