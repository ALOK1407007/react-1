import React from "react";
import { Component } from "react";
import Menu from "./Menu";
import Logo from "./Logo";
import './Nav.css'
class Nav extends Component{
     render(){
          return(
               <div class='nav-bar'>
                 <Logo/>
                 <Menu/> 
               </div>
          )
     }
}
export default Nav;