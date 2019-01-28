import React, { Component } from 'react';

import DefaultChild from './DefaultChild';
import OtherChild from './OtherChild';

class Apps extends Component {

  constructor(props) {
    super(props);
    this.state = {
      child : 'default'
    }
  }

  handleClick(e) {
    console.log(e.target.value);
    this.setState({
      child: e.target.value
    });
  }

  render() {

    return (
      <div style={{padding:'40px'}}>
        <input type="radio" checked={this.state.child==='default' ? true : false} name="pickComponent" value="default" onChange={this.handleClick.bind(this)} /> Default
        <br />
        <input type="radio" checked={this.state.child==='other' ? true : false} name="pickComponent" value="other" onChange={this.handleClick.bind(this)} /> Other
        <hr />
        {this.state.child==='default' ? <DefaultChild /> : false}
        {this.state.child==='other' ? <OtherChild /> : false}
      </div>
    );

  }
}

export default Apps;
