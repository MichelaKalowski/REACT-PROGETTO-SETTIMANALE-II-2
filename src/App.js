
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React, { useState, useEffect } from 'react';

import Forecast from './components/Forecast';
import CustomNavBar from "./components/CustomNavBar";

function App() {

  const [city, setCity] = useState("");
  const [forecast, setForecast] = useState(null);
  const handleChange = async (event) => {
    event.preventDefault();
    if (city !== "") {
      try {

        const response = await fetch("http://api.openweathermap.org/data/2.5/forecast?q=" + city + "&APPID=a9eb23f6cf3ae4647ddef300a14f4587");
        const data = await response.json();
        setForecast(data.list);
      }  catch (err) {
        console.log("error")
        setForecast(null);
       }
    }
  };
  useEffect(() => {
    handleChange();
  }, [city]);
  return (
    <div>
        <CustomNavBar className="navBar"
          city={city}
          handleChange={handleChange}
          setCity={setCity}
        />
      {forecast ? <Forecast forecast={forecast} /> : <h2 className='text-center mt-5'>Error 404 Not Found</h2>}
      
    </div>
     
  );
}
export default App;