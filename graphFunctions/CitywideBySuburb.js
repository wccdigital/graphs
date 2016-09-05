function CitywideBySuburbgraph(chartData) {

	var StartYear_Citywide_by_SuburbText = $('#dropdownStartYear_Citywide_by_Suburb option:selected').text();
	var EndYear_Citywide_by_SuburbText = $('#dropdownEndYear_Citywide_by_Suburb option:selected').text();
	var StartYear_Citywide_by_SuburbValue = $('#dropdownStartYear_Citywide_by_Suburb option:selected').val();
	var EndYear_Citywide_by_SuburbValue = $('#dropdownEndYear_Citywide_by_Suburb option:selected').val();
	var datatypetouse_Citywide_by_Suburb = $('#datatypedd_CitywideBySuburbgraph option:selected').text();

	if (StartYear_Citywide_by_SuburbValue > EndYear_Citywide_by_SuburbValue) {
		alert("End year is earlier than start year")
	};

	var StartingYear = parseInt(StartYear_Citywide_by_SuburbText) - 2004
		var EndingYear = parseInt(EndYear_Citywide_by_SuburbText) - 2004

		var HousesCollated = [];
	var UnitsCollated = [];
	var ApartmentsCollated = [];
	var TotalDwellingsCollated = [];
	var RetirementVillageUnitsCollated = [];
	var ConstructionValueCollated = [];

	for (i = (parseInt(StartYear_Citywide_by_SuburbValue)); i <= (parseInt(EndYear_Citywide_by_SuburbValue)); i++) {
		TotalDwellingsWithYear = "TotalDwellings".concat(i);

		TotalDwellingsThisYear = $.map(chartData, function (data) {
				return parseInt(data[TotalDwellingsWithYear]);
			});

		TotalDwellingsCollated = ArraySummation(TotalDwellingsCollated, TotalDwellingsThisYear);

		HousesWithYear = "Houses".concat(i);

		HousesThisYear = $.map(chartData, function (data) {
				return parseInt(data[HousesWithYear]);
			});

		HousesCollated = ArraySummation(HousesCollated, HousesThisYear);

		UnitsWithYear = "Units".concat(i);

		UnitsThisYear = $.map(chartData, function (data) {
				return parseInt(data[UnitsWithYear]);
			});

		UnitsCollated = ArraySummation(UnitsCollated, UnitsThisYear);

		ApartmentsWithYear = "Apartments".concat(i);

		ApartmentsThisYear = $.map(chartData, function (data) {
				return parseInt(data[ApartmentsWithYear]);
			});

		ApartmentsCollated = ArraySummation(ApartmentsCollated, ApartmentsThisYear);

		RetirementVillageUnitsWithYear = "Retirement Village Units".concat(i);

		RetirementVillageUnitsThisYear = $.map(chartData, function (data) {
				return parseInt(data[RetirementVillageUnitsWithYear]);
			});

		RetirementVillageUnitsCollated = ArraySummation(RetirementVillageUnitsCollated, RetirementVillageUnitsThisYear);

		ConstructionValueWithYear = "ConstructionValue".concat(i);

		ConstructionValueThisYear = $.map(chartData, function (data) {
				return parseInt(data[ConstructionValueWithYear]);
			});

		ConstructionValueCollated = ArraySummation(ConstructionValueCollated, ConstructionValueThisYear);

	};

	function ArraySummation(array1, array2) { {
			var result = [];
			var counter = 0;
			var x = 0;
			while (counter < array1.length && counter < array2.length) {
				result.push(array1[counter] + array2[counter]);
				counter++;
			}

			if (counter === array1.length) {
				for (x = counter; x < array2.length; x++) {
					result.push(array2[x]);
				}
			} else {
				for (x = counter; x < array1.length; x++) {
					result.push(array1[x]);
				}
			}
			return result;
		}

	};

	var SuburbsList = $.map(chartData, function (data) {
			return data["Suburb"];
		});

	var CategoryOrderType = CategoryOrderType || 'trace';

	if (datatypetouse_Citywide_by_Suburb == "" || datatypetouse_Citywide_by_Suburb == "Total Dwellings Consented") {

		data = [{
				x : SuburbsList,
				y : TotalDwellingsCollated,
				type : 'bar',
				marker : {
					color : Colour1
				}
			}
		];

		layout = {
			title : 'Total Dwellings Consented by Suburb',
			showlegend : false,
			xaxis : {
				zeroline : false,
				tickmode : 'linear',
				tick0 : 0,
				dtick : 1,
				tickangle : 45,
				categoryorder : 'category ascending',
				fixedrange : Zooming
			},
			yaxis : {
				zeroline : false,
				rangemode : "tozero",
				fixedrange : Zooming
			}
		};
	} else if (datatypetouse_Citywide_by_Suburb == "Consented Dwellings by Type") {

		data = [{
				x : SuburbsList,
				y : HousesCollated,
				name : "Houses",
				type : 'bar',
				marker : {
					color : Colour1
				}

			}, {
				x : SuburbsList,
				y : UnitsCollated,
				name : "Units",
				type : 'bar',
				marker : {
					color : Colour2
				}

			}, {
				x : SuburbsList,
				y : ApartmentsCollated,
				name : "Apartments",
				type : 'bar',
				marker : {
					color : Colour3
				}

			}, {
				x : SuburbsList,
				y : RetirementVillageUnitsCollated,
				name : "Retirement Village Units",
				type : 'bar',
				marker : {
					color : Colour4
				}
			}
		]

		layout = {
			title : 'Dwellings Consented by Type and Suburb',
			showlegend : true,
			xaxis : {
				zeroline : false,
				tickmode : 'linear',
				tick0 : 0,
				dtick : 1,
				tickangle : 45,
				fixedrange : Zooming
			},
			yaxis : {
				zeroline : false,
				rangemode : "tozero",
				fixedrange : Zooming
			},
			barmode : 'stack'
		};
	} else {

		data = [{
				x : SuburbsList,
				y : ConstructionValueCollated,
				type : 'bar',
				marker : {
					color : Colour1
				}
			}
		];

		layout = {
			title : 'Total Construction Value by Suburb',
			showlegend : false,
			xaxis : {
				zeroline : false,
				tickmode : 'linear',
				tick0 : 0,
				dtick : 1,
				tickangle : 45,
				fixedrange : Zooming
			},
			yaxis : {
				zeroline : false,
				tickformat : '$,s',
				hoverformat : '$,.4s',
				rangemode : "tozero",
				fixedrange : Zooming
			}
		};
	}

	Plotly.newPlot('CitywideBySuburb', data, layout);

	$('#SortType').click(function () {
		$(this).toggleClass('active');
		if ($(this).hasClass('active')) {
			var update = {
				'xaxis.categoryorder' : 'trace'
			};
			Plotly.relayout(CitywideBySuburb, update);
		} else {
			var update = {
				'xaxis.categoryorder' : 'category ascending'
			};
			Plotly.relayout(CitywideBySuburb, update);
		}
	});
}