// Smokers vs poverty

// Define SVG area dimensions
var svgWidth = window.innerWidth * .6;
var svgHeight = window.innerHeight * .8;

// Define margins
var margin = { top: 100, right: 100, bottom: 200, left: 100 };
var width = svgWidth - margin.left - margin.right;
var height = svgHeight - margin.top - margin.bottom;

// Create an svg and connect it to html element
var svg = d3.select("#scatter")
  .append("svg")
  .attr("width", svgWidth)
  .attr("height", svgHeight);

// Initial Params
var chosenXAxis = "poverty";
// var chosenYAxis = "healthcareLow"

// Append an SVG group
var chartGroup = svg.append("g")
  .attr("transform", `translate(${margin.left},${margin.top})`);


// function used for updating x-scale var upon click on axis label
function xScale(data, chosenXAxis) {
  // create scales
  var xLinearScale = d3.scaleLinear()
    .domain([d3.min(data, d => d[chosenXAxis]) * 0.8,
      d3.max(data, d => d[chosenXAxis]) * 1.2
    ])
    .range([0, width]);

  return xLinearScale;

}


// function used for updating xAxis var upon click on axis label
function renderAxes(newXScale, xAxis) {
  var bottomAxis = d3.axisBottom(newXScale);

  xAxis.transition()
    .duration(1000)
    .call(bottomAxis);

  return xAxis;
}

// function used for updating circles group with a transition to
// new circles
function renderCircles(circlesGroup, newXScale, chosenXaxis) {

  circlesGroup.transition()
    .duration(1000)
    .attr("cx", d => newXScale(d[chosenXAxis]));

  return circlesGroup;
}

// function used for updating circles group with new tooltip
function updateToolTip(chosenXAxis, circlesGroup) {

  if (chosenXAxis === "poverty") {
    var label = "Poverty:";
  } else if (chosenXAxis === "age") {
    var label = "Age:";
  }
  else {
    var label = "Income:";
  }

  var toolTip = d3.tip()
    .attr("class", "tooltip")
    .offset([80, -60])
    .html(function(d) {
      return (`${label} ${d[chosenXAxis]}`);
    });

  circlesGroup.call(toolTip);

  circlesGroup.on("mouseover", function(data) {
    toolTip.show(data);
  })
    // onmouseout event
    .on("mouseout", function(data, index) {
      toolTip.hide(data);
    });

  return circlesGroup;
}


// Load data, turn strings into integers and render

d3.csv("data/data.csv").then(data => {
  data.forEach(d => {
    d.poverty = +d.poverty;
    d.smokes = +d.smokes;
    d.age = +d.age;
    d.income = +d.income;
    d.healthcare = +d.healthcare;
    d.healthcareLow = +d.healthcareLow;
    d.obesity = +d.obesity;
  });

  // xLinearScale function above csv import
  var xLinearScale = xScale(data, chosenXAxis);

  // Create y scale function
  var yLinearScale = d3.scaleLinear()
    .domain([0, d3.max(data, d => d.healthcareLow)])
    .range([height, 0]);

  // Create initial axis functions
  var bottomAxis = d3.axisBottom(xLinearScale);
  var leftAxis = d3.axisLeft(yLinearScale);

  // append x axis
  var xAxis = chartGroup.append("g")
    .classed("x-axis", true)
    .attr("transform", `translate(0, ${height})`)
    .call(bottomAxis);

  // append y axis
  chartGroup.append("g")
    .call(leftAxis);

  // append initial circles
  var circlesGroup = chartGroup.selectAll("circle")
    .data(data)
    .enter()
    .append("circle")
    .attr("cx", d => xLinearScale(d[chosenXAxis]))
    .attr("cy", d => yLinearScale(d.healthcareLow))
    .attr("r", 8)
    .attr("fill", "steelblue")
    .attr("opacity", ".8");

  circlesGroup.append("text").text(d => d.abbr)
      .attr("x", d => xLinearScale(d[chosenXAxis]) - 6)
      .attr("y", d => yLinearScale(d.healthcareLow) + 3)
      .style("font-size", "9px");

    // Create group for  2 x- axis labels
  var labelsGroup = chartGroup.append("g")
    .attr("transform", `translate(${width / 2}, ${height + 20})`);

  var ageLabel = labelsGroup.append("text")
    .attr("x", 0)
    .attr("y", 40)
    .attr("value", "age") // value to grab for event listener
    .classed("active", true)
    .text("Age (Median)");

  var povertyLabel = labelsGroup.append("text")
    .attr("x", 0)
    .attr("y", 20)
    .attr("value", "poverty") // value to grab for event listener
    .classed("inactive", true)
    .text("In Poverty (%)");

  var incomeLabel = labelsGroup.append("text")
    .attr("x", 0)
    .attr("y", 60)
    .attr("value", "income") // value to grab for event listener
    .classed("active", true)
    .text("Household Income (Median)");

  // append y axis
  var obeseLabel = chartGroup.append("text")
    .attr("transform", "rotate(-90)")
    .attr("y", 0 - margin.left)
    .attr("x", 0 - (height / 2))
    .attr("dy", "1em")
    .attr("value", "obesity")
    .classed("axis-text", true)
    .text("Obese (%)");

  var smokesLabel = chartGroup.append("text")
    .attr("transform", "rotate(-90)")
    .attr("y", 0 - margin.left + 20)
    .attr("x", 0 - (height / 2))
    .attr("dy", "1em")
    .attr("value", "smokes")
    .classed("axis-text", true)
    .text("Smokes (%)");

  var healthcareLabel = chartGroup.append("text")
    .attr("transform", "rotate(-90)")
    .attr("y", 0 - margin.left + 40)
    .attr("x", 0 - (height /2))
    .attr("dy", "1em")
    .attr("value", "healthcareLow")
    .classed("axis-text", true)
    .text("Lacks Healthcare (%)");

    // updateToolTip function above csv import
    var circlesGroup = updateToolTip(chosenXAxis, circlesGroup);

    // x axis labels event listener
    labelsGroup.selectAll("text")
      .on("click", function() {
        // get value of selection
        var value = d3.select(this).attr("value");
        if (value !== chosenXAxis) {

          // replaces chosenXAxis with value
          chosenXAxis = value;

          // console.log(chosenXAxis)

          // functions here found above csv import
          // updates x scale for new data
          xLinearScale = xScale(data, chosenXAxis);

          // updates x axis with transition
          xAxis = renderAxes(xLinearScale, xAxis);

          // updates circles with new x values
          circlesGroup = renderCircles(circlesGroup, xLinearScale, chosenXAxis);

          // updates tooltips with new info
          circlesGroup = updateToolTip(chosenXAxis, circlesGroup);

          // changes classes to change bold text
          if (chosenXAxis === "age") {
            ageLabel
              .classed("active", true)
              .classed("inactive", false);
            povertyLabel
              .classed("active", false)
              .classed("inactive", true);
            incomeLabel
              .classed("active", false)
              .classed("inactive", true);
          }
          else if (chosenXAxis === "income") {
            ageLabel
              .classed("active", false)
              .classed("inactive", true);
            povertyLabel
              .classed("active", false)
              .classed("inactive", true);
            incomeLabel
              .classed("active", true)
              .classed("inactive", false);
          }
          else {
            ageLabel
              .classed("active", false)
              .classed("inactive", true);
            povertyLabel
              .classed("active", true)
              .classed("inactive", false);
            incomeLabel
              .classed("active", false)
              .classed("inactive", true);
          }
        }
      });
  });




