
	
function DevelopmentbyMonthgraph(chartData){
	
if (chartData == null || chartData.length <= 0)
		return;
	
var datatypetouse_Development_by_Month = $('#datatypedd_DevelopmentbyMonthgraph option:selected').text();


if (datatypetouse_Development_by_Month == "" || datatypetouse_Development_by_Month == "Total Dwellings Consented") {

	MonthsLength = $.map(chartData, function(data){return data["Citywide Months Longterm Months"];}).length

	data = [{
		x: $.map(chartData, function(data){
			return data["Citywide Months Longterm Months"];
		}),
		y: $.map(chartData, function(data){
			return data["Citywide Months Longterm Total New Dwellings"];
		}),
		type: 'bar',
		marker: {color: Colour1}
        }];

	layout = {
		title: 'Total Dwellings Consented by Month',
		showlegend: false,
		xaxis: {zeroline: false, tickmode: 'auto', tickangle: 45, fixedrange: Zooming, range: [MonthsLength-24.6,MonthsLength]},		
		yaxis: {zeroline: false, fixedrange: Zooming, range: [0,160]},
		}
	;}

else {

	data = [{
		x: $.map(chartData, function(data){
			return data["Citywide Months Longterm Months"];
		}),
		y: $.map(chartData, function(data){
			return data["Citywide Months Longterm New Houses"];
		}),
		name: "Houses",
		type: 'bar',
		marker: {color: Colour1}
		
        },{
		x: $.map(chartData, function(data){
			return data["Citywide Months Longterm Months"];
		}),
		y: $.map(chartData, function(data){
			return data["Citywide Months Longterm New Units"];
		}),
		name: "Units",
		type: 'bar',
		marker: {color: Colour2}
		
        },{
		x: $.map(chartData, function(data){
			return data["Citywide Months Longterm Months"];
		}),
		y: $.map(chartData, function(data){
			return data["Citywide Months Longterm New Apartments"];
		}),
		name: "Apartments",
		type: 'bar',
		marker: {color: Colour3}
		
        },{
		x: $.map(chartData, function(data){
			return data["Citywide Months Longterm Months"];
		}),
		y: $.map(chartData, function(data){
			return data["Citywide Months Longterm Retirement Village Units"];
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
			dtick: 3,
			tickangle: 0, 
			fixedrange: Zooming, 
			range: [MonthsLength-24.6,MonthsLength]
			},
		yaxis: {
			zeroline: false, 
			fixedrange: Zooming, 
			range: [0,160]},
			barmode: 'stack'
			}
	;}


Plotly.newPlot('DevelopmentbyMonth', data, layout);
}
