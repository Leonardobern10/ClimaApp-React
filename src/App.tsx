import "./App.css";
import Display from "./components/Display";
import InfoTemp from "./components/InfoTemp";
import SearchComponent from "./components/SearchComponent";
import type { InfoWeather } from "./model/InfoWeather";
import type { Temp } from "./model/Temp";
import type { Weather } from "./model/Weather";
import buscar from "./services/getWeatherInfo";
import { useEffect, useState } from "react";

function App() {
  const [currentInfo, setCurrentInfo] = useState<InfoWeather | null>(null);

  let [weather, setWeather] = useState<Weather | null>(null);
  let [infoTemp, setInfoTemp] = useState<Temp | null>(null);
  let [cityName, setCityName] = useState<string>("Nova Iguaçu");

  let searchInfo = async (city?: string) => {
    let response;
    if (city) {
      response = await buscar(city);
    } else {
      response = await buscar();
    }
    setCurrentInfo(response);
    setWeather(response.weather);
    setInfoTemp(response.temp);
    setCityName(response.city);
  };

  let handleSearch = (city: string) => {
    searchInfo(city);
  };

  useEffect(() => {
    searchInfo();
  }, []);

  return (
    <div className="h-screen bg-linear-to-t from-[#2AA2BE] to-[#005DC2] font-inter">
      {!currentInfo ? (
        <div>Carregando dados...</div>
      ) : (
        <div className="h-full flex flex-col items-center justify-around gap-y-5 border-2">
          <SearchComponent getCity={handleSearch} />
          {!weather ? (
            <div>Carregando dados...</div>
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
            <div>Carregando dados...</div>
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
    </div>
  );
}

export default App;
