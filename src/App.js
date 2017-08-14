import React, { Component } from 'react';
import { withRouter, Link} from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';
import Routes from './Routes';

import RouteNavItem  from './components/RouteNavItem';
import Clock from './clock';

class App extends Component {
  constructor(props) {
    super(props);
  }

  getName(surname){
    return "Maimit " + surname + "!!";
  }

	handleClick(e){
		e.preventDefault();
		this.props.history.push(e.currentTarget.getAttributes('href'));
	}

  render() {
    return (
      <div className="App container">
				<Navbar fluid>
					<Navbar.Header>
						<Navbar.Brand>
							<Link to="/">Home</Link>
						</Navbar.Brand>
						<Navbar.Toggle />
					</Navbar.Header>
					<Navbar.Collapse>
						<Nav pullRight>
							<RouteNavItem onClink={this.handleClick.bind(this)} href="/comments">Commemts</RouteNavItem>
							<RouteNavItem onClink={this.handleClick.bind(this)} href="/contact">ContactUs</RouteNavItem>
						</Nav>
					</Navbar.Collapse>
				</Navbar>
				<Clock />
				<div className="clearfix"></div>
				<Routes />
				<br></br><hr />
				<footer>
					Created By: {formatName(user)}
				</footer>
      </div>
    );
  }
}

function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

const user = {
  firstName: 'Maimit',
  lastName: 'Patel'
};

const comment = {
	date: new Date(),
	text: "This is my first comment",
	author: {
		fName: "Chintu",
		lName: "Patel",
		avatarUrl: "http://placekitten.com/g/64/64"
	}
};

// function tick(){
// 	const element = (
// 		<h1>Clock: {new Date().toLocaleTimeString()}</h1>
// 	);
// 	ReactDOM.render(element, document.getElementById('clock'));
// }
// setInterval(tick,1000);

export default withRouter(App);
