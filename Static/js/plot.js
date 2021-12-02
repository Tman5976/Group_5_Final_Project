d3.json("../../Resources/plot1.json").then((data) => {
    var Data = data.data
    let Error = []
    let PV = []
    Data.forEach((row, index) => {
        Error[index] = row.Error
        PV[index] = row.Predicted_Values
    })
    var plot1Data = [
        { y: Error,
          x: PV,
          type: "scatter",
          mode: "markers"
        }];
        var plot1Layout = { title: "MLR Residuals",
        xaxis: { title: "Predicted Values"},
        yaxis: {title: "Error"},
        font: {  family: "Open Sans", size: 24 }
        };
    Plotly.newPlot("plot1", plot1Data, plot1Layout);
});

d3.json("../../Resources/plot2.json").then((data) => {
    var Data = data.data
    let Error = []
    let PV = []
    Data.forEach((row, index) => {
        Error[index] = row.Error
        PV[index] = row.Predicted_Values
    })
    var plot2Data = [
        { y: Error,
          x: PV,
          type: "scatter",
          mode: "markers"
        }];
        var plot2Layout = { title: "MLR Weighted Residuals",
        xaxis: { title: "Predicted Values"},
        yaxis: {title: "Error"},
        font: {  family: "Open Sans" , size: 24}
        };
    Plotly.newPlot("plot2", plot2Data, plot2Layout);
});
