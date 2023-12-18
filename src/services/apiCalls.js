import axios from "axios";

const url = "http://localhost:8000/api";

export const registerStreamer = async (body) => {
  console.log(body);
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
  console.log(body);
  console.log(token);
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
  console.log(token);
  return await axios.get(`${url}/getStreamsByStreamer`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const getCampaignsAsABrand = async (token) => {
  console.log(token);
  return await axios.get(`${url}/getCampaignsAsABrand`, {
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

export const getAllActivatedCampaigns = async (token) => {
  return await axios.get(`${url}/getAllActivatedCampaigns `, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const getAllUsers = async (token) => {
  return await axios.get(`${url}/getAllUsers`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const getAllBrands = async (token) => {
  return await axios.get(`${url}/getAllBrands`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const getAllStreamers = async (token) => {
  return await axios.get(`${url}/getAllStreamers`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const getAllStreams = async (token) => {
  return await axios.get(`${url}/getAllStreams`, {
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

export const inactivateUserProfile = async (body, token) => {
  console.log(body);
  console.log(token);
  return await axios.put(`${url}/inactivateUser`, body, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const payStreamAPI = async (stream_id, token) => {
  console.log(stream_id);
  console.log(token);
  return await axios.put(
    `${url}/payStream`,
    { stream_id: stream_id },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};

export const createACampaign = async (body, token) => {
  console.log(body);
  console.log(token);
  return await axios.post(`${url}/createACampaign`, body, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const deleteACampaign = async (id, token) => {
  console.log(id);
  console.log(token);
  return await axios.delete(`${url}/deleteCampaign/${parseInt(id)}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const deleteAStreamById = async (id, token) => {
  console.log(id);
  console.log(token);
  return await axios.delete(`${url}/deleteAStreamById/${parseInt(id)}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const activateACampaign = async (id, token) => {
  console.log(id);
  console.log(token);
  return await axios.put(`${url}/activateACampaign/${parseInt(id)}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
export const inactivateACampaign = async (id, token) => {
  console.log(id);
  console.log(token);
  return await axios.put(`${url}/inactivateACampaign/${parseInt(id)}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const approveAStream = async (id, token) => {
  console.log(id);
  console.log(token);
  return await axios.put(`${url}/approveAStream/${parseInt(id)}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const activateAUser = async (id, token) => {
  console.log(id);
  console.log(token);
  return await axios.put(`${url}/activateAUserById/${parseInt(id)}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const inactivateAUser = async (id, token) => {
  console.log(id);
  console.log(token);
  return await axios.put(`${url}/inactivateAUserById/${parseInt(id)}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const definitiveDeleteUser = async (id, token) => {
  console.log(id);
  console.log(token);
  return await axios.delete(`${url}/definitiveDeleteUser/${parseInt(id)}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}