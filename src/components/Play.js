import React from 'react'
import * as d3 from "d3"


class Play extends React.Component {

  componentDidMount() {

    var data = [4, 8, 15, 16, 23, 42];

    var width = 420,
        barHeight = 20

    const x = d3.scaleLinear()
        .domain([0, d3.max(data)])
        .range([0, width])

    var chart = d3.select(".chart")
      .append("svg")
        .attr("width", width)
        .attr("height", barHeight * data.length)

    var bar = chart.selectAll("g")
        .data(data)
      .enter().append("g")
        .attr("transform", (d, i) => `translate(0, ${barHeight * i})`)

    bar.append("rect")
        .attr("width", d => x(d))
        .attr("height", barHeight - 1)


    bar.append("text")
        .attr("x", d => x(d) - 3)
        .attr("y", barHeight/2)
        .attr("dy", ".35em")
        .text(d => d)

    console.log(bar)

  }


  render() {
    return (
    <div className="chart"></div>
    )
  }
}

export default Play
