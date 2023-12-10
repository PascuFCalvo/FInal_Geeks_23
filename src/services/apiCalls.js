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

export const getCountries = async () => {
  return await axios.get(`${url}/getCountries`);
};

export const getProfile = async (token) => {
  return await axios.get(`${url}/profile`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const editUserProfile = async (body, token) => {
  console.log(token);
  console.log(body);
  return await axios.put(`${url}/editUserProfile`, body, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
