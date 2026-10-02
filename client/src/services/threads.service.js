import apiClient from "./apiClient"; // import the configured Axios instance

// Function to get all threads
export async function getThreads() {
  const response = await apiClient.get("/api/threads");
  return response.data; // return only the payload
}

// Function to create a new thread
export async function createThread(data) {
  const response = await apiClient.post("/api/threads", data);
  return response.data;
}
