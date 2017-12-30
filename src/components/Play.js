import React from 'react'
import * as d3 from "d3"

class Play extends React.Component {

  componentDidMount() {
    const node = this.node
    const margin = 50,
          height = 500 - (2 * margin),
          width  = 500 - (2 * margin)


    // container translated
    const g = d3.select(node)
      .append("g")
        .attr("transform", `translate(${margin}, ${margin})`)

      const xScale = d3.scaleLinear()
          .domain([0, 100])
          .range([0, width])

      const yScale = d3.scaleLinear()
          .domain([0, 100])
          .range([height, 0])

      const xAxis = d3.axisBottom(xScale)
          .ticks(5)
          .tickPadding(10)
          .tickFormat(d => d + "%")

      const yAxis = d3.axisLeft(yScale)
          .ticks(5)
          .tickPadding(10)
          .tickFormat(d => d + "%")

      g.append("g")
          .classed("x-axis", true)
          .attr("transform", `translate(0, ${height})`)
          .call(xAxis)

      g.append("g")
          .classed("y-axis", true)
          .call(yAxis)

      g.selectAll("g.x-axis g.tick")
        .append("line")
          .classed("grid-line", true)
          .attr("x1", 0)
          .attr("y1", 0)
          .attr("x2", 0)
          .attr("y2", -height)

      g.selectAll("g.y-axis g.tick")
        .append("line")
          .classed("grid-line", true)
          .attr("x1", 0)
          .attr("y1", 0)
          .attr("x2", width)
          .attr("y2", 0)








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
