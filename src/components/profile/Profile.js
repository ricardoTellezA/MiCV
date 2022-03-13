import React from "react"
import { Container, Row, Col, Image } from "react-bootstrap"
import profileImg from "../../images/yo2.png"
import Social from "./social/Social"
import "./profile.scss"

const data = [
  {
    title: "Edad: ",
    info: " 25 años",
  },

  {
    title: "Dirección: ",
    info: " Calle portal del agua mz. 6, Lote 3, casa #3, Chalco de Diaz covarrubias, Estado de México",
  },

  {
    title: "Correo: ",
    info: "rtellezalvrez@gmail.com"
  },
  {
    title: "Telefono: ",
    info: "+52 (55) 4548-8022"
  }
]

const Profile = () => {
  return (
    <div className="profile">
      <div className="wallpaper" />
      <div className="dark" />

      <Container className="box">
        <Row className="info">
          <Col xs={12} md={4}>
            <Image src={profileImg} fluid />
          </Col>

          <Col className="info__data" xs={12} md={8}>
            <span>!Hola!</span>
            <p>Ricardo Tellez Alvarez</p>
            <p>Front-End Developer</p>
            <hr />
            <div className="more-info">
              {/* <div className="item">
                <p>Telefono: </p>
                <p>+52 (55) 4548-8022</p>
              </div> */}

              {data.map((item, index) => (
                <div key={index} className="item">
                  <p> {item.title + " "} </p>
                  <p> {item.info}</p>
                </div>
              ))}
            </div>
          </Col>
        </Row>
        <Social /> 
      </Container>
    </div>
  )
}

export default Profile
