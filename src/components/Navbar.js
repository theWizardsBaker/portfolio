import React from 'react';
import { NavLink } from "react-router-dom";

export default class Navbar extends React.Component {

  static defaultProps = {
    routes: []
  };

  render() {
    return (
      <nav className="navbar is-transparent">
        <div className="navbar-end">
            {
              this.props.routes.map((route, index) => {
                  if(route.show == false){
                    return null
                  }
                  return  <NavLink key={index}
                                   to={route.path}
                                   activeClassName="is-active"
                                   className="navbar-item"
                                   exact>
                    {route.name}
                  </NavLink>
              })
            }
        </div>
      </nav>
    );
  }

}
