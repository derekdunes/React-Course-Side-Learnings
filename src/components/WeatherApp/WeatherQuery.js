import { useState } from "react";

const WeatherQuery = (props) => {

    const [city, setCity] = useState('');

    const formSubmitHandler = (event) => {
        event.preventDefault();

        props.fetchData(city);

        setCity('');
    }

    const changeCityHandler = (event) => {
        setCity(event.target.value);
    }

    return (
        <section className="top-banner">
            <div className="container">
                <h1 className="heading">Simple Weather App</h1>
                <form onSubmit={formSubmitHandler}>
                <input type="text" placeholder="Search for a city" onChange={changeCityHandler} value={city} autoFocus/>
                <button type="submit">SUBMIT</button>
                {props.hasError && <span className="msg">"Please search for a valid city 😩"</span>}
                </form>
            </div>
        </section>
    );
}

export default WeatherQuery;