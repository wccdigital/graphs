	
function PropertyDataGraph(chartData){
	
	var DataType = $('#PropertySales_DataType option:selected').text();
	
	var LeftAxisFormat = '';
	
	if(DataType == "Number of House Sales"){LeftAxisFormat = '';}
	else {LeftAxisFormat = '$,s';};
	
	
 	if (DataType == "Both"){
	data = [{
		x: $.map(chartData, function(data){
			return data["Quarter"];
			}),
		y: $.map(chartData, function(data){
			return data["Median House Price"];
			}),
		type: 'line',
		name: 'Median House Price',
		line: {width: 6},
		marker: {color: Colour1},
		yaxis: 'y2'		
	},{
	x: $.map(chartData, function(data){
			return data["Quarter"];
			}),
		y: $.map(chartData, function(data){
			return data["Number of House Sales"];
			}),
		type: 'bar',
		name: 'House Sales',
		marker: {color: Colour2}
		}];
		
	layout = {
		title: "House Sales and Median Price",
		showlegend: true,
		legend: {orientation: 'h'},
		xaxis: {zeroline: false, tickmode: 'linear', tick0: 0, dtick: 4, tickangle: 45, fixedrange: Zooming},
		yaxis: {zeroline: false, fixedrange: Zooming, rangemode: "tozero", side: 'right',range:[0,1400]},
		yaxis2: {zeroline: false, fixedrange: Zooming, rangemode: "tozero", side: 'left',tickformat: '$,s', overlaying: 'y', range:[0,700000]}
		};
	
	;}
	
	else {
	data = [{
		x: $.map(chartData, function(data){
			return data["Quarter"];
			}),
		y: $.map(chartData, function(data){
			return data[DataType];
			}),
		type: 'line',
		name: 'Property Sales',
		line: {width: 6},
		marker: {color: Colour1}
		}];
	layout = {
		title: DataType,
		showlegend: false,
		xaxis: {zeroline: false, tickmode: 'linear', tick0: 0, dtick: 4, tickangle: 45, fixedrange: Zooming},
		yaxis: {zeroline: false, fixedrange: Zooming, rangemode: "tozero", tickformat: LeftAxisFormat}
	};
	;}
		


	Plotly.newPlot('PropertyDataGraph', data, layout);
	}

