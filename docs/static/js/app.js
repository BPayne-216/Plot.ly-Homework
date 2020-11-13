//Initialize Page
function buildMetadata(sample) {
    //Use D3 fetch to read the JSON file
    d3.json("samples.json").then((importedData) => {
        //console.log(importedData):
        console.log(importedData)
        var sampleIds = importedData.samples[0].otu_ids;
        var sampleValues = importedData.samples[0].sample_values.slice(0,10).reverse();
        var sampleLabels = importedData.samples[0].otu__labels.slice(0,10).reverse();
    })
} 
