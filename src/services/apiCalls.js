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
  return await axios.put(`${url}/editUserProfile`, body, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const editStreamerProfile = async (body, token) => {
  return await axios.put(`${url}/editStreamerProfile`, body, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const editBrandProfile = async (body, token) => {
  return await axios.put(`${url}/editBrandProfile`, body, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const getAllmyStreams = async (token) => {
  
  return await axios.get(`${url}/getStreamsByStreamer`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const getAllCampaigns = async (token) => {
  return await axios.get(`${url}/getAllCampaigns`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const reportAStream = async (body, token) => {
  
  return await axios.post(`${url}/createStream`, body, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
