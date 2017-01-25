function ConsentedValuebySuburbGraph(chartData){

var suburbtouse = $('#datafromdropdown_suburbgraph option:selected').text();
var comparisonsuburbtouse = $('#comparisiondd_suburbgraph option:selected').text();
	
if (suburbtouse == "") {
	suburbtouse = "Wellington City Total"
	;}
		
	SuburbYears = $.map(chartData, function(data){
		return data["Year"]
		;});

	constructionvaluedata = $.map(chartData, function(data){
		return data["ConstructionValue".concat(suburbtouse)];
		});

	constructionvaluedata_comparisonsuburb = $.map(chartData, function(data){
		return data["ConstructionValue".concat(comparisonsuburbtouse)];
		});

	
if (comparisonsuburbtouse == "") {
		visibilitytoggle = false
	;}
	
else {
		visibilitytoggle = true
	;}

	data = [{
        x: SuburbYears,
        y: constructionvaluedata,
        name: suburbtouse,
		line: {width: 6},
		marker: {color: Colour1}
		
        },{
        x: SuburbYears,
        y: constructionvaluedata_comparisonsuburb,
        name: comparisonsuburbtouse,
		visible: visibilitytoggle,
        line: {width: 6},
		marker: {color: Colour2}
        }],

	layout = {
        title: 'Construction Value',
        showlegend: true,
		legend: {orientation: "h"},
        xaxis: {zeroline: false, tickmode: 'linear', tick0: 0, dtick: 1,  tickangle: 45, fixedrange: Zooming},
       	yaxis: {zeroline: false, tickformat: '$,s', hoverformat: '$,.4s', rangemode: "tozero", fixedrange: Zooming}
		}
	;

	Plotly.newPlot(SuburbConsentedValue, data, layout)
	
	;}
