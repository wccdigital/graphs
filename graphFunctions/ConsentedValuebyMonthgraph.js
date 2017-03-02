function ConsentedValuebyMonthgraph(chartData){
	
	if (chartData == null || chartData.length <= 0)
		return;
	
	data = [{
		x: $.map(chartData, function(data){
			return data["Citywide Months Longterm Months"];
		}),
		y: $.map(chartData, function(data){
			return data["Citywide Months Longterm Residential Buildings"];
		}),
		type: 'bar',
		name: 'Residential construction value',
		marker: {color: Colour1}
		
        },{
		x: $.map(chartData, function(data){
			return data["Citywide Months Longterm Months"];
		}),
		y: $.map(chartData, function(data){
			return data["Citywide Months Longterm NonResidential Construction"];
		}),
		type: 'bar',
		name: 'Non-residential construction value',
		marker: {color: Colour2}
		
        },{
		x: $.map(chartData, function(data){
			return data["Citywide Months Longterm Months"];
		}),
		y: $.map(chartData, function(data){
			return data["Citywide Months Longterm Total Construction Value"];
		}),
		type: 'line',
		name: 'Total construction value',
		marker: {color: Colour3}
        }];

	MonthsLength = $.map(chartData, function(data){return data["Citywide Months Longterm Months"];}).length;
		
	layout = {
		title: 'Construction Value by Month',
		showlegend: true,
		legend: {orientation: 'h', y: '-0.25'},
		xaxis: {
			fixedrange: Zooming, 
			zeroline: false, 
			tickmode: 'auto', 
			tickangle: 45, 
			range: [MonthsLength-24.6,MonthsLength]},
		yaxis: {
			fixedrange: Zooming, 
			zeroline: false, 
			tickformat: '$,s', 
			hoverformat: '$,.4s', 
			range:[0,120000000]}
		}
	;

Plotly.newPlot('ConsentedValuebyMonth', data, layout);
	}
