function RegionalByYearGraph(chartData){

var DataType = $('#Regional_DataType option:selected').text();

if (DataType == "Total Dwellings")
	{
	TotalVar = "Total Dwellings";
	;}
else
	{
	TotalVar = ("Total ").concat(DataType)
	;}

if (chartData == null || chartData.length <= 0)
	return;

data = [{
	x: $.map(chartData, function(data){
		return data["Regional Years"];
	}),
	y: $.map(chartData, function(data){
		return data[DataType.concat(" Wellington City")];
	}),
	type: 'line',
	name: DataType.concat(" - Wellington City"),
	marker: {color: Colour1}
	
       },{
	x: $.map(chartData, function(data){
		return data["Regional Years"];
	}),
	y: $.map(chartData, function(data){
		return data[DataType.concat(" Other TAs")];
	}),
	type: 'line',
	name: DataType.concat(" - Other TAs"),
	marker: {color: Colour2}
	
       },{
	x: $.map(chartData, function(data){
		return data["Regional Years"];
	}),
	y: $.map(chartData, function(data){
		return data[TotalVar];
	}),
	type: 'bar',
	name: TotalVar,
	marker: {color: Colour3}
       }];

layout = {
	title: 'Regional distribution of consented dwellings',
	showlegend: true,
	legend: {orientation: 'h'},
	xaxis: {
		zeroline: false, 
		tickmode: 'linear', 
		tick0: 0, 
		dtick: 3, 
		tickangle: 22.5, 
		fixedrange: Zooming
		},
   	yaxis: {
		zeroline: false,
		fixedrange: Zooming,
		rangemode: "tozero"},
		},

	Plotly.newPlot('RegionalByYear', data, layout);
}
