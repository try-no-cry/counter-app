import React, { Component } from 'react'
import Counter from './counter'

class Counters extends Component {
    state = { 
       
     }
   
    render() { 
        return ( 
            <React.Fragment>
                {this.props.counters.map(c=><Counter 
                onIncrement={this.props.onIncrement} 
                onDelete={this.props.onDelete}
                onDecrement={this.props.onDecrement}
                key={c.id} 
                counter={c}
                  />)}
            </React.Fragment>
         );
    }
}
 
export default Counters;