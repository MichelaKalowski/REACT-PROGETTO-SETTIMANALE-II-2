import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTumblr } from "react-icons/fa";

function CustomFooter() {
  return (
    <>
      <Container fluid className="footer-container">
        <Row>
          <Col xs={12} className="text-center">
            <FaFacebookF size="1em" className="icons-footer mx-3" />
            <FaTwitter size="1em" className="icons-footer mx-3" />
            <FaInstagram size="1em" className="icons-footer mx-3" />
            <FaLinkedinIn size="1em" className="icons-footer mx-3" />
            <FaTumblr size="1em" className="icons-footer mx-3" />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default CustomFooter;
