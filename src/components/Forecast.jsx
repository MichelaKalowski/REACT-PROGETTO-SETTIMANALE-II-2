import { Card, Image } from "react-bootstrap";
import { Col, Row } from "react-bootstrap";
import { FaTemperatureLow } from "react-icons/fa";
import { TiWeatherPartlySunny } from "react-icons/ti";
import { WiHumidity } from "react-icons/wi";
import { FaCalendarDay } from "react-icons/fa";
import { WiTime2 } from "react-icons/wi";

function Forecast({ forecast }) {
  return (
    <>
      <Row>
        {forecast.map((f) => {
          return (
            <Col xs={12} sm={6} md={4} lg={3}>
              <Card
                style={{ margin: "10px", width: "15rem" }}
                className="card my-5 mx-3"
                key={f.id}
                width="50%"
              >
                <Image
                  src={`http://openweathermap.org/img/w/${f.weather[0].icon}.png?mode=png`}
                  alt="weather"
                  width="40%"
                />
                <Card.Body width="100%">
                  <Card.Text>
                    <p>
                      <strong className="strong">
                        Day: {new Date(f.dt_txt).toLocaleDateString("it-IT")}
                      </strong>
                      <FaCalendarDay
                        size="1.5em"
                        className="icons ms-4"
                        color="orange"
                      />
                    </p>
                    <p>
                      <strong className="strong">
                        Time: {new Date(f.dt_txt).toLocaleTimeString("it-IT")}
                      </strong>
                      <WiTime2
                        size="1.5em"
                        className="icons ms-4"
                        color="orange"
                      />
                    </p>
                    <p>
                      <TiWeatherPartlySunny
                        size="1em"
                        FactoryReloaded
                        className="icons me-2"
                      />
                      <span className="span">Weather: </span>
                      {f.weather[0].main}
                    </p>
                    <p>
                      <FaTemperatureLow size="1em" className="icons me-2" />
                      <span className="span">Temperature: </span>
                      {f.main.temp}°C
                    </p>

                    <p>
                      <WiHumidity size="1.5em" className="icons me-2" />
                      <span className="span">Umidity:</span> {f.main.humidity}%
                    </p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </>
  );
}
export default Forecast;
