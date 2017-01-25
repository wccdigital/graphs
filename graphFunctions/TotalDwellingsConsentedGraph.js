function TotalDwellingsConsentedGraph(data) {

	MonthsLength = $.map(chartData, function(data){return data["Citywide Months Longterm Months"];}).length 

	data = [{
		x: $.map(chartData, function(data){
			return data["Citywide Months Longterm Months"];
		}),
		y: $.map(chartData, function(data){
			
		}),
		type: 'bar',
		marker: {color: Colour1}
        }];

	layout = {
		title: 'Total Dwellings Consented by Month',
		showlegend: false,
		xaxis: {zeroline: false, tickmode: 'auto', tickangle: 45, fixedrange: Zooming, range: [MonthsLength-24.6,MonthsLength]},
		yaxis: {zeroline: false, fixedrange: Zooming, range: [0,160]}
		}
	

	Plotly.newPlot('DevelopmentbyMonth', data, layout);
}