import React, { Component } from 'react'

export default class Greetingrcc extends Component {
    constructor(props){
    super(props);
        this.state={
            message:this.props.message,
            name:this.props.name
        }
    
    }
  render() {
    return (
      <div>
        <h1>{this.state.message} {this.state.name}</h1>
      </div>
    )
  }
}
