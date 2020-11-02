import React, { Component } from 'react';

class ClassComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      text: 'Hello React!'
     }
  }

  componentDidMount(){

  }

  render() { 
    const {text} = this.state;
    return ( 
      <div>
        <div>{ text }</div>
      </div>
     );
  }
}
 
export default ClassComponent;