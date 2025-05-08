import type { GeoPosition } from "@/model/GeoPosition";
import type { InfoWeather } from "@/model/InfoWeather";
import axios from "axios";
import getLocation from "./getUserLocation";

const apiKey = import.meta.env.VITE_API_KEY;

const buscar = async (city?: string): Promise<InfoWeather> => {
  let result;
  let { lat, lon }: GeoPosition = await getLocation();

  if (city) {
    result = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&lang=pt&units=metric`
    );
  } else {
    result = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&lang=pt_br&units=metric`
    );
  }

  const response = await result.data;
  return {
    weather: response.weather[0],
    temp: response.main,
    city: response.name,
  };
};

export default buscar;
