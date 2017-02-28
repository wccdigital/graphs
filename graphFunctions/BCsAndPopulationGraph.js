
function BCsAndPopulationGraph(chartData){

var DataType = $('#datatypedd_BCs_and_pop_growth_graph option:selected').text();

Years = $.map(chartData, function(data){
			return data["Year"];
			});

if (DataType == "Consented Dwellings"){
	xRange = [1991, Years[Years.length - 1]]
		;}
else {
	xRange = [2004, Years[Years.length - 1]]
	;}

alert(Math.max(Years));
alert(Math.min(Years));
alert([Math.max(Years), 1991];
	
	data = [{
		x: Years,
		y: $.map(chartData, function(data){
			return data[DataType];
		}),
		type: 'bar',
		name: 'Consented Dwellings',
		marker: {color: Colour1}
		
        },{
		x: Years,
		y: $.map(chartData, function(data){
			return data[DataType+" Multiplied by Household Size"];
		}),
		type: 'bar',
		connectgaps: true,
		name: 'Consented Housing Capacity',
		marker: {color: Colour3}	
		
        },{
			
		x: Years,
		y: $.map(chartData, function(data){
			return data["PopulationGrowth"];
		}),
		type: 'line',
		connectgaps: true,
		name: 'Approx. Population Increase',
		marker: {color: Colour2},
		line: {width: 3}	

		}];

		
	layout = {
		title: DataType+' and Population Growth',
		showlegend: true,
//		legend: {orientation: 'h'},
		legend: {x: 0.0, y: 0.95},

		xaxis: {
			fixedrange: Zooming, 
			zeroline: false, 
			tickmode: 'linear', 
			tick0 : 1,
			dtick: 1,
			tickangle: 45,
			range: xRange,
			title: "Year ending 30 June"},
			
		yaxis: {
			fixedrange: Zooming, 
			zeroline: false}
	};



Plotly.newPlot('BCsAndPopulation', data, layout);
}
