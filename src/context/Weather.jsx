import axios from "axios";
import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { createContext } from "react";

export const WeatherContext = createContext();

export const useWeatherContext = () => {
  return useContext(WeatherContext);
};

const Weather = ({ children }) => {
  const [searchText, setSearchText] = useState();
  const [data , setData] = useState([])
  // ? üzerine cift tıkla ctrl cift space

  const getData = async () => {
    let apiKey = process.env.REACT_APP_API_KEY;
    let units = "metric";
    let lang = "tr";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchText}&appid=${apiKey}&units=${units}`;

    try {
      const response = await axios.get(url);
      if (response.status == 200) {


        const { main, name, sys, weather , id} = response.data;
        let iconUrl = `http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;
       setData([...data  , {
        name, sys, weather , id , iconUrl , main
    }])
    
      }
      
    } catch (err){
      console.log(err);
    }
  };
  console.log(data)
  return (
    <WeatherContext.Provider value={{ searchText, setSearchText, getData , data , setData }}>
      {children}
    </WeatherContext.Provider>
  );
};

export default Weather;
