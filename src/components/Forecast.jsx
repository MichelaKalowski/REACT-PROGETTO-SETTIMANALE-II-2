import { Card, Image } from "react-bootstrap";

function Forecast({ forecast }) {
  return (
    <>
      <h3>Today</h3>
      {forecast.map((f) => {
        return (
          <Card style={{ width: "18rem" }} className="mt-5 mx-3" key={f.id}>
            <Image
              src={`http://openweathermap.org/img/w/${f.weather[0].icon}.png?mode=png`}
              alt="weather"
              width="20%"
            />
            <Card.Body width="20%">
              <Card.Title>Weather Forecast</Card.Title>
              <Card.Text>
                <p>Temperature: {f.main.temp}°C</p>
                <p>Umidity: {f.main.humidity}%</p>
                <p>Weather: {f.weather[0].main}</p>
              </Card.Text>
            </Card.Body>
          </Card>
        );
      })}
    </>
  );
}
export default Forecast;
