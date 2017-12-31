import React from 'react'
import * as d3 from "d3"



class Play extends React.Component {

  componentDidMount() {
    const node = this.node
    const margin = 50,
          height = 500 - (2 * margin),
          width  = 500 - (2 * margin)



    const data = [
        {month: "2013", apples: 100, bananas: 200, oranges: 130},
        {month: "2014", apples: 300, bananas: 150, oranges: 120},
        {month: "2015", apples:  200, bananas:  280, oranges: 200},
        {month: "2016", apples:  400, bananas:  100, oranges: 300},
        {month: "2017", apples:  230, bananas:  400, oranges: 100}
      ]

    var stack = d3.stack()
        .keys(["apples", "bananas", "oranges"])

    var series = stack(data)

    console.log(series)

    var xScale = d3.scaleBand()
        .domain(data.map(d => d.month))
        .range([0, width])
        .padding(0.3)

    var yScale = d3.scaleLinear()
        .domain([stackMin(), stackMax()])
        .range([height, 0])

    var colorScale = d3.scaleOrdinal(d3.schemeCategory10)

    function extractValues(series) {
      var values = [];
      series.forEach(function(value) {
        value.forEach(function(item) {
          values = values.concat(item)
        })
      })
      return values
    }

    function stackMin() {
      var values = extractValues(series)
      return d3.min(values)
    }

    function stackMax() {
      var values = extractValues(series)
      return d3.max(values)
    }

    const g = d3.select(node).append("g")
    .attr("transform", `translate(${margin}, ${margin})`)

    function renderYAxis() {
      var yAxis = d3.axisLeft(yScale)

      g.append("g")
          .classed("y-axis", true)
          .call(yAxis)

      g.selectAll("g.y-axis g.tick")
        .append("line")
          .classed("grid-line", true)
          .attr("x1", 0)
          .attr("y1", 0)
          .attr("x2", width)
          .attr("y2", 0)
    }

    function renderXAxis() {
      var xAxis = d3.axisBottom(xScale)

      g.append("g")
          .classed("x-axis", true)
          .attr("transform", `translate(0, ${height})`)
          .call(xAxis)
    }

    renderYAxis()
    renderXAxis()

    g.append("g")
        .classed("stack-bar", true)
      .selectAll("g")
      .data(series)
      .enter()
      .append("g")
        .attr("fill", d => colorScale(d.key))
      .selectAll("rect")
      .data(d => d)
      .enter()
      .append("rect")
        .attr("x", (d, i) => xScale(2013 + i))
        .attr("y", d => yScale(d["1"]))
        .attr("width", xScale.bandwidth())
        .attr("height", function(d) {return height - yScale(d["1"] - d["0"])})




    console.log(xScale(2013))






  }


  render() {
    return (
    <div>
      <svg
        ref={node => this.node=node}
        width="500"
        height="500"
        style={{border: '1px solid'}}>
      </svg>
    </div>
    )
  }
}

export default Play
