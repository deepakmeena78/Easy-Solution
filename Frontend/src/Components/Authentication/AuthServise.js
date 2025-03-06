import axios from "axios";

const API_URL = "http://localhost:3200/customer";

export const loginUser = async (email, password) => {
  const response = await axios.post(`${API_URL}/sign-in`, { email, password }, { withCredentials: true });
  return response.data;
};

export const signupUser = async (name, email, password) => {
  const response = await axios.post(`${API_URL}/sign-up`, { name, email, password });
  return response.data;
};

export const logoutUser = async () => {
  await axios.post(`${API_URL}/log-out`, {}, { withCredentials: true });
};
