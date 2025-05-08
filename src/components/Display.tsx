import DiaSemana from "../../src/model/DiaSemana";
import { useEffect, useState, type ReactElement } from "react";
import { IoThunderstormOutline } from "react-icons/io5";
import { WiCloud, WiDaySunny, WiHail, WiRainMix } from "react-icons/wi";
import { FaRegSnowflake } from "react-icons/fa";

export default function Display(props: {
  local: string;
  condition: string;
  temp: number;
  sensation: number;
  conditionMain: string;
}): ReactElement {
  const data: Date = new Date();
  const [time, setTime] = useState<Date>(new Date());
  const componentMap: Record<string, ReactElement> = {
    Thunderstorm: <IoThunderstormOutline className="icon-style" />,
    Drizzle: <WiRainMix className="icon-style" />,
    Rain: <WiHail className="icon-style" />,
    Snow: <FaRegSnowflake className="icon-style" />,
    Clear: <WiDaySunny className="icon-style" />,
    Clouds: <WiCloud className="icon-style" />,
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);
  return (
    <div className="flex flex-col items-center justify-around bg-[#D4ECF2]/50 w-[90%] md:w-[60%] h-50 md:h-70 rounded-xl text-white/70 shadow-2xl">
      <div className="container-display w-[90%] font-light">
        <div>
          {props.local ? (
            <p className="description">
              {props.local},{" "}
              <span className="font-bold text-xs md:text-xl">
                {data.toLocaleDateString()}
              </span>
            </p>
          ) : (
            "Carregando..."
          )}
        </div>
        <div>
          <p className="description">
            {DiaSemana[data.getDay()]},{" "}
            <span className="font-bold text-xs md:text-xl">
              {time.toLocaleTimeString("pt-BR")}
            </span>
          </p>
        </div>
      </div>
      <div className="container-display h-[50%]">
        <div className="h-full flex flex-col items-center justify-between">
          <div className="h-[70%] md:h-full">
            {componentMap[props.conditionMain] || (
              <div>Erro ao carregar ícone</div>
            )}
          </div>
          <div className="description">
            {props.condition ? <p>{props.condition}</p> : "Carregando..."}
          </div>
        </div>
        <div className="h-full flex flex-col items-center justify-between ">
          <div className="h-[60%] md:h-[60%] w-full p-2">
            {props.temp ? (
              <p className="text-5xl md:text-7xl text-white/70">
                {Number(props.temp).toFixed(1)}
                <span className="text-2xl">°c</span>
              </p>
            ) : (
              "Carregando..."
            )}
          </div>
          <div className="description ">
            <p className="text-center">
              Sensação
              {props.sensation ? (
                <span className="font-bold">
                  {" "}
                  {Number(props.sensation).toFixed(1)}°C
                </span>
              ) : (
                "carregando..."
              )}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
