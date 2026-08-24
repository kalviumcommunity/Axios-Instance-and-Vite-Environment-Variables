// ─────────────────────────────────────────────────────────────
// TODO (1/2): Create a configured Axios instance.
//
// Requirements (the auto-grader checks these):
//   • Use axios.create(...) — do NOT call bare axios.get / axios.post elsewhere.
//   • baseURL must come from import.meta.env.VITE_API_URL  (NOT a hardcoded string).
//   • Add default headers:
//        "Content-Type": "application/json"
//        Accept:         "application/json"
//   • export the instance as the default export.
//
// import axios from "axios";
//
// const apiClient = axios.create({
//   // ...your config here...
// });
//
// export default apiClient;
// ─────────────────────────────────────────────────────────────

// Placeholder so the app runs before you implement this.
// Replace EVERYTHING below with your axios.create() instance.
import axios from "axios";

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

export default apiClient;
