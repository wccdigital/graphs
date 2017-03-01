function AllDevelopmentbyMonthgraph(chartData){
	
if (chartData == null || chartData.length <= 0)
		return;
	
var datatypetouse_Development_by_Month = $('#datatypedd_DevelopmentbyMonthgraph option:selected').text();
var timeframe_Development_by_Month = $('#timeframe_DevelopmentbyMonthgraph option:selected').text();

if (datatypetouse_Development_by_Month == "Constructed Dwellings" && timeframe_Development_by_Month == "Years") {
	VisType = 'line',
	xValues = $.map(chartData, function(data){
			return data["Citywide Years Longterm Years"];
		})
	;}
else if (datatypetouse_Development_by_Month == "New Parcels" && timeframe_Development_by_Month == "Years") {
	VisType = 'line',
	xValues = $.map(chartData, function(data){
			return data["Citywide Years Longterm Years"];
		})
	;}
else if (datatypetouse_Development_by_Month == "New Parcels" && timeframe_Development_by_Month == "Rolling Average") {
	VisType = 'bar',
	xValues = $.map(chartData, function(data){
			return data["Citywide All Months"];
		})
	;}
else if (timeframe_Development_by_Month == "Months") {
	VisType = 'bar',
	xValues = $.map(chartData, function(data){
			return data["Citywide All Months"];
		})
	;}
else if (timeframe_Development_by_Month == "Years") {
	VisType = 'bar',
	xValues = $.map(chartData, function(data){
			return data["Citywide Years Longterm Years"];
		})
	;}	
else {
	VisType = 'line',
	xValues = $.map(chartData, function(data){
			return data["Citywide All Months"];
		})
	;}

TimeframeConverted = "Citywide "+timeframe_Development_by_Month+" Longterm ";
var NonEmptyLength;
var StartPoint;
var EndPoint;
var xRange = [];


function ValuesExtract(yValues, xValues){
	
	var i = 0;
	var stop = 0;
	var startingpoint = 0;
	
	while (stop == 0){
		if (yValues[i] == '')
			{
			i++
 		 	;}
		else 
			{
			startingpoint = i,
			stop = 1
			NonEmptyLength = yValues.length-startingpoint
			;}
		;}
		
StartPoint = xValues.length-NonEmptyLength;
EndPoint = xValues.length;
xRange = xValues.slice(StartPoint,EndPoint);	
	;}

	
if (datatypetouse_Development_by_Month == "Total Dwellings Consented") {

	var yValues = $.map(chartData, function(data){
			return data[TimeframeConverted+"Total New Dwellings"];
		});
	ValuesExtract(yValues, xValues);

	data = [{
		x: xRange,
		y: ($.map(chartData, function(data){
			return data[TimeframeConverted+"Total New Dwellings"];
		})).slice(StartPoint,EndPoint),
		type: VisType,
		line: {width: 6,},
		connectgaps: true,
		marker: {color: Colour1}
        }];

	layout = {
		title: 'Total Dwellings Consented',
		showlegend: false,
		xaxis: {
			zeroline: false,
			tickmode: 'auto',
			tickangle: 45,
			fixedrange: Zooming
			},		
		yaxis: {
			zeroline: false,
			fixedrange: Zooming
			},
		}
	;}

else if (datatypetouse_Development_by_Month == "Consented Dwellings by Type") {

	var yValues = $.map(chartData, function(data){
		return data[TimeframeConverted+"New Houses"];
		});
		
	ValuesExtract(yValues, xValues);


	data = [{
		x: xRange,
		y: ($.map(chartData, function(data){
			return data[TimeframeConverted+"New Houses"];
		})).slice(StartPoint,EndPoint),
		name: "Houses",
		type: 'line',
		connectgaps: true,
		line: {width: 5,},
		marker: {color: Colour1}
		
        },{
		x: xRange,
		y: ($.map(chartData, function(data){
			return data[TimeframeConverted+"New Units"];
		})).slice(StartPoint,EndPoint),
		name: "Units",
		type: 'line',
		connectgaps: true,
		line: {width: 5,},
		marker: {color: Colour2}
		
        },{
		x: xRange,
		y: ($.map(chartData, function(data){
			return data[TimeframeConverted+"New Apartments"];
		})).slice(StartPoint,EndPoint),
		name: "Apartments",
		type: 'line',
		connectgaps: true,
		line: {width: 5,},
		marker: {color: Colour4}
		
        },{
		x: xRange,
		y: ($.map(chartData, function(data){
			return data[TimeframeConverted+"Retirement Village Units"];
		})).slice(StartPoint,EndPoint),
		name: "Retirement Village Units",
		type: 'line',
		connectgaps: true,
		line: {width: 5,},
		marker: {color: Colour5}
		
        },{
		x: xRange,
		y: ($.map(chartData, function(data){
			return data[TimeframeConverted+"Total New Dwellings"];
		})).slice(StartPoint,EndPoint),
		name: "Total",
		type: 'bar',
		opacity: 0.7,
		marker: {color: Colour3}
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
			fixedrange: Zooming
			},
		yaxis: {
			zeroline: false, 
			fixedrange: Zooming,
			barmode: 'stack'
			}
		}
	;}

	
else if (datatypetouse_Development_by_Month == "Value of Consented Construction") {

	var yValues = $.map(chartData, function(data){
		return data[TimeframeConverted+"Residential Buildings"];
		});
	
	ValuesExtract(yValues, xValues);


	data = [{
		x: xRange,
		y: ($.map(chartData, function(data){
			return data[TimeframeConverted+"Residential Buildings"];
		})).slice(StartPoint,EndPoint),
		name: "Residential Buildings",
		type: VisType,
		line: {width: 6,},
		connectgaps: true,
		marker: {color: Colour1}
		
        },{
		x: xRange,
		y: ($.map(chartData, function(data){
			return data[TimeframeConverted+"NonResidential Construction"];
		})).slice(StartPoint,EndPoint),
		name: "Non-Residential Construction",
		type: VisType,
		line: {width: 6,},
		connectgaps: true,
		marker: {color: Colour2}
		
        },{
		x: xRange,
		y: ($.map(chartData, function(data){
			return data[TimeframeConverted+"Total Construction Value"];
		})).slice(StartPoint,EndPoint),
		name: "Total Construction Value",
		type: 'line',
		line: {width: 6,},
		connectgaps: true,
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
			fixedrange: Zooming
			},
		yaxis: {
			zeroline: false, 
			fixedrange: Zooming,
			tickformat: '$,s', 
			hoverformat: '$,.4s'
			}
		}
	;}
	
else if (datatypetouse_Development_by_Month == "Constructed Dwellings") {

	var yValues = $.map(chartData, function(data){
		return data[TimeframeConverted+"Constructed Dwellings"];
		});
	
	ValuesExtract(yValues, xValues);

	data = [{
		x: xRange,
		y: ($.map(chartData, function(data){
			return data[TimeframeConverted+"Constructed Dwellings"];
		})).slice(StartPoint,EndPoint),
		name: "Constructed Dwellings",
		type: VisType,
		line: {width: 6,},
		connectgaps: true,
		marker: {color: Colour1}
        }];

	layout = {
		title: 'Constructed Dwellings',
		showlegend: false,
//		legend: {x: 0.8, y: 0.9},
//		legend : {orientation: 'h'},
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
			fixedrange: Zooming
			}
		}
	;}
	
