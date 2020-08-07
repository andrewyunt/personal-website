import React, {Component} from 'react';
import './Navigation.css';

import {
    Navbar,
    Nav,
    NavItem,
    NavLink,
    NavbarBrand,
  } from 'reactstrap';

class Navigation extends Component {
    constructor(props) {
        super(props);
        this.state = {navbarClasses: "invisible-nav"};

        let body = document.getElementsByTagName("BODY")[0];
        body.onscroll = () => {
            if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
                this.setState({
                    navbarClasses: "navbar visible-nav"
                });
            } else {
                this.setState({
                    navbarClasses: "navbar invisible-nav"
                });
            }
        };
    }
    
    render() {
        return (
            <div>
                <Navbar className={this.state.navbarClasses} fixed="top" expand="md">
                    <NavbarBrand href="#">Andrew Yunt</NavbarBrand>
                    <Nav className="mr-auto">
                        <NavItem>
                            <NavLink href="#">Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#">Portfolio</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#">Blog</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#">Contact</NavLink>
                        </NavItem>
                    </Nav>
                </Navbar>
            </div>
        )
    }
}



export default Navigation;