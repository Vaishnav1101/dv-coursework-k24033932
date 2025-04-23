d3.csv("data.csv", d3.autoType).then(data => {
  const width = 960;
  const height = 600;

  const svg = d3.select("svg")
    .attr("width", width)
    .attr("height", height);

  const tooltip = d3.select("body").append("div")
    .attr("class", "tooltip")
    .style("position", "absolute")
    .style("background", "#fff")
    .style("padding", "6px 10px")
    .style("border", "1px solid #999")
    .style("border-radius", "5px")
    .style("pointer-events", "none")
    .style("opacity", 0)
    .style("font-size", "13px");

  const seasons = Array.from(new Set(data.map(d => d.season))).sort(d3.ascending);

  const controls = d3.select("#controls");

  controls.append("label").text("Season: ");

  const slider = controls.append("input")
    .attr("type", "range")
    .attr("min", d3.min(seasons))
    .attr("max", d3.max(seasons))
    .attr("step", 1)
    .attr("value", d3.min(seasons))
    .attr("id", "seasonSlider");

  const seasonLabel = controls.append("span")
    .attr("id", "seasonLabel")
    .style("margin", "0 10px")
    .text(d3.min(seasons));

  controls.append("label").text(" Highlight: ");

  const dropdown = controls.append("select")
    .attr("id", "highlightDropdown");

  const highlightOptions = ["PL Winner", "FA Cup", "EFL Cup", "UEFA", "Relegated", "None"];
  dropdown.selectAll("option")
    .data(highlightOptions)
    .enter()
    .append("option")
    .text(d => d);

  const colorScale = d => {
    if (highlight === "PL Winner" && d.premier_league_winner) return "#1f77b4";
    if (highlight === "FA Cup" && d.fa_cup) return "#ff7f0e";
    if (highlight === "EFL Cup" && d.efl_cup) return "#2ca02c";
    if (highlight === "UEFA") {
      if (d.uefa_tier === "Champions League") return "#9467bd";
      if (d.uefa_tier === "Europa League") return "#8c564b";
      if (d.uefa_tier === "Conference League") return "#e377c2";
    }
    if (highlight === "Relegated" && d.relegation) return "#d62728";
    return "#c0c0c0";
  };

  const sizeScale = d3.scaleSqrt()
    .domain([0, d3.max(data, d => d.spend_gbp)])
    .range([5, 45]);

  let highlight = "PL Winner";
  let currentSeason = seasons[0];

  function render() {
    const seasonData = data.filter(d => d.season === currentSeason);

    const nodes = seasonData.map(d => ({
      id: d.club,
      radius: sizeScale(d.spend_gbp),
      color: colorScale(d),
      spend: d.spend_gbp,
      x: 0,
      y: 0
    }));

    const simulation = d3.forceSimulation(nodes)
      .force("x", d3.forceX(width / 2).strength(0.05))
      .force("y", d3.forceY(height / 2).strength(0.05))
      .force("collide", d3.forceCollide(d => d.radius + 2))
      .stop();

    for (let i = 0; i < 200; ++i) simulation.tick();

    svg.selectAll("*").remove();

    const node = svg.selectAll("circle")
      .data(nodes)
      .join("circle")
      .attr("cx", d => d.x)
      .attr("cy", d => d.y)
      .attr("r", d => d.radius)
      .attr("fill", d => d.color)
      .attr("stroke", "#333")
      .attr("stroke-width", 1.5)
      .on("mouseover", (event, d) => {
        tooltip.transition().duration(200).style("opacity", 0.95);
        tooltip.html(`<strong>${d.id}</strong><br/>Spend: £${d3.format(",.1f")(d.spend)}m`)
          .style("left", (event.pageX + 12) + "px")
          .style("top", (event.pageY - 28) + "px");
      })
      .on("mousemove", (event) => {
        tooltip.style("left", (event.pageX + 12) + "px")
               .style("top", (event.pageY - 28) + "px");
      })
      .on("mouseout", () => {
        tooltip.transition().duration(300).style("opacity", 0);
      });

    svg.selectAll("text")
      .data(nodes)
      .join("text")
      .attr("x", d => d.x)
      .attr("y", d => d.y + 4)
      .text(d => d.id)
      .attr("text-anchor", "middle")
      .style("font-size", "10px")
      .style("pointer-events", "none");
  }

  function update() {
    currentSeason = +slider.property("value");
    highlight = dropdown.property("value");
    seasonLabel.text(currentSeason);
    render();
  }

  slider.on("input", update);
  dropdown.on("change", update);

  render();
});
