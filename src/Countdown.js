import React, { Component } from 'react';

class Countdown extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div id="countdown_div">
        {this.props.min}:{this.props.sec}
            </div>
        )
    }
}
export default Countdown