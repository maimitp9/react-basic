import React, { Component} from 'react';

export default class Toggle extends Component {
  constructor(){
    super();
    this.state = { isToggeleOn: true };
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
        <button onClick={this.handleClick.bind(this)} >
          <h3>{this.state.isToggeleOn ? 'ON' : 'OFF'}</h3>
        </button>
      </div>
    );
  }

}
