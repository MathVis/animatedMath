import React, { Component } from 'react';
import * as d3 from 'd3';
import './App.scss';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nums: 1
    };
  }
  componentDidMount(){
    let g = d3.select("#svgWrap").append("g");
    let plus = 1;
    let data = new Array(360);
    setInterval(() => {
      for(let i = 0; i < data.length; i ++){
        data[i] = i+plus;
      }
      d3.selectAll("circle").remove();
      g.selectAll("circle")
        .data(data)
        .enter()
        .append("circle")
        .attr("cx",(d,i) => {
          let r = 200 * Math.cos(2 * (Math.PI / plus) * d);
          return r * Math.cos(Math.PI/180*d) + 300;
        })
        .attr("cy",(d,i) => {
          let r = 200 * Math.cos(2 * (Math.PI / plus) * d);
          return r * Math.sin(Math.PI/180*d) + 300;
        })
        .attr("r",1);
        if(plus < 200){
          plus ++;
        }else if(plus === 200){
          plus = 1;
        }
    },10);
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <svg id="svgWrap"></svg>
          <p>
            Welcome to Math World! 
          </p>
        </header>
      </div>
    );
  }
}

export default App;
