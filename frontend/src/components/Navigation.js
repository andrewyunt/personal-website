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
			<Navbar className={this.state.navbarClasses} fixed="top" expand="md">
				<div class="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">
					<a class="navbar-brand text-left" href="#">
						Andrew Yunt
					</a>
					<button class="navbar-toggler" type="button" data-toggle="collapse" data-target=".dual-collapse2">
						<span class="navbar-toggler-icon"></span>
					</button>
				</div>
				<div class="mx-auto order-0">
					<ul class="navbar-nav mr-auto">
						<li class="nav-item active">
							<a class="nav-link" href="#">
								Home
							</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="#">
								Portfolio
							</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="#">
								Blog
							</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="#">
								Contact
							</a>
						</li>
					</ul>
				</div>
				<div class="navbar-collapse collapse w-100 order-3 dual-collapse2">
					<ul class="navbar-nav ml-auto">
						<li class="nav-item">
							<a class="nav-link" href="#">LinkedIn</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="#">GitHub</a>
						</li>
					</ul>
				</div>
			</Navbar>
		)
	}
}



export default Navigation;