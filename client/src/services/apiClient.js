// ─────────────────────────────────────────────────────────────
// TODO (1/2): Create a configured Axios instance.
// [all the existing comments can stay]

// ... comments ...

import axios from "axios";

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

export default apiClient;