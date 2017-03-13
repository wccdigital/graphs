function InfometricsGraph(chartData) {

	var DataToUseWithSpaces = $('#InfometricsGraph_Datatype option:selected').text();
	var DataToUse = DataToUseWithSpaces.replace(/ /g, "");
	var EndofString = DataToUseWithSpaces.slice(-6);

	RangeValues = [];
	YearUsed = "";

	if (DataToUseWithSpaces == "Housing Affordability Index") {
		YearUsed = "YearThree"
	};
	if (DataToUseWithSpaces == "Rental Affordability Index") {
		YearUsed = "YearOne"
	};

	document.getElementById("ExtraReferences").innerHTML = "";

	if (DataToUseWithSpaces == "Rental Affordability Index") {
		var textdiv = document.getElementById("ExtraReferences");
		var aTag = document.createElement('a');
		aTag.setAttribute('href', "http://ecoprofile.infometrics.co.nz/Wellington%20City/StandardOfLiving/RentalAffordability");
		aTag.setAttribute('target', "_blank");
		aTag.innerHTML = "Rental Affordability Index";
		textdiv.appendChild(aTag); ;
	}

	if (DataToUseWithSpaces == "Housing Affordability Index") {
		var textdiv = document.getElementById("ExtraReferences");
		var aTag = document.createElement('a');
		aTag.setAttribute('href', "http://ecoprofile.infometrics.co.nz/Wellington%20City/StandardOfLiving/Housing_Affordability");
		aTag.setAttribute('target', "_blank");
		aTag.innerHTML = "Housing Affordability Index";
		textdiv.appendChild(aTag); ;
	}

	

var dels = [];

function BlanksToRemove(arrY) {
 
i = 0;
dels = [];

while (i < arrY.length) {
	if (arrY[i] == ''){
    dels.push(i);
    i++
    ;}
 
	else {
	i++
	;}

}

;}


function RemoveBlanks(arr, deletes) {
 
for (var i = deletes.length-1; i >= 0; i--){
	arr.splice(deletes[i],1)
	;}
;}


var yValuesWellington = $.map(chartData, function (data) {
				return data[DataToUse];
			});

var yValuesNZ = $.map(chartData, function (data) {
				return data[DataToUse.concat("_NZ")];
			});

var xValues = $.map(chartData, function (data) {
				return data[YearUsed];
			});

BlanksToRemove(yValuesWellington);
RemoveBlanks(xValues, dels);
RemoveBlanks(yValuesWellington, dels);
RemoveBlanks(yValuesNZ, dels);
				
	data = [{

			x : xValues,
			y : yValuesWellington,
			type : 'bar',
			name : "Wellington",
			marker : {
				color : Colour1
			}

		}, {

			x : xValues,
			y : yValuesNZ,
			type : 'line',
			name : "New Zealand",
			marker : {
				color : Colour2
			}

		}
	];

	layout = {
		title : DataToUseWithSpaces,
		showlegend : true,
		legend: {orientation: 'h', y: '-0.25'},
		xaxis : {
			fixedrange : Zooming,
			zeroline : false,
			tickmode : 'linear', 
			tick0 : 0, 
			dtick : 1,
			tickangle : 45
		},
			yaxis : {
			fixedrange : Zooming,
			zeroline : false
		}

		};
	
	Plotly.newPlot('InfometricsInfo', data, layout);
}