//
//   // Define chart scales
//     var xScale = d3.scaleLinear()
//       .domain([0, d3.max(data, xValue)])
//       .range([0, chartWidth]);
//
//     var yScale = d3.scaleBand()
//       .domain(data.map(yValue))
//       .range([0, chartHeight])
//       .padding(1)
//       ;
//
//   // Set the axis
//
//   var g = svg.append("g")
//     .attr("transform", `translate(${margin.left},${margin.top})`);
//
//
//     g.append("g").call(d3.axisLeft(yScale));
//     g.append("g").call(d3.axisBottom(xScale))
//       .attr("transform", `translate(0,${chartHeight})`);
//
//   // Create scatter dots and pass in data
//     var gdots = g.selectAll("scatter-dots")
//       .data(data)
//       .enter()
//       .append("g")
//   // Add circle details
//       gdots.append("circle")
//         .attr("class", "dot")
//         .attr("cy", d => yScale(yValue(d)))
//         .attr("cx", d => xScale(xValue(d)))
//         .attr("r", 10)
//         .attr("fill", "steelblue")
//         .style("opacity", 0.6); // opacity of circle
//
//
//   // Add texts
//         gdots.append("text").text(d => d.abbr)
//                 .attr("x", d => xScale(xValue(d)) - 6)
//                 .attr("y", d => yScale(yValue(d)) + 3)
//                 .style("font-size", "9px")
//                 .style("opacity",0.8)
//                 // event listener for mouseover
//                   .on("mouseover", function() {
//                    d3.select(this)
//                          .style("opacity", 1);
//                  })
//                  // event listener for mouseout
//                  .on("mouseout", function() {
//                    d3.select(this)
//                            .style("opacity",1)
//                  ;
//
// //add tool tips
//   //  var toolTip = d3.tip()
//   //    .attr("class", "tooltip")
//   //    .offset([80, -60])
//   //    .html(function (d) {
//   //      return (`${d.state}<br>Poverty: ${d.poverty}%<br>Healthcare: ${d.healthcareLow}% `);
//   //    });
//   //
//   //    g.call(toolTip);
//   //
//   //    gdots.on("mouseover", function (data) {
//   //   toolTip.show(data, this);
//   // })
//   //   // onmouseout event
//   //   .on("mouseout", function (data) {
//   //     toolTip.hide(data);
//   //   });
//
//
//
//   });
//
//
//
//
//
// var update = data => {
//
//  // Define x and y values
//    var xValue = d => d.age;
//    var yValue = d => d.healthcareLow;
//
//
//  // // Define chart scales
//    xScale
//      .domain([0, d3.max(data, xValue)])
//      // .range([0, chartWidth]);
//
//    yScale
//      .domain(data.map(yValue))
//      // .range([0, chartHeight])
//      .padding(1)
//      ;
//
//    gdots.selectAll("circle")
//      .data(data)
//      .transition()
//      .duration(1500)
//      .attr("cy", d => yScale(yValue(d)))
//      .attr("cx", d => xScale(xValue(d)))
//      ;
//
