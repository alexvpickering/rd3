import React from 'react'
import * as d3 from "d3"

class Play extends React.Component {

  componentDidMount() {
    const node = this.node
    const margin = 50,
          height = 500 - (2 * margin),
          width  = 500 - (2 * margin)

    const arc1 = d3.arc()
        .innerRadius(0)
        .outerRadius(100)
        .startAngle(Math.PI/2)
        .endAngle(Math.PI*3/2)

    const arc2 = d3.arc()
        .innerRadius(50)
        .outerRadius(100)
        .startAngle(0)
        .endAngle(Math.PI*2)


    const g = d3.select(node)
      .append("g")
        .attr("transform", `translate(${margin}, ${margin})`)

    g.append("path")
        .attr("transform", "translate(200, 300)")
        .attr("d", arc1())
        .attr("fill", "red")

    g.append("path")
        .attr("transform", "translate(200, 100)")
        .attr("d", arc2())
        .attr("fill", "blue")


    g.append("path")




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
