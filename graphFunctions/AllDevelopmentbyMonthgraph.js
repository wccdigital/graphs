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


if (datatypetouse_Development_by_Month == "Total Dwellings Consented") {

	var yValues = $.map(chartData, function(data){
			return data[TimeframeConverted+"Total New Dwellings"];
		});
	
	var TempCount = 0;
	var i = yValues.length;

	while (i--) {
		if (yValues[i] == '')
			TempCount++;
		}

	var NonEmptyLength = yValues.length-TempCount;
	var xRange = xValues.slice(xValues.length-NonEmptyLength,xValues.length);

	alert(($.map(chartData, function(data){
			return data[TimeframeConverted+"Total New Dwellings"];
		})).slice(xValues.length-NonEmptyLength,xValues.length))
	
	
	data = [{
		x: xRange,
		y: ($.map(chartData, function(data){
			return data[TimeframeConverted+"Total New Dwellings"];
		})).slice(xValues.length-NonEmptyLength,xValues.length),
		type: VisType,
		line: {width: 6,},
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
	
	var TempCount = 0;
	var i = yValues.length;

	while (i--) {
		if (yValues[i] == '')
			TempCount++;
		}

	var NonEmptyLength = yValues.length-TempCount;
	var xRange = xValues.slice(xValues.length-NonEmptyLength,xValues.length);

	data = [{
		x: xRange,
		y: ($.map(chartData, function(data){
			return data[TimeframeConverted+"New Houses"];
		})).slice(xValues.length-NonEmptyLength,xValues.length),
		name: "Houses",
		type: 'line',
		line: {width: 5,},
		marker: {color: Colour1}
		
        },{
		x: xRange,
		y: ($.map(chartData, function(data){
			return data[TimeframeConverted+"New Units"];
		})).slice(xValues.length-NonEmptyLength,xValues.length),
		name: "Units",
		type: 'line',
		line: {width: 5,},
		marker: {color: Colour2}
		
        },{
		x: xRange,
		y: ($.map(chartData, function(data){
			return data[TimeframeConverted+"New Apartments"];
		})).slice(xValues.length-NonEmptyLength,xValues.length),
		name: "Apartments",
		type: 'line',
		line: {width: 5,},
		marker: {color: Colour4}
		
        },{
		x: xRange,
		y: ($.map(chartData, function(data){
			return data[TimeframeConverted+"Retirement Village Units"];
		})).slice(xValues.length-NonEmptyLength,xValues.length),
		name: "Retirement Village Units",
		type: 'line',
		line: {width: 5,},
		marker: {color: Colour5}
		
        },{
		x: xRange,
		y: ($.map(chartData, function(data){
			return data[TimeframeConverted+"Total New Dwellings"];
		})).slice(xValues.length-NonEmptyLength,xValues.length),
		name: "Total New Dwellings",
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
	
	var TempCount = 0;
	var i = yValues.length;

	while (i--) {
		if (yValues[i] == '')
			TempCount++;
		}

	var NonEmptyLength = yValues.length-TempCount;
	var xRange = xValues.slice(xValues.length-NonEmptyLength,xValues.length);

	data = [{
		x: xRange,
		y: ($.map(chartData, function(data){
			return data[TimeframeConverted+"Residential Buildings"];
		})).slice(xValues.length-NonEmptyLength,xValues.length),
		name: "Residential Buildings",
		type: VisType,
		line: {width: 6,},
		marker: {color: Colour1}
		
        },{
		x: xRange,
		y: ($.map(chartData, function(data){
			return data[TimeframeConverted+"NonResidential Construction"];
		})).slice(xValues.length-NonEmptyLength,xValues.length),
		name: "NonResidential Construction",
		type: VisType,
		line: {width: 6,},
		marker: {color: Colour2}
		
        },{
		x: xRange,
		y: ($.map(chartData, function(data){
			return data[TimeframeConverted+"Total Construction Value"];
		})).slice(xValues.length-NonEmptyLength,xValues.length),
		name: "Total Construction Value",
		type: 'line',
		line: {width: 6,},
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
	
	var TempCount = 0;
	var i = yValues.length;

	while (i--) {
		if (yValues[i] == '')
			TempCount++;
		}

	var NonEmptyLength = yValues.length-TempCount;
	var xRange = xValues.slice(xValues.length-NonEmptyLength,xValues.length);

	data = [{
		x: xRange,
		y: ($.map(chartData, function(data){
			return data[TimeframeConverted+"Constructed Dwellings"];
		})).slice(xValues.length-NonEmptyLength,xValues.length),
		name: "Constructed Dwellings",
		type: VisType,
		line: {width: 6,},
		marker: {color: Colour1}
        }];

	layout = {
		title: 'Constructed Dwellings',
		showlegend: true,
//		legend: {x: 0.8, y: 0.9},
		legend : {orientation: 'h'},
		xaxis: {
			zeroline: false, 
			tickmode: 'linear',
			tick0: 0,
			dtick: 2,
			tickangle: 22.5, 
			fixedrange: Zooming			},
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
	
	var TempCount = 0;
	var i = yValues.length;

	while (i--) {
		if (yValues[i] == '')
			TempCount++;
		}

	var NonEmptyLength = yValues.length-TempCount;
	var xRange = xValues.slice(xValues.length-NonEmptyLength,xValues.length);

	data = [{
		x: xRange,
		y: ($.map(chartData, function(data){
			return data[TimeframeConverted+"New Parcels"];
		})).slice(xValues.length-NonEmptyLength,xValues.length),
		name: "New Parcels",
		type: VisType,
		line: {width: 6,},
		marker: {color: Colour1}
        }];

	layout = {
		title: 'New Parcels',
		showlegend: false,
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
			fixedrange: Zooming
			}
		}
	;}	
	
else {

	var yValues = $.map(chartData, function(data){
		return data[TimeframeConverted+"Land Use Consents"];
		});
	
	var TempCount = 0;
	var i = yValues.length;

	while (i--) {
		if (yValues[i] == '')
			TempCount++;
		}

	var NonEmptyLength = yValues.length-TempCount;
	var xRange = xValues.slice(xValues.length-NonEmptyLength,xValues.length);

	data = [{
		x: xRange,
		y: ($.map(chartData, function(data){
			return data[TimeframeConverted+"Land Use Consents"];
		})).slice(xValues.length-NonEmptyLength,xValues.length),
		name: "Land Use Consents",
		type: VisType,
		line: {width: 6,},
		marker: {color: Colour1}
		
        },{
		x: xRange,
		y: ($.map(chartData, function(data){
			return data[TimeframeConverted+"Subdivision Consents"];
		})).slice(xValues.length-NonEmptyLength,xValues.length),
		name: "Subdivision Consents",
		type: VisType,
		line: {width: 6,},
		marker: {color: Colour2}
		
        },{
		x: xRange,
		y: ($.map(chartData, function(data){
			return data[TimeframeConverted+"Combined Consents"];
		})).slice(xValues.length-NonEmptyLength,xValues.length),
		name: "Combined Consents",
		type: VisType,
		line: {width: 6,},
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
