import React, { Component } from 'react';

class Break extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div id="break_div">
                <h3>Break Time:</h3><br />
  {this.props.break_min} <br />
  <button onClick={this.props.func} value="+br">Up!</button>  <button onClick={this.props.func} value="-br">Down!</button>
                </div>
        )
    }
}
export default Break