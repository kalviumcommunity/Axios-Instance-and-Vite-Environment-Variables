import axios from "axios";

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL, // reads from your .env file
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  timeout: 10000, // optional: stops request after 10 seconds
});

export default apiClient;
