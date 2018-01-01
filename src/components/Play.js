import React from 'react'
import * as d3 from "d3"


class Play extends React.Component {

  componentDidMount() {

    const margin = {top: 20, right: 30, bottom: 30, left: 60},
          width = 960 - margin.left - margin.right,
          height = 500 - margin.top - margin.bottom

    const y = d3.scaleLinear()
        .range([height, 0])

    const x = d3.scaleBand()
        .rangeRound([0, width])
        .padding(.1)

    const chart = d3.select(".chart")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
      .append("g")
        .attr("transform", `translate(${margin.left}, ${margin.top})`)

    d3.tsv("data.tsv", type, function(error, data) {
      y.domain([0, d3.max(data, d => d.value)])
      x.domain(data.map(v => v.name))

      const xAxis = d3.axisBottom(x)
      const yAxis = d3.axisLeft(y)
          .ticks(10, "%")


      const bar = chart.selectAll("g")
          .data(data)
        .enter().append("g")
          .attr("transform", (d, i) => `translate(${x(d.name)}, 0)`)


      // data inherits from parent
      bar.append("rect")
          .attr("y", d => y(d.value))
          .attr("width", x.bandwidth())
          .attr("height", d => height - y(d.value))

      chart.append("g")
          .classed("x axis", true)
          .attr("transform", `translate(0, ${height})`)
          .call(xAxis)

      chart.append("g")
          .classed("y axis", true)
          .call(yAxis)

      chart.append("text")
          .attr("transform", "rotate(-90)")
          .attr("y",0 - margin.left)
          .attr("x",0 - height / 2)
          .attr("dy", ".71em")
          .style("text-anchor", "middle")
          .text("Frequency")




    })

    function type(d) {
      d.value = +d.value
      return d
    }

  }


  render() {
    return (
    <svg className="chart"></svg>
    )
  }
}

export default Play
