function CitywideBySuburbConsentedValuegraph(chartData){

var StartYear_Citywide_by_SuburbText = $('#dropdownStartYear_Citywide_by_Suburb option:selected').text();
var EndYear_Citywide_by_SuburbText = $('#dropdownEndYear_Citywide_by_Suburb option:selected').text();
var StartYear_Citywide_by_SuburbValue = $('#dropdownStartYear_Citywide_by_Suburb option:selected').val();
var EndYear_Citywide_by_SuburbValue = $('#dropdownEndYear_Citywide_by_Suburb option:selected').val();


if(StartYear_Citywide_by_SuburbValue>EndYear_Citywide_by_SuburbValue)
{alert("End year is earlier than start year")};


var StartingYear = parseInt(StartYear_Citywide_by_SuburbText)-2004
var EndingYear = parseInt(EndYear_Citywide_by_SuburbText)-2004



var ConstructionValueCollated = [];


for(i = (parseInt(StartYear_Citywide_by_SuburbValue)); i <= (parseInt(EndYear_Citywide_by_SuburbValue)); i++)
	{
		ConstructionValueWithYear = "ConstructionValue".concat(i);

		ConstructionValueThisYear = $.map(chartData, function(data){
			return parseInt(data[ConstructionValueWithYear]);
			});
		
		ConstructionValueCollated = ArraySummation(ConstructionValueCollated, ConstructionValueThisYear);
	
	};	

 
function ArraySummation(array1, array2){
{
  var result = [];
  var counter = 0;
  var x=0;

 while (counter < array1.length && counter < array2.length) 
  {
    result.push(array1[counter] + array2[counter]);
    counter++;
  }

 if (counter === array1.length) 
 {
    for (x = counter; x < array2.length; x++)   {
      result.push(array2[x]);
    }
  } 
  else
  {
  for (x = counter; x < array1.length; x++) 
    {
      result.push(array1[x]);
    }
  }
  return result;
}
	};

	
var SuburbsList = $.map(chartData, function(data){
			return data["Suburb"];
			});

			
var CategoryOrderType = CategoryOrderType || 'trace';
			
	data = [{
		x: SuburbsList,
		y: ConstructionValueCollated,
		type: 'bar',
		marker: {color: Colour1}
        }];

	layout = {
		title: 'Total Construction Value by Suburb',
		showlegend: false,
		xaxis: {zeroline: false, tickmode: 'linear', tick0: 0, dtick: 1,  tickangle: 45, fixedrange: Zooming},
       	yaxis: {zeroline: false, tickformat: '$,s', hoverformat: '$,.4s', rangemode: "tozero", fixedrange: Zooming}
		}

Plotly.newPlot('CitywideBySuburbConsentedValue', data, layout);

	
$('.SortTypeConsentedValue').click(function(){
    $(this).toggleClass('toggle');
	if (this.className == 'SortTypeConsentedValue toggle') {
		var update = {'xaxis.categoryorder': 'trace'};
		Plotly.relayout(CitywideBySuburbConsentedValue, update)
		;}
	else {
		var update = {'xaxis.categoryorder': 'category ascending'};
		Plotly.relayout(CitywideBySuburbConsentedValue, update)
		;}
	});
	;}