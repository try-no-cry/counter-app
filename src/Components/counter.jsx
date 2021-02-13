import React, { Component } from 'react';

class  Counter extends Component {
    state = {
        count:0,
        tags:["t1","t2","t3"]
      }
    render() { 
        return ( 
            <React.Fragment>
                <span className={this.getbadgeClasses()}>{this.formatCount()}</span>
                <button className="btn btn-secondary btn-sm">Increment</button>
                <ul>
                    {this.state.tags.map(tag=><li key={tag}>{tag}</li>)}
                </ul>
            </React.Fragment>
         );
    }

    getbadgeClasses(){
        let classes="m-2 p-2 badge badge-";
        return    classes +=this.state.count===0?"warning":"primary";

        }

    formatCount() {
        const { count }=this.state;
        return count===0?"zero":count;
    }
}
 

export default Counter;