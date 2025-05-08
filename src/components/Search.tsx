import type { Temp } from "@/model/Temp";
import type { Weather } from "@/model/Weather";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Search() {
  const latitude = -22.759784;
  const longitude = -43.45151;
  const apiKey = "2934dc967d9450db9475398a77ff6d3d";

  const [tempo, setTempo] = useState<Weather | null>(null);
  const [temperatura, setTemperatura] = useState<Temp | null>(null);
  const [cityName, setCityName] = useState<string | null>(null);

  const buscar = async () => {
    const result = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&lang=pt_br&units=metric`
    );

    const response = await result.data;
    console.log(response);
    setTempo(response.weather[0]);
    setTemperatura(response.main);
    setCityName(response.name);
  };

  useEffect(() => {
    buscar();
  }, []);

  return (
    <div>
      <div>
        <h1>Condição do Céu</h1>
        <div>{tempo?.description}</div>
        {tempo?.icon && (
          <img
            src={`https://openweathermap.org/img/wn/${tempo.icon}.png`}
            alt="Ícone do tempo"
          />
        )}
        <div>{tempo?.main}</div>
      </div>
      <div className="border-2 border-sky-200">
        <h1>Temperatura</h1>
        <p>
          <strong>Sensação Térmica:</strong>
          {Number(temperatura?.feels_like).toFixed(1)}
        </p>
        <p>
          <strong>Umidade:</strong>
          {temperatura?.humidity}
        </p>
        <p>
          <strong>Pressão:</strong>
          {temperatura?.pressure}
        </p>
        <p>
          <strong>Temperatura:</strong>
          {temperatura?.temp}
        </p>
        <p>
          <strong>Mínima:</strong>
          {temperatura?.temp_min}
        </p>
        <p>
          <strong>Máxima:</strong>
          {temperatura?.temp_max}
        </p>
      </div>
      <div>
        <h1>Cidade</h1>
        <div>{String(cityName)}</div>
      </div>
    </div>
  );
}
