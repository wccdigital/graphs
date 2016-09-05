var graphdata = [{
		name : "Development By Month",
		id : "DevMonthInfo",
		container : "DevelopmentbyMonth",
		width : "100%",
		height : "500px",
		csv : "/wccgraphs/data/CitywideBCdataMonthly.csv",
		func : 'DevelopmentbyMonthgraph',
		funcFile : "/wccgraphs/graphFunctions/DevByMonth.js",
		drop : [
			{
				text : "Choose a data type",
				id : "datatypedd_DevelopmentbyMonthgraph",
				valtext : ["Total Dwellings Consented","Consented Dwellings by Type","Value of Consented Construction"]
			}
		],
		link : [
			{
				linktext : "Datasource",
				text : "Statistics New Zealand and Wellington City Council (.csv)",
				url : "/wccgraphs/data/CitywideBCdataMonthly.csv"
			}
		]
	}, {
		name : "Suburb Information",
		id : "SubInfo",
		container : "SuburbInformation",
		width : "100%",
		height : "500px",
		csv : "/wccgraphs/data/SuburbBCDataAnnualbyYear.csv",
		func : "graphmaker_suburbgraph",
		funcFile : "/wccgraphs/graphFunctions/SuburbGraph.js",
		drop : [
			{
				text : "Choose an area",
				id : "datafromdropdown_suburbgraph",
				valtext : ["Wellington City Total","Aro Valley","Berhampore","Breaker Bay","Broadmeadows","Brooklyn","Churton Park",
				"Crofton Downs","Glenside","Grenada North","Grenada Village","Hataitai","Highbury","Horokiwi","Houghton Bay",
				"Island Bay","Johnsonville","Kaiwharawhara","Karaka Bays","Karori","Kelburn","Khandallah","Kilbirnie","Kingston",
				"Lyall Bay","Makara","Makara Beach","Maupuia","Melrose","Miramar","Moa Point","Mornington","Mt Cook","Mt Victoria",
				"Newlands","Newtown","Ngaio","Ngauranga","Northland","Ohariu","Oriental Bay","Owhiro Bay","Paparangi","Pipitea","Rongotai",
				"Roseneath","Seatoun","Southgate","Strathmore Park","Takapu Valley","Tawa","Te Aro","Thorndon","Vogeltown","Wadestown",
				"Wellington Central","Wilton","Woodridge"]
			},{
				text : "Compare with another area",
				id : "comparisiondd_suburbgraph",
				valtext : ["","Wellington City Total","Aro Valley","Berhampore","Breaker Bay","Broadmeadows","Brooklyn","Churton Park",
				"Crofton Downs","Glenside","Grenada North","Grenada Village","Hataitai","Highbury","Horokiwi","Houghton Bay",
				"Island Bay","Johnsonville","Kaiwharawhara","Karaka Bays","Karori","Kelburn","Khandallah","Kilbirnie","Kingston",
				"Lyall Bay","Makara","Makara Beach","Maupuia","Melrose","Miramar","Moa Point","Mornington","Mt Cook","Mt Victoria",
				"Newlands","Newtown","Ngaio","Ngauranga","Northland","Ohariu","Oriental Bay","Owhiro Bay","Paparangi","Pipitea","Rongotai",
				"Roseneath","Seatoun","Southgate","Strathmore Park","Takapu Valley","Tawa","Te Aro","Thorndon","Vogeltown","Wadestown",
				"Wellington Central","Wilton","Woodridge"]
			},{
				text : "Choose a data type",
				id : "datatypedd_suburbgraph",
				valtext : ["Total Dwellings Consented","Consented Dwellings by Type","Value of Consented Construction"]
			}
		],
		link : [
			{
				linktext : "Datasource",
				text : "Statistics New Zealand and Wellington City Council (.csv)",
				url : "/wccgraphs/data/SuburbBCDataAnnualbyYear.csv"
			}
		]
	}, {
		name : "Citywide By Suburb Information",
		id : "CitywideInfo",
		container : "CitywideBySuburb",
		width : "100%",
		height : "500px",
		csv : "/wccgraphs/data/SuburbBCDataAnnualbySuburbRanked.csv",
		func : "CitywideBySuburbgraph",
		funcFile : "/wccgraphs/graphFunctions/CitywideBySuburb.js",
		button : [
			{
				text : "Sort by Distance to CBD / Alphabetically",
				id : "SortType"
			}
		],
		drop : [
			{
				text : "Start year",
				id : "dropdownStartYear_Citywide_by_Suburb",
				valtext : ["2015","2014","2013","2012","2011","2010","2009","2008","2007","2006","2005","2004"]
			},{
				text : "End year",
				id : "dropdownEndYear_Citywide_by_Suburb",
				valtext : ["2015","2014","2013","2012","2011","2010","2009","2008","2007","2006","2005","2004"]
			},{
				text : "Choose a data type",
				id : "datatypedd_CitywideBySuburbgraph",
				valtext : ["Total Dwellings Consented","Consented Dwellings by Type","Value of Consented Construction"]
			}
		],
		link : [
			{
				linktext : "Datasource",
				text : "Statistics New Zealand and Wellington City Council (.csv)",
				url : "/wccgraphs/data/SuburbBCDataAnnualbySuburbRanked.csv"
			}
		]
	}, {
		name : "Infometrics Graph",
		id : "InfometricsInfo",
		container : "InfometricsGraph",
		width : "100%",
		height : "500px",
		csv : "/wccgraphs/data/Infometrics.csv",
		func : "InfometricsGraph",
		funcFile : "/wccgraphs/graphFunctions/Isometrics.js",
		drop : [
			{
				text : "Choose a data type",
				id : "InfometricsGraph_Datatype",
				valtext : ["Housing Affordability Index","House Price Growth","Rental Affordability Index","Growth of Average Rental Costs"]
			}
		],
		link : [
			{	
				linktext : "Datasource",
				text : "Infometrics",
				url : "http://ecoprofile.infometrics.co.nz/Wellington%20City/QuarterlyEconomicMonitor"
			},{
				linktext : "Datasource",
				text : "Statistics New Zealand and Wellington City Council (.csv)",
				url : "/wccgraphs/data/Infometrics.csv"
			}
		],
		div : [
			{
				id : "ExtraReferences"
			}
		]
	}
];
