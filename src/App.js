import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React, { useState, useEffect } from 'react';
import SearchCity from './components/SearchCity';
import Forecast from './components/Forecast';

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
       }
    }
  };
  useEffect(() => {
    handleChange();
  }, [city]);
  return (
    <div>
      <h1 className="text-center mt-5">Weather Forecast</h1>
      <SearchCity
        city={city}
        handleChange={handleChange}
        setCity={setCity}
      />
      {forecast && <Forecast forecast={forecast} />}
      
    </div>
     
  );
}
export default App;
