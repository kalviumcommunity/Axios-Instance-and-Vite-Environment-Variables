// ─────────────────────────────────────────────────────────────

// TODO (1/2): Create a configured Axios instance.

// Requirements:
//   • Use axios.create(...)
//   • baseURL from import.meta.env.VITE_API_URL
//   • Default JSON headers
//   • Export instance as default

import axios from "axios";

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

export default apiClient;

// ─────────────────────────────────────────────────────────────