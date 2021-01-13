const MARGIN = { LEFT: 100, RIGHT: 10, TOP: 10, BOTTOM: 100 }
const WIDTH = 600 - MARGIN.LEFT - MARGIN.RIGHT
const HEIGHT = 400 - MARGIN.TOP - MARGIN.BOTTOM

// width & height are the area we have to work with

const svg = d3.select("#chart-area").append("svg")
  .attr("width", 600)
  .attr("height", 400)

