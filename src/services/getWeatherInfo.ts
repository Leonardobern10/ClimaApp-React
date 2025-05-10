import type { GeoPosition } from '@/model/GeoPosition';
import type { InfoWeather } from '@/model/InfoWeather';
import axios, { type AxiosResponse } from 'axios';
import getLocation from './getUserLocation';
import { toast } from 'react-toastify';

const apiKey = import.meta.env.VITE_API_KEY;

const fetchWeatherInfo = async (city?: string): Promise<InfoWeather> => {
     let result: AxiosResponse;
     let lat: number | null = null;
     let lon: number | null = null;

     try {
          if (!city) {
               // Tenta buscar localização salva primeiro
               const savedLat = localStorage.getItem('lastLat');
               const savedLon = localStorage.getItem('lastLon');

               if (savedLat && savedLon) {
                    lat = parseFloat(savedLat);
                    lon = parseFloat(savedLon);
               } else {
                    toast.info('Buscando sua localização...');
                    const location: GeoPosition = await getLocation();
                    lat = location.lat;
                    lon = location.lon;

                    // Salva para usar depois
                    localStorage.setItem('lastLat', String(lat));
                    localStorage.setItem('lastLon', String(lon));
               }
          }

          const url = city
               ? `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${apiKey}&lang=pt_br&units=metric`
               : `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&lang=pt_br&units=metric`;

          result = await axios.get(url);

          const response = result.data;
          console.log(response);
          return {
               weather: response.weather[0],
               temp: response.main,
               city: response.name
          };
     } catch (error: any) {
          console.error(error);

          if (error.response?.data?.message === 'city not found') {
               toast.error('Erro: Cidade não encontrada!');
          } else {
               toast.error(
                    'Erro: Não foi possível buscar a previsão do tempo.'
               );
          }

          // Em caso de erro, tenta buscar pelo GPS como fallback
          if (!city && lat && lon) {
               try {
                    const fallbackResult = await axios.get(
                         `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&lang=pt_br&units=metric`
                    );
                    const fallbackResponse = fallbackResult.data;

                    return {
                         weather: fallbackResponse.weather[0],
                         temp: fallbackResponse.main,
                         city: fallbackResponse.name
                    };
               } catch (fallbackError) {
                    throw new Error('Falha ao buscar clima após erro.');
               }
          }

          throw new Error('Não foi possível buscar o clima.');
     }
};

export default fetchWeatherInfo;
