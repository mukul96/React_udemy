import React, { Component } from 'react';



class App extends Component {


  componentDidMount(){
    console.log("mounted")
  }
  render() {
    var style={fontSize:'40px'}

    return (
      <div style={style}>
       hello making changes
       </div>
    );
  }
}

export default App;
