import React, { Component } from 'react';

class Session extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div id="session_div">
                <h3>Session Time: </h3><br />
             {this.props.session_min}<br />
             <button onClick={this.props.func} value="+ses">Up!</button>  <button onClick={this.props.func} value="-ses">Down!</button>   
            </div>
        )
    }
}
export default Session