import React from "react"
import Layaut from "../layauts/Layaut"
import ListSkills from "../components/ListSkills"
import { Container } from "react-bootstrap"
import {
  frontendSkills,
  frontendSkillsColors,
  backendSkills,
  backendSkillsColor,
  otrosSkills,
  otrosSkillsColor,
} from "../utils/skills"
import "./skills.scss"

export default function Index(){
  return (
    <Layaut menuColor={"#000"}>
      <Container className="skills">
        <div className="skills__block">
          <h2>Frontend</h2>
          <ListSkills skills={frontendSkills} colors={frontendSkillsColors} />
        </div>

        <div className="skills__block">
          <h2>Backend</h2>
          <ListSkills skills={backendSkills} colors={backendSkillsColor} />
        </div>

        <div className="skills__block">
          <h2>Otros</h2>
          <ListSkills skills={otrosSkills} colors={otrosSkillsColor} />
        </div>
      </Container>
    </Layaut>
  )
}

