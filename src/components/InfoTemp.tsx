import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import startInfoTransitionInterval from '../effects/transitionInfo';
import InfoComponent from './InfoComponent';

export default function InfoTemp(props: {
     min: number;
     max: number;
     pressure: number;
     umid: number;
}) {
     const [isVisible, setIsVisible] = useState(true);
     const [showTemp, setShowTemp] = useState(true);

     useEffect(() => {
          const interval = startInfoTransitionInterval(
               setIsVisible,
               setShowTemp
          );
          return () => clearInterval(interval);
     }, []);

     const tempMin = (
          <InfoComponent currentInfo="min." value={props.min} unity="°C" />
     );

     const tempMax = (
          <InfoComponent currentInfo="max." value={props.max} unity="°C" />
     );

     const pressure = (
          <InfoComponent
               currentInfo="pressão"
               value={props.pressure}
               unity="hPa"
          />
     );

     const humidity = (
          <InfoComponent currentInfo="umidade" value={props.umid} unity="%" />
     );

     return (
          <div className="h-10 md:h-20 w-[90%] md:w-[60%] bg-cyan-500/50 flex flex-row items-center justify-evenly rounded-xl text-white">
               <motion.div
                    animate={{ opacity: isVisible ? 1 : 0 }}
                    transition={{ duration: 1 }}>
                    {showTemp ? tempMin : pressure}
               </motion.div>
               <motion.div
                    animate={{ opacity: isVisible ? 1 : 0 }}
                    transition={{ duration: 1 }}>
                    {showTemp ? tempMax : humidity}
               </motion.div>
          </div>
     );
}
