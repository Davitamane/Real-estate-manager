import axios from "axios";
import { API_KEY, API_URL } from "../constants";

axios.defaults.headers.common["Authorization"] = `Bearer ${API_KEY}`;

async function fetchData(link) {
  const response = await axios.get(`${API_URL}${link}`);
  return response.data;
}

async function fetchDataId(link, id) {
  const response = await axios.get(`${API_URL}${link}/${id}`);
  return response.data;
}
// getRealEstates

export const getCities = () => fetchData("/cities");
export const getRegions = () => fetchData("/regions");
export const getAgents = () => fetchData("/agents");
export const getRealEstates = () => fetchData("/real-estates");
export const getRealEstate = (id) => fetchDataId("/real-estates", id);
