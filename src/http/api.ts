
import type { LoginCreadentials } from "../types";
import { api } from "./client";

export const loginUser = async (credentials: LoginCreadentials) => {
  const response = await api.post("/auth/login", credentials);
  return response.data;
};

export const getSelf = async () => {
  const response = await api.get("/auth/self");
  return response.data;
};

export const logoutFromServer = async () => {
  const response = await api.post("/auth/logout");
  return response.data;
};

export const refreshToken = async () => {
  const response = await api.post("/auth/refresh");
  return response.data;
};

