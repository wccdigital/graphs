function AllDevelopmentbyMonthgraph(chartData){
	
if (chartData == null || chartData.length <= 0)
		return;
	
var datatypetouse_Development_by_Month = $('#datatypedd_DevelopmentbyMonthgraph option:selected').text();
var timeframe_Development_by_Month = $('#timeframe_DevelopmentbyMonthgraph option:selected').text();

if (datatypetouse_Development_by_Month == "Resource Consents" && timeframe_Development_by_Month == "Monthly") {
	TimeframeConverted = "Citywide Months Longterm ",
	Xvalues = $.map(chartData, function(data){
			return data["Citywide RCs All Months"];
		})		
	xRange = [Xvalues.length-24.6,Xvalues.length]
	;}
else if (datatypetouse_Development_by_Month == "Resource Consents" && timeframe_Development_by_Month == "Annually") {
	TimeframeConverted = "Citywide Annual Longterm ",
	Xvalues = $.map(chartData, function(data){
			return data["Citywide Annual RCs Years"];
		})		
	xRange = [Math.min(Xvalues),Math.max(Xvalues)]
	;}
else if (datatypetouse_Development_by_Month == "Resource Consents" && timeframe_Development_by_Month == "Rolling") {
	TimeframeConverted = "Citywide Rolling Longterm ",
	Xvalues = $.map(chartData, function(data){
			return data["Citywide Rolling RCs Months"];
		})		
	xRange = [Math.max(Xvalues)-24.6,Math.max(Xvalues)]
	;}
else if (timeframe_Development_by_Month == "Monthly") {
	TimeframeConverted = "Citywide Months Longterm ",
	Xvalues = $.map(chartData, function(data){
			return data["Citywide Months Longterm Months"];
		})		
	xRange = [Xvalues.length-24.6,Xvalues.length]
	;}
else if (timeframe_Development_by_Month == "Annually") {
	TimeframeConverted = "Citywide Annual Longterm ",
	Xvalues = $.map(chartData, function(data){
			return data["Citywide Annual Longterm Years"];
		})	
	xRange = [Math.min(Xvalues),Math.max(Xvalues)]
	;}	
else {
	TimeframeConverted = "Citywide Rolling Longterm ",
	Xvalues = $.map(chartData, function(data){
			return data["Citywide Rolling Longterm Months"];
		})		
	xRange = [Math.max(Xvalues)-24.6,Math.max(Xvalues)]
	;}

	



if (datatypetouse_Development_by_Month == "Total Dwellings Consented") {

	data = [{
		x: Xvalues,
		y: $.map(chartData, function(data){
			return data[TimeframeConverted+"Total New Dwellings"];
		}),
		type: 'bar',
		marker: {color: Colour1}
        }];

	layout = {
		title: 'Total Dwellings Consented by Month',
		showlegend: false,
		xaxis: {
			zeroline: false,
			tickmode: 'auto',
			tickangle: 45,
			fixedrange: Zooming,
			range: xRange
			},		
		yaxis: {
			zeroline: false,
			fixedrange: Zooming,
			range: [0,200]
			},
		}
	;}

else if (datatypetouse_Development_by_Month == "Consented Dwellings by Type") {

	data = [{
		x: Xvalues,
		y: $.map(chartData, function(data){
			return data[TimeframeConverted+"New Houses"];
		}),
		name: "Houses",
		type: 'bar',
		marker: {color: Colour1}
		
        },{
		x: Xvalues,
		y: $.map(chartData, function(data){
			return data[TimeframeConverted+"New Units"];
		}),
		name: "Units",
		type: 'bar',
		marker: {color: Colour2}
		
        },{
		x: Xvalues,
		y: $.map(chartData, function(data){
			return data[TimeframeConverted+"New Apartments"];
		}),
		name: "Apartments",
		type: 'bar',
		marker: {color: Colour3}
		
        },{
		x: Xvalues,
		y: $.map(chartData, function(data){
			return data[TimeframeConverted+"Retirement Village Units"];
		}),
		name: "Retirement Village Units",
		type: 'bar',
		marker: {color: Colour4}
        }];

	layout = {
		title: 'Consented Dwellings by Type',
		showlegend: true,
//		legend: {x: 0.8, y: 0.9},
		legend : {orientation: 'h'},
		xaxis: {
			zeroline: false, 
			tickmode: 'linear',
			tick0: 0,
			dtick: 2,
			tickangle: 22.5, 
			fixedrange: Zooming,
			range: xRange
			},
		yaxis: {
			zeroline: false, 
			fixedrange: Zooming,
			barmode: 'stack',
			range: [0,200]
			}
		}
	;}

	
else if (datatypetouse_Development_by_Month == "Value of Consented Construction") {

	data = [{
		x: Xvalues,
		y: $.map(chartData, function(data){
			return data[TimeframeConverted+"Residential Buildings"];
		}),
		name: "Residential Buildings",
		type: 'bar',
		marker: {color: Colour1}
		
        },{
		x: Xvalues,
		y: $.map(chartData, function(data){
			return data[TimeframeConverted+"NonResidential Construction"];
		}),
		name: "NonResidential Construction",
		type: 'bar',
		marker: {color: Colour2}
		
        },{
		x: Xvalues,
		y: $.map(chartData, function(data){
			return data[TimeframeConverted+"Total Construction Value"];
		}),
		name: "Total Construction Value",
		type: 'line',
		marker: {color: Colour3}
		
        }];

	layout = {
		title: 'Value of Consented Construction',
		showlegend: true,
//		legend: {x: 0.8, y: 0.9},
		legend : {orientation: 'h'},
		xaxis: {
			zeroline: false, 
			tickmode: 'linear',
			tick0: 0,
			dtick: 2,
			tickangle: 22.5, 
			fixedrange: Zooming,
			range: xRange
			},
		yaxis: {
			zeroline: false, 
			fixedrange: Zooming,
			tickformat: '$,s', 
			hoverformat: '$,.4s'
			}
		}
	;}
	
		
else {

	data = [{
		x: Xvalues,
		y: $.map(chartData, function(data){
			return data[TimeframeConverted+"Land Use Consents"];
		}),
		name: "Land Use Consents",
		type: 'bar',
		marker: {color: Colour1}
		
        },{
		x: Xvalues,
		y: $.map(chartData, function(data){
			return data[TimeframeConverted+"Subdivision Consents"];
		}),
		name: "Subdivision Consents",
		type: 'bar',
		marker: {color: Colour2}
		
        },{
		x: Xvalues,
		y: $.map(chartData, function(data){
			return data[TimeframeConverted+"Combined Consents"];
		}),
		name: "Combined Land Use and Subdivision Consents",
		type: 'bar',
		marker: {color: Colour3}
		
        }];

	layout = {
		title: 'Resource Consents',
		showlegend: true,
//		legend: {x: 0.8, y: 0.9},
		legend : {orientation: 'h'},
		barmode: 'stack',
		xaxis: {
			zeroline: false, 
			tickmode: 'linear',
			tick0: 0,
			dtick: 2,
			tickangle: 22.5, 
			fixedrange: Zooming
			},
		yaxis: {
			zeroline: false, 
			fixedrange: Zooming, 
			}
		}
	;}

	
Plotly.newPlot('AllDevelopmentbyMonth', data, layout);
}
