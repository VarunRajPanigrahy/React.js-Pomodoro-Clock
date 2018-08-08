import React, { Component } from 'react';
import Session from './Session';
import Break from './Break';
import Countdown from './Countdown'

class Clock extends React.Component{
    constructor(props){
        super(props);
        this.state={
            break_min:5,
            break_sec:'00',
            session_sec:'00',
            session_min:30,
            min:30,
            sec:"00",
            play:false,
            is_break:false,
            count:0,
          
        }
        this.clickHandler=this.clickHandler.bind(this);
        this.count=this.count.bind(this);
    }

    clickHandler(event){
     let val=event.target.value;
     console.log(val)
     if(val==="play"){
         this.setState({
             play:true,
             count:this.state.count+1,
             
         })
         if(this.state.count===0){
             this.setState({
                 min:this.state.session_min,
                 sec:this.state.session_sec,
             })
         }
       
     console.log(this.state.count)
     }

     if(val==='reset'){
     
             this.setState({
            min:this.state.session_min,
            sec:"00",
            play:false,
             })
           
     }

     if(!this.state.play){
     if(val==="+ses"){
         this.setState({
            session_min:this.state.session_min+1 ,
            
        
         })
         //console.log(this.state.play)
     }

     if(val==="-ses"){
        this.setState({
           session_min:Math.max(this.state.session_min-1,parseInt(0)), 
          
        })
    }

    if(val==="+br"){
        this.setState({
           break_min:this.state.break_min+1 
        })
    }

    if(val==="-br"){
        this.setState({
           break_min: Math.max(this.state.break_min-1,0)
        })
    }
}
if(val==='pause'){
    this.setState({
        play:false
    })}
    if(this.state.play && this.state.count===1){
        setInterval(this.count,1000)

    }

    }

     count(){
         if(!this.state.is_break && this.state.play){
             if(this.state.sec!=0 && this.state.sec!=1){
                 this.setState({
                     sec:this.state.sec-1,
                 })
             }
             else if(this.state.min>0 && this.state.sec==0){
                 this.setState({
                   min:this.state.min-1,
                   sec:59,
               })  
             }

             else if(this.state.sec==1){
           this.setState({
               sec:'00',
           })
             }
             if(this.state.sec=='00' && this.state.min===0){
                this.setState({
                   min:this.state.break_min,
                   sec:this.state.break_sec,
                   is_break:true,
                }) 
                
               
             }
         }
         else if(this.state.is_break && this.state.play){
            if(this.state.sec!=0 && this.state.sec!=1){
                this.setState({
                    sec:this.state.sec-1,
                })
            }

            else if(this.state.min>0 && this.state.sec==0){
                this.setState({
                  min:this.state.min-1,
                  sec:59,
              })  
            }

            else if(this.state.sec==1){
          this.setState({
              sec:'00',
          })
            }

            if(this.state.sec=='00' && this.state.min===0){
                this.setState({
                   min:this.state.session_min,
                   sec:this.state.session_sec,
                   is_break:false,
                }) 
                
               
             }


         }
         
     }

    render(){
        return(
            <div>
                <Session session_min =  {this.state.session_min}  func={this.clickHandler}/>
                <Break break_min={this.state.break_min}  func={this.clickHandler} /><br/>
                <Countdown  min={this.state.min} sec={this.state.sec}/><br />
                <button value="play" onClick={this.clickHandler}>Play</button>
                <button value="pause" onClick={this.clickHandler}>pause</button><br />
                <button value="reset" onClick={this.clickHandler}>Reset</button><br />
                </div>
        )
    }
}
export default Clock;