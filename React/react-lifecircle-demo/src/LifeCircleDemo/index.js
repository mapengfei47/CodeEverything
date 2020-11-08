import React, { Component } from 'react';
import SonComponent from './SonComponent'

class LifeCircleDemo extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      fatherText: '父组件生命周期测试',
      sonText: '子组件接收参数'
     }
    console.log('父组件constructor...')
  }

  static getDerivedStateFromProps(){
    console.log('父组件getDerivedStateFromProps...')
    return null
  }

  componentDidMount(){
    console.log('父组件componentDidMount...')
  }

  componentDidUpdate(){
    console.log('父组件componentDidUpdate...')
  }

  getSnapshotBeforeUpdate(){
    console.log('父组件getSnapshotBrforeUpdate...')
    return null
  }

  changeFatherText = () =>{
    this.setState({
      fatherText: '父组件改变之后的文案'
    })
  }

  changeSonText = () =>{
    this.setState({
      sonText: '改变之后的子组件文案'
    })
  }

  render() { 
    console.log('父组件render...')
    return ( 
      <div>
        <div>父组件文案：{ this.state.fatherText }</div>
        <button onClick={this.changeFatherText}>父组件改变State</button>
        <button onClick={this.changeSonText}>改变子组件State</button>
        <hr />
        <SonComponent sonText={ this.state.sonText }/>
      </div>
     );
  }
}
 
export default LifeCircleDemo;