import React, { Component } from 'react';
import NameComponent from './components/NameComponent'
import { Nav,Navbar,MenuItem,NavDropdown,NavItem}from 'react-bootstrap'
import Select from 'react-select';
//import 'react-select/dist/react-select.css'
class App extends Component {

  constructor(props){
    super(props)
    this.state={
      username:"Check1"
    };
  }


  componentDidMount(){
    console.log("mounted")
  }

  handleClick(){
   this.setState(
     {
       username:"check2"
     }
   )
  }


  render() {
    var style={fontSize:'40px'}
    //const array=["welcome","to","my","course"]



    
    return (
      <div>
        <Navbar inverse collapseOnSelect>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="#home">React-Bootstrap</a>
        </Navbar.Brand>
      </Navbar.Header>
      <Nav pullRight>
        <NavItem eventKey={1} href="#">
          Link
        </NavItem>
        <NavItem eventKey={2} href="#">
          Link
        </NavItem>
        <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
          <MenuItem eventKey={3.1}>Action</MenuItem>
          <MenuItem eventKey={3.2}>Another action</MenuItem>
          <MenuItem eventKey={3.3}>Something else here</MenuItem>
          <MenuItem divider />
          <MenuItem eventKey={3.4}>Separated link</MenuItem>
        </NavDropdown>
      </Nav>
    </Navbar>;

         <p>  the main Component
        <NameComponent username={this.state.username}></NameComponent>
        <button onClick={()=>{console.log("on clicking")}}><NameComponent/> </button>
        <button onClick={this.componentDidMount}><NameComponent/> </button>
        {
          this.state.username
        }
        <button onClick={this.handleClick.bind(this)}><NameComponent/> </button>
        
        
      </p>
      </div>
     
      
       
    );
  }
}

export default App;
