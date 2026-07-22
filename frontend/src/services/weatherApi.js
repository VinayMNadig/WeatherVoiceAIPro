import axios from "axios";

const API = axios.create({
  baseURL: "http://127.0.0.1:5000",
});

export const getWeather = async (city) => {
  const response = await API.get(`/weather?city=${city}`);
  return response.data;
};