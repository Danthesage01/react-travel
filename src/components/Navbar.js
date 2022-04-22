import React from "react";
import path from "../images/Path.png"

export default function Navbar(){
return (
  <nav className="nav">
    <img src={path} alt="" className="nav-logo"/>
    <h4 className="nav-title">My Travel Journal</h4>
  </nav>
)

}