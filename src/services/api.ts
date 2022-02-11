import axios from "axios";

const api = axios.create({
  baseURL: "https://projetowebcefetmg.herokuapp.com/",
  headers: {
    'Content-Type': 'application/json'
  }
})

export default api