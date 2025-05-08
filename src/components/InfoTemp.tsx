import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function InfoTemp(props: {
  min: number;
  max: number;
  pressure: number;
  umid: number;
}) {
  const [isVisible, setIsVisible] = useState(true);
  const [showTemp, setShowTemp] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      // Primeiro some
      setIsVisible(false);

      // Depois de 1s (duração da animação), troca o conteúdo e volta a aparecer
      setTimeout(() => {
        setShowTemp((prev) => !prev);
        setIsVisible(true);
      }, 1000);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const tempMin = (
    <p className="container-temp-info">
      min. <span className="temp-info">{props.min} °C</span>
    </p>
  );

  const tempMax = (
    <p className="container-temp-info">
      max. <span className="temp-info">{props.max} °C</span>
    </p>
  );

  const pressure = (
    <p className="container-temp-info">
      pressao <span className="temp-info">{props.pressure} hPa</span>
    </p>
  );

  const humidity = (
    <p className="container-temp-info">
      umid. <span className="temp-info">{props.umid} %</span>
    </p>
  );

  return (
    <div className="h-10 md:h-20 w-[90%] md:w-[60%] bg-cyan-500/50 flex flex-row items-center justify-evenly rounded-xl text-white">
      <motion.div
        animate={{ opacity: isVisible ? 1 : 0 }}
        transition={{ duration: 1 }}
      >
        {showTemp ? tempMin : pressure}
      </motion.div>
      <motion.div
        animate={{ opacity: isVisible ? 1 : 0 }}
        transition={{ duration: 1 }}
      >
        {showTemp ? tempMax : humidity}
      </motion.div>
    </div>
  );
}
