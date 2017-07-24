import React, { Component} from 'react';

export default class Toggle extends Component {
  constructor(){
    super();
    this.state = { isToggeleOn: true };
    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    this.setState(prevState => ({
        isToggeleOn: !prevState.isToggeleOn
      }));
  }
  render(){
    return(
      <div>
        <br/>
        <button onClick={this.handleClick} >
          <h3>{this.state.isToggeleOn ? 'ON' : 'OFF'}</h3>
        </button>
      </div>
    );
  }

}
