import React from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import { createContext } from 'react'


export const WeatherContext = createContext()

export const  useWeatherContext = () => {
    return useContext(WeatherContext)
}



const Weather = ({children}) => {
    const [searchText , setSearchText] = useState()
    // ? üzerine cift tıkla ctrl cift space

    const getData = async () => {
        let apiKey = process.env.REACT_APP_API_KEY
        let units = 'metric';
        let lang = 'tr';
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchText}&appid=${apiKey}&units=${units}`;

        try {
            
        }
    }


  return (
    <WeatherContext.Provider value={{searchText, setSearchText}}>

        {children}

    </WeatherContext.Provider>
  )
}

export default Weather