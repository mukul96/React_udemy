import React, { Component } from 'react';



class NameComponent extends Component {


  componentDidMount(){
    console.log("name component mounted")
    console.log(this.props.username)
  }
  render() {
    var style={fontSize:'40px'}
    const user=this.props.username
    return (
      <div>
       hello in the name component
       {user? user:" no_user"}
       </div>
    );
  }
}

export default NameComponent;
