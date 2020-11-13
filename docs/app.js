//Initialize Page
function buildData(sample) {
    //Use D3 fetch to read the JSON file
    d3.json("samples.json").then((importedData) => {
      var metadata = importedData.metadata;
      var resultsarray= importedData.filter(sampleobject => sampleobject.id == sample);
      var result = resultsarray[0]
      var PANEL = d3.select("#sample-metadata");
      PANEL.html("");
      Object.defineProperties(result).forEach(([key, value]) => {
        PANEL.append("h6").text(`${key}: ${value}`);  
      });
    });
  }  
//Begin Chart set-up 

function buildCharts(sample) {
    d3.json("samples.json").then((importedData) => {
        var samples = importedData.samples;
        var resultsarray= importedData.filter(sampleobject => sampleobject.id == sample);
        var result = resultsarray[0]
        //Grab Values from the response json object to build the graphs
        var ids = result.otu_ids;
        var labels = result.otu_labels;
        var values = result.sample_values;
        //Build Bar Chart Top 10 OTU

        var barchart =[
          {
            y:ids.slice(0,10).map(otuID => `OTU ${otuID}`).reverse(),
            x:values.slice(0,10).reverse(),
            text:labels.slice(0,10).reverse(),
            type:"bar",
            orientation:"h"   
          }  
        ];

        var barchartLayout = {
            title: "Top 10 OTUs",
            margin: { t: 30, l: 150 }
        };

        Plotly.newPlot("bar", barchart, barchartLayout);

        //Build Bubble Chart
        var bubblechart = [
          {
           x: ids,
           y: values,
           text: labels,
           mode: "markers",
           marker: {
               color: ids,
               size: values,
           }   
          }  
        ];

        var bubbleLayout = {
            margin: { t: 0 },
            xaxis: { title: "Id's" },
            hovermode: "closest",
        };

        Plotly.plot("bubble", bubblechart, bubbleLayout);
    });
}

function init() {
    var selection = d3.select("selDataset");    
    d3.json("samples.json").then((importedData) => {
      var   

}