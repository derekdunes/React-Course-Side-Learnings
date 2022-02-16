const WeatherListItem = (props) => {

    const icon = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${props.icon}.svg`;

    return (
        <li className="city">
            <h2 className="city-name" data-name={`${props.name},${props.country}`}>
            <span>{props.name}</span>
            <sup>{props.country}</sup>
            </h2>
            <div className="city-temp">{Math.round(props.temp)}<sup>°C</sup></div>
            <figure>
            <img className="city-icon" src={icon} alt={props.description}/>
            <figcaption>{props.description}</figcaption>
            </figure>
      
        </li>
    )

}

export default WeatherListItem;