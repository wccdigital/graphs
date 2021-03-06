function piegraphmaker(chartData){
var startYearValue = $('#dropdownStartYear_Pie option:selected').val();
var endYearValue = $('#dropdownEndYear_Pie option:selected').val();
var startYearValueTwo = $('#dropdownStartYearTwo_Pie option:selected').val();
var endYearValueTwo = $('#dropdownEndYearTwo_Pie option:selected').val();



if(startYearValue>endYearValue)
{alert("End year is earlier than start year")};

if(startYearValueTwo>endYearValueTwo && startYearValueTwo != '-' && endYearValueTwo != '-')
{alert("End year is earlier than start year")};

if(startYearValueTwo != '-' && endYearValueTwo == '-')
{endYearValueTwo = startYearValueTwo, endYearValueTwo = startYearValueTwo};



YearsPie = $.map(chartData, function(data){
		return data["Year"];
		});

HousesPie = $.map(chartData, function(data){
		return data["Houses"];
		});
		
UnitsPie = $.map(chartData, function(data){
		return data["Units"];
		});

ApartmentsPie = $.map(chartData, function(data){
		return data["Apartments"];
		});


	
var HousesCollated = 0;
var UnitsCollated = 0;
var ApartmentsCollated = 0;


for(i = (parseInt(startYearValue)-1991); i <= (parseInt(endYearValue)-1991); i++)
	{
	HousesCollated = HousesCollated + parseInt(HousesPie[i]);
	UnitsCollated = UnitsCollated + parseInt(UnitsPie[i]);
	ApartmentsCollated = ApartmentsCollated + parseInt(ApartmentsPie[i]);
	;};

var HousesCollated_Comparison = 0;
var UnitsCollated_Comparison = 0;
var ApartmentsCollated_Comparison = 0;

for(i = (parseInt(startYearValueTwo)-1991); i <= (parseInt(endYearValueTwo)-1991); i++)
	{
	HousesCollated_Comparison = HousesCollated_Comparison + parseInt(HousesPie[i]);
	UnitsCollated_Comparison = UnitsCollated_Comparison + parseInt(UnitsPie[i]);
	ApartmentsCollated_Comparison = ApartmentsCollated_Comparison + parseInt(ApartmentsPie[i]);
	;};

var x_type_split = ["Houses","Townhouses/Units", "Apartments"];

if(startYearValueTwo == "-" || endYearValueTwo == "-"){
var data = [{
	values: [HousesCollated,UnitsCollated,ApartmentsCollated],
	labels: x_type_split,
	type: 'pie',
	sort: false,
	direction: "clockwise",
	name  : startYearValue.concat(" - ", endYearValue),
	text : x_type_split,
//	textfont: {colors: [Colour2, Colour3, Colour1]},
	hoverinfo: "label+value+percent+name",
	marker: {colors: [Colour4, Colour2, Colour3]}
	
}];

var layout = {
	title: 'Dwelling Type Split',
	showlegend: false,
	annotations: [{
	text: startYearValue.concat(" - ", endYearValue),
	x: 0.5, y: 1.1,
	showarrow: false,
	font : {size :20}
	}]
};
}

else {
var data = [{
	values: [HousesCollated,UnitsCollated,ApartmentsCollated],
	labels: x_type_split,
	type: 'pie',
	sort: false,
	direction: "clockwise",
	name  : startYearValue.concat(" - ", endYearValue),
	text : x_type_split,
//	textfont: {color: Colour2},
	domain: { x: [0, .5]},
	hoverinfo: "label+value+percent+name",
	marker: {colors: [Colour4, Colour2, Colour3]}

},{
	values: [HousesCollated_Comparison,UnitsCollated_Comparison,ApartmentsCollated_Comparison],
	labels: x_type_split,
	type: 'pie',
	sort: false,
	direction: "clockwise",
	name: startYearValueTwo.concat(" - ", endYearValueTwo),
	text : x_type_split,
	domain: { x: [0.5, 1] },
	hoverinfo: "label+value+percent+name",
	marker: {colors: [Colour4, Colour2, Colour3]}
}];

var layout = {
	title: 'Dwelling Type Split',
	showlegend: false,
	annotations: [{
		text: startYearValue.concat(" - ", endYearValue),
		x: 0.175, y: 1.1,
		showarrow: false,
		font : {size :20}
		},{
		text: startYearValueTwo.concat(" - ", endYearValueTwo),
		x: 0.825, y: 1.1,
		showarrow: false,
		font : {size :20}
		}]
	};
}

Plotly.newPlot('DwellingTypePieGraph', data, layout);
}

