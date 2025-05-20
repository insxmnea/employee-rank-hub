import axios from "axios";
import getToken from "src/shared/lib/get-token/getToken";

const API_ENDPOINT = process.env.REACT_APP_ENDPOINT
  ? process.env.REACT_APP_ENDPOINT
  : "http://localhost:5000";

export function apiRequest() {
  const authToken: string | undefined = getToken();
  let headers;
  if (authToken) {
    headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${authToken}`,
    };
  } else {
    headers = {
      "Content-Type": "application/json",
    };
  }
  return axios.create({
    baseURL: API_ENDPOINT,
    headers: headers,
  });
}
