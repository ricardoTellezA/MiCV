import * as React from "react"
import Layaut from "../layauts/Layaut"
import Profile from "../components/Profile"
import "./idex.scss"
import AboutMe from "../components/aboutMe"


const IndexPage = () => {
  return (
    <Layaut >
      <Profile />
      <AboutMe/>
      
    </Layaut>
  )
}

export default IndexPage
