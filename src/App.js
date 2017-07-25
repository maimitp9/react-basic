import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Layout from './layout';
import Clock from './clock';
import Toggle from './toggle';
import Comment from './comment';


class App extends Component {
  constructor(props) {
    super(props);
    this.say = "Say Hello!!"
  }

  getName(surname){
    return "Maimit " + surname + "!!";
  }

  render() {
    return (
      <div>
				<Clock />
				<Layout />
        <Toggle />
				<br/>
        Hello {this.getName("Patel")}
        <p>{this.say}</p>
        User: {formatName(user)}
        <Welcome name="Welcome Component"/>
        <Comment date={comment.date} text={comment.text} author={comment.author}/>

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

function Welcome(props){
	return <h1>{props.name}</h1>
}




export default App;
