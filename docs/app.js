//  Initialize Page
function buildData(sample) {
	//  Use D3 fetch to read the JSON file
	d3.json("samples.json").then((importedData) => {
		var metadata = importedData.metadata;
		var metaarray = metadata.filter(sampleobject => sampleobject.id == sample);
		var result = metaarray[0]
		var PANEL = d3.select("#sample-metadata");
		PANEL.html("");
		Object.entries(result).forEach(([key, value]) => {
			PANEL.append("h6").text(`${key}: ${value}`);
		});
	});
}
//  Begin Function and Chart set-up 

function buildCharts(sample) {
	d3.json("samples.json").then((importedData) => {
		var samples = importedData.samples;
		var metaarray = samples.filter(sampleobject => sampleobject.id == sample);
		var result = metaarray[0]
		console.log(result);
		//  Grab Values from the response json object to build the graphs
		var ids = result.otu_ids;
		var labels = result.otu_labels;
		var values = result.sample_values;
		console.log(values);
		//  Build Bar Chart Top 10 OTU
		//  Create Trace and reverse order for chart
		var trace1 = {
			y: ids.slice(0, 10).map(otuID => `OTU ${otuID}`).reverse(),
			x: values.slice(0, 10).reverse(),
			text: labels.slice(0, 10).reverse(),
			type: "bar",
			orientation: "h"
		};
		//  Array for barchart
		var barchart = [trace1];
		//  Bar Chart Layout
		var barchartLayout = {
			title: "Top 10 OTUs",
			margin: {
				t: 30,
				l: 150
			}
		};
		//  Plot Barchart
		Plotly.newPlot("bar", barchart, barchartLayout);

		//  Trace for bubblechart
		var trace2 = {
			x: ids,
			y: values,
			text: labels,
			mode: "markers",
			marker: {
				color: ids,
				size: values,
			}
		};
		//  Array for bubblechart
		var bubblechart = [trace2];
		//  Bubblechart Layout
		var bubbleLayout = {
			margin: {
				t: 0
			},
			xaxis: {
				title: "Id's"
			},
			hovermode: "closest",
		};
		//  Plot Bubblechart
		Plotly.plot("bubble", bubblechart, bubbleLayout);
	});
}
//  function when dropdown is selected
function init() {
	var selection = d3.select("#selDataset");
	//  Use D3 to select dropdown
	d3.json("samples.json").then((importedData) => {
		//  Assign the value of dropdown menu to a variable
		var sampleNames = importedData.names;
		sampleNames.forEach((sample) => {
			selection
				.append("option")
				.text(sample)
				.property("value", sample);
		});

		const firstSample = sampleNames[0];
		buildCharts(firstSample);
		buildData(firstSample);
	});
}

function optionChanged(nextSample) {
	buildCharts(nextSample);
	buildData(nextSample);
}

init();