import React from 'react';
import { NavLink } from "react-router-dom";

export default class Navbar extends React.Component {

	static defaultProps = {
		routes: []
	};

  render() {
    return (
      <nav className="navbar is-transparent is-dark">
	      <div className="navbar-end">
			      {
			        this.props.routes.map((route, index) => {
			            return  <NavLink key={index} 
			            								 to={route.path} 
			            								 activeClassName="active" 
			            								 className="navbar-item">
			            	{route.name}
			            </NavLink>
			        })
			      }
		    </div>
      </nav>
    );
  }

}
