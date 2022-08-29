import axios from "axios";
import React from "react";
import { useState,useEffect } from "react";
import { useContext } from "react";
import { createContext } from "react";

export const WeatherContext = createContext();

export const useWeatherContext = () => {
  return useContext(WeatherContext);
};

const Weather = ({ children }) => {
  const [searchText, setSearchText] = useState();
  const [error , setError] = useState(false)
  // ? üzerine cift tıkla ctrl cift space
  const [data , setData] = useState([])

  let apiKey = process.env.REACT_APP_API_KEY;
  let units = "metric";
  let lang = "tr";
  let ur = `https://api.openweathermap.org/data/2.5/weather?q=${"ankara"}&appid=${apiKey}&units=${units}`
  const getData = async () => {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchText}&appid=${apiKey}&units=${units}`;
    try {
      const response = await axios.get(url);
      if (response.status == 200) {


        const { main, name, sys, weather , id} = response.data;
        let iconUrl = `http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;
       setData([...data  , {
        name, sys, weather , id , iconUrl , main
    }])

    //* buradaki islem kiritik. üst üste yazması için öncelikle array deki veriyi  spread ile açtım. daha sonra gelen verileri üstüne yazdım.
    
      }
      
    } catch (err){
          setError(err)
    }
  };
  console.log(data)


  return (
    <WeatherContext.Provider value={{ searchText, setSearchText, getData , data , setData, setError ,error }}>
      {children}
    </WeatherContext.Provider>
  );
};

export default Weather;
