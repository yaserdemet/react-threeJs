import React from 'react'

const WeatherCard = ({data}) => {
    const {sys , name ,  id, weather , iconUrl , main} = data
  return (
    <div>

<li className='city'>
    <h2 className='city-name'>
        <span>{name}</span>
        <sup>{sys.country}</sup>

    </h2>
    <div className='city-temp'>
    {Math.round(main.temp)}
    </div>

    <figure>
        <img src={iconUrl} className='city-icon' alt="" />
            <figcaption>
                {weather[0].description}
            </figcaption>
        </figure>  
</li>



    </div>
  )
}

export default WeatherCard