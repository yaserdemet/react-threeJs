import React, { useState } from "react";
import { useWeatherContext } from "../context/Weather";

const Main = () => {
    const {searchText , setSearchText , getData} =  useWeatherContext()
    // ? üzerine cift tıkla ctrl cift space


    const handleChange = (e) => {
        setSearchText(e.target.value)
    }

    const handleSubmit = (e) => {
            e.preventDefault()
            getData()
            setSearchText("")
    }

  return (
    <section className="main">
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} type="text" value={searchText} placeholder="Search for a city" autoFocus />
        <button type="submit">SUBMIT</button>
        <span className="msg"></span>
      </form>

      <div className="container">
        <ul className="cities">dawdwa</ul>
      </div>
    </section>
  );
};

export default Main;
