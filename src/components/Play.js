import React from 'react'
import * as d3 from "d3"


class Play extends React.Component {

  componentDidMount() {

    var data = [4, 8, 15, 16, 23, 42];

    var x = d3.scaleLinear()
        .domain([0, d3.max(data)])
        .range([0, 420])

    d3.select(".chart")
      .selectAll("div")
        .data(data)
      .enter().append("div")
        .style("width", d => x(d) + "px")
        .text(d => d)

  }


  render() {
    return (
    <div class="chart"></div>
    )
  }
}

export default Play
