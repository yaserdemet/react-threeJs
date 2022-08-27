import React, { useState } from "react";
import { useWeatherContext } from "../context/Weather";
import WeatherCard from "./WeatherCard";

const Main = () => {
    const {searchText , setSearchText , getData , data , setData} =  useWeatherContext()
    // ? üzerine cift tıkla ctrl cift space


    const handleChange = (e) => {
        setSearchText(e.target.value)
    }

    const handleSubmit = (e) => {
            e.preventDefault()
            getData()
            setSearchText("")
            //! bunun çalışması için inputun value değerine state değerini ata
    }
// ? value state ile kontrol ediliyorsa kontrollü komponenttir.
  return (
    <section className="main">
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} type="text" value={searchText} placeholder="Search for a city" autoFocus />
        <button type="submit">SUBMIT</button>
        <span className="msg"></span>
      </form>

      <div className="container">
        <ul className="cities">


     {
      data && data?.map((item , index) => {
        return <WeatherCard key={index} data={item} />
      })
     }

        </ul>
      </div>
    </section>
  );
};

export default Main;
