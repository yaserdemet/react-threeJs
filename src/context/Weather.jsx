import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { useContext } from "react";
import { createContext } from "react";

export const WeatherContext = createContext();

export const useWeatherContext = () => {
  return useContext(WeatherContext);
};

const Weather = ({ children }) => {
  const [animationSequence, setAnimationSequence] = useState()
  const [searchText, setSearchText] = useState();
  const [error, setError] = useState(false);
  // ? üzerine cift tıkla ctrl cift space
  const [data, setData] = useState([]);

  const getData = async () => {
    let apiKey = process.env.REACT_APP_API_KEY;
    let units = "metric";
    let lang = "tr";

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchText}&appid=${apiKey}&units=${units}`;
    try {




      const response = await axios.get(url);
      if (response.status == 200) {
        const { main, name, sys, weather, id } = response.data;
        let iconUrl = `http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;

        setData([
           {
            name,
            sys,
            weather,
            id,
            iconUrl,
            main,
          },
          ...data,
        // ? burada gelen değerin öne yazması için eski datayı sona attık
        ]);
       
        
        //* buradaki islem kiritik. üst üste yazması için öncelikle array deki veriyi  spread ile açtım. daha sonra gelen verileri üstüne yazdım.
      }
    } catch (err) {
      setError(err);
    }
  };
  console.log(data);


  let animations = []
  switch (animationSequence) {
    case 'singapore':
      animations = [
        {
          coordinates: [1.3521, 103.8198],
          focusAnimationDuration: 3000,
          focusDistanceRadiusScale: 2,
          focusEasingFunction: ['Linear', 'None'],
        },
      ]
      break
    case 'world':
      animations = [
        {
          coordinates: [1.3521, 103.8198],
          focusAnimationDuration: 3000,
          focusDistanceRadiusScale: 2,
          focusEasingFunction: ['Linear', 'None'],
        },
        {
          coordinates: [39.9042, 116.4074],
          focusAnimationDuration: 3000,
          focusDistanceRadiusScale: 2,
          focusEasingFunction: ['Cubic', 'InOut'],
        },
        {
          coordinates: [37.773972, -122.431297],
          focusAnimationDuration: 3000,
          focusDistanceRadiusScale: 2,
          focusEasingFunction: ['Back', 'InOut'],
        },
        {
          coordinates: [40.73061, -73.935242],
          focusAnimationDuration: 3000,
          focusDistanceRadiusScale: 2,
          focusEasingFunction: ['Circular', 'InOut'],
        },
        {
          coordinates: [51.5074, 0.1278],
          focusAnimationDuration: 3000,
          focusDistanceRadiusScale: 2,
          focusEasingFunction: ['Quadratic', 'InOut'],
        },
        {
          coordinates: [1.3521, 103.8198],
          focusAnimationDuration: 5000,
          focusDistanceRadiusScale: 4,
          focusEasingFunction: ['Linear', 'None'],
        },
      ]
      break
    default:
      animations = []
    }

  return (
    <WeatherContext.Provider
      value={{
        searchText,
        setSearchText,
        getData,
        data,
        setData,
        setError,
        error,
        animations ,
        animationSequence,
        setAnimationSequence
      
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};

export default Weather;
