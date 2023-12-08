import axios from "axios";

const url = "http://localhost:8000/api";

export const registerStreamer = async (body) => {
  return await axios.post(`${url}/registerStreamer`, body);
};

export const registerBrand = async (body) => {
  return await axios.post(`${url}/registerBrand`, body);
};

export const login = async (body) => {
  return await axios.post(`${url}/login`, body);
};

export const getProfile = async (token) => {
  return await axios.get(`${url}/profile`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
