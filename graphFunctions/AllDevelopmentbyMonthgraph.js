
	
function AllDevelopmentbyMonthgraph(chartData){
	
if (chartData == null || chartData.length <= 0)
		return;
	
var datatypetouse_Development_by_Month = $('#datatypedd_DevelopmentbyMonthgraph option:selected').text();
var timeframe_Development_by_Month = $('#timeframe_DevelopmentbyMonthgraph option:selected').text();

if (timeframe_Development_by_Month == "Monthly") {
	TimeframeConverted = "Citywide Months Longterm ",
	Xvalues = Xvalues	
	;}
else if (timeframe_Development_by_Month == "Annually") {
	TimeframeConverted = "Citywide Annual Longterm ",
	Xvalues = $.map(chartData, function(data){
			return data["Citywide All Dev Longterm Years"];
		})	
	;}	
else {
	TimeframeConverted = "Citywide Rolling Longterm ",
	Xaxis = Xvalues	
	;}



if (datatypetouse_Development_by_Month == "Total Dwellings Consented") {

	MonthsLength = $.map(chartData, function(data){return data["Citywide Months Longterm Months"];}).length

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
			range: [MonthsLength-24.6,MonthsLength]
			},		
		yaxis: {
			zeroline: false,
			fixedrange: Zooming
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

	MonthsLength = $.map(chartData, function(data){return data["Citywide Months Longterm Months"];}).length 
	
	layout = {
		title: 'Consented Dwellings by Type and Month',
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
			range: [MonthsLength-24.6,MonthsLength]
			},
		yaxis: {
			zeroline: false, 
			fixedrange: Zooming,
			barmode: 'stack'
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

	MonthsLength = $.map(chartData, function(data){return data["Citywide Months Longterm Months"];}).length 
	
	layout = {
		title: 'Consented Dwellings by Type and Month',
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
			range: [MonthsLength-24.6,MonthsLength]
			},
		yaxis: {
			zeroline: false, 
			fixedrange: Zooming
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

	MonthsLength = $.map(chartData, function(data){return data["Citywide Months Longterm Months"];}).length 
	
	layout = {
		title: 'Consented Dwellings by Type and Month',
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
			range: [MonthsLength-24.6,MonthsLength]
			},
		yaxis: {
			zeroline: false, 
			fixedrange: Zooming, 
			barmode: 'stack'
			}
		;}

	
Plotly.newPlot('AllDevelopmentbyMonth', data, layout);
}
