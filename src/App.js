
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React, { useState, useEffect } from 'react';

import Forecast from './components/Forecast';
import CustomNavBar from "./components/CustomNavBar";
import CustomFooter from "./components/CustomFooter";
import earth from "../src/assets/earth.png";

function App() {

  const [city, setCity] = useState("");
  const [forecast, setForecast] = useState(null);
  const [error, setError] = useState(false);
  const handleChange = async (event) => {
    event.preventDefault();
    if (city !== "") {
      try {

        const response = await fetch("http://api.openweathermap.org/data/2.5/forecast?q=" + city + "&APPID=a9eb23f6cf3ae4647ddef300a14f4587");
        const data = await response.json();
        setForecast(data.list);
        setError(false);
      }  catch (err) {
        console.log("error")
        setError(true);
       }
    }
  };
  useEffect(() => {
    handleChange();
  }, [city]);
  return (
    <div>
        <CustomNavBar
          city={city}
          handleChange={handleChange}
          setCity={setCity}
        />
{forecast ? <Forecast forecast={forecast} /> : forecast === null && error ? <h2 className="text-center">Error 404 Not Found</h2> : forecast === null && !error ? <>
<h2 className='text-center mt-5' style={{marginTop:"60px"}}><strong className="strong2 mt-5">Welcome! </strong><br /> You choose the city, we give you the weather forecast for the next five days.</h2>
<div className="text-center mt-5">
<img src={earth} style={{width: "20%"}} alt="earth" className='text-center'/>
</div>
</> : null}
     <CustomFooter/> 
    </div>
     
  );
}
export default App;
