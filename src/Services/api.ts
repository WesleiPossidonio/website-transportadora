import axios from "axios";

const api = axios.create({
  baseURL: "https://api-gaspartransportes.vercel.app/",
});

export default api;
