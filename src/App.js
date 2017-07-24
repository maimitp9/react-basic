import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Layout from './layout';
import Clock from './clock';
import Toggle from './toggle'

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

function Avatar(props){
	return(
		<span>
			<b>Profile Picture:</b> <img src={props.user.avatarUrl} alt={props.user.fName} />
		</span>
	);
}

function UserInfo(props){
	return(
		<div class="user-info">
			<Avatar user={props.user} />
			<p>Comment by: {props.user.fName} {props.user.lName}</p>
		</div>
	);
}

function Comment(props){
	return(
		<div class="comment-info">
		<h3>Comment Component</h3>
			<UserInfo user={props.author}/>
			<p><b>Commented Date:</b> {formateDate(props.date)}</p>
			<p><b>Comment Text:</b> {props.text}</p>
		</div>
	);
}

function formateDate(date){
	return date.toLocaleTimeString();
}

export default App;
