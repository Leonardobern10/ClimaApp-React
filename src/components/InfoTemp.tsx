import { useEffect, useState, type ReactElement } from 'react';
import startInfoTransitionInterval from '../effects/transitionInfo';
import InfoComponent from './InfoComponent';
import InfoDivAnimateTemp from './InfoDivTemp';

export default function InfoTemp(props: {
     min: number;
     max: number;
     pressure: number;
     umid: number;
}) {
     const [isVisible, setIsVisible] = useState(true);
     const [showTemp, setShowTemp] = useState(true);

     useEffect(() => {
          const interval: number = startInfoTransitionInterval(
               setIsVisible,
               setShowTemp
          );
          return () => clearInterval(interval);
     }, []);

     const tempMin: ReactElement = (
          <InfoComponent currentInfo="min." value={props.min} unity="°C" />
     );

     const tempMax: ReactElement = (
          <InfoComponent currentInfo="max." value={props.max} unity="°C" />
     );

     const pressure: ReactElement = (
          <InfoComponent
               currentInfo="pressão"
               value={props.pressure}
               unity="hPa"
          />
     );

     const humidity: ReactElement = (
          <InfoComponent currentInfo="umidade" value={props.umid} unity="%" />
     );

     return (
          <div className="h-10 md:h-20 w-[90%] md:w-[60%] bg-[#5593D6]/50 flex flex-row items-center justify-evenly rounded-xl text-white">
               <InfoDivAnimateTemp
                    isVisible={isVisible}
                    showTemp={showTemp}
                    value1={tempMin}
                    value2={pressure}
               />
               <InfoDivAnimateTemp
                    isVisible={isVisible}
                    showTemp={showTemp}
                    value1={tempMax}
                    value2={humidity}
               />
          </div>
     );
}
