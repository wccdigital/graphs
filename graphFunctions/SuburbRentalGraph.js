function SuburbRentalGraph(chartData){
	
var AreaToUse = $('#AreaDD_SuburbRentalGraph option:selected').text();
var TypeToUse = $('#TypeDD_SuburbRentalGraph option:selected').text();
var BedroomsToUse = $('#BedroomsDD_SuburbRentalGraph option:selected').text();
var DataToUse = AreaToUse.concat(TypeToUse.concat(BedroomsToUse));


if(TypeToUse == "Property Type Total" && BedroomsToUse == "Bedrooms Total" && AreaToUse != "TA Total")
	{alert("Please choose a property type or size")};


	data = [{
		x: $.map(chartData, function(data){
			return data["Quarter"];
		}),
		y: $.map(chartData, function(data){
			return data[DataToUse];
		}),
		type: 'bar',
		name: DataToUse,
		marker: {color: Colour2}
        }];
		
	layout = {
		title: 'Detailed Rental Costs',
		showlegend: false,
		xaxis: {
			fixedrange: Zooming, 
			zeroline: false, 
			tickmode: 'linear', 
			tick0: 0,
			dtick: 4,
			tickangle: 45},
		yaxis: {
			fixedrange: Zooming, 
			zeroline: false,
			tickformat: '$,s', 
			rangemode: "tozero"}
		};



Plotly.newPlot('SuburbRentalGraph', data, layout);
}
