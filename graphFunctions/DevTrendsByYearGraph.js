function DevTrendsByYearGraph(chartData){

	if (chartData == null || chartData.length <= 0)
		return;
	
        data = [{
            x: $.map(chartData, function(data){
			return data["Annual Citywide Longterm Years"]
			;}),
			y: $.map(chartData, function(data){
			return data["Annual Citywide Longterm New Houses"]
			;}),
            name: 'Houses',
            line: {width: 6},
			marker: {color: Colour1}
        }, {
            x: $.map(chartData, function(data){
			return data["Annual Citywide Longterm Years"]
			;}),
			y: $.map(chartData, function(data){
			return data["Annual Citywide Longterm New Units"]
			;}),
            name: 'Units',
            line: {width: 6,},
			marker: {color: Colour2}
        }, {
            x: $.map(chartData, function(data){
			return data["Annual Citywide Longterm Years"]
			;}),
			y: $.map(chartData, function(data){
			return data["Annual Citywide Longterm New Apartments"]
			;}),
            name: 'Apartments',
            line: {width: 6,},
			marker: {color: Colour5}
        }, {
            x: $.map(chartData, function(data){
			return data["Annual Citywide Longterm Years"]
			;}),
			y: $.map(chartData, function(data){
			return data["Annual Citywide Longterm Retirement Village Units"]
			;}),
            name: 'Retirement Village Units',
            line: {width: 6,},
			marker: {color: Colour4}
		}, {
            x: $.map(chartData, function(data){
			return data["Annual Citywide Longterm Years"]
			;}),
			y: $.map(chartData, function(data){
			return data["Annual Citywide Longterm Total New Dwellings"]
			;}),
            name: 'Total',
            opacity: 0.7,
			marker:{color:'#AAAAAA'},
			type: 'bar'    
        }],

        layout = {
			title: 'Consented Dwellings by Year',
			legend: {x: 0.8, y: 0.9},
			xaxis: {zeroline: false, tickmode: 'linear', tick0: 0, dtick: 1, tickangle: 45, fixedrange: Zooming},
			yaxis: {zeroline: false, fixedrange: Zooming}
        };


    Plotly.plot(Dev_Trends_by_Year, data, layout);
	} 
