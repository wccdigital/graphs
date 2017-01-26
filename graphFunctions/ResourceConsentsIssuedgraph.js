function ResourceConsentsIssuedgraph(chartData){

	data = [{
            x: $.map(chartData, function(data){
			return data["Month"]
			;}),
			y: $.map(chartData, function(data){
			return data["LandUse"]
			;}),
	        name: 'Land Use',
			opacity: 1,
			type: 'bar',
			marker: {color: Colour1}		
	        }, {
				
            x: $.map(chartData, function(data){
			return data["Month"]
			;}),
			y: $.map(chartData, function(data){
			return data["Subdivision"]
			;}),
			name: 'Subdivision',
			type: 'bar',
			marker: {color: Colour2}
	        }, {
				
            x: $.map(chartData, function(data){
			return data["Month"]
			;}),
			y: $.map(chartData, function(data){
			return data["Combined"]
			;}),
	        name: 'Combined',
			marker:{color:'#AAAAAA'},
			type: 'bar',
			marker: {color: Colour3}
	        }],

	layout = {
   	    title: 'Resource Consents Issued',
	    showlegend: true,
		legend: {x: 0.85, y: 0.95},
    	xaxis: {zeroline: false, tickmode: 'linear', tick0: 0, dtick: 3, tickangle: 45, fixedrange: Zooming},
     	yaxis: {zeroline: false, fixedrange: Zooming},
     	barmode: 'stack',
		};

	Plotly.plot(ResourceConsentsIssued, data, layout);
	}