import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import logo from "../assets/logo.jpg";

function CustomNavBar({ city, handleChange, setCity }) {
  return (
    <>
      <Navbar bg="white">
        <Container>
          <div className="text-center">
            <Navbar.Brand href="#home">
              <img src={logo} alt="Logo" className="logo" width="70%" />
            </Navbar.Brand>
          </div>
          <form>
            <input
              type="text"
              placeholder="Search city"
              value={city}
              onChange={(event) => setCity(event.target.value)}
            />
            <button className="button" type="submit" onClick={handleChange}>
              Search
            </button>
          </form>
        </Container>
      </Navbar>
    </>
  );
}

export default CustomNavBar;
