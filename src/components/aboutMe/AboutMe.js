import React from "react"
import "./AboutMe.scss"
import { Container, Button } from "react-bootstrap"
// import CV from "../../images/pdf-test.pdf"
const AboutMe = () => {
  return (
    <Container className="about-me">
      <p>
        ¡Hola! Mi nombre es Ricardo Téllez Álvarez, soy un amante por la
        tecnología y me encanta crearla. Llevo alrededor de 3 años en esto del
        desarrollo web, siempre busco estar aprendiendo nuevas cosas y trato de
        siempre estar actualizado, soy 100% autodidacta y estoy dispuesto
        aprender cualquier tecnología que se me sea requerida.
      </p>

      <hr />
      {/* <a href={CV} target="_blank">
        <Button primary>Descargar CV</Button>
      </a> */}
    </Container>
  )
}

export default AboutMe
