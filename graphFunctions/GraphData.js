var graphdata = [{
		name : "Development By Month",
		id : "DevMonthInfo",
		container : "DevelopmentbyMonth",
		width : "100%",
		height : "500px",
		dataVersion : 1,
		csv : "http://wellington.govt.nz/~/media/GraphData/Data/CitywideBCdataMonthly.csv",
		func : 'DevelopmentbyMonthgraph',
		funcFile : "http://wellington.govt.nz/~/media/GraphData/Graphs/DevByMonth.js",
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
				url : "http://wellington.govt.nz/~/media/GraphData/Data/CitywideBCdataMonthly.csv"
			}
		]
	}, {
		name : "Suburb Information",
		id : "SubInfo",
		container : "SuburbInformation",
		width : "100%",
		height : "500px",
		dataVersion : 1,
		csv : "http://wellington.govt.nz/~/media/GraphData/Data/SuburbBCDataAnnualbyYear.js",
		csvdata : "Year,TotalDwellingsAro Valley,TotalDwellingsBerhampore,TotalDwellingsBreaker Bay,TotalDwellingsBroadmeadows,TotalDwellingsBrooklyn,TotalDwellingsChurton Park,TotalDwellingsCrofton Downs,TotalDwellingsGlenside,TotalDwellingsGrenada North,TotalDwellingsGrenada Village,TotalDwellingsHataitai,TotalDwellingsHighbury,TotalDwellingsHorokiwi,TotalDwellingsHoughton Bay,TotalDwellingsIsland Bay,TotalDwellingsJohnsonville,TotalDwellingsKaiwharawhara,TotalDwellingsKaraka Bays,TotalDwellingsKarori,TotalDwellingsKelburn,TotalDwellingsKhandallah,TotalDwellingsKilbirnie,TotalDwellingsKingston,TotalDwellingsLyall Bay,TotalDwellingsMakara,TotalDwellingsMakara Beach,TotalDwellingsMaupuia,TotalDwellingsMelrose,TotalDwellingsMiramar,TotalDwellingsMoa Point,TotalDwellingsMornington,TotalDwellingsMt Cook,TotalDwellingsMt Victoria,TotalDwellingsNewlands,TotalDwellingsNewtown,TotalDwellingsNgaio,TotalDwellingsNgauranga,TotalDwellingsNorthland,TotalDwellingsOhariu,TotalDwellingsOriental Bay,TotalDwellingsOwhiro Bay,TotalDwellingsPaparangi,TotalDwellingsPipitea,TotalDwellingsRongotai,TotalDwellingsRoseneath,TotalDwellingsSeatoun,TotalDwellingsSouthgate,TotalDwellingsStrathmore Park,TotalDwellingsTakapu Valley,TotalDwellingsTawa,TotalDwellingsTe Aro,TotalDwellingsThorndon,TotalDwellingsVogeltown,TotalDwellingsWadestown,TotalDwellingsWellington Central,TotalDwellingsWilton,TotalDwellingsWoodridge,TotalDwellingsWellington City Total,HousesAro Valley,HousesBerhampore,HousesBreaker Bay,HousesBroadmeadows,HousesBrooklyn,HousesChurton Park,HousesCrofton Downs,HousesGlenside,HousesGrenada North,HousesGrenada Village,HousesHataitai,HousesHighbury,HousesHorokiwi,HousesHoughton Bay,HousesIsland Bay,HousesJohnsonville,HousesKaiwharawhara,HousesKaraka Bays,HousesKarori,HousesKelburn,HousesKhandallah,HousesKilbirnie,HousesKingston,HousesLyall Bay,HousesMakara,HousesMakara Beach,HousesMaupuia,HousesMelrose,HousesMiramar,HousesMoa Point,HousesMornington,HousesMt Cook,HousesMt Victoria,HousesNewlands,HousesNewtown,HousesNgaio,HousesNgauranga,HousesNorthland,HousesOhariu,HousesOriental Bay,HousesOwhiro Bay,HousesPaparangi,HousesPipitea,HousesRongotai,HousesRoseneath,HousesSeatoun,HousesSouthgate,HousesStrathmore Park,HousesTakapu Valley,HousesTawa,HousesTe Aro,HousesThorndon,HousesVogeltown,HousesWadestown,HousesWellington Central,HousesWilton,HousesWoodridge,HousesWellington City Total,UnitsAro Valley,UnitsBerhampore,UnitsBreaker Bay,UnitsBroadmeadows,UnitsBrooklyn,UnitsChurton Park,UnitsCrofton Downs,UnitsGlenside,UnitsGrenada North,UnitsGrenada Village,UnitsHataitai,UnitsHighbury,UnitsHorokiwi,UnitsHoughton Bay,UnitsIsland Bay,UnitsJohnsonville,UnitsKaiwharawhara,UnitsKaraka Bays,UnitsKarori,UnitsKelburn,UnitsKhandallah,UnitsKilbirnie,UnitsKingston,UnitsLyall Bay,UnitsMakara,UnitsMakara Beach,UnitsMaupuia,UnitsMelrose,UnitsMiramar,UnitsMoa Point,UnitsMornington,UnitsMt Cook,UnitsMt Victoria,UnitsNewlands,UnitsNewtown,UnitsNgaio,UnitsNgauranga,UnitsNorthland,UnitsOhariu,UnitsOriental Bay,UnitsOwhiro Bay,UnitsPaparangi,UnitsPipitea,UnitsRongotai,UnitsRoseneath,UnitsSeatoun,UnitsSouthgate,UnitsStrathmore Park,UnitsTakapu Valley,UnitsTawa,UnitsTe Aro,UnitsThorndon,UnitsVogeltown,UnitsWadestown,UnitsWellington Central,UnitsWilton,UnitsWoodridge,UnitsWellington City Total,ApartmentsAro Valley,ApartmentsBerhampore,ApartmentsBreaker Bay,ApartmentsBroadmeadows,ApartmentsBrooklyn,ApartmentsChurton Park,ApartmentsCrofton Downs,ApartmentsGlenside,ApartmentsGrenada North,ApartmentsGrenada Village,ApartmentsHataitai,ApartmentsHighbury,ApartmentsHorokiwi,ApartmentsHoughton Bay,ApartmentsIsland Bay,ApartmentsJohnsonville,ApartmentsKaiwharawhara,ApartmentsKaraka Bays,ApartmentsKarori,ApartmentsKelburn,ApartmentsKhandallah,ApartmentsKilbirnie,ApartmentsKingston,ApartmentsLyall Bay,ApartmentsMakara,ApartmentsMakara Beach,ApartmentsMaupuia,ApartmentsMelrose,ApartmentsMiramar,ApartmentsMoa Point,ApartmentsMornington,ApartmentsMt Cook,ApartmentsMt Victoria,ApartmentsNewlands,ApartmentsNewtown,ApartmentsNgaio,ApartmentsNgauranga,ApartmentsNorthland,ApartmentsOhariu,ApartmentsOriental Bay,ApartmentsOwhiro Bay,ApartmentsPaparangi,ApartmentsPipitea,ApartmentsRongotai,ApartmentsRoseneath,ApartmentsSeatoun,ApartmentsSouthgate,ApartmentsStrathmore Park,ApartmentsTakapu Valley,ApartmentsTawa,ApartmentsTe Aro,ApartmentsThorndon,ApartmentsVogeltown,ApartmentsWadestown,ApartmentsWellington Central,ApartmentsWilton,ApartmentsWoodridge,ApartmentsWellington City Total,Retirement Village UnitsAro Valley,Retirement Village UnitsBerhampore,Retirement Village UnitsBreaker Bay,Retirement Village UnitsBroadmeadows,Retirement Village UnitsBrooklyn,Retirement Village UnitsChurton Park,Retirement Village UnitsCrofton Downs,Retirement Village UnitsGlenside,Retirement Village UnitsGrenada North,Retirement Village UnitsGrenada Village,Retirement Village UnitsHataitai,Retirement Village UnitsHighbury,Retirement Village UnitsHorokiwi,Retirement Village UnitsHoughton Bay,Retirement Village UnitsIsland Bay,Retirement Village UnitsJohnsonville,Retirement Village UnitsKaiwharawhara,Retirement Village UnitsKaraka Bays,Retirement Village UnitsKarori,Retirement Village UnitsKelburn,Retirement Village UnitsKhandallah,Retirement Village UnitsKilbirnie,Retirement Village UnitsKingston,Retirement Village UnitsLyall Bay,Retirement Village UnitsMakara,Retirement Village UnitsMakara Beach,Retirement Village UnitsMaupuia,Retirement Village UnitsMelrose,Retirement Village UnitsMiramar,Retirement Village UnitsMoa Point,Retirement Village UnitsMornington,Retirement Village UnitsMt Cook,Retirement Village UnitsMt Victoria,Retirement Village UnitsNewlands,Retirement Village UnitsNewtown,Retirement Village UnitsNgaio,Retirement Village UnitsNgauranga,Retirement Village UnitsNorthland,Retirement Village UnitsOhariu,Retirement Village UnitsOriental Bay,Retirement Village UnitsOwhiro Bay,Retirement Village UnitsPaparangi,Retirement Village UnitsPipitea,Retirement Village UnitsRongotai,Retirement Village UnitsRoseneath,Retirement Village UnitsSeatoun,Retirement Village UnitsSouthgate,Retirement Village UnitsStrathmore Park,Retirement Village UnitsTakapu Valley,Retirement Village UnitsTawa,Retirement Village UnitsTe Aro,Retirement Village UnitsThorndon,Retirement Village UnitsVogeltown,Retirement Village UnitsWadestown,Retirement Village UnitsWellington Central,Retirement Village UnitsWilton,Retirement Village UnitsWoodridge,Retirement Village UnitsWellington City Total,ConstructionValueAro Valley,ConstructionValueBerhampore,ConstructionValueBreaker Bay,ConstructionValueBroadmeadows,ConstructionValueBrooklyn,ConstructionValueChurton Park,ConstructionValueCrofton Downs,ConstructionValueGlenside,ConstructionValueGrenada North,ConstructionValueGrenada Village,ConstructionValueHataitai,ConstructionValueHighbury,ConstructionValueHorokiwi,ConstructionValueHoughton Bay,ConstructionValueIsland Bay,ConstructionValueJohnsonville,ConstructionValueKaiwharawhara,ConstructionValueKaraka Bays,ConstructionValueKarori,ConstructionValueKelburn,ConstructionValueKhandallah,ConstructionValueKilbirnie,ConstructionValueKingston,ConstructionValueLyall Bay,ConstructionValueMakara,ConstructionValueMakara Beach,ConstructionValueMaupuia,ConstructionValueMelrose,ConstructionValueMiramar,ConstructionValueMoa Point,ConstructionValueMornington,ConstructionValueMt Cook,ConstructionValueMt Victoria,ConstructionValueNewlands,ConstructionValueNewtown,ConstructionValueNgaio,ConstructionValueNgauranga,ConstructionValueNorthland,ConstructionValueOhariu,ConstructionValueOriental Bay,ConstructionValueOwhiro Bay,ConstructionValuePaparangi,ConstructionValuePipitea,ConstructionValueRongotai,ConstructionValueRoseneath,ConstructionValueSeatoun,ConstructionValueSouthgate,ConstructionValueStrathmore Park,ConstructionValueTakapu Valley,ConstructionValueTawa,ConstructionValueTe Aro,ConstructionValueThorndon,ConstructionValueVogeltown,ConstructionValueWadestown,ConstructionValueWellington Central,ConstructionValueWilton,ConstructionValueWoodridge,ConstructionValueWellington City Total[ln]2004,1,5,0,3,18,111,3,2,0,2,12,0,0,2,13,53,12,0,37,2,34,47,0,11,1,0,1,5,44,0,2,56,37,47,17,12,0,8,6,1,3,5,0,1,2,13,1,11,1,38,307,38,2,3,3,5,9,1047,1,2,0,1,9,93,1,0,0,2,5,0,0,2,8,35,9,0,10,1,25,2,0,6,1,0,0,2,12,0,0,6,2,35,8,6,0,3,6,1,1,1,0,1,1,12,1,9,1,20,1,5,2,3,1,0,9,362,0,1,0,2,5,18,2,0,0,0,7,0,0,0,4,18,3,0,13,1,9,0,0,5,0,0,1,3,32,0,2,3,0,12,6,6,0,3,0,0,2,4,0,0,1,1,0,1,0,12,0,2,0,0,2,5,0,186,0,2,0,0,4,0,0,2,0,0,0,0,0,0,1,0,0,0,14,0,0,21,0,0,0,0,0,0,0,0,0,47,35,0,3,0,0,2,0,0,0,0,0,0,0,0,0,1,0,6,306,31,0,0,0,0,0,475,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,24,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,24,394260,1599485,5000,774900,7092620,24644915,1358400,750000,2650000,527800,6039449,153200,108000,1298000,5279660,12130648,5026117,767000,13315571,5980231,13331558,8865155,69500,2893253,462500,138000,841987,1695024,17310848,112000,869037,19984300,13027147,10592812,17922585,5825250,771812,2244053,2367595,2177385,1249100,857450,11887680,1360560,2668000,9978120,564000,4431450,816000,13685967,67138904,89428263,856775,3613750,113272679,2432350,1805000,537443105[ln]2005,3,0,1,9,37,72,1,1,0,1,4,0,0,1,6,59,10,3,16,13,30,3,2,1,1,0,6,3,17,0,2,37,11,16,14,7,6,5,3,0,3,4,0,0,2,13,2,5,2,18,391,17,3,5,3,8,18,895,1,0,1,2,30,69,1,1,0,1,3,0,0,1,3,27,8,1,8,1,27,3,2,1,1,0,2,1,9,0,0,0,0,15,4,7,0,3,3,0,1,0,0,0,2,12,1,3,2,7,0,0,2,4,0,5,17,292,2,0,0,7,7,3,0,0,0,0,1,0,0,0,3,32,2,2,8,10,3,0,0,0,0,0,4,2,8,0,0,7,7,1,10,0,6,2,0,0,1,4,0,0,0,1,1,2,0,5,3,3,1,1,3,3,1,156,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,2,30,4,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,6,388,14,0,0,0,0,0,447,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1554500,3775780,655000,1224500,10973380,18777819,764500,395000,1393000,557200,3437224,458000,225600,1553000,5624150,13166613,9096700,1717000,13190461,17288836,23159522,12019100,940100,873000,647462,53937,1097730,1554800,9985000,175000,610000,7685223,8334288,4885053,147845144,6604972,5275385,3270820,1678000,1517700,1321000,2756700,22474925,18019500,2325250,7548369,161000,4883313,875000,4563796,112105317,22175452,906000,4758510,59360699,2974170,3564000,614813500[ln]2006,10,42,0,8,20,68,2,1,0,2,14,0,0,5,16,90,4,4,19,2,44,2,1,4,0,0,0,2,39,0,0,11,10,32,35,12,0,2,1,17,2,5,0,2,2,7,1,7,1,27,27,3,5,3,1,0,21,633,1,0,0,2,9,66,2,1,0,2,6,0,0,2,5,37,4,2,14,2,21,2,0,1,0,0,0,1,15,0,0,1,0,24,4,8,0,0,1,0,0,3,0,0,1,6,0,7,1,19,1,1,1,1,0,0,21,295,9,7,0,6,10,2,0,0,0,0,8,0,0,3,11,17,0,2,5,0,23,0,1,3,0,0,0,1,24,0,0,10,0,8,23,4,0,2,0,0,2,2,0,2,1,0,1,0,0,8,0,0,4,2,0,0,0,201,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,10,0,8,0,0,0,0,17,0,0,0,0,0,1,0,0,0,0,26,2,0,0,1,0,0,66,0,35,0,0,0,0,0,0,0,0,0,0,0,0,0,36,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,71,2264800,5668432,395000,1571630,8787350,20963628,1983000,768000,3126000,2535500,6631972,158000,750000,1640694,7909743,24279686,2629100,3706850,15814532,7491072,19452240,5248761,225700,1576170,33500,153000,274000,669350,12473920,0,651500,7267617,5929135,10202437,27886606,6220099,5437250,2358728,933600,8878000,1075535,2924000,13397229,15304650,2381350,10409200,881198,4607792,1103500,8953890,51259275,11774000,1322400,4685900,65789061,1126300,4851500,436793382[ln]2007,5,6,0,9,26,63,5,0,0,3,8,0,0,3,21,44,5,1,97,8,35,1,0,5,2,0,5,2,27,0,0,38,12,17,68,9,0,4,3,1,0,4,0,1,1,11,2,4,1,38,80,0,5,8,99,1,14,802,2,0,0,7,13,58,5,0,0,3,2,0,0,3,5,36,5,1,9,2,19,0,0,5,2,0,0,1,16,0,0,3,0,15,2,5,0,0,3,1,0,3,0,0,0,4,1,2,1,27,0,0,1,2,0,1,14,279,3,6,0,2,7,5,0,0,0,0,6,0,0,0,16,8,0,0,88,6,16,1,0,0,0,0,3,1,11,0,0,2,7,2,52,4,0,1,0,0,0,1,0,0,0,7,1,2,0,11,2,0,4,6,0,0,0,281,0,0,0,0,6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,33,5,0,14,0,0,3,0,0,0,0,0,1,1,0,0,0,0,0,78,0,0,0,99,0,0,242,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2301900,1667735,34000,2165600,12670572,18567009,1813132,113000,3709600,873300,6185400,1590000,210300,933855,10094283,13279050,3351000,2846775,22638297,58375774,18189275,3814500,105500,2383108,3805780,0,2402500,1045700,12224795,68000,461383,9724000,7513188,8757051,14963250,5432650,4088000,5498039,1364950,4502354,1467000,1624180,43932468,9215540,2483805,8792600,1385600,2619200,452000,13134507,50948394,57088300,1181000,5759372,144189289,1056520,2831600,617925980[ln]2008,7,4,0,4,18,31,4,0,0,3,47,0,0,3,23,38,6,1,20,6,18,7,0,1,1,0,0,1,18,1,0,57,1,20,31,15,0,2,0,1,1,3,0,2,3,5,0,7,1,35,582,2,6,3,0,9,4,1052,2,4,0,1,6,29,3,0,0,3,2,0,0,1,13,29,4,1,9,1,13,1,0,0,1,0,0,1,15,1,0,0,1,12,2,4,0,1,0,0,1,2,0,1,1,4,0,6,1,32,2,0,1,3,0,2,4,220,5,0,0,3,12,2,1,0,0,0,2,0,0,2,10,9,2,0,11,5,5,6,0,1,0,0,0,0,3,0,0,0,0,8,27,11,0,1,0,1,0,1,0,1,0,1,0,1,0,3,1,0,5,0,0,3,0,143,0,0,0,0,0,0,0,0,0,0,43,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,57,0,0,2,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,579,2,0,0,0,4,0,689,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1749500,8225051,382000,1404900,9095805,9476530,1739400,105000,4391959,873300,19892875,86200,204500,1942699,15160170,12866608,3699000,820000,17825349,30191095,13458318,4822387,667000,1490320,1016200,828000,420000,1775900,8351827,170000,433300,9127427,6201402,6538450,21947060,7913000,3656044,3100773,860600,3557000,1403200,3492481,102662896,20974125,3000270,8619500,734200,5392000,600000,15465534,104142284,11436200,1056850,5755510,64169762,2861500,1281350,589514611[ln]2009,3,1,1,0,11,29,4,0,0,19,3,0,1,1,18,33,3,2,16,2,13,0,1,1,1,1,0,2,10,0,2,15,2,13,13,4,0,3,6,1,6,5,30,0,6,7,2,2,1,39,198,4,0,4,0,0,11,550,3,0,1,0,6,28,4,0,0,19,2,0,1,1,6,24,3,2,12,1,8,0,1,0,1,1,0,0,9,0,0,0,1,7,2,3,0,1,6,1,6,2,0,0,3,5,1,2,1,31,0,2,0,4,0,0,11,222,0,1,0,0,5,1,0,0,0,0,1,0,0,0,1,9,0,0,4,1,5,0,0,1,0,0,0,2,1,0,2,0,1,6,10,1,0,0,0,0,0,3,0,0,3,2,1,0,0,7,0,2,0,0,0,0,0,70,0,0,0,0,0,0,0,0,0,0,0,0,0,0,11,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,15,0,0,1,0,0,2,0,0,0,0,30,0,0,0,0,0,0,1,198,0,0,0,0,0,0,258,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2195693,1323692,954000,261000,7630280,11815575,14669305,0,178959,4771902,5674430,99758,389974,542000,8088535,12239855,1393561,4172000,17685758,42314704,11647669,42929395,88000,1212000,290853,182014,316500,990000,10847995,47000,1146681,15143500,4513386,4258522,37951070,5915355,3522570,2872358,4043000,819000,3000000,1564583,127342100,4483000,3473500,6780350,891902,2440460,534000,19193750,53086974,32864097,183991,7313761,73976138,978375,2780000,626024830[ln]2010,3,5,1,2,4,21,8,0,0,38,4,0,1,1,11,31,8,3,22,2,20,1,1,1,1,0,2,5,16,0,2,56,6,22,4,17,0,2,2,10,12,6,0,2,7,17,3,6,0,35,98,4,3,5,3,2,26,562,0,5,0,2,1,20,8,0,0,36,1,0,1,0,10,14,4,2,15,2,12,1,1,1,1,0,2,5,9,0,1,1,0,14,1,7,0,2,2,1,3,5,0,2,6,12,1,4,0,33,4,2,3,3,0,2,16,278,3,0,1,0,3,1,0,0,0,2,3,0,0,1,1,17,4,1,7,0,8,0,0,0,0,0,0,0,7,0,1,2,0,8,1,10,0,0,0,0,9,1,0,0,1,5,2,2,0,2,1,1,0,1,3,0,10,119,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,53,6,0,2,0,0,0,0,9,0,0,0,0,0,0,0,0,0,0,93,1,0,1,0,0,0,165,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1744785,6029000,294764,745200,3844456,7026839,5857790,375000,639000,9331175,6608120,320000,1605000,489000,9133628,15086609,2595673,2255000,23655527,37931800,13205708,5745760,272640,2050450,756000,301000,983500,2327440,14235189,0,848600,33715500,3556370,8124424,32826682,6278900,2510000,5010400,1659850,11532000,2598500,3098520,17899589,8861300,6228600,13826400,932500,8940500,95000,12069553,36360650,42131040,700034,6551800,75953920,1665451,6527000,525949136[ln]2011,10,2,2,2,5,10,4,0,1,25,9,0,0,1,10,44,8,0,16,1,18,0,2,3,1,0,1,1,17,0,0,1,2,7,57,6,0,5,3,2,2,4,2,0,0,6,0,4,0,37,120,0,2,6,4,1,11,475,2,0,2,0,1,10,4,0,0,23,3,0,0,1,9,35,8,0,12,1,16,0,1,2,1,0,1,1,10,0,0,1,2,6,1,6,0,4,2,2,2,2,0,0,0,5,0,3,0,28,1,0,0,2,0,1,9,220,8,2,0,2,4,0,0,0,1,2,5,0,0,0,1,9,0,0,4,0,2,0,1,0,0,0,0,0,7,0,0,0,0,1,28,0,0,1,1,0,0,2,0,0,0,1,0,1,0,9,5,0,2,4,0,0,2,105,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,28,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,114,0,0,0,4,0,0,150,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2473300,1999000,985000,524800,5835850,16073542,11653812,99600,4245000,5954946,22837460,267625,139500,1800000,12668699,13590550,6112540,1199400,12495552,9268067,19815094,4415147,433000,2465670,909139,669000,462000,1301738,11204000,0,323475,18075000,7625120,12586000,65857975,6994550,160700,2514380,1371000,7523000,2284400,1528000,7005500,11608450,2491610,6693500,507800,5973000,25000,19783782,91050643,25700400,247720,5445800,54497528,1168213,2425000,533366577[ln]2012,5,2,0,1,3,24,4,1,0,25,3,0,1,0,7,59,5,0,11,0,10,2,0,4,1,1,3,1,12,0,0,37,9,12,54,10,0,0,2,1,4,3,0,1,1,9,0,2,0,21,72,0,1,1,44,4,28,501,1,0,0,1,2,19,4,1,0,25,3,0,1,0,3,30,5,0,7,0,10,2,0,1,1,1,3,1,11,0,0,2,2,8,6,3,0,0,2,1,4,3,0,0,1,9,0,2,0,18,1,0,1,0,0,2,28,225,4,2,0,0,1,5,0,0,0,0,0,0,0,0,4,3,0,0,3,0,0,0,0,3,0,0,0,0,1,0,0,20,2,3,7,6,0,0,0,0,0,0,0,1,0,0,0,0,0,2,6,0,0,1,0,2,0,76,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,26,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,15,5,1,41,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,65,0,0,0,44,0,0,200,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3158924,7342000,45000,509000,6465220,8800890,4010400,118000,5875000,6250759,5806477,130192,341000,485000,6490745,18023836,1936000,908000,16284928,9688160,10836246,3328000,381000,4718400,496000,401340,2192700,887000,9104424,12000,291500,13341795,7939200,4837060,25691120,6655720,1290800,2155786,1467000,1771430,2206195,2126461,7730500,6624149,4329712,7490840,710700,1899000,65000,19037128,97554375,13921751,991000,4812280,76395172,3312490,6430000,456104805[ln]2013,1,7,0,0,13,23,8,1,2,35,2,0,2,2,7,55,9,0,15,8,14,5,1,11,3,0,0,0,38,0,3,73,9,12,2,5,0,0,1,0,5,1,0,0,5,11,1,5,0,25,160,4,0,8,2,2,27,623,1,1,0,0,10,23,8,1,0,35,2,0,2,2,3,31,9,0,14,3,9,1,0,1,3,0,0,0,5,0,0,0,1,11,1,4,0,0,1,0,5,1,0,0,1,9,1,5,0,23,2,1,0,5,0,2,17,254,0,4,0,0,3,0,0,0,2,0,0,0,0,0,4,19,0,0,1,5,5,0,1,10,0,0,0,0,6,0,3,20,8,1,1,1,0,0,0,0,0,0,0,0,4,2,0,0,0,2,1,2,0,3,0,0,10,118,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,5,0,0,0,0,0,4,0,0,0,0,0,0,27,0,0,53,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,157,1,0,0,2,0,0,251,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1043150,4663539,22500,177780,7352975,9813475,10395008,593500,655220,10515307,3522731,402828,390000,1113000,5147848,22167078,3694250,471000,11594813,12866968,14005036,6332475,436000,5558500,1469000,40000,345000,555000,16894848,0,1677721,38325550,10440000,5653930,19808701,4920270,866000,2130000,2497235,9894000,2158488,978800,40762875,935150,5062894,11184750,865000,5171670,65800,11575003,75793845,6314694,132930,5858450,118353713,1227300,6737400,541630998[ln]2014,4,36,2,2,9,48,3,0,0,15,12,0,0,5,8,43,12,3,8,6,16,48,0,7,3,0,1,3,30,1,1,24,4,13,7,10,0,5,2,0,2,6,0,0,4,3,1,2,0,15,33,26,2,2,36,1,20,544,1,0,0,2,8,47,1,0,0,15,12,0,0,2,8,17,10,3,4,2,8,1,0,2,3,0,1,2,10,1,1,0,2,13,2,7,0,5,2,0,1,4,0,0,3,3,0,1,0,9,1,6,2,2,0,1,16,241,2,2,2,0,1,1,2,0,0,0,0,0,0,3,0,26,0,0,4,4,8,7,0,5,0,0,0,1,20,0,0,0,2,0,0,3,0,0,0,0,1,2,0,0,1,0,1,1,0,6,2,11,0,0,0,0,4,122,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,40,0,0,0,0,0,0,0,0,0,24,0,0,5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,30,9,0,0,36,0,0,147,0,34,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,34,2221872,16356706,851500,1126350,6677257,18168157,1831000,519000,1600000,10178380,7610267,394450,70000,1911920,8822508,16403648,6038806,2203000,9886783,13370815,12640340,7783000,25000,3471000,1858000,125000,1367900,1614000,17336903,275000,690000,24676849,12295736,5913381,10180480,10539486,1005495,6184900,1810664,1830886,952000,2783900,13815321,26409246,5264244,5629000,258000,1877100,277192,9534853,35692030,75953690,1150000,3467233,153854077,1370500,5597000,591751825[ln]2015,9,10,1,4,6,64,27,0,0,13,20,1,2,1,23,43,8,1,17,5,19,1,2,0,5,0,1,0,25,0,0,40,3,27,29,4,0,3,2,0,4,3,0,0,0,15,5,7,0,23,33,3,2,5,104,1,19,640,7,8,1,2,6,57,5,0,0,13,5,1,2,1,3,26,6,1,13,4,8,1,2,0,5,0,1,0,5,0,0,3,2,17,1,2,0,3,2,0,4,1,0,0,0,12,3,3,0,18,0,1,2,2,0,1,19,279,2,2,0,2,0,7,22,0,0,0,15,0,0,0,20,17,2,0,4,1,11,0,0,0,0,0,0,0,20,0,0,5,0,10,28,2,0,0,0,0,0,2,0,0,0,1,2,4,0,5,8,1,0,3,0,0,0,196,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,32,1,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,25,1,0,0,104,0,0,165,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3111120,4082740,430000,1784680,6500756,23467851,6371473,80000,394000,3942541,12573300,528600,960883,2094000,10845012,15662817,4180000,1309040,18372287,99098068,12806416,7480590,1138780,1811990,1780760,175000,722000,629950,9747010,0,71000,12751000,15132629,11019654,15973120,4114490,535000,2196628,1248600,2779000,2206000,1442500,27271874,48920150,4651900,11608300,2031875,4594000,191000,10556031,70773948,31987466,714000,7723000,80089956,1280000,4874200,628818985",
		func : "graphmaker_suburbgraph",
		funcFile : "http://wellington.govt.nz/~/media/GraphData/Graphs/SuburbGraph.js",
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
				url : "http://wellington.govt.nz/~/media/GraphData/Data/SuburbBCDataAnnualbyYear.csv"
			}
		]
	}, {
		name : "Citywide By Suburb Information",
		id : "CitywideInfo",
		container : "CitywideBySuburb",
		width : "100%",
		height : "500px",
		dataVersion : 1,
		csv : "http://wellington.govt.nz/~/media/GraphData/Data/SuburbBCDataAnnualbySuburbRanked.csv",
		func : "CitywideBySuburbgraph",
		funcFile : "http://wellington.govt.nz/~/media/GraphData/Graphs/CitywideBySuburb.js",
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
				url : "http://wellington.govt.nz/~/media/GraphData/Data/SuburbBCDataAnnualbySuburbRanked.csv"
			}
		]
	}, {
		name : "Infometrics Graph",
		id : "InfometricsInfo",
		container : "InfometricsGraph",
		width : "100%",
		height : "500px",
		dataVersion : 1,
		csv : "http://wellington.govt.nz/~/media/GraphData/Data/Infometrics.csv",
		func : "InfometricsGraph",
		funcFile : "http://wellington.govt.nz/~/media/GraphData/Graphs/Isometrics.js",
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
				url : "http://wellington.govt.nz/~/media/GraphData/Data/Infometrics.csv"
			}
		],
		div : [
			{
				id : "ExtraReferences"
			}
		]
	}
];