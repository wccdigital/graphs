function RentalGraph(chartData){
	

var DataToUse = $('#TypeDD_RentalGraph option:selected').text();


if (DataToUse == "Wellington City"){
	data = [{
		x: $.map(chartData, function(data){
			return data["YearToMonth"]
			;}),
		y: $.map(chartData, function(data){
			return data["Lower Quartile"]
			;}),
		type: 'line',
		name: 'Lower Quartile',
		marker: {color: Colour1}
        },{
		x: $.map(chartData, function(data){
			return data["YearToMonth"]
			;}),
		y: $.map(chartData, function(data){
			return data["Geometric Mean"]
			;}),
		type: 'line',
		name: 'Geometric Mean',
		marker: {color: Colour2}			
        },{
		x: $.map(chartData, function(data){
			return data["YearToMonth"]
			;}),
		y: $.map(chartData, function(data){
			return data["Upper Quartile"]
			;}),
		type: 'line',
		name: 'Upper Quartile',
		marker: {color: Colour3}			
		}
		];
		
	layout = {
		title: 'Rental Costs',
		showlegend: true,
		legend: {orientation: 'h'},
//		legend: {x: 0, y: 0.9},
		xaxis: {
			fixedrange: Zooming, 
			zeroline: false, 
			tickmode: 'linear', 
			tick0: 0,
			dtick: 24,
			tickangle: 17},
		yaxis: {
			fixedrange: Zooming, 
			zeroline: false,
			tickformat: '$,s', 
			rangemode: "tozero"}
		};

	}
	
else {
	
	data = [{
		x: $.map(chartData, function(data){
			return data["YearToMonth"]
			;}),
		y: $.map(chartData, function(data){
			return data["Geometric Mean"]
			;}),
		type: 'line',
		line: {width: 5},
		name: 'Wellington City',
		marker: {width: 100, color: Colour1}
        },{
		x: $.map(chartData, function(data){
			return data["YearToMonth"]
			;}),
		y: $.map(chartData, function(data){
			return data["Auckland"]
			;}),
		type: 'line',
		name: 'Auckland',
		marker: {color: Colour2}	
        },{
		x: $.map(chartData, function(data){
			return data["YearToMonth"]
			;}),
		y: $.map(chartData, function(data){
			return data["Christchurch"]
			;}),
		type: 'line',
		name: 'Christchurch',
		marker: {color: Colour3}			
        },{
		x: $.map(chartData, function(data){
			return data["YearToMonth"]
			;}),
		y: $.map(chartData, function(data){
			return data["Dunedin"]
			;}),
		type: 'line',
		name: 'Dunedin',
		marker: {color: Colour4}			
        },{
		x: $.map(chartData, function(data){
			return data["YearToMonth"]
			;}),
		y: $.map(chartData, function(data){
			return data["Wellington Region"]
			;}),
		type: 'line',
		name: 'Wellington Region',
		marker: {color: Colour5}			
		}
		];
		
	layout = {
		title: 'Rental Costs',
		showlegend: true,
		legend: {orientation: 'h'},
//		legend: {x: 0, y: 0.9},
		xaxis: {
			fixedrange: Zooming, 
			zeroline: false, 
			tickmode: 'linear', 
			tick0: 0,
			dtick: 24,
			tickangle: 17},
		yaxis: {
			fixedrange: Zooming, 
			zeroline: false,
			tickformat: '$,s', 
			rangemode: "tozero"}
		};	
	
	}


Plotly.newPlot('RentGraph', data, layout);
}



