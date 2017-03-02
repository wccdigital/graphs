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

var dels = [];

function BlanksToRemove(arrY) {
 
i = 0;
dels = [];

while (i < arrY.length) {
	if (arrY[i] == ''){
    dels.push(i);
    i++
    ;}
 
	else {
	i++
	;}

}

;}


function RemoveBlanks(arr, deletes) {
 
for (var i = deletes.length-1; i >= 0; i--){
	arr.splice(deletes[i],1)
	;}
;}

	
if (datatypetouse_Development_by_Month == "Total Dwellings Consented") {

	var yValues = $.map(chartData, function(data){
			return data[TimeframeConverted+"Total New Dwellings"];
		});

	BlanksToRemove(yValues);
	RemoveBlanks(xValues, dels);
	RemoveBlanks(yValues, dels);
			
	data = [{
		x: xValues,
		y: yValues,
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
		
	BlanksToRemove(yValues);
	RemoveBlanks(xValues, dels);

	data = [{
		x: xValues,
		y: RemoveBlanks($.map(chartData, function(data){
			return data[TimeframeConverted+"New Houses"];
		}), dels),
		name: "Houses",
		type: 'line',
		connectgaps: true,
		line: {width: 5,},
		marker: {color: Colour1}
		
        },{
		x: xValues,
		y: RemoveBlanks($.map(chartData, function(data){
			return data[TimeframeConverted+"New Units"];
		}), dels),
		name: "Units",
		type: 'line',
		connectgaps: true,
		line: {width: 5,},
		marker: {color: Colour2}
		
        },{
		x: xValues,
		y: RemoveBlanks($.map(chartData, function(data){
			return data[TimeframeConverted+"New Apartments"];
		}), dels),
		name: "Apartments",
		type: 'line',
		connectgaps: true,
		line: {width: 5,},
		marker: {color: Colour4}
		
        },{
		x: xValues,
		y: RemoveBlanks($.map(chartData, function(data){
			return data[TimeframeConverted+"Retirement Village Units"];
		}), dels),
		name: "Retirement Village Units",
		type: 'line',
		connectgaps: true,
		line: {width: 5,},
		marker: {color: Colour5}
		 
        },{
		x: xValues,
		y: RemoveBlanks($.map(chartData, function(data){
			return data[TimeframeConverted+"Total New Dwellings"];
		}), dels),
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

	var yValues = $.map(chartData, function(data){
		return data[TimeframeConverted+"Residential Buildings"];
		});
	
	BlanksToRemove(yValues);
	RemoveBlanks(xValues, dels);

	data = [{
		x: xValues,
		y: RemoveBlanks($.map(chartData, function(data){
			return data[TimeframeConverted+"Residential Buildings"];
		}), dels),
		name: "Residential Buildings",
		type: VisType,
		line: {width: 6,},
		connectgaps: true,
		marker: {color: Colour1}
		
        },{
		x: xValues,
		y: RemoveBlanks($.map(chartData, function(data){
			return data[TimeframeConverted+"NonResidential Construction"];
		}), dels),
		name: "Non-Residential Construction",
		type: VisType,
		line: {width: 6,},
		connectgaps: true,
		marker: {color: Colour2}
		
        },{
		x: xValues,
		y: RemoveBlanks($.map(chartData, function(data){
			return data[TimeframeConverted+"Total Construction Value"];
		}), dels),
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

	var yValues = $.map(chartData, function(data){
		return data[TimeframeConverted+"Constructed Dwellings"];
		});
	
	BlanksToRemove(yValues);
	RemoveBlanks(xValues, dels);

	data = [{
		x: xValues,
		y: RemoveBlanks($.map(chartData, function(data){
			return data[TimeframeConverted+"Constructed Dwellings"];
		}), dels),
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

	var yValues = $.map(chartData, function(data){
		return data[TimeframeConverted+"New Parcels"];
		});
	
	BlanksToRemove(yValues);
	RemoveBlanks(xValues, dels);

	data = [{
		x: xValues,
		y: RemoveBlanks($.map(chartData, function(data){
			return data[TimeframeConverted+"New Parcels"];
		}), dels),
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

	var yValues = $.map(chartData, function(data){
		return data[TimeframeConverted+"Land Use Consents"];
		});
	
	BlanksToRemove(yValues);
	RemoveBlanks(xValues, dels);

	data = [{
		x: xValues,
		y: RemoveBlanks($.map(chartData, function(data){
			return data[TimeframeConverted+"Land Use Consents"];
		}), dels),
		name: "Land Use Consents",
		type: VisType,
		line: {width: 6,},
		connectgaps: true,
		marker: {color: Colour1}
		
        },{
		x: xValues,
		y: RemoveBlanks($.map(chartData, function(data){
			return data[TimeframeConverted+"Subdivision Consents"];
		}), dels),
		name: "Subdivision Consents",
		type: VisType,
		line: {width: 6,},
		connectgaps: true,
		marker: {color: Colour2}
		
        },{
		x: xValues,
		y: RemoveBlanks($.map(chartData, function(data){
			return data[TimeframeConverted+"Combined Consents"];
		}), dels),
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


alert("Y = "+yValues);
alert("X = "+xValues);
	
Plotly.newPlot('AllDevelopmentbyMonth', data, layout);
}
