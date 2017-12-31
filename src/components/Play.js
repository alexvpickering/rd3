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


    const data = [
      	{"name": "John",   "parent": ""},
      	{"name": "Jack",  "parent": "John"},
      	{"name": "Drake",  "parent": "John"},
      	{"name": "Keith",  "parent": "Drake"},
      	{"name": "Harry",  "parent": "Drake"},
      	{"name": "Joshua",  "parent": "John"},
      	{"name": "Smith",  "parent": "John"},
      	{"name": "Peter", "parent": "Smith"},
      	{"name": "Larry", "parent": "John"}
      ]


    const tree = d3.tree()
        .size([height, width])

    const statify = d3.stratify()
        .id(d => d.name)
        .parentId(d => d.parent)


    const root = statify(data)
    console.log(tree(root).descendants().slice(1))
    console.log(tree(root).descendants())

    const treeG = g.append("g")
        .classed("treeG", true)

    treeG.selectAll(".links")
        .data(tree(root).descendants().slice(1))
        .enter()
        .append("path")
        .classed("link", true)
        .attr("d", function(d) {
          return "M" + d.y + "," + d.x
            + "C" + (d.y + d.parent.y) / 2 + "," + d.x
            + " " + (d.y + d.parent.y) / 2 + "," + d.parent.x
            + " " + d.parent.y + "," + d.parent.x;
        });







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
