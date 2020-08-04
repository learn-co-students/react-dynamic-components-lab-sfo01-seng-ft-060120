import React, { Component } from 'react';

export default class ColorBox extends Component {

  state = {
    todos: [
      
    ]
  }

  render() {
    const newValue = (this.props.opacity*10 - 1) / 10

    console.log(`Old Value: ${this.props.opacity}, New Value: ${newValue}`)

    return this.props.opacity >= 0.2 ? (
      <div className="color-box" style={{opacity: this.props.opacity}}>
        <ColorBox opacity={newValue} />
      </div>
    ) : null
  }

}

