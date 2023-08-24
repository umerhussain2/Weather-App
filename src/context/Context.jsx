import { createContext, useContext, useState } from "react";
import API from "../API";
import axios from "axios";

const WeatherContext = createContext(null);

const WeatherProvider = ({ children }) => {
  const [city, setCity] = useState(undefined);
  const [wind, setWind] = useState(undefined);
  const [icon, setIcon] = useState("CLEAR_DAY");
  const [country, setCountry] = useState(undefined);
  const [weather, setWeather] = useState(undefined);
  const [humidity, setHumidity] = useState(undefined);
  const [latitude, setLatitude] = useState(undefined);
  const [longitude, setLongitude] = useState(undefined);
  const [visibility, setVisibility] = useState(undefined);
  const [temperatureC, setTemperatureC] = useState(undefined);
  const [temperatureF, setTemperatureF] = useState(undefined);

  const getCurrentLocation = async (lat, lon) => {
    const api_call = await axios.get(
      `${API.base}lat=${lat}&lon=${lon}&appid=${API.key}`
    );

    const data = api_call.data;
    console.log("CONTEXT", data);

    setCity(data.name);
    setCountry(data.sys.country);
    setTemperatureC(data.main.temp);
    setTemperatureF(data.main.temp);
    setWeather(data.weather[0].main);
  };

  const getIcon = (w) => {
    switch (w) {
      case "Haze":
        setIcon("CLEAR_DAY");
        break;
      case "Clouds":
        setIcon("CLOUDY");
        break;
      case "Rain":
        setIcon("RAIN");
        break;
      case "Snow":
        setIcon("SNOW");
        break;
      case "Dust":
        setIcon("WIND");
        break;
      case "Drizzle":
        setIcon("SLEET");
        break;
      case "Fog":
        setIcon("FOG");
        break;
      case "Smoke":
        setIcon("FOG");
        break;
      case "Tornado":
        setIcon("WIND");
        break;
      default:
        setIcon("CLEAR_DAY");
    }
  };

  return (
    <WeatherContext.Provider
      value={{
        wind,
        icon,
        city,
        country,
        weather,
        getIcon,
        humidity,
        visibility,
        temperatureF,
        temperatureC,
        getCurrentLocation,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};

const useWeather = () => {
  return useContext(WeatherContext);
};

export { WeatherProvider, useWeather };
