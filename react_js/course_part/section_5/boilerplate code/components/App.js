import React, { Component } from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Table }  from 'react-bootstrap';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

import { fetchInfo } from '../actions/actions_info';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedOption: ''
    };
  }

  componentDidMount() {
    this.props.dispatch(fetchInfo());
  }

  handleChange(selectedOption) {
    this.setState({
      selectedOption :  selectedOption ? selectedOption : ''
    });
  }

  render() {

    const selectList = this.props.info.map(item => {
      return { value : item.name, label : item.name }
    });

    return (
      <div>
        <Navbar inverse collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">Victory Page!</a>
            </Navbar.Brand>
          </Navbar.Header>
          <Nav pullRight>
            <NavItem eventKey={1} href="#">Home</NavItem>
            <NavDropdown eventKey={3} title="Data Views" id="basic-nav-dropdown">
              <MenuItem eventKey={3.1}>List</MenuItem>
              <MenuItem eventKey={3.2}>Search</MenuItem>
            </NavDropdown>
          </Nav>
        </Navbar>
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <h1>Victory page</h1>
              <p>Here we'll list some data from a bunch of smokin' sources!</p>
              <div className="row">
                <div className="col-sm-3">
                  <Select
                    name="form-field-name"
                    value={this.state.selectedOption.value}
                    onChange={this.handleChange.bind(this)}
                    options={selectList}
                  />
                </div>
              </div>
              <hr />
              <div className="row">
                <div className="col-sm-9">
                  <Table striped bordered condensed hover>
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Address</th>
                        <th>Age</th>
                        <th>Company</th>
                      </tr>
                    </thead>
                    <tbody>
                      {this.props.info.map(item => {
                        console.log(this.state.selectedOption)
                        if(this.state.selectedOption===''||item.name===this.state.selectedOption.value) {
                          return (
                            <tr key={"item-"+item.name}>
                              <td>{item.name}</td>
                              <td>{item.address}</td>
                              <td>{item.age}</td>
                              <td>{item.company}</td>
                            </tr>
                          )
                        }
                      })}
                    </tbody>
                  </Table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );

  }
}

export default App;
