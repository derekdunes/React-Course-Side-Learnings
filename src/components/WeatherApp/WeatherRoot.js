import { useState, useCallback, useEffect } from 'react';
import WeatherQuery from "./WeatherQuery";
import WeatherList from "./WeatherList/WeatherList";
import './WeatherRoot.css';

const sampleData = [{"coord":{"lon":7.4943,"lat":6.4402},"weather":[{"id":721,"main":"Haze","description":"haze","icon":"50n"}],"base":"stations","main":{"temp":23.66,"feels_like":23.15,"temp_min":23.66,"temp_max":23.66,"pressure":1010,"humidity":41},"visibility":3000,"wind":{"speed":2.06,"deg":240},"clouds":{"all":9},"dt":1643228273,"sys":{"type":1,"id":1157,"country":"NG","sunrise":1643176058,"sunset":1643218629},"timezone":3600,"id":2343279,"name":"Enugu","cod":200}] 

const Weather = () => {
    const [cityQuery, setCityQuery] = useState('');
    const [weatherData, setWeatherData] = useState([]);
    const [hasError, setHasError] = useState(false);

    const apiKey = "4d8fb5b93d4af21d66a2948710284366";

    const fetchWeatherHandler = (city) => {

        if(city === ''){
            return;
        }
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        
        fetch(url)
        .then(response => response.json())
        .then(data => {
            setHasError(false);
            const newArray = [...weatherData, data];
            setWeatherData(newArray);
    
        })
        .catch(() => {
          //setError to true
          setHasError(true);
        });
    };

    useEffect(() => {
        fetchWeatherHandler(cityQuery);
    }, [cityQuery]);

    const setQuery = (queryString) => {
        setCityQuery(queryString);
    }

    return (
        <>
            <WeatherQuery fetchData={fetchWeatherHandler} hasError={hasError} />
            <WeatherList weatherList={weatherData}/>
        </>
    );
}

export default Weather;