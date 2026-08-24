import apiClient from "./apiClient";

export const getThreads = async () => {
  const response = await apiClient.get("/api/threads");
  return response.data;
};

export const createThread = async (data) => {
  const response = await apiClient.post("/api/threads", data);
  return response.data;
};