import {useEffect } from 'react';
import ClockNumber from "./ClockNumber";
import './Clock.css';

const numbers = [1,2,3,4,5,6,7,8,9,10,11,12];

const clockRotating = () => {
    let secondHand=document.querySelector("#sec");  
    let minHand=document.querySelector("#min");
    let hourHand=document.querySelector("#hr") ;

    var date = new Date();
    var getSeconds = date.getSeconds()/60;
    var getMinutes = date.getMinutes()/60;
    var getHours = date.getHours()/12;

    secondHand.style.transform="rotate("+getSeconds*360 + "deg)";  
    minHand.style.transform="rotate("+getMinutes*360 + "deg)";  
    hourHand.style.transform="rotate("+getHours*360 + "deg)";

    document.querySelector(".current-day").innerHTML=date.toDateString()  
    document.querySelector(".current-seconds").innerHTML=date.getSeconds()
}

const Clock = () => {

    const clockNumber = numbers.map((value) => {
        return <ClockNumber key={value} num={value}/>
    });

    useEffect(() => {
        
        const interval = setInterval(clockRotating, 1000);

        return () => {
            console.log(interval);
            clearInterval(interval);
        }

    }, []);

    return (<div className="clock-container">
        <div className="current-day">

        </div>
        <div className="current-seconds">
            
        </div>
        <div className="current-seconds"></div>
        
        {clockNumber}
        
        <div className="clock-hand" id="sec">
            <div className="second-hand"></div>
        </div>
        <div className="clock-hand" id="min">
            <div className="minute-hand"></div>
        </div>
        <div className="clock-hand" id="hr">
            <div className="hour-hand"></div>
        </div>
    </div>
    )

}

export default Clock;