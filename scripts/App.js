import React, { Component } from 'react';
import Histoslider from 'histoslider';
import Histogram from './Histogram';

var d3 = require('d3');


export default class App extends Component {
  constructor(){
    super()
    console.log('ESTAS EN EL PINCHE CONSTRUCTOR')
    this.state = {
      value: 3,
      value1: 0,
      value2: 2
    };
  }

  updateSliderView(e) {
    console.log("estas en set");
    console.log(e[0]);
    console.log(e[1]);
    this.setState({value1: e[0], value2: e[1]});
  }
  render() {
    return (
      <div>


    <Histoslider
   data={[
     {
       x0: 0,    // Start of the bucket
       x: 1,     // End of the bucket
       y: 100    // Value
     },
     {
       x0: 1,    // Start of the bucket
       x: 2,     // End of the bucket
       y: 120    // Value
     }
   ]}
   padding={20}
   selection={[this.state.value1, this.state.value2]}
   onChange={this.updateSliderView.bind(this)}
 />
    </div>);
  }
}
