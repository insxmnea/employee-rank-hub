import { TOKEN_LOCALSTORAGE_KEY } from "@shared/const/localStorage";
import axios from "axios";

export const $api = axios.create({
  baseURL: __API__,
});

$api.interceptors.request.use((config) => {
  const token = localStorage.getItem(TOKEN_LOCALSTORAGE_KEY);
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
