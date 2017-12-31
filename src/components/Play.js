import React from 'react'
import * as d3 from "d3"

class Play extends React.Component {

  componentDidMount() {
    const node = this.node
    const margin = 50,
          height = 500 - (2 * margin),
          width  = 500 - (2 * margin)

    const g = d3.select(node).append("g")
        .attr("transform", `translate(${margin}, ${margin})`)


    const xScale = d3.scaleLinear()
        .domain([0, 9])
        .range([0, width])

    const yScale = d3.scaleLinear()
        .domain([0, 9])
        .range([height, 0])

    const xAxis = d3.axisBottom(xScale)
    g.append("g")
        .attr("transform", `translate(0, ${height})`)
        .call(xAxis)

    const yAxis = d3.axisLeft(yScale)
        .ticks(10)

    g.append("g")
        .call(yAxis)

    var data = [
      	{x: 0, y: 4},
      	{x: 1, y: 9},
      	{x: 2, y: 6},
      	{x: 4, y: 5},
      	{x: 6, y: 7},
      	{x: 7, y: 3},
      	{x: 9, y: 2}
      ]

    var data2 = [
        {x: 0, y: 3},
        {x: 2, y: 7},
        {x: 3, y: 4},
        {x: 4, y: 3},
        {x: 6, y: 3},
        {x: 8, y: 4},
        {x: 9, y: 1}
      ]

    var area = d3.area()
        .x(d => xScale(d.x))
        .y0(yScale(0))
        .y1(d => yScale(d.y))
        .curve(d3.curveLinear)

    console.log(area(data))

    g.append("path")
        .attr("d", area(data))
        .attr("fill", "#ffad99")
        .attr("stroke", "red")

    g.append("path")
        .attr("d", area(data2))
        .attr("fill", "#b3d9ff")
        .attr("stroke", "blue")

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
