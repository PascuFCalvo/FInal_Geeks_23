import axios from "axios";

export const registerStreamer = async (body) => {
  return await axios.post(`http://localhost:8000/api/registerStreamer`, body);
};

export const registerBrand = async (body) => {
  return await axios.post(`http://localhost:8000/api/registerBrand`, body);
};

export const login = async (body) => {
  console.log(body)
  return await axios.post(`http://localhost:8000/api/login`, body);
};
