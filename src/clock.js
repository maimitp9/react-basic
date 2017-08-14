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
			<div className="col-md-12">
				<h1 className="pull-right text-primary">Time: {this.state.date.toLocaleTimeString()}</h1>
			</div>
		);

	}
}
