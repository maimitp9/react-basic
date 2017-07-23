import React, { Component } from 'react';

export default class Clock extends Component{
	constructor(){
		super();
		this.state = {date: new Date()};
	}

	componentDidMount(){
		this.timerID = setInterval(
			() => this.tick(),
			1000
		);
	}

	componentWillUnmount(){
		clearInterval(this.timerID);
	}
	tick(){
		this.setState({date: new Date()});
	}

	render(){
		return(
			<h1>Time: {this.state.date.toLocaleTimeString()}</h1>
		);
	}
}
