import * as React from "react"
import Layaut from "../layauts/Layaut"
import Profile from "../components/Profile"
import "./idex.scss"


const IndexPage = () => {
  return (
    <Layaut >
      <Profile />
      <h1 className="title">HOME</h1>
      
    </Layaut>
  )
}

export default IndexPage
