const MARGIN = { LEFT: 100, RIGHT: 10, TOP: 10, BOTTOM: 100 }
const WIDTH = 600 - MARGIN.LEFT - MARGIN.RIGHT
const HEIGHT = 400 - MARGIN.TOP - MARGIN.BOTTOM

// width & height are the area we have to work with

const svg = d3.select("#chart-area").append("svg")
  .attr("width", 600)
  .attr("height", 400)

const g = svg.append("g")
  .attr("transform", `translate(${MARGIN.LEFT}, ${MARGIN.TOP})`) // look up what this does

const xLabel = g.append("text")
  .attr("class", "x axis-label")
  .attr("x", WIDTH/2)
  .attr("y", HEIGHT+60)
  .attr("font-size", "20px")
  .attr("text-anchor", "middle")
  .text("Demographics")
const yLabel = g.append("text")
  .attr("class", "y axis-label")
  .attr("x", -(HEIGHT/2))
  .attr("y", -60)
  .attr("font-size", "20px")
  .attr("text-anchor", "middle")
  .attr("transform", "rotate(-90)")
  .text("Number")

const xScale = d3.scaleBand()
  .domain(["female", "male", "gnc", "transf", "transm"])
  .range([0, WIDTH])
  .paddingInner(0.3)
  .paddingOuter(0.3)

const yScale = d3.scaleLinear()
  .domain([0, 6400])
  .range([HEIGHT, 0])

d3.csv("data/gender.csv").then(data=> {
  data.forEach(d=> {
    d.number = Number(d.number)
  })

  const rects = g.selectAll("rects")
    .data(data)

  rects.enter().append("rect")
    .attr("y", d => yScale(d.number))
    .attr("x", (d) => xScale(d.gender))
    .attr("width", xScale.bandwidth)
    .attr("height", d => HEIGHT - yScale(d.number))
    .attr("fill", "teal")
})





