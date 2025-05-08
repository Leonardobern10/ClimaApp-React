import type { InfoWeather } from "@/model/InfoWeather";
import axios from "axios";

const latitude = -22.759784;
const longitude = -43.45151;
const apiKey = "2934dc967d9450db9475398a77ff6d3d";

const buscar = async (): Promise<InfoWeather> => {
  const result = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&lang=pt_br&units=metric`
  );

  const response = await result.data;
  return {
    weather: response.weather[0],
    temp: response.main,
    city: response.name,
  };
};

export default buscar;
