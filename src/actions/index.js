import axios from "axios";
const API_KEY = "cf4f64b3ce63863fa8506bbf2713716d";
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = "FETCH_WEATHER";

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);

  console.log("request:", request);

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
