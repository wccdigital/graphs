function AllDevelopmentbyMonthgraph(chartData){
	
if (chartData == null || chartData.length <= 0)
		return;
	
var datatypetouse_Development_by_Month = $('#datatypedd_DevelopmentbyMonthgraph option:selected').text();
var timeframe_Development_by_Month = $('#timeframe_DevelopmentbyMonthgraph option:selected').text();

if (datatypetouse_Development_by_Month == "Constructed Dwellings" && timeframe_Development_by_Month == "Years") {
	VisType = 'line';
	xValues = $.map(chartData, function(data){
			return data["Citywide Years Longterm Years"];
		});
	removeblanks(xValues, '')
	;}
else if (datatypetouse_Development_by_Month == "New Parcels" && timeframe_Development_by_Month == "Years") {
	VisType = 'line';
	xValues = $.map(chartData, function(data){
			return data["Citywide Years Longterm Years"];
		});
	removeblanks(xValues, '')
	;}
else if (datatypetouse_Development_by_Month == "New Parcels" && timeframe_Development_by_Month == "Rolling Average") {
	VisType = 'bar';
	xValues = $.map(chartData, function(data){
			return data["Citywide All Months"];
		});
	removeblanks(xValues, '')
	;}
else if (timeframe_Development_by_Month == "Months") {
	VisType = 'bar';
	xValues = $.map(chartData, function(data){
			return data["Citywide All Months"];
		});
	removeblanks(xValues, '')
	;}
else if (timeframe_Development_by_Month == "Years") {
	VisType = 'bar';
	xValues = $.map(chartData, function(data){
			return data["Citywide Years Longterm Years"];
		});
	removeblanks(xValues, '')
	;}	
else {
	VisType = 'line';
	xValues = $.map(chartData, function(data){
			return data["Citywide All Months"];
		});
	removeblanks(xValues, '')
	;}

TimeframeConverted = "Citywide "+timeframe_Development_by_Month+" Longterm ";


function removeblanks(arr) {
    var what, a = arguments, L = a.length, ax;
    while (L > 1 && arr.length) {
        what = a[--L];
        while ((ax= arr.indexOf(what)) !== -1) {
            arr.splice(ax, 1);
        }
    }
    return arr;
}


if (datatypetouse_Development_by_Month == "Total Dwellings Consented") {

	data = [{
		x: xValues,
		y: removeblanks($.map(chartData, function(data){
			return data[TimeframeConverted+"Total New Dwellings"];
		}),''),
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

	data = [{
		x: xValues,
		y: removeblanks($.map(chartData, function(data){
			return data[TimeframeConverted+"New Houses"];
		}),''),
		name: "Houses",
		type: 'line',
		connectgaps: true,
		line: {width: 5,},
		marker: {color: Colour1}
		
        },{
		x: xValues,
		y: removeblanks($.map(chartData, function(data){
			return data[TimeframeConverted+"New Units"];
		}),''),
		name: "Units",
		type: 'line',
		connectgaps: true,
		line: {width: 5,},
		marker: {color: Colour2}
		
        },{
		x: xValues,
		y: removeblanks($.map(chartData, function(data){
			return data[TimeframeConverted+"New Apartments"];
		}),''),
		name: "Apartments",
		type: 'line',
		connectgaps: true,
		line: {width: 5,},
		marker: {color: Colour4}
		
        },{
		x: xValues,
		y: removeblanks($.map(chartData, function(data){
			return data[TimeframeConverted+"Retirement Village Units"];
		}),''),
		name: "Retirement Village Units",
		type: 'line',
		connectgaps: true,
		line: {width: 5,},
		marker: {color: Colour5}
		 
        },{
		x: xValues,
		y: removeblanks($.map(chartData, function(data){
			return data[TimeframeConverted+"Total New Dwellings"];
		}),''),
		name: "Total",
		type: 'bar',
		connectgaps: true,
		opacity: 0.7,
		marker: {color: Colour3}
        }];

	layout = {
		title: 'Consented Dwellings by Type',
		showlegend: true,
//		legend: {x: 0.8, y: 0.9},
		legend : {orientation: 'h', y: '-0.25'},
		xaxis: {
			zeroline: false, 
			tickmode: 'linear',
			tick0: 0,
			dtick: 2,
			tickangle: 45,
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

	data = [{
		x: xValues,
		y: removeblanks($.map(chartData, function(data){
			return data[TimeframeConverted+"Residential Buildings"];
		}),''),
		name: "Residential Buildings",
		type: VisType,
		line: {width: 6,},
		connectgaps: true,
		marker: {color: Colour1}
		
        },{
		x: xValues,
		y: removeblanks($.map(chartData, function(data){
			return data[TimeframeConverted+"NonResidential Construction"];
		}),''),
		name: "Non-Residential Construction",
		type: VisType,
		line: {width: 6,},
		connectgaps: true,
		marker: {color: Colour2}
		
        },{
		x: xValues,
		y: removeblanks($.map(chartData, function(data){
			return data[TimeframeConverted+"Total Construction Value"];
		}),''),
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
		legend : {orientation: 'h', y: '-0.25'},
		xaxis: {
			zeroline: false, 
			tickmode: 'linear',
			tick0: 0,
			dtick: 2,
			tickangle: 45,
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

	data = [{
		x: xValues,
		y: removeblanks($.map(chartData, function(data){
			return data[TimeframeConverted+"Constructed Dwellings"];
		}),''),
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
//		legend : {orientation: 'h', y: '-0.25'},
		xaxis: {
			zeroline: false, 
			tickmode: 'linear',
			tick0: 0,
			dtick: 2,
			tickangle: 45, 
			fixedrange: Zooming			
			},
		yaxis: {
			zeroline: false, 
			fixedrange: Zooming
			}
		}
	;}
	
else if (datatypetouse_Development_by_Month == "New Parcels") {

	data = [{
		x: xValues,
		y: removeblanks($.map(chartData, function(data){
			return data[TimeframeConverted+"New Parcels"];
		}),''),
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
		legend : {orientation: 'h', y: '-0.25'},
		xaxis: {
			zeroline: false, 
			tickmode: 'auto',
			tickangle: 45,
			fixedrange: Zooming
			},
		yaxis: {
			zeroline: false, 
			fixedrange: Zooming
			}
		}
	;}	
	
else {

	data = [{
		x: xValues,
		y: removeblanks($.map(chartData, function(data){
			return data[TimeframeConverted+"Land Use Consents"];
		}),''),
		name: "Land Use Consents",
		type: VisType,
		line: {width: 6,},
		connectgaps: true,
		marker: {color: Colour1}
		
        },{
		x: xValues,
		y: removeblanks($.map(chartData, function(data){
			return data[TimeframeConverted+"Subdivision Consents"];
		}),''),
		name: "Subdivision Consents",
		type: VisType,
		line: {width: 6,},
		connectgaps: true,
		marker: {color: Colour2}
		
        },{
		x: xValues,
		y: removeblanks($.map(chartData, function(data){
			return data[TimeframeConverted+"Combined Consents"];
		}),''),
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
		legend : {orientation: 'h', y: '-0.25'},
		barmode: 'stack',
		xaxis: {
			zeroline: false, 
			tickmode: 'auto',
			tickangle: 45,
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
