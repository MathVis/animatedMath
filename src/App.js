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
    /* let plus = 1;
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
        plus ++;
    },10); */
    const arr = [[0.195,-0.488,0.344,0.433,0.4431,0.2452,0.25],
      [0.462,0.414,-0.252,0.361,0.2511,0.5692,0.25],
      [-0.058,-0.07,0.453,-0.111,0.5976,0.0969,0.25],
      [-0.035,0.07,-0.469,-0.022,0.4884,0.5069,0.2],
      [-0.637,0,0,0.501,0.8562,0.2513,0.05]];
    let data = [];
    let [x0,y0,r] = [1,1,0];
    for(let i = 10000; i > 0; i --){
      r = Math.random();
      if(r <= 0.25){
        data.push({
          x : arr[0][0]*x0+arr[0][1]*y0+arr[0][4],
          y : arr[0][2]*x0+arr[0][3]*y0+arr[0][5]
        });
      }else if(r > 0.25 && r <= 0.5){
        data.push({
          x : arr[1][0]*x0+arr[1][1]*y0+arr[1][4],
          y : arr[1][2]*x0+arr[1][3]*y0+arr[1][5]
        });
      }else if(r > 0.5 && r <= 0.75){
        data.push({
          x : arr[2][0]*x0+arr[2][1]*y0+arr[2][4],
          y : arr[2][2]*x0+arr[2][3]*y0+arr[2][5]
        });
      }else if(r > 0.75 && r <= 0.95){
        data.push({
          x : arr[3][0]*x0+arr[3][1]*y0+arr[3][4],
          y : arr[3][2]*x0+arr[3][3]*y0+arr[3][5]
        });
      }else{
        data.push({
          x : arr[4][0]*x0+arr[4][1]*y0+arr[4][4],
          y : arr[4][2]*x0+arr[4][3]*y0+arr[4][5]
        });
      }
      x0 = data[data.length - 1].x;
      y0 = data[data.length - 1].y;
    }
    g.selectAll("circle")
        .data(data)
        .enter()
        .append("circle")
        .attr("cx",(d,i) => {
          return d.x*500+100;
        })
        .attr("cy",(d,i) => {
          return d.y*500+10;
        })
        .attr("r",1);
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
