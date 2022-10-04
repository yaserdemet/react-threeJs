import axios from 'axios';
import React, {useState} from 'react'

const useForecast = (searchText) => {

    const [data, setData] = useState([]);
    const [error, setError] = useState(false);


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

  const values = {
    getData , setData , error , setError
  }

        return [data, values]

 
}

export default useForecast