import React, { Component } from 'react';
import Histoslider from 'histoslider';
import Histogram from './Histogram';
import Nouislider from 'react-nouislider';

var Range = require('@mapbox/react-range');



var d3 = require('d3');


export default class App extends Component {
  constructor(){
    super()
    console.log('ESTAS EN EL PINCHE CONSTRUCTOR')
    var starter_nums = [
    0,1,1,2,3,3,3,3,4,4,4,4,4,5,5,15,15,15,
    5,5,5,5,6,6,6,6,6,7,8,7,8,8,9,12,12,0,11
    ]
    this.state = {text: starter_nums.join(',')};

  }

  getNumbers() {
        var numbers = this.state.text.split(','),
        data = [];

        numbers.forEach(function(n) {
            var num = parseFloat(n);
            if (!isNaN(num)) data.push(num);
        });

        return data;
    }

  render() {
    var data = this.getNumbers();
    var maxvalue = Math.max.apply(null, data);
    return (
      <div className= "algo">
          // Add your component markup and other subcomponent references here.
          <h1>Hello, World!</h1>
          <Histogram data={data} />
          <div className= "esslider">
          <Nouislider
            range={{min: 0, max: maxvalue }}
            start={[0, 100]}
            onChange={array => { console.log(array) }}
          />
          </div>
      </div>
    );
  }
}
