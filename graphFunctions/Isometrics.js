function InfometricsGraph(chartData) {

	var DataToUseWithSpaces = $('#InfometricsGraph_Datatype option:selected').text();
	var DataToUse = DataToUseWithSpaces.replace(/ /g, "");
	var EndofString = DataToUseWithSpaces.slice(-6);

	var AxisFormat = "";
	if (EndofString == "Growth" || EndofString == " Costs") {
		AxisFormat = "%"
	};

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
	if (DataToUseWithSpaces == "House Price Growth") {
		YearUsed = "YearTwo"
	};
	if (DataToUseWithSpaces == "Growth of Average Rental Costs") {
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

	if (EndofString == " Index") {
		layout = {
			title : DataToUseWithSpaces,
			showlegend : true,
			xaxis : {
				fixedrange : Zooming,
				zeroline : false,
				tickmode : 'auto',
				tickangle : 45
			},

			yaxis : {
				fixedrange : Zooming,
				zeroline : false,
				tickformat : AxisFormat,
				range : RangeValues
			}
		};
	} else {
		layout = {
			title : DataToUseWithSpaces,
			showlegend : true,
			xaxis : {
				fixedrange : Zooming,
				zeroline : false,
				tickmode : 'auto',
				tickangle : 45
			},
			yaxis : {
				fixedrange : Zooming,
				zeroline : false,
				tickformat : AxisFormat,
			}
		};
	}

	Plotly.newPlot('InfometricsGraph', data, layout);
}