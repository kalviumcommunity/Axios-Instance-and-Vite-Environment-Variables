// ─────────────────────────────────────────────────────────────
// TODO (2/2): Implement the threads service using the Axios instance.
//
// Requirements (the auto-grader checks these):
//   • Import the LOCAL apiClient instance — NOT bare "axios".
//   • getThreads():        apiClient.get("/api/threads")        → return response.data
//   • createThread(data):  apiClient.post("/api/threads", data) → return response.data
//   • Return response.data (the payload), NOT the whole response object.
//
// Example shape:
//   import apiClient from "./apiClient";
//   export async function getThreads() {
//     const response = await apiClient.get("/api/threads");
//     return response.data;
//   }
// ─────────────────────────────────────────────────────────────

// Placeholder so the app compiles. Replace both functions with real
// apiClient calls that return response.data.
export async function getThreads() {
  throw new Error("NOT_IMPLEMENTED");
}

export async function createThread(data) {
  throw new Error("NOT_IMPLEMENTED");
}
