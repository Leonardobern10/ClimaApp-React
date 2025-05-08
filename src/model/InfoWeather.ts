import type { Temp } from "./Temp";
import type { Weather } from "./Weather";

export type InfoWeather = {
  weather: Weather;
  temp: Temp;
  city: string;
};
