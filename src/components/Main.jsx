import React, { useEffect, useState } from "react";
import { useWeatherContext } from "../context/Weather";
import WeatherCard from "./WeatherCard";
//* import Input from '@mui/material/Input';
//* or
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import main from "../styles/main.scss";
import { useRef } from "react";
import { useNavigate, Navigate } from "react-router";


const Main = () => {
  const navigate = useNavigate();
  const ref = useRef();

  const { searchText, setSearchText, getData, data, setData, error, setError } =
    useWeatherContext();
  // ? üzerine cift tıkla ctrl cift space

  const handleChange = (e) => {
    setSearchText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getData();
    setSearchText("");
    //! bunun çalışması için inputun value değerine state değerini ata
  };
  // ? value state ile kontrol ediliyorsa kontrollü komponenttir.

  useEffect(() => {
    ref.current.focus();
  }, []);

  return (
    <section className="main">
      {error ? (
        <Navigate to="error" />
      ) : (
        <>
          <form onSubmit={handleSubmit}>
            <TextField
              id="outlined-basic"
              autoFocus
              sx={{ color: "white" }}
              onChange={handleChange}
              value={searchText}
              label="City"
              variant="outlined"
              ref={ref}
            />
            <Button
              variant="outlined"
              color="warning"
              type="submit"
              sx={{ color: "white" }}
            >
              SUBMIT
            </Button>
            <span className="msg"></span>
          </form>

          <div className="container main-card">
            {data &&
              data?.map((item, index) => {
                return <WeatherCard key={index} data={item} />;
              })}
          </div>
        </>
      )}
    </section>
  );
};

export default Main;
