import DiaSemana from '../../src/model/DiaSemana';
import { useEffect, useState, type ReactElement } from 'react';
import { IoThunderstormOutline } from 'react-icons/io5';
import { WiDaySunny, WiHail, WiRainMix, WiCloudy } from 'react-icons/wi';
import { FaRegSnowflake } from 'react-icons/fa';
import { WiFog } from 'react-icons/wi';
import liveClock from '../effects/liveClock';
import DisplayDateInfo from './DisplayDateInfo';

export default function Display(props: {
     local: string;
     condition: string;
     temp: number;
     sensation: number;
     conditionMain: string;
}): ReactElement {
     const [data, setData] = useState<Date>(new Date());

     const componentMap: Record<string, ReactElement> = {
          Thunderstorm: <IoThunderstormOutline className="icon-style" />,
          Drizzle: <WiRainMix className="icon-style" />,
          Rain: <WiHail className="icon-style" />,
          Snow: <FaRegSnowflake className="icon-style" />,
          Clear: <WiDaySunny className="icon-style" />,
          Clouds: <WiCloudy className="icon-style" />
     };

     useEffect(() => {
          const timer: number = liveClock(setData);
          return () => clearInterval(timer);
     }, []);

     return (
          <div className="flex flex-col items-center justify-evenly bg-[#D4ECF2]/50 w-[90%] md:w-[60%] h-50 md:h-70 rounded-xl text-white">
               <div className="container-display w-[90%] font-light">
                    <div>
                         {props.local ? (
                              <DisplayDateInfo
                                   data={props.local}
                                   dateInfo={data.toLocaleDateString()}
                              />
                         ) : (
                              'Carregando...'
                         )}
                    </div>
                    <div>
                         <DisplayDateInfo
                              data={DiaSemana[data.getDay()]}
                              dateInfo={data.toLocaleTimeString('pt-BR')}
                         />
                    </div>
               </div>
               <div className="flex flex-row justify-between items-center container-display h-[50%]">
                    <div className="h-full flex flex-col items-center justify-between">
                         <div className="h-30 md:h-full">
                              {componentMap[props.conditionMain] || (
                                   <WiFog className="icon-style" />
                              )}
                         </div>
                         <div className="description">
                              {props.condition ? (
                                   <p>{props.condition}</p>
                              ) : (
                                   'Carregando...'
                              )}
                         </div>
                    </div>
                    <div className="h-full flex flex-col items-center justify-between">
                         <div className="h-25 md:h-[60%] w-full pt-4">
                              {props.temp ? (
                                   <p className="text-5xl md:text-7xl text-white">
                                        {Number(props.temp).toFixed(1)}
                                        <span className="text-2xl">°c</span>
                                   </p>
                              ) : (
                                   'Carregando...'
                              )}
                         </div>
                         <div className="description ">
                              <p className="text-center">
                                   sensação térmica
                                   {props.sensation ? (
                                        <span className="font-bold">
                                             {' '}
                                             {Number(props.sensation).toFixed(
                                                  1
                                             )}
                                             °C
                                        </span>
                                   ) : (
                                        'carregando...'
                                   )}
                              </p>
                         </div>
                    </div>
               </div>
          </div>
     );
}
