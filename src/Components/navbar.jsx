import React, { Component } from 'react'

class NavBar extends Component {
    state = {  }
    render() { 
        return ( <React.Fragment>
           
            <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand" href="#">
                Total <span className="badge badge-secondary badge-capsule">{this.props.len} </span> Items
            </a>
            </nav>
        </React.Fragment> );
    }
}
 
export default NavBar;