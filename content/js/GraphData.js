var graphdata = [{
		name : "Consented Dwellings and Population Growth Information",
		id : "BCsAndPopulationGraph",
		container : "BCsAndPopulation",
		width : "100%",
		height : "500px",
		csv : "/wccgraphs/data/BCsAndPopulationGraph.csv",
		func : "BCsAndPopulationGraph",
		funcFile : "/wccgraphs/graphFunctions/BCsAndPopulationGraph.js",
		drop : [
			{
				text : "Choose a data type",
				id : "datatypedd_BCs_and_pop_growth_graph",
				valtext : ["Consented Dwellings","Constructed Dwellings"]
			}
		],
		link : [
			{
				linktext : "Datasource",
				text : "Statistics New Zealand and Wellington City Council (.csv)",
				url : "/wccgraphs/data/BCsAndPopulationGraph.csv"
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
		funcFile : "/wccgraphs/graphFunctions/CitywideBySuburbgraph.js",
		button : [
			{
				text : "Sort by Distance to CBD / Alphabetically",
				id : "SortTypeCitywideBySuburb"
			}
		],
		drop : [
			{
				text : "Start year",
				id : "dropdownStartYear_Citywide_by_Suburb",
				valtext : ["2016","2015","2014","2013","2012","2011","2010","2009","2008","2007","2006","2005","2004"]
			},{
				text : "End year",
				id : "dropdownEndYear_Citywide_by_Suburb",
				valtext : ["2016","2015","2014","2013","2012","2011","2010","2009","2008","2007","2006","2005","2004"]
			},{
				text : "Choose a data type",
				id : "datatypedd_CitywideBySuburbgraph",
				valtext : ["Total Dwellings Consented","Consented Dwellings by Type", "Value of Consented Construction"]
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
		name : "Consented Value By Month Information",
		id : "ConsentedValueByMonthInfo",
		container : "ConsentedValuebyMonth",
		width : "100%",
		height : "500px",
		csv : "/wccgraphs/data/CitywideBCdataMonthly.csv",
		func : 'ConsentedValuebyMonthgraph',
		funcFile : "/wccgraphs/graphFunctions/ConsentedValuebyMonthgraph.js",
		link : [
			{
				linktext : "Datasource",
				text : "Statistics New Zealand and Wellington City Council (.csv)",
				url : "/wccgraphs/data/CitywideBCdataMonthly.csv"
			}
		]
	}, {
		name : "Consented Value by Suburb Information",
		id : "ConsentedValueBySuburbInfo",
		container : "SuburbConsentedValue",
		width : "100%",
		height : "500px",
		csv : "/wccgraphs/data/SuburbBCDataAnnualbyYear.csv",
		func : "ConsentedValuebySuburbGraph",
		funcFile : "/wccgraphs/graphFunctions/ConsentedValuebySuburbGraph.js",
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
		name : "Development By Month",
		id : "DevMonthInfo",
		container : "DevelopmentbyMonth",
		width : "100%",
		height : "500px",
		csv : "/wccgraphs/data/CitywideBCdataMonthly.csv",
		func : 'DevelopmentbyMonthgraph',
		funcFile : "/wccgraphs/graphFunctions/DevelopmentbyMonthgraph.js",
		drop : [
			{
				text : "Choose a data type",
				id : "datatypedd_DevelopmentbyMonthgraph",
				valtext : ["Total Dwellings Consented","Consented Dwellings by Type"]
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
		name : "Development By Month",
		id : "DevMonthYearRollingInfo",
		container : "AllDevelopmentbyMonth",
		width : "100%",
		height : "500px",
		csv : "/wccgraphs/data/CitywideBCdataMonthly.csv",
		func : 'AllDevelopmentbyMonthgraph',
		funcFile : "/wccgraphs/graphFunctions/AllDevelopmentbyMonthgraph.js",
		drop : [
			{
				text : "Choose a data type",
				id : "datatypedd_DevelopmentbyMonthgraph",
				valtext : ["Total Dwellings Consented","Consented Dwellings by Type", "Value of Consented Construction", "Resource Consents"]
			},{
				text : "Choose a timeframe",
				id : "timeframe_DevelopmentbyMonthgraph",
				valtext : ["Monthly","Annually", "Rolling 12 month average"]	
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
		name : "Development By Year",
		id : "DevTrendsByYear",
		container : "Dev_Trends_by_Year",
		width : "100%",
		height : "500px",
		csv : "/wccgraphs/data/CitywideBCdataAnnual.csv",
		func : 'DevTrendsByYearGraph',
		funcFile : "/wccgraphs/graphFunctions/DevTrendsByYearGraph.js",
		link : [
			{
				linktext : "Datasource",
				text : "Statistics New Zealand and Wellington City Council (.csv)",
				url : "/wccgraphs/data/CitywideBCdataAnnual.csv"
			}
		]
	}, {
		name : "Dwellings Completed",
		id : "DwellingsCCCd",
		container : "DwellingsCompleted",
		width : "100%",
		height : "500px",
		csv : "/wccgraphs/data/DwellingsCCCd.csv",
		func : 'DwellingsCCCd',
		funcFile : "/wccgraphs/graphFunctions/DwellingsCCCd.js",
		drop : [
			{
				text : "Choose an extra dataset",
				id : "DwellingsCCCd_ExtraDataType",
				valtext : ["-","Consented Dwellings","Projected Dwellings"]
			}
		],
		link : [
			{
				linktext : "Datasource",
				text : "Statistics New Zealand and Wellington City Council (.csv)",
				url : "/wccgraphs/data/DwellingsCCCd.csv"
			}
		]
	}, {
		name : "Infometrics Graph",
		id : "InfometricsGraph",
		container : "InfometricsInfo",
		width : "100%",
		height : "500px",
		csv : "/wccgraphs/data/Infometrics.csv",
		func : "InfometricsGraph",
		funcFile : "/wccgraphs/graphFunctions/InfometricsGraph.js",
		drop : [
			{
				text : "Choose a data type",
				id : "InfometricsGraph_Datatype",
				valtext : ["Housing Affordability Index","Rental Affordability Index"]
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
	}, {
		name : "Dwelling Type Over Time",
		id : "DwellingTypePie",
		container : "DwellingTypePieGraph",
		width : "100%",
		height : "500px",
		csv : "/wccgraphs/data/DwellingTypeSplitAnnual.csv",
		func : 'piegraphmaker',
		funcFile : "/wccgraphs/graphFunctions/Piegraphmaker.js",
		drop : [
			{
				text : "Start year",
				id : "dropdownStartYear_Pie",
				valtext : ["2016","2015","2014","2013","2012","2011","2010","2009","2008","2007","2006","2005","2004","2003","2002","2001","2000","1999","1998","1997","1996","1995","1994","1993","1992","1991"]
			},{
				text : "End year",
				id : "dropdownEndYear_Pie",
				valtext : ["2016","2015","2014","2013","2012","2011","2010","2009","2008","2007","2006","2005","2004","2003","2002","2001","2000","1999","1998","1997","1996","1995","1994","1993","1992","1991"]
			},{
				text : "Comparison start year",
				id : "dropdownStartYearTwo_Pie",
				valtext : ["-","2016","2015","2014","2013","2012","2011","2010","2009","2008","2007","2006","2005","2004","2003","2002","2001","2000","1999","1998","1997","1996","1995","1994","1993","1992","1991"]
			},{
				text : "Comparison end year",
				id : "dropdownEndYearTwo_Pie",
				valtext : ["-","2016","2015","2014","2013","2012","2011","2010","2009","2008","2007","2006","2005","2004","2003","2002","2001","2000","1999","1998","1997","1996","1995","1994","1993","1992","1991"]
			}
		],
		link : [
			{
				linktext : "Datasource",
				text : "Statistics New Zealand and Wellington City Council (.csv)",
				url : "/wccgraphs/data/DwellingTypeSplitAnnual.csv"
			}
		]
	}, {
		name : "Property Data Graph",
		id : "PropertyDataGraph",
		container : "PropertyDataInfo",
		width : "100%",
		height : "500px",
		csv : "/wccgraphs/data/HouseDataQuarterly.csv",
		func : 'PropertyDataGraph',
		funcFile : "/wccgraphs/graphFunctions/PropertyDataGraph.js",
		drop : [
			{
				text : "Choose a data type",
				id : "PropertySales_DataType",
				valtext : ["Median House Price","Number of House Sales","Both"]
			}
		],		
		link : [
			{
				linktext : "Datasource",
				text : "Statistics New Zealand and Wellington City Council (.csv)",
				url : "/wccgraphs/data/HouseDataQuarterly.csv"
			}
		]
	}, {
		name : "Regional Info Graph",
		id : "RegionalByYearGraph",
		container : "RegionalByYear",
		width : "100%",
		height : "500px",
		csv : "/wccgraphs/data/RegionalByYear.csv",
		func : 'RegionalByYearGraph',
		funcFile : "/wccgraphs/graphFunctions/RegionalByYear.js",
		drop : [
			{
				text : "Choose a data type",
				id : "Regional_DataType",
				valtext : ["Total Dwellings","Houses","Units","Apartments","Retirement village units"]
			}
		],		link : [
			{
				linktext : "Datasource",
				text : "Statistics New Zealand and Wellington City Council (.csv)",
				url : "/wccgraphs/data/RegionalByYear.csv"
			}
		]
	}, {
		name : "Rental Graph",
		id : "RentalGraph",
		container : "RentGraph",
		width : "100%",
		height : "500px",
		csv : "/wccgraphs/data/RentalData.csv",
		func : 'RentalGraph',
		funcFile : "/wccgraphs/graphFunctions/RentalGraph.js",
		drop : [
			{
				text : "Choose a data type",
				id : "TypeDD_RentalGraph",
				valtext : ["Wellington City", "Mean Rent Comparison"]
			}
		],	
		link : [
			{
				linktext : "Datasource",
				text : "Statistics New Zealand and Wellington City Council (.csv)",
				url : "/wccgraphs/data/RentalData.csv"
			}
		]
	}, {
		name : "Resource Consents Graph",
		id : "ResourceConsentsGraph",
		container : "ResourceConsentsIssued",
		width : "100%",
		height : "500px",
		csv : "/wccgraphs/data/ResourceConsentsMonthly.csv",
		func : 'ResourceConsentsIssuedgraph',
		funcFile : "/wccgraphs/graphFunctions/ResourceConsentsIssuedGraph.js",
		link : [
			{
				linktext : "Datasource",
				text : "Statistics New Zealand and Wellington City Council (.csv)",
				url : "/wccgraphs/data/ResourceConsentsMonthly.csv"
			}
		]
	}, {
		name : "Suburb Information",
		id : "SubInfo",
		container : "SuburbInformation",
		width : "100%",
		height : "500px",
		csv : "/wccgraphs/data/SuburbBCDataAnnualbyYear.csv",
		func : "SuburbAnnualDataGraph",
		funcFile : "/wccgraphs/graphFunctions/SuburbAnnualDataGraph.js",
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
				valtext : [" ","Wellington City Total","Aro Valley","Berhampore","Breaker Bay","Broadmeadows","Brooklyn","Churton Park",
				"Crofton Downs","Glenside","Grenada North","Grenada Village","Hataitai","Highbury","Horokiwi","Houghton Bay",
				"Island Bay","Johnsonville","Kaiwharawhara","Karaka Bays","Karori","Kelburn","Khandallah","Kilbirnie","Kingston",
				"Lyall Bay","Makara","Makara Beach","Maupuia","Melrose","Miramar","Moa Point","Mornington","Mt Cook","Mt Victoria",
				"Newlands","Newtown","Ngaio","Ngauranga","Northland","Ohariu","Oriental Bay","Owhiro Bay","Paparangi","Pipitea","Rongotai",
				"Roseneath","Seatoun","Southgate","Strathmore Park","Takapu Valley","Tawa","Te Aro","Thorndon","Vogeltown","Wadestown",
				"Wellington Central","Wilton","Woodridge"]
			},{
				text : "Choose a data type",
				id : "datatypedd_suburbgraph",
				valtext : ["Total Dwellings Consented","Consented Dwellings by Type"]
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
		name : "Suburb Rental Information",
		id : "SubRentalInfo",
		container : "SuburbRentalGraph",
		width : "100%",
		height : "500px",
		csv : "/wccgraphs/data/RentDetailedQuarterly.csv",
		func : "SuburbRentalGraph",
		funcFile : "/wccgraphs/graphFunctions/SuburbRentalGraph.js",
		drop : [
			{
				text : "Choose an area",
				id : "AreaDD_SuburbRentalGraph",
				valtext : ["TA Total","Brooklyn","Hataitai","Island Bay/Melrose","Johnsonville/Newlands","Karori","Karori South/Makara","Kelburn/Aro Valley","Khandallah","Kilbirnie/Lyall Bay","Kingston/Happy Valley","Lambton","Miramar/Strathmore","Mt Cook","Mt Victoria/Roseneath","Ngaio/Kaiwharawhara/Wilton","Northland","Oriental Bay/Seatoun","Tawa/Grenada North","Te Aro","Vogeltown/Berhampore/Newtown","Wadestown/Thordon"]
			},{
				text : "Choose a property type",
				id : "TypeDD_SuburbRentalGraph",
				valtext : ["House","Apartment","Flat","Room"]
			},{
				text : "Choose a property size",
				id : "BedroomsDD_SuburbRentalGraph",
				valtext : ["Bedrooms Total","1","2","3","4","5+"]
			}
		],
		link : [
			{
				linktext : "Datasource",
				text : "Ministry of Business, Innovation and Employment (.csv)",
				url : "/wccgraphs/data/RentDetailedQuarterly.csv"
			}
		]
		}
];
