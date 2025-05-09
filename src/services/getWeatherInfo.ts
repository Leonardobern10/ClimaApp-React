import type { GeoPosition } from '@/model/GeoPosition';
import type { InfoWeather } from '@/model/InfoWeather';
import axios, { type AxiosResponse } from 'axios';
import getLocation from './getUserLocation';
import { toast } from 'react-toastify';

const apiKey = import.meta.env.VITE_API_KEY;

const fetchWeatherInfo = async (city?: string): Promise<InfoWeather> => {
     let result: AxiosResponse;
     let { lat, lon }: GeoPosition = await getLocation();

     try {
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
               city: response.name
          };
     } catch (error: any) {
          if (error.response?.data?.message === 'city not found') {
               toast.error('Erro: Cidade não encontrada!');
          } else {
               toast.error('Erro: Erro de processamento. Tente novamente!');
          }

          result = await axios.get(
               `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&lang=pt_br&units=metric`
          );
          const response = await result.data;
          return {
               weather: response.weather[0],
               temp: response.main,
               city: response.name
          };
     }
};

export default fetchWeatherInfo;
