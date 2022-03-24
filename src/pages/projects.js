import React from "react"
import Layaut from "../layauts/Layaut"
import { Container, Row, Col, Card, Button } from "react-bootstrap"
import projects from "../utils/projects"
import "./proyect.scss"

const Projects = () => {
  return (
    <Layaut menuColor={"#000"}>
      <Container className="projects">
        <h1>Proyectos</h1>

        <Row>
          {projects.map((project, index) => (
            <Col xs={12} sm={4} className="project">
              <Card>
                <div className="image" style={{background: `url("${project.image}")`, backgroundSize: "cover"}}></div>

                <Card.Body>
                  <Card.Title>{project.title}</Card.Title>
                  <Card.Text>{project.description}</Card.Text>
                  <a href={project.url} target="_blank">
                    <Button variant="primary">Ver PROYECTO</Button>
                  </a>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </Layaut>
  )
}

export default Projects