else if (datatypetouse_Development_by_Month == "New Parcels") {

	var yValues = $.map(chartData, function(data){
		return data[TimeframeConverted+"New Parcels"];
		});
	
	ValuesExtract(yValues, xValues);

	data = [{
		x: xRange,
		y: ($.map(chartData, function(data){
			return data[TimeframeConverted+"New Parcels"];
		})).slice(StartPoint,EndPoint),
		name: "New Parcels",
		type: VisType,
		line: {width: 6,},
		connectgaps: true,
		marker: {color: Colour1}
        }];

	layout = {
		title: 'New Parcels',
		showlegend: false,
//		legend: {x: 0.8, y: 0.9},
		legend : {orientation: 'h'},
		xaxis: {
			zeroline: false, 
			tickmode: 'auto',
			tickangle: 22.5, 
			fixedrange: Zooming
			},
		yaxis: {
			zeroline: false, 
			fixedrange: Zooming
			}
		}
	;}	
	
else {

	var yValues = $.map(chartData, function(data){
		return data[TimeframeConverted+"Land Use Consents"];
		});
	
	ValuesExtract(yValues, xValues);

	data = [{
		x: xRange,
		y: ($.map(chartData, function(data){
			return data[TimeframeConverted+"Land Use Consents"];
		})).slice(StartPoint,EndPoint),
		name: "Land Use Consents",
		type: VisType,
		line: {width: 6,},
		connectgaps: true,
		marker: {color: Colour1}
		
        },{
		x: xRange,
		y: ($.map(chartData, function(data){
			return data[TimeframeConverted+"Subdivision Consents"];
		})).slice(StartPoint,EndPoint),
		name: "Subdivision Consents",
		type: VisType,
		line: {width: 6,},
		connectgaps: true,
		marker: {color: Colour2}
		
        },{
		x: xRange,
		y: ($.map(chartData, function(data){
			return data[TimeframeConverted+"Combined Consents"];
		})).slice(StartPoint,EndPoint),
		name: "Combined Consents",
		type: VisType,
		line: {width: 6,},
		connectgaps: true,
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
			tickmode: 'auto',
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
