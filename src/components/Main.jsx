import React, { useState } from "react";
import { useWeatherContext } from "../context/Weather";

const Main = () => {
    const {searchText , setSearchText} =  useWeatherContext()
    // ? üzerine cift tıkla ctrl cift space


    const handleChange = (e) => {
        setSearchText(e.target.value)
    }

  return (
    <section className="main">
      <form>
        <input onChange={handleChange} type="text" placeholder="Search for a city" autoFocus />
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
