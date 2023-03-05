import React from "react";
import { Component } from "react";
import './Menu.css'
class Menu extends Component{
	render(){
		return(
			<>
			  <div className="menu-bar">
			   <ul>
				<li>
					<a href="#"><i class="fa fa-home" aria-hidden="true"></i>Home</a>
				</li>
				<li>
					<a href="#"><i class="fa fa-sign-in" aria-hidden="true"></i>Login</a>
				</li>
				<li>
					<a href="#">SignUp</a>
				</li>
				<li>
					<a href="#">About</a>
				</li>
			    </ul>
			  </div>
			</>
		)
	}
}
export default Menu;