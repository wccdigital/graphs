function AllDevelopmentbyMonthgraph(chartData){
	
if (chartData == null || chartData.length <= 0)
		return;
	
var datatypetouse_Development_by_Month = $('#datatypedd_DevelopmentbyMonthgraph option:selected').text();
var timeframe_Development_by_Month = $('#timeframe_DevelopmentbyMonthgraph option:selected').text();

if (datatypetouse_Development_by_Month == "Constructed Dwellings" && timeframe_Development_by_Month == "Years") {
	VisType = 'line',
	xValues = $.map(chartData, function(data){
			return data["Citywide Annual Longterm Years"];
		})
	;}
else if (datatypetouse_Development_by_Month == "New Parcels" && timeframe_Development_by_Month == "Years") {
	VisType = 'line',
	xValues = $.map(chartData, function(data){
			return data["Citywide Annual Longterm Years"];
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

yValues = $.map(chartData, function(data){
			return data[TimeframeConverted+"Total New Dwellings"];
		});

	data = [{
		x: xValues,
		y: $.map(chartData, function(data){
			return data[TimeframeConverted+"Total New Dwellings"];
		}),
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
			fixedrange: Zooming,
			range: [xValues[xValues.length - yValues.length],xValues[xValues.length - 1]+0.5]
			},		
		yaxis: {
			zeroline: false,
			fixedrange: Zooming
			},
		}
	;}

else if (datatypetouse_Development_by_Month == "Consented Dwellings by Type") {

yValues = $.map(chartData, function(data){
			return data[TimeframeConverted+"New Houses"];
		});

	data = [{
		x: xValues,
		y: $.map(chartData, function(data){
			return data[TimeframeConverted+"New Houses"];
		}),
		name: "Houses",
		type: 'line',
		line: {width: 5,},
		marker: {color: Colour1}
		
        },{
		x: xValues,
		y: $.map(chartData, function(data){
			return data[TimeframeConverted+"New Units"];
		}),
		name: "Units",
		type: 'line',
		line: {width: 5,},
		marker: {color: Colour2}
		
        },{
		x: xValues,
		y: $.map(chartData, function(data){
			return data[TimeframeConverted+"New Apartments"];
		}),
		name: "Apartments",
		type: 'line',
		line: {width: 5,},
		marker: {color: Colour4}
		
        },{
		x: xValues,
		y: $.map(chartData, function(data){
			return data[TimeframeConverted+"Retirement Village Units"];
		}),
		name: "Retirement Village Units",
		type: 'line',
		line: {width: 5,},
		marker: {color: Colour5}
		
        },{
		x: xValues,
		y: $.map(chartData, function(data){
			return data[TimeframeConverted+"Total New Dwellings"];
		}),
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
			fixedrange: Zooming,
			range: [xValues[xValues.length - yValues.length],xValues[xValues.length - 1]+0.5]
			},
		yaxis: {
			zeroline: false, 
			fixedrange: Zooming,
			barmode: 'stack'
			}
		}
	;}

	
else if (datatypetouse_Development_by_Month == "Value of Consented Construction") {

yValues = $.map(chartData, function(data){
			return data[TimeframeConverted+"Residential Buildings"];
		});

	data = [{
		x: xValues,
		y: $.map(chartData, function(data){
			return data[TimeframeConverted+"Residential Buildings"];
		}),
		name: "Residential Buildings",
		type: VisType,
		line: {width: 6,},
		marker: {color: Colour1}
		
        },{
		x: xValues,
		y: $.map(chartData, function(data){
			return data[TimeframeConverted+"NonResidential Construction"];
		}),
		name: "NonResidential Construction",
		type: VisType,
		line: {width: 6,},
		marker: {color: Colour2}
		
        },{
		x: xValues,
		y: $.map(chartData, function(data){
			return data[TimeframeConverted+"Total Construction Value"];
		}),
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
			fixedrange: Zooming,
			range: [xValues[xValues.length - yValues.length],xValues[xValues.length - 1]+0.5]
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

yValues = $.map(chartData, function(data){
			return data[TimeframeConverted+"Constructed Dwellings"];
		});

	data = [{
		x: xValues,
		y: $.map(chartData, function(data){
			return data[TimeframeConverted+"Constructed Dwellings"];
		}),
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
			fixedrange: Zooming,
			range: [xValues[xValues.length - yValues.length],xValues[xValues.length - 1]+0.5]
			},
		yaxis: {
			zeroline: false, 
			fixedrange: Zooming
			}
		}
	;}
	
else if (datatypetouse_Development_by_Month == "New Parcels") {

yValues = $.map(chartData, function(data){
			return data[TimeframeConverted+"New Parcels"];
		});
	
TempCount = 0;
i = yValues.length;

while (i--) {
    if (yValues[i] == '')
        TempCount++;
	}

NonEmptyLength = yValues.length-TempCount

	data = [{
		x: xValues,
		y: $.map(chartData, function(data){
			return data[TimeframeConverted+"New Parcels"];
		}),
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
			fixedrange: Zooming,
			range: [xValues[xValues.length - NonEmptyLength],xValues[xValues.length - 1]+0.5]
			},
		yaxis: {
			zeroline: false, 
			fixedrange: Zooming
			}
		}
	;}	
		
else {

yValues = $.map(chartData, function(data){
			return data[TimeframeConverted+"Land Use Consents"];
		});

	data = [{
		x: xValues,
		y: $.map(chartData, function(data){
			return data[TimeframeConverted+"Land Use Consents"];
		}),
		name: "Land Use Consents",
		type: VisType,
		line: {width: 6,},
		marker: {color: Colour1}
		
        },{
		x: xValues,
		y: $.map(chartData, function(data){
			return data[TimeframeConverted+"Subdivision Consents"];
		}),
		name: "Subdivision Consents",
		type: VisType,
		line: {width: 6,},
		marker: {color: Colour2}
		
        },{
		x: xValues,
		y: $.map(chartData, function(data){
			return data[TimeframeConverted+"Combined Consents"];
		}),
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
			fixedrange: Zooming,
			range: [xValues[xValues.length - yValues.length],xValues[xValues.length - 1]+0.5]
			},
		yaxis: {
			zeroline: false, 
			fixedrange: Zooming, 
			}
		}
	;}

	
Plotly.newPlot('AllDevelopmentbyMonth', data, layout);
}
