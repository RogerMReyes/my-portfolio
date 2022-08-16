import React, {Component} from "react";
import {Navbar, NavItem} from "react-bootstrap";
import {Link} from "react-router-dom";


class Header extends Component{
    render() {
        return(
            <Navbar>
                <div className="navGroup" style={{display: "flex", position: 'absolute', top: 10, right: 10}}>
                    <NavItem style={{marginRight: "1em"}}><Link to="/" className="nav-link">Home</Link></NavItem>
                    <NavItem><Link to="/AboutMe" className="nav-link">About Me</Link></NavItem>
                </div>
            </Navbar>
        );
    }
}
export default Header;