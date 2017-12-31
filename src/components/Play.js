import React from 'react'
import * as d3 from "d3"



class Play extends React.Component {

  componentDidMount() {
    const node = this.node
    const margin = 50,
          height = 500 - (2 * margin),
          width  = 500 - (2 * margin),
          r = 10

    const data = [
            [width / 2 - r, height / 2 - r],
            [width / 2 - r, height / 2 + r],
            [width / 2 + r, height / 2 - r],
            [width / 2 + r, height / 2 + r]
          ]

    const zoom = d3.zoom()
        .scaleExtent([1, 10])
        .on("zoom", zoomed);


    const g = d3.select(node).append("g")
        .attr("transform", `translate(${margin}, ${margin})`)
        .style("border", "1px solid")
        .call(zoom)
      .append("g")

    g.selectAll("circle")
      .data(data)
      .enter()
      .append("circle")
          .attr("r", r)
          .attr("transform", d => `translate(${d})`)

function zoomed() {
  g.attr("transform", "translate(" + d3.event.transform.x + "," + d3.event.transform.y + ") scale(" + d3.event.transform.k + ")");
}

  }


  render() {
    return (
    <div>
      <svg
        ref={node => this.node=node}
        width="500"
        height="500"
        style={{border: '1px solid'}}>
        <text></text>
      </svg>
    </div>
    )
  }
}

export default Play
