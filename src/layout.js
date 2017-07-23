import React, {Component} from 'react';
import Header from './header'

export default class Layout extends Component{
  constructor(){
    super();
    this.state = { title: "Welcome"};
  }

  changeTitle(title){
    this.setState({title})
  }
  render(){
    // change title after 2 sec
    // setTimeout(()=>{
    //   this.setState({title: "Maimit"})
    // },2000);
    return(
      <Header changeTitle={this.changeTitle.bind(this)} title = {this.state.title} />
    );
  }
}
