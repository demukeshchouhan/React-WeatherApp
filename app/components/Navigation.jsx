import React, {Component} from "react";
import {Navbar, Nav, NavItem, MenuItem} from "react-bootstrap";
import {Link, IndexLink} from "react-router";
export default class Navigation extends Component {
	render(){
		return(
			<Navbar inverse>
			<Navbar.Header>
				<Navbar.Brand>React-es6</Navbar.Brand>
				<Navbar.Toggle />
			</Navbar.Header>
			<Navbar.Collapse>
				<ul className="nav navbar-nav">
						<li>
							<IndexLink to="/"
										activeClassName="active">Home</IndexLink>
						</li>
						<li>
							<Link to="/about"
										activeClassName="active">About</Link>
						</li>
						<li>
							<Link to="/example"
										activeClassName="active">Example</Link>
						</li>
				</ul>
			</Navbar.Collapse>
			</Navbar>
		);
	}
}
