import WeatherListItem from "./WeatherListItem";

const WeatherList = (props) => {

    const weatherListItem = props.weatherList.length !== 0 ? props.weatherList.map((data, key) => {
        
        const { main, name, sys, weather } = data;

        return (<WeatherListItem
            key={key}
            name={name}
            country={sys.country}
            temp={main.temp}
            description={weather[0]["description"]}
            icon={weather[0]["icon"]}
        />);
    }) : '';

    return (
        <section className="ajax-section">
        <div className="container">
          <ul className="cities">
              {weatherListItem}
          </ul>
        </div>
      </section>
    )

}

export default WeatherList;