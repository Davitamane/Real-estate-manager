import axios from "axios";
import { API_KEY, API_URL } from "../constants";

axios.defaults.headers.common["Authorization"] = `Bearer ${API_KEY}`;

async function fetchData(link) {
  const response = await axios.get(`${API_URL}${link}`);
  return response.data;
}

export const getCities = () => fetchData("/cities");
export const getRegions = () => fetchData("/regions");
