import axios from 'axios';

const lat = -22.759785;
const lon = -43.451511;
const apiKey = import.meta.env.VITE_API_KEY;

const getForecast = async () => {
     try {
          const response = await axios.get(
               `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&lang=pt_br&units=metric`
          );
          console.log(response.data);
     } catch (error) {
          console.error(error);
     }
};

export default getForecast;
