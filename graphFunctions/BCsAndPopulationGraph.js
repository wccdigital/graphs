
function BCsAndPopulationGraph(chartData){
	
	data = [{
		x: $.map(chartData, function(data){
			return data["Year"];
		}),
		y: $.map(chartData, function(data){
			return data["New Dwellings"];
		}),
		type: 'bar',
		name: 'Consented Dwellings',
		marker: {color: Colour1}
		
        },{
			
		x: $.map(chartData, function(data){
			return data["Year"];
		}),
		y: $.map(chartData, function(data){
			return data["New Dwellings Multiplied by Household Size"];
		}),
		type: 'bar',
		connectgaps: true,
		name: 'Consented Housing Capacity',
		marker: {color: Colour3}	
		
        },{
			
		x: $.map(chartData, function(data){
			return data["Year"];
		}),
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
		title: 'Consented Dwellings and Population Growth',
		showlegend: true,
		legend: {x: 0.65, y: 0.95},

		xaxis: {
			fixedrange: Zooming, 
			zeroline: false, 
			range: [1990.4,2016.5],
			tickmode: 'linear', 
			tick0 : 1,
			dtick: 1,
			tickangle: 45,
			title: "Year ending 30 June"},
			
		yaxis: {
			fixedrange: Zooming, 
			zeroline: false}
	};



Plotly.newPlot('BCsAndPopulationGraph', data, layout);
}
