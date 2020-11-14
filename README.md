# Plot.ly-Homework

![image of HW](https://github.com/BPayne-216/Plot.ly-Homework/blob/main/Images/bacteria.jpg)


Plot.ly Homework - Belly Button Biodiversity

Intro to this project

https://bpayne-216.github.io/Plot.ly-Homework/


This project used javascript and a JSON file to create a robust, analytical website based on samples of belly button microbes.  HTML, D3, Plot.ly, and bootstrap were used to create the website.

The motivation of this project is utilize Plot.ly graphing inside of Javascript to create charts that illustrate the details of the Belly Button samples.  The JSON file contained IDs of the samples, along with Microbe detail and demographic characteristics of each sample.

Elements of the Samples.JSON
Names (IDs).  MetaData (consists of demographic data: ID, ethnicity, gender, age, location, bbtype, and ufreq).  Samples (IDs and microbe scientific names).

Elements of HTML file:
Dropdown function: accesses the ID of sample and utilities a dropdown to choose the ID of sample.

BarChart: based on the sample chosen in dropdown, the Top 10 OTUs of the sample.  Needed to reverse.

BubbleChart: Based on the sample chosen in dropdown, the sample values and IDs are reviewed and scaled by bubble size.

Demographic Field Box: details the fields of the metadata JSON based on the chosen ID in the dropdown.

Technology/Framework (In order):  
VS Code Editor: HTML (bootstrap).  Javascript. Within Javascript: D3, Plot.ly.  When reviewing the index.html file, needed to review by accessing http.server.



