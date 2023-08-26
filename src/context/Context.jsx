import axios from "axios";
import { createContext, useContext, useState } from "react";

const WeatherContext = createContext(null);

const WeatherProvider = ({ children }) => {
  const [icon, setIcon] = useState("");
  const [city, setCity] = useState(undefined);
  const [wind, setWind] = useState(undefined);
  const [tempC, setTempC] = useState(undefined);
  const [tempF, setTempF] = useState(undefined);
  const [country, setCountry] = useState(undefined);
  const [weather, setWeather] = useState(undefined);
  const [humidity, setHumidity] = useState(undefined);
  const [visibility, setVisibility] = useState(undefined);

  const fetchData = async (city) => {
    const apiCall = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=ad0f6189f33f625dbd41951a8ce620ba`
    );

    const data = await apiCall.data;
    // console.log("CON==>", data);

    setTempC(data.main.temp);
    setTempF(data.main.temp);
    setHumidity(data.main.humidity);
    setCity(data.name);
    setCountry(data.sys.country);
    setVisibility(data.visibility);
    setWind(data.wind.speed);
    setWeather(data.weather[0].main);

    switch (data.weather[0].main) {
      case "Clear":
        setIcon("CLEAR_DAY");
        break;
      case "Haze":
        setIcon("PARTLY_CLOUDY_DAY");
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
      case "Mist":
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
        city,
        wind,
        icon,
        tempC,
        tempF,
        weather,
        country,
        humidity,
        fetchData,
        visibility,
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
