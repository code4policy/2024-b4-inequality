// Load the data from the CSV file
d3.csv("vencsv.csv").then(function(data) {
    // Convert strings to numbers
    data.forEach(function(d) {
        d["2008"] = +d["2008"];
        d["2018"] = +d["2018"];
    });

    var margin = { top: 60, right: 20, bottom: 60, left: 50 },
        width = 700 - margin.left - margin.right,
        height = 500 - margin.top - margin.bottom;

    var svg = d3.select("#chart2").append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom);

    var chartGroup = svg.append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    // Add Title
    svg.append("text")
        .attr("x", margin.left)
        .attr("y", 30)
        .attr("text-anchor", "left")
        .style("font-size", "16px")
        .style("font-weight", "bold")
        .text("Venezuela's Change in World Governance Indicators");

    // Add Subtitle
    svg.append("text")
        .attr("x", margin.left)
        .attr("y", 50)
        .attr("text-anchor", "left")
        .style("font-size", "12px")
        .text("Between 2008 (green) and 2018 (brown), Venezuela was led by Nicolas");

    var x = d3.scaleBand()
        .range([0, width])
        .padding(0.1);
    var y = d3.scaleLinear()
        .range([height, 0]);

    x.domain(data.map(function(d) { return d.wgi; }));
    y.domain([0, d3.max(data, function(d) { return Math.max(d["2008"], d["2018"]); })]);

    chartGroup.selectAll(".bar2008")
        .data(data)
        .enter().append("rect")
        .attr("class", "bar bar2008")
        .attr("x", function(d) { return x(d.wgi); })
        .attr("width", x.bandwidth() / 2)
        .attr("y", function(d) { return y(d["2008"]); })
        .attr("height", function(d) { return height - y(d["2008"]); })
        .style("fill", "#43766C"); // Set color for 2008 bars

    chartGroup.selectAll(".bar2018")
        .data(data)
        .enter().append("rect")
        .attr("class", "bar")
        .attr("x", function(d) { return x(d.wgi) + x.bandwidth() / 2; })
        .attr("width", x.bandwidth() / 2)
        .attr("y", function(d) { return y(d["2018"]); })
        .attr("height", function(d) { return height - y(d["2018"]); })
        .style("fill", "#B19470"); // Set color for 2018 bars

    chartGroup.append("g")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(x));

    chartGroup.append("g")
        .call(d3.axisLeft(y));
}).catch(function(error) {
    console.error("Error loading the CSV file:", error);
});
