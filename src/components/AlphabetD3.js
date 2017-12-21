import React from 'react'
import * as d3 from 'd3'
import './AlphabetD3Styles.css'

class AlphabetD3 extends React.Component {
  constructor(props) {
    super(props);
    // bind added methods that use this (lifecycle methods auto-bind)
    this.updateData = this.updateData.bind(this)
    this.createAlphabetD3 = this.createAlphabetD3.bind(this)
  }

  componentDidMount() {
    this.createAlphabetD3()
  }

  componentDidUpdate() {
    this.updateData(this.props.letters, this.g);
  }

  createAlphabetD3() {
    const node = this.node
    var alphabet = ['a', 'b', 'c']

    var svg = d3.select(node),

        height = +svg.attr("height"),
        g = svg.append("g").attr("transform", "translate(32," + (height / 2) + ")");

    this.g = g
    this.updateData(alphabet, g);
  }

  updateData(data, g) {
    // DATA JOIN
    // Join new data with old elements, if any.
    var text = g.selectAll("text")
      .data(data);

    // UPDATE
    // Update old elements as needed.
    text.attr("class", "update");

    // ENTER
    // Create new elements as needed.
    //
    // ENTER + UPDATE
    // After merging the entered elements with the update selection,
    // apply operations to both.
    text.enter().append("text")
        .attr("class", "enter")
        .attr("x", function(d, i) { return i * 32; })
        .attr("dy", ".35em")
      .merge(text)
        .text(function(d) { return d; });

    // EXIT
    // Remove old elements as needed.
    text.exit().remove();
  }

  render() {
    return (
      <svg
        ref={node => this.node=node}
        onClick={() => this.props.onLettersClick()}
        width={960}
        height={500}>
      </svg>
    )
  }
}

export default AlphabetD3
