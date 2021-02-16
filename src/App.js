import logo from './logo.svg';
import './App.css';

import Counters from './Components/counters'
import { Component } from 'react';
import NavBar from './Components/navbar';



class App extends Component {
  state = { 
    counters:[
      {id:1,value:0},
      {id:2,value:1},
      {id:3,value:0},
      {id:4,value:0}
  ]
   }

   handleIncrementClick=(id)=>
   {   
        
          const ct=this.state.counters.map(c=>
              {
                  if(c.id==id)
                  {
                      c.value=c.value+1;
                  }
                  return c;
              });
     
              // console.log(this.state.counters);
          this.setState({counters:ct});

   }  

   
   handleDecrementClick=(id)=>
   {
      const ct=this.state.counters.map(c=>
          {
              if(c.id==id)
              {
                  c.value=c.value-1;
              }
              return c;
          });         
          this.setState({counters:ct});
       
   }  

   handleDelete=(id)=>{
           const counters=this.state.counters.filter(c=>c.id!=id);
           this.setState({counters});
   }

  render() { 
    return ( 
      <main className="container">
        <NavBar len={this.state.counters.filter(c=>c.value>0).length}/>
        <Counters counters={this.state.counters}
        onDelete={this.handleDelete}
        onIncrement={this.handleIncrementClick}
        onDecrement={this.handleDecrementClick}
        />
      </main>
     );
  }
}
{/* <Counters  counters={this.state.counters}
         
        /> */}
 
export default App;
