import React, { Component } from 'react';

class  Counter extends Component {
    state = {
        
       
      }

   

    render() { 
        return ( 
            <div>
                
                <span className={this.getbadgeClasses()}>{this.formatvalue()}</span>
                <button onClick={()=>this.props.onIncrement(this.props.counter.id)} className="btn btn-secondary btn-sm">+</button>
                <button onClick={()=>this.props.onDecrement(this.props.counter.id)} className="m-1 btn btn-outline-secondary btn-sm"style={{backgroundColor:"red",color:"white"}}>-</button>
                <button onClick={()=>this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm m-2">Delete</button>
                 
            </div>
         );
    }

    getbadgeClasses(){
        let classes="m-1 p-2 badge badge-";
        return    classes +=this.props.counter.value===0?"warning":"primary";

        }

    formatvalue() {
        const { value }=this.props.counter;
        return value<=0?"zero":value;
    }
}
 

export default Counter;