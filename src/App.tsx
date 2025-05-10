import Display from './components/Display';
import InfoTemp from './components/InfoTemp';
import LoadingSpinner from './components/LoadingSpinner';
import SearchComponent from './components/SearchComponent';
import type { InfoWeather } from './model/InfoWeather';
import type { Temp } from './model/Temp';
import type { Weather } from './model/Weather';
import fetchWeatherInfo from './services/getWeatherInfo';
import { useEffect, useState } from 'react';
import { ToastContainer } from 'react-toastify';

function App() {
     const [currentInfo, setCurrentInfo] = useState<InfoWeather | void | null>(
          null
     );

     let [weather, setWeather] = useState<Weather | null>(null);
     let [infoTemp, setInfoTemp] = useState<Temp | null>(null);
     let [cityName, setCityName] = useState<string>('Nova Iguaçu');

     let searchInfo = async (city?: string) => {
          let response: InfoWeather;
          if (city) {
               response = await fetchWeatherInfo(city);
          } else {
               response = await fetchWeatherInfo();
          }
          setCurrentInfo(response);
          setWeather(response!.weather);
          setInfoTemp(response!.temp);
          setCityName(response!.city);
     };

     let handleSearch = (city: string) => {
          searchInfo(city);
     };

     useEffect(() => {
          searchInfo();
     }, []);

     return (
          <div className="h-screen bg-linear-to-t from-[#005DC2] to-[#2AA2BE] font-inter">
               {!currentInfo ? (
                    <LoadingSpinner />
               ) : (
                    <div className="h-full flex flex-col items-center justify-around border-2">
                         <SearchComponent getCity={handleSearch} />
                         {!weather ? (
                              <LoadingSpinner />
                         ) : (
                              <Display
                                   local={cityName}
                                   condition={weather.description}
                                   temp={infoTemp!.temp}
                                   sensation={infoTemp!.feels_like}
                                   conditionMain={weather.main}
                              />
                         )}

                         {!infoTemp ? (
                              <LoadingSpinner />
                         ) : (
                              <InfoTemp
                                   min={infoTemp.temp_min}
                                   max={infoTemp.temp_max}
                                   pressure={infoTemp.pressure}
                                   umid={infoTemp.humidity}
                              />
                         )}
                    </div>
               )}
               <ToastContainer />
          </div>
     );
}

export default App;
