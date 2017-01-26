function InfometricsGraph(chartData) {

	var DataToUseWithSpaces = $('#InfometricsGraph_Datatype option:selected').text();
	var DataToUse = DataToUseWithSpaces.replace(/ /g, "");
	var EndofString = DataToUseWithSpaces.slice(-6);

	RangeValues = [];
	YearUsed = "";

	if (DataToUseWithSpaces == "Housing Affordability Index") {
		RangeValues = [6, 10],
		YearUsed = "YearThree"
	};
	if (DataToUseWithSpaces == "Rental Affordability Index") {
		RangeValues = [0.2, 0.4],
		YearUsed = "YearOne"
	};

	document.getElementById("ExtraReferences").innerHTML = "";

	if (DataToUseWithSpaces == "Rental Affordability Index") {
		var textdiv = document.getElementById("ExtraReferences");
		var aTag = document.createElement('a');
		aTag.setAttribute('href', "http://ecoprofile.infometrics.co.nz/Wellington%20City/StandardOfLiving/RentalAffordability");
		aTag.setAttribute('target', "_blank");
		aTag.innerHTML = "Datasource: Rental Affordability Index";
		textdiv.appendChild(aTag); ;
	}

	if (DataToUseWithSpaces == "Housing Affordability Index") {
		var textdiv = document.getElementById("ExtraReferences");
		var aTag = document.createElement('a');
		aTag.setAttribute('href', "http://ecoprofile.infometrics.co.nz/Wellington%20City/StandardOfLiving/Housing_Affordability");
		aTag.setAttribute('target', "_blank");
		aTag.innerHTML = "Datasource: Housing Affordability Index";
		textdiv.appendChild(aTag); ;
	}

	data = [{

			x : $.map(chartData, function (data) {
				return data[YearUsed];
			}),
			y : $.map(chartData, function (data) {
				return data[DataToUse];
			}),
			type : 'bar',
			name : "Wellington",
			marker : {
				color : Colour1
			}

		}, {

			x : $.map(chartData, function (data) {
				return data[YearUsed];
			}),
			y : $.map(chartData, function (data) {
				return data[DataToUse.concat("_NZ")];
			}),
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
		legend: {orientation: 'h'},
		xaxis : {
			fixedrange : Zooming,
			zeroline : false,
			tickmode : 'linear', 
			tick0 : 0, 
			dtick : 1,
			tickangle : 22.5
		},
			yaxis : {
			fixedrange : Zooming,
			zeroline : false,
			range : RangeValues
		}

		};
	
	Plotly.newPlot('InfometricsInfo', data, layout);
}