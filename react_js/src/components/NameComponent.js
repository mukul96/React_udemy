import React, { Component } from 'react';


class NameComponent extends React.Component{
    componentDidMount(){
        console.log("mounted")
    }
    render() {
        var word="hello";
        return (
           <p><b>Checking the code in the component</b></p>
        );
    }
}

export default NameComponent;
