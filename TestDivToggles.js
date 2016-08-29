/* var Colour1 = '#9D009D';
var Colour2 = '#038294';
var Colour3 = '#F17401';
var Colour4 = '#D50048'; */

var Colour1 = 'rgb(69, 71, 82)';
var Colour2 = 'rgb(255, 227, 115)';
var Colour3 = 'rgb(191, 189, 191)';
var Colour4 = 'rgb(166, 150, 120)';
var Colour5 = 'rgb(214, 191, 110)';



var Zooming = false;



// Changing D3 default number formats

var d3_formatPrefixes = ["e-24","e-21","e-18","e-15","e-12","e-9","e-6","e-3","","K","M","B","T","P","E","Z","Y"].map(d3_formatPrefix);

// Override d3's formatPrefix function


var d3 = Plotly.d3;

d3.formatPrefix = function(value, precision) {
    var i = 0;
    if (value) {
        if (value < 0) {
            value *= -1;
        }
        if (precision) {
            value = d3.round(value, d3_format_precision(value, precision));
        }
        i = 1 + Math.floor(1e-12 + Math.log(value) / Math.LN10);
        i = Math.max(-24, Math.min(24, Math.floor((i - 1) / 3) * 3));
    }
    return d3_formatPrefixes[8 + i / 3];
};

function d3_formatPrefix(d, i) {
    var k = Math.pow(10, Math.abs(8 - i) * 3);
    return {
        scale: i > 8 ? function(d) { return d / k; } : function(d) { return d * k; },
        symbol: d
    };
}

function d3_format_precision(x, p) {
    return p - (x ? Math.ceil(Math.log(x) / Math.LN10) : 1);
}



function generateGraphFromCsv(pathToCsvFile, graphFunction) {

	var requestCsv = $.ajax(pathToCsvFile, { dataType: 'text' } ),
		parseCsv = requestCsv.then(function(data){
			return $.csv.toObjects(data);
		});

	parseCsv.done(graphFunction);
	
}




function datatypevalue_Development_by_Month(){
var datatypedropdFF = document.getElementById("datatypedd_DevelopmentbyMonthgraph");
var datatypedropvalueFF = datatypedropdFF.options[datatypedropdFF.selectedIndex].text;
return(datatypedropvalueFF);
	;}
	
function DevelopmentbyMonthgraph(chartData){
	
	if (chartData == null || chartData.length <= 0)
		return;
	
var datatypetouse_Development_by_Month = datatypevalue_Development_by_Month();

if (datatypetouse_Development_by_Month == "" || datatypetouse_Development_by_Month == "Total Dwellings Consented") {

	MonthsLength = $.map(chartData, function(data){return data["Citywide Months Longterm Months"];}).length

	data = [{
		x: $.map(chartData, function(data){
			return data["Citywide Months Longterm Months"];
		}),
		y: $.map(chartData, function(data){
			return data["Citywide Months Longterm Total New Dwellings"];
		}),
		type: 'bar',
		marker: {color: Colour1}
        }];

	layout = {
		title: 'Total Dwellings Consented by Month',
		showlegend: false,
		xaxis: {zeroline: false, tickmode: 'auto', tickangle: 45, fixedrange: Zooming, range: [MonthsLength-24.6,MonthsLength]},		
//		Citywide Months Longterm Months.length-24.6,Citywide Months Longterm Months.length]},
		yaxis: {zeroline: false, fixedrange: Zooming, range: [0,160]},
		}
	;}

else if (datatypetouse_Development_by_Month == "Consented Dwellings by Type") {

	data = [{
		x: $.map(chartData, function(data){
			return data["Citywide Months Longterm Months"];
		}),
		y: $.map(chartData, function(data){
			return data["Citywide Months Longterm New Houses"];
		}),
		name: "Houses",
		type: 'bar',
		marker: {color: Colour1}
		
        },{
		x: $.map(chartData, function(data){
			return data["Citywide Months Longterm Months"];
		}),
		y: $.map(chartData, function(data){
			return data["Citywide Months Longterm New Units"];
		}),
		name: "Units",
		type: 'bar',
		marker: {color: Colour2}
		
        },{
		x: $.map(chartData, function(data){
			return data["Citywide Months Longterm Months"];
		}),
		y: $.map(chartData, function(data){
			return data["Citywide Months Longterm New Apartments"];
		}),
		name: "Apartments",
		type: 'bar',
		marker: {color: Colour3}
		
        },{
		x: $.map(chartData, function(data){
			return data["Citywide Months Longterm Months"];
		}),
		y: $.map(chartData, function(data){
			return data["Citywide Months Longterm Retirement Village Units"];
		}),
		name: "Retirement Village Units",
		type: 'bar',
		marker: {color: Colour4}
        }];

	MonthsLength = $.map(chartData, function(data){return data["Citywide Months Longterm Months"];}).length 
	
	layout = {
		title: 'Consented Dwellings by Type and Month',
		showlegend: true,
		xaxis: {
			zeroline: false, 
			tickmode: 'auto', 
			tickangle: 45, 
			fixedrange: Zooming, 
			range: [MonthsLength-24.6,MonthsLength]
			},
		yaxis: {
			zeroline: false, 
			fixedrange: Zooming, 
			range: [0,160]},
			barmode: 'stack'
			}
	;}

else {

	data = [{
		x: $.map(chartData, function(data){
			return data["Citywide Months Longterm Months"];
		}),
		y: $.map(chartData, function(data){
			return data["Citywide Months Longterm Residential Buildings"];
		}),
		type: 'bar',
		name: 'Residential construction value',
		marker: {color: Colour1}
		
        },{
		x: $.map(chartData, function(data){
			return data["Citywide Months Longterm Months"];
		}),
		y: $.map(chartData, function(data){
			return data["Citywide Months Longterm NonResidential Construction"];
		}),
		type: 'bar',
		name: 'Non-residential construction value',
		marker: {color: Colour2}
		
        },{
		x: $.map(chartData, function(data){
			return data["Citywide Months Longterm Months"];
		}),
		y: $.map(chartData, function(data){
			return data["Citywide Months Longterm Total Construction Value"];
		}),
		type: 'line',
		name: 'Total construction value',
		marker: {color: Colour3}
        }];

	MonthsLength = $.map(chartData, function(data){return data["Citywide Months Longterm Months"];}).length 
		
	layout = {
		title: 'Construction Value by Month',
		showlegend: true,
		xaxis: {
			fixedrange: Zooming, 
			zeroline: false, 
			tickmode: 'auto', 
			tickangle: 45, 
			range: [MonthsLength-24.6,MonthsLength]},
		yaxis: {
			fixedrange: Zooming, 
			zeroline: false, 
			tickformat: '$,s', 
			hoverformat: '$,.4s', 
			range:[0,120000000]}
		}
	;}



Plotly.newPlot('DevelopmentbyMonth', data, layout);
}



function DevTrendsByYearGraph(chartData){

	if (chartData == null || chartData.length <= 0)
		return;
	
        data = [{
            x: $.map(chartData, function(data){
			return data["Annual Citywide Longterm Years"]
			;}),
			y: $.map(chartData, function(data){
			return data["Annual Citywide Longterm New Houses"]
			;}),
            name: 'Houses',
            line: {width: 6},
			marker: {color: Colour1}
        }, {
            x: $.map(chartData, function(data){
			return data["Annual Citywide Longterm Years"]
			;}),
			y: $.map(chartData, function(data){
			return data["Annual Citywide Longterm New Units"]
			;}),
            name: 'Units',
            line: {width: 6,},
			marker: {color: Colour2}
        }, {
            x: $.map(chartData, function(data){
			return data["Annual Citywide Longterm Years"]
			;}),
			y: $.map(chartData, function(data){
			return data["Annual Citywide Longterm New Apartments"]
			;}),
            name: 'Apartments',
            line: {width: 6,},
			marker: {color: Colour5}
        }, {
            x: $.map(chartData, function(data){
			return data["Annual Citywide Longterm Years"]
			;}),
			y: $.map(chartData, function(data){
			return data["Annual Citywide Longterm Retirement Village Units"]
			;}),
            name: 'Retirement Village Units',
            line: {width: 6,},
			marker: {color: Colour4}
		}, {
            x: $.map(chartData, function(data){
			return data["Annual Citywide Longterm Years"]
			;}),
			y: $.map(chartData, function(data){
			return data["Annual Citywide Longterm Total New Dwellings"]
			;}),
            name: 'Total',
            opacity: 0.7,
			marker:{color:'#AAAAAA'},
			type: 'bar'    
        }],

        layout = {
			title: 'Consented Dwellings by Year',
			showlegend: true,
			legend: {x: 0.85, y: 0.9},
			xaxis: {zeroline: false, tickmode: 'linear', tick0: 0, dtick: 1, tickangle: 45, fixedrange: Zooming},
			yaxis: {zeroline: false, fixedrange: Zooming}
        };


    Plotly.plot(Dev_Trends_by_Year, data, layout);
	} 


function ResourceConsentsIssuedgraph(chartData){

	data = [{
            x: $.map(chartData, function(data){
			return data["Month"]
			;}),
			y: $.map(chartData, function(data){
			return data["LandUse"]
			;}),
	        name: 'Land Use',
			opacity: 1,
			type: 'bar',
			marker: {color: Colour1}		
	        }, {
				
            x: $.map(chartData, function(data){
			return data["Month"]
			;}),
			y: $.map(chartData, function(data){
			return data["Subdivision"]
			;}),
			name: 'Subdivision',
			type: 'bar',
			marker: {color: Colour2}
	        }, {
				
            x: $.map(chartData, function(data){
			return data["Month"]
			;}),
			y: $.map(chartData, function(data){
			return data["Combined"]
			;}),
	        name: 'Combined',
			marker:{color:'#AAAAAA'},
			type: 'bar',
			marker: {color: Colour3}
	        }],

	layout = {
   	    title: 'Resource Consents Issued',
	    showlegend: true,
    	xaxis: {zeroline: false, tickmode: 'linear', tick0: 0, dtick: 1, tickangle: 45, fixedrange: Zooming},
     	yaxis: {zeroline: false, fixedrange: Zooming},
     	barmode: 'stack',
		};

	Plotly.plot(ResourceConsentsIssued, data, layout);
	}
	
	
	
function TotalDwellingsConsentedGraph(data) {

	MonthsLength = $.map(chartData, function(data){return data["Citywide Months Longterm Months"];}).length 


	data = [{
		x: $.map(chartData, function(data){
			return data["Citywide Months Longterm Months"];
		}),
		y: $.map(chartData, function(data){
			
		}),
		type: 'bar',
		marker: {color: Colour1}
        }];

	layout = {
		title: 'Total Dwellings Consented by Month',
		showlegend: false,
		xaxis: {zeroline: false, tickmode: 'auto', tickangle: 45, fixedrange: Zooming, range: [MonthsLength-24.6,MonthsLength]},
		yaxis: {zeroline: false, fixedrange: Zooming, range: [0,160]}
		}
	

	Plotly.newPlot('DevelopmentbyMonth', data, layout);

}



function dropdownvalue_suburbgraph(){
var dropd = document.getElementById("datafromdropdown_suburbgraph");
var dropvalue = dropd.options[dropd.selectedIndex].text;
return(dropvalue);
	;}

function comparisionvalue_suburbgraph(){
var comparedropd = document.getElementById("comparisiondd_suburbgraph");
var comparedropvalue = comparedropd.options[comparedropd.selectedIndex].text;
return(comparedropvalue);
	;}

function datatypevalue(){
var datatypedropd = document.getElementById("datatypedd_suburbgraph");
var datatypedropvalue = datatypedropd.options[datatypedropd.selectedIndex].text;
return(datatypedropvalue);
	;}



function graphmaker_suburbgraph(chartData){

var suburbtouse = dropdownvalue_suburbgraph();
var comparisonsuburbtouse = comparisionvalue_suburbgraph();
var datatypetouse = datatypevalue();


	
if (suburbtouse == "") {
	suburbtouse = "Wellington City Total"
	;}

	
	
	SuburbYears = $.map(chartData, function(data){
		return data["Year"]
		;});

	housedata = $.map(chartData, function(data){
		return data["Houses".concat(suburbtouse)];
		});
		
	unitdata = $.map(chartData, function(data){
		return data["Units".concat(suburbtouse)];
		});

	apartmentdata = $.map(chartData, function(data){
		return data["Apartments".concat(suburbtouse)];
		});

	retirementunitsdata = $.map(chartData, function(data){
		return data["Retirement Village Units".concat(suburbtouse)];
		});

	totaldwellingsdata = $.map(chartData, function(data){
		return data["TotalDwellings".concat(suburbtouse)];
		});
		
	constructionvaluedata = $.map(chartData, function(data){
		return data["ConstructionValue".concat(suburbtouse)];
		});

	housedata_comparisonsuburb = $.map(chartData, function(data){
		return data["Houses".concat(comparisonsuburbtouse)];
		});
		
	unitdata_comparisonsuburb = $.map(chartData, function(data){
		return data["Units".concat(comparisonsuburbtouse)];
		});

	apartmentdata_comparisonsuburb = $.map(chartData, function(data){
		return data["Apartments".concat(comparisonsuburbtouse)];
		});

	retirementunitsdata_comparisonsuburb = $.map(chartData, function(data){
		return data["Retirement Village Units".concat(comparisonsuburbtouse)];
		});

	totaldwellingsdata_comparisonsuburb = $.map(chartData, function(data){
		return data["TotalDwellings".concat(comparisonsuburbtouse)];
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


if (datatypetouse == "Consented Dwellings by Type" && comparisonsuburbtouse == "") {
	data = [{
        x: SuburbYears,
        y: housedata,
        name: suburbtouse.concat(" Houses"),
		type: 'bar',
		marker: {color: Colour1}
        
		},{
        x: SuburbYears,
        y: unitdata,
        name: suburbtouse.concat(" Units"),
		type: 'bar',
		marker: {color: Colour2}
        
		},{
        x: SuburbYears,
        y: apartmentdata,
        name: suburbtouse.concat(" Apartments"),
		type: 'bar',
		marker: {color: Colour3}

		},{
        x: SuburbYears,
        y: retirementunitsdata,
        name: suburbtouse.concat(" Retirement Village Units"),
		type: 'bar',
		marker: {color: Colour4}
        }],

	layout = {
		title: 'Consented Dwellings by Type',
		showlegend: true,
		xaxis: {
			zeroline: false, 
			tickmode: 'linear', 
			tick0: 0, 
			dtick: 1, 
			tickangle: 45, 
			fixedrange: Zooming},
		yaxis: {
			zeroline: false, 
			rangemode: "tozero", 
			fixedrange: Zooming},
		barmode: 'stack'
		}
	;}

else if (datatypetouse == "Consented Dwellings by Type" && comparisonsuburbtouse != "") {
	data = [{
        x: SuburbYears,
        y: housedata,
        name: "Houses",
		type: 'bar',
		xaxis: 'x2',
		yaxis: 'y2',
		marker: {color: Colour1}
        
		},{
        x: SuburbYears,
        y: unitdata,
        name: "Units",
		type: 'bar',
		xaxis: 'x2',
		yaxis: 'y2',
		marker: {color: Colour2}
        
		},{
        x: SuburbYears,
        y: apartmentdata,
        name: "Apartments",
		type: 'bar',
		xaxis: 'x2',
		yaxis: 'y2',
		marker: {color: Colour3}
       
		},{
        x: SuburbYears,
        y: retirementunitsdata,
        name: "Retirement Village Units",
		type: 'bar',
		xaxis: 'x2',
		yaxis: 'y2',
		marker: {color: Colour4}
        
		},{    
	    x: SuburbYears,
        y: housedata_comparisonsuburb,
        name: "Houses",
		visible: visibilitytoggle,
        type: 'bar',
		showlegend: false,
		marker: {color: Colour1}
        
		},{    
		x: SuburbYears,
        y: unitdata_comparisonsuburb,
        name: "Units",
		visible: visibilitytoggle,
        type: 'bar',
		showlegend: false,
		marker: {color: Colour2}
        
		},{    
		x: SuburbYears,
        y: apartmentdata_comparisonsuburb,
        name: "Apartments",
		visible: visibilitytoggle,
        type: 'bar',
		showlegend: false,
		marker: {color: Colour3}
       
		},{
        x: SuburbYears,
        y: retirementunitsdata_comparisonsuburb,
        name: "Retirement Village Units",
		visible: visibilitytoggle,
		type: 'bar',
		showlegend: false,
		marker: {color: Colour4}
        }];
		
	temp_sum1 = Math.max.apply(Math, totaldwellingsdata);
	temp_sum2 = Math.max.apply(Math, totaldwellingsdata_comparisonsuburb);
	y_max = Math.max(temp_sum1,temp_sum2);
	
 		
	layout = {
		title: 'Consented Dwellings by Type',
//		showlegend: true,
		legend: {traceorder: 'normal'},
		barmode: 'stack',

		xaxis: {
			title: comparisonsuburbtouse,
			zeroline: false, 
			tickmode: 'linear', 
			tick0: 0, 
			dtick: 1, 
			tickangle: 45, 
			fixedrange: Zooming},
		
		xaxis2: {
			title: suburbtouse,
			zeroline: false,
			tickmode: 'linear', 
			tick0: 0, 
			dtick: 1, 
			tickangle: 45, 
			fixedrange: Zooming,
			anchor: 'y2'},

		yaxis: {
			zeroline: false, 
			rangemode: "tozero", 
			range: [0,y_max],
			fixedrange: Zooming,
			domain:[0,0.45]},

		yaxis2: {
			zeroline: false, 
			rangemode: "tozero", 
			range: [0,y_max],
			fixedrange: Zooming,
			domain:[0.55,1]}
		}
	;}

else if(datatypetouse == "Total Dwellings Consented"){
	data = [{
        x: SuburbYears,
        y: totaldwellingsdata,
        name: suburbtouse,
		line: {width: 6},
		marker: {color: Colour1}
		
        },{
        x: SuburbYears,
        y: totaldwellingsdata_comparisonsuburb,
        name: comparisonsuburbtouse,
		visible: visibilitytoggle,
        line: {width: 6},
		marker: {color: Colour2}
        }],

	layout = {
        title: 'Total Dwellings Consented',
        showlegend: true,
        xaxis: {zeroline: false, tickmode: 'linear', tick0: 0, dtick: 1, tickangle: 45, fixedrange: Zooming},
        yaxis: {zeroline: false, rangemode: "tozero", fixedrange: Zooming}
		}
	;}

else {
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
        xaxis: {zeroline: false, tickmode: 'linear', tick0: 0, dtick: 1,  tickangle: 45, fixedrange: Zooming},
       	yaxis: {zeroline: false, tickformat: '$,s', hoverformat: '$,.4s', rangemode: "tozero", fixedrange: Zooming}
		}
	;}

	Plotly.newPlot(SuburbInformation, data, layout)
}



function dropdowntextStart(){
var dropdownA = document.getElementById("dropdownStartYear");
var dropvalueA = dropdownA.options[dropdownA.selectedIndex].text;
return(dropvalueA);
	;}

function dropdownvalueStart(){
var dropdownB = document.getElementById("dropdownStartYear");
var dropvalueB = dropdownB.options[dropdownB.selectedIndex].value;
return(dropvalueB);
	;}

function dropdowntextEnd(){
var dropdownC = document.getElementById("dropdownEndYear");
var dropvalueC = dropdownC.options[dropdownC.selectedIndex].text;
return(dropvalueC);
	;}

function dropdownvalueEnd(){
var dropdownD = document.getElementById("dropdownEndYear");
var dropvalueD = dropdownD.options[dropdownD.selectedIndex].value;
return(dropvalueD);
	;}

function dropdowntextStartTwo(){
var dropdownA = document.getElementById("dropdownStartYearTwo");
var dropvalueA = dropdownA.options[dropdownA.selectedIndex].text;
return(dropvalueA);
	;}

function dropdownvalueStartTwo(){
var dropdownB = document.getElementById("dropdownStartYearTwo");
var dropvalueB = dropdownB.options[dropdownB.selectedIndex].value;
return(dropvalueB);
	;}

function dropdowntextEndTwo(){
var dropdownC = document.getElementById("dropdownEndYearTwo");
var dropvalueC = dropdownC.options[dropdownC.selectedIndex].text;
return(dropvalueC);
	;}

function dropdownvalueEndTwo(){
var dropdownD = document.getElementById("dropdownEndYearTwo");
var dropvalueD = dropdownD.options[dropdownD.selectedIndex].value;
return(dropvalueD);
	;}

function aSum(){
  var total=[],undefined;
  for(var i=0,l0=arguments.length;i<l0;i++)
    for(var j=0,arg=arguments[i],l1=arg.length;j<l1;j++)
      total[j]=(total[j]==undefined?0:total[j])+arg[j];
  return total;
}

function piegraphmaker(chartData){
var startYearText = dropdowntextStart();
var endYearText = dropdowntextEnd();
var startYearValue = dropdownvalueStart();
var endYearValue = dropdownvalueEnd();
var startYearTextTwo = dropdowntextStartTwo();
var endYearTextTwo = dropdowntextEndTwo();
var startYearValueTwo = dropdownvalueStartTwo();
var endYearValueTwo = dropdownvalueEndTwo();

if(startYearValue>endYearValue)
{alert("End year is earlier than start year")};

if(startYearTextTwo>endYearTextTwo && startYearTextTwo != '-' && endYearTextTwo != '-')
{alert("End year is earlier than start year")};

if(startYearTextTwo != '-' && endYearTextTwo == '-')
{endYearTextTwo = startYearTextTwo, endYearValueTwo = startYearValueTwo};



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

if(startYearTextTwo == "-" || endYearTextTwo == "-"){
var data = [{
	values: [HousesCollated,UnitsCollated,ApartmentsCollated],
	labels: x_type_split,
	type: 'pie',
	sort: false,
	direction: "clockwise",
	name  : startYearText.concat(" - ", endYearText),
	text : x_type_split,
//	textfont: {colors: [Colour2, Colour3, Colour1]},
	hoverinfo: "label+value+percent+name",
	marker: {colors: [Colour4, Colour2, Colour3]}
	
}];

var layout = {
	title: 'Dwelling Type Split',
	showlegend: false,
	annotations: [{
	text: startYearText.concat(" - ", endYearText),
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
	name  : startYearText.concat(" - ", endYearText),
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
	name: startYearTextTwo.concat(" - ", endYearTextTwo),
	text : x_type_split,
	domain: { x: [0.5, 1] },
	hoverinfo: "label+value+percent+name",
	marker: {colors: [Colour4, Colour2, Colour3]}
}];

var layout = {
	title: 'Dwelling Type Split',
	showlegend: false,
	annotations: [{
		text: startYearText.concat(" - ", endYearText),
		x: 0.175, y: 1.1,
		showarrow: false,
		font : {size :20}
		},{
		text: startYearTextTwo.concat(" - ", endYearTextTwo),
		x: 0.825, y: 1.1,
		showarrow: false,
		font : {size :20}
		}]
	};
}

Plotly.newPlot('DwellingTypePie', data, layout);
}


function dropdowntextStart_Citywide_by_Suburb(){
var dropdownAA = document.getElementById("dropdownStartYear_Citywide_by_Suburb");
var dropvalueAA = dropdownAA.options[dropdownAA.selectedIndex].text;
return(dropvalueAA);
	;}

function dropdownvalueStart_Citywide_by_Suburb(){
var dropdownBB = document.getElementById("dropdownStartYear_Citywide_by_Suburb");
var dropvalueBB = dropdownBB.options[dropdownBB.selectedIndex].value;
return(dropvalueBB);
	;}

function dropdowntextEnd_Citywide_by_Suburb(){
var dropdownCC = document.getElementById("dropdownEndYear_Citywide_by_Suburb");
var dropvalueCC = dropdownCC.options[dropdownCC.selectedIndex].text;
return(dropvalueCC);
	;}

function dropdownvalueEnd_Citywide_by_Suburb(){
var dropdownDD = document.getElementById("dropdownEndYear_Citywide_by_Suburb");
var dropvalueDD = dropdownDD.options[dropdownDD.selectedIndex].value;
return(dropvalueDD);
	;}

function copy_assoc(arr)
{    var out = [];
    for(var key in arr)
    {   if(!arr.hasOwnProperty(key))
        {continue;}
        out[key] = arr[key];    }
    return out;}

function datatypevalue_Citywide_by_Suburb(){
var datatypedropdEE = document.getElementById("datatypedd_CitywideBySuburbgraph");
var datatypedropvalueEE = datatypedropdEE.options[datatypedropdEE.selectedIndex].text;
return(datatypedropvalueEE);
	;}

function CitywideBySuburbgraph(chartData){

var StartYear_Citywide_by_SuburbText = dropdowntextStart_Citywide_by_Suburb();
var EndYear_Citywide_by_SuburbText = dropdowntextEnd_Citywide_by_Suburb();
var StartYear_Citywide_by_SuburbValue = dropdownvalueStart_Citywide_by_Suburb();
var EndYear_Citywide_by_SuburbValue = dropdownvalueEnd_Citywide_by_Suburb();
var datatypetouse_Citywide_by_Suburb = datatypevalue_Citywide_by_Suburb();


if(StartYear_Citywide_by_SuburbValue>EndYear_Citywide_by_SuburbValue)
{alert("End year is earlier than start year")};


var StartingYear = parseInt(StartYear_Citywide_by_SuburbText)-2004
var EndingYear = parseInt(EndYear_Citywide_by_SuburbText)-2004



var HousesCollated = [];
var UnitsCollated = [];
var ApartmentsCollated = [];
var TotalDwellingsCollated = [];
var RetirementVillageUnitsCollated = [];
var ConstructionValueCollated = [];


for(i = (parseInt(StartYear_Citywide_by_SuburbValue)); i <= (parseInt(EndYear_Citywide_by_SuburbValue)); i++)
	{
		TotalDwellingsWithYear = "TotalDwellings".concat(i);

		TotalDwellingsThisYear = $.map(chartData, function(data){
			return parseInt(data[TotalDwellingsWithYear]);
			});
		
		TotalDwellingsCollated = ArraySummation(TotalDwellingsCollated, TotalDwellingsThisYear);


		HousesWithYear = "Houses".concat(i);

		HousesThisYear = $.map(chartData, function(data){
			return parseInt(data[HousesWithYear]);
			});
		
		HousesCollated = ArraySummation(HousesCollated, HousesThisYear);
		

		UnitsWithYear = "Units".concat(i);

		UnitsThisYear = $.map(chartData, function(data){
			return parseInt(data[UnitsWithYear]);
			});
		
		UnitsCollated = ArraySummation(UnitsCollated, UnitsThisYear);
		

		ApartmentsWithYear = "Apartments".concat(i);

		ApartmentsThisYear = $.map(chartData, function(data){
			return parseInt(data[ApartmentsWithYear]);
			});
		
		ApartmentsCollated = ArraySummation(ApartmentsCollated, ApartmentsThisYear);

		
		RetirementVillageUnitsWithYear = "Retirement Village Units".concat(i);

		RetirementVillageUnitsThisYear = $.map(chartData, function(data){
			return parseInt(data[RetirementVillageUnitsWithYear]);
			});
		
		RetirementVillageUnitsCollated = ArraySummation(RetirementVillageUnitsCollated, RetirementVillageUnitsThisYear);
		
		
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
			
			
if (datatypetouse_Citywide_by_Suburb == "" || datatypetouse_Citywide_by_Suburb == "Total Dwellings Consented") {

	data = [{
		x: SuburbsList,
		y: TotalDwellingsCollated,
		type: 'bar',
		marker: {color: Colour1}
        }];

	layout = {
		title: 'Total Dwellings Consented by Suburb',
		showlegend: false,
		xaxis: {
			zeroline: false, 
			tickmode: 'linear', 
			tick0: 0, 
			dtick: 1, 
			tickangle: 45, 
			categoryorder: 'category ascending',
			fixedrange: Zooming},
       	yaxis: {zeroline: false, rangemode: "tozero", fixedrange: Zooming}
		}
	;}

else if (datatypetouse_Citywide_by_Suburb == "Consented Dwellings by Type") {

	data = [{
		x: SuburbsList,
		y: HousesCollated,
		name: "Houses",
		type: 'bar',
		marker: {color: Colour1}
		
        },{
		x: SuburbsList,
		y: UnitsCollated,
		name: "Units",
		type: 'bar',
		marker: {color: Colour2}
		
        },{
		x: SuburbsList,
		y: ApartmentsCollated,
		name: "Apartments",
		type: 'bar',
		marker: {color: Colour3}
		
        },{
		x: SuburbsList,
		y: RetirementVillageUnitsCollated,
		name: "Retirement Village Units",
		type: 'bar',
		marker: {color: Colour4}
        }]

	layout = {
		title: 'Dwellings Consented by Type and Suburb',
		showlegend: true,
		xaxis: {
			zeroline: false, 
			tickmode: 'linear', 
			tick0: 0, 
			dtick: 1,  
			tickangle: 45, 
			fixedrange: Zooming},
		yaxis: {zeroline: false, rangemode: "tozero", fixedrange: Zooming},
		barmode: 'stack'
		}
	;}

else {

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
	;}

Plotly.newPlot('CitywideBySuburb', data, layout);

	
$('.SortType').click(function(){
    $(this).toggleClass('toggle');
	if (this.className == 'SortType toggle') {
		var update = {'xaxis.categoryorder': 'trace'};
		Plotly.relayout(CitywideBySuburb, update)
		;}
	else {
		var update = {'xaxis.categoryorder': 'category ascending'};
		Plotly.relayout(CitywideBySuburb, update)
		;}
});
}


function DwellingsCCCd(chartData){


var ExtraData = DwellingsCCCd_ExtraDataTypeRetriever();
	
var	legendSettings = {
		x: 0.95,
		y: 0.95,
		xanchor: "right",
		yanchor: "top"
		};
		
if (ExtraData == '-') {
	data = [{
        x: $.map(chartData, function(data){
			return data["Year"]
			;}),
		y: $.map(chartData, function(data){
			return data["CCCd Dwellings"]
			;}),
        name: 'Constructed Dwellings',
		line: {width: 6},
		marker: {color: Colour1}		
        }]
	;}
	
else {
	data = [{
        x: $.map(chartData, function(data){
			return data["Year"]
			;}),
		y: $.map(chartData, function(data){
			return data["CCCd Dwellings"]
			;}),
        name: 'Constructed Dwellings',
		line: {width: 6},
		marker: {color: Colour1}		
        },{
			
        x: $.map(chartData, function(data){
			return data["Year"]
			;}),
		y: $.map(chartData, function(data){
			return data[ExtraData]
			;}),
        name: ExtraData,
		line: {width: 6},
		marker: {color: Colour2}
        }]
	;}

var	RangeVar = [2003,2015];

if (ExtraData == 'Consented Dwellings') {RangeVar = [1991,2015];}
else if (ExtraData == 'Projected Dwellings') {RangeVar = [2003,2043];}

	
	layout = {
   	    title: 'Constructed Dwellings',
	    showlegend: true,
		legend: legendSettings,
    	xaxis: {zeroline: false, tickmode: 'linear', tick0: 0, dtick: 1, tickangle: 45, fixedrange: Zooming, range: RangeVar},
     	yaxis: {zeroline: false, fixedrange: Zooming, rangemode: "tozero"}, 
		}
		
		
	Plotly.newPlot('DwellingsCCCd', data, layout);
	
	} 
	
	
function DwellingsCCCd_ExtraDataTypeRetriever(){
var DwellingsCCCd_ExtraDataType1 = document.getElementById("DwellingsCCCd_ExtraDataType");
var DwellingsCCCd_ExtraDataType2 = DwellingsCCCd_ExtraDataType1.options[DwellingsCCCd_ExtraDataType1.selectedIndex].text;
return(DwellingsCCCd_ExtraDataType2);
	;}
		

	
function BCsAndPopulationGraph(chartData){
	
	data = [{
		x: $.map(chartData, function(data){
			return data["Year"];
		}),
		y: $.map(chartData, function(data){
			return data["New Dwellings"];
		}),
		type: 'bar',
		name: 'Consented Dwellings',
		marker: {color: Colour1}
		
        },{
			
		x: $.map(chartData, function(data){
			return data["Year"];
		}),
		y: $.map(chartData, function(data){
			return data["New Dwellings Multiplied by Household Size"];
		}),
		type: 'bar',
		connectgaps: true,
		name: 'Consented Housing Capacity',
		marker: {color: Colour3}	
		
        },{
			
		x: $.map(chartData, function(data){
			return data["Year"];
		}),
		y: $.map(chartData, function(data){
			return data["PopulationGrowth"];
		}),
		type: 'line',
		connectgaps: true,
		name: 'Approx. Population Increase',
		marker: {color: Colour2},
		line: {width: 3}	

		}];

		
	layout = {
		title: 'Consented Dwellings and Population Growth',
		showlegend: true,

		xaxis: {
			fixedrange: Zooming, 
			zeroline: false, 
			range: [1990.4,2016.5],
			tickmode: 'linear', 
			tick0 : 1,
			dtick: 1,
			tickangle: 45,
			title: "Year ending 30 June"},
			
		yaxis: {
			fixedrange: Zooming, 
			zeroline: false}
	};



Plotly.newPlot('BCsAndPopulationGraph', data, layout);
}

	
function PropertyDataGraph(chartData){
	
	var DataType = PropertySales_Datatype_Retriever();
	
	var LeftAxisFormat = '';
	
	if(DataType == "Number of House Sales"){LeftAxisFormat = '';}
	else {LeftAxisFormat = '$,s';};
	
	
 	if (DataType == "Both"){
	data = [{
		x: $.map(chartData, function(data){
			return data["Quarter"];
			}),
		y: $.map(chartData, function(data){
			return data["Median House Price"];
			}),
		type: 'line',
		name: 'Median House Price',
		line: {width: 6},
		marker: {color: Colour1},
		yaxis: 'y2'		
	},{
	x: $.map(chartData, function(data){
			return data["Quarter"];
			}),
		y: $.map(chartData, function(data){
			return data["Number of House Sales"];
			}),
		type: 'bar',
		name: 'House Sales',
		marker: {color: Colour2}
		}];
		
	layout = {
		title: "House Sales and Median Price",
		showlegend: true,
		legend: {orientation: 'h'},
		xaxis: {zeroline: false, tickmode: 'linear', tick0: 0, dtick: 4, tickangle: 45, fixedrange: Zooming},
		yaxis: {zeroline: false, fixedrange: Zooming, rangemode: "tozero", side: 'right',range:[0,1400]},
		yaxis2: {zeroline: false, fixedrange: Zooming, rangemode: "tozero", side: 'left',tickformat: '$,s', overlaying: 'y', range:[0,700000]}
		};
	
	;}
	
	else {
	data = [{
		x: $.map(chartData, function(data){
			return data["Quarter"];
			}),
		y: $.map(chartData, function(data){
			return data[DataType];
			}),
		type: 'line',
		name: 'Property Sales',
		line: {width: 6},
		marker: {color: Colour1}
		}];
	layout = {
		title: DataType,
		showlegend: false,
		xaxis: {zeroline: false, tickmode: 'linear', tick0: 0, dtick: 4, tickangle: 45, fixedrange: Zooming},
		yaxis: {zeroline: false, fixedrange: Zooming, rangemode: "tozero", tickformat: LeftAxisFormat}
	};
	;}
		


	Plotly.newPlot('PropertyDataGraph', data, layout);
	}

	
function PropertySales_Datatype_Retriever(){
var PropertySales_Datatype1 = document.getElementById("PropertySales_DataType");
var PropertySales_DataType2 = PropertySales_Datatype1.options[PropertySales_Datatype1.selectedIndex].text;
return(PropertySales_DataType2);
	;}
	

	 
function InfometricsGraph(chartData){
	
	var DataToUseWithSpaces = InfometricsGraph_Data();
	var DataToUse = DataToUseWithSpaces.replace(/ /g,"");
	var EndofString = DataToUseWithSpaces.slice(-6);
	
	var AxisFormat = "";
	if (EndofString == "Growth" || EndofString == " Costs") {AxisFormat = "%"};
	
	RangeValues = [];
	YearUsed = "";
	
	if (DataToUseWithSpaces == "Housing Affordability Index") {RangeValues = [6,10], YearUsed = "YearThree"};
	if (DataToUseWithSpaces == "Rental Affordability Index") {RangeValues = [0.2,0.4], YearUsed = "YearOne"};
	if (DataToUseWithSpaces == "House Price Growth") {YearUsed = "YearTwo"};
	if (DataToUseWithSpaces == "Growth of Average Rental Costs") {YearUsed = "YearOne"};
		
		
	document.getElementById("Extra references").innerHTML = "";
		
	if (DataToUseWithSpaces == "Rental Affordability Index"){
		var textdiv = document.getElementById("Extra references");
		var aTag = document.createElement('a');
		aTag.setAttribute('href',"http://ecoprofile.infometrics.co.nz/Wellington%20City/StandardOfLiving/RentalAffordability");
		aTag.setAttribute('target',"_blank");
		aTag.innerHTML = "Datasource: Rental Affordability Index";
		textdiv.appendChild(aTag);
		;}

	if (DataToUseWithSpaces == "Housing Affordability Index"){
		var textdiv = document.getElementById("Extra references");
		var aTag = document.createElement('a');
		aTag.setAttribute('href',"http://ecoprofile.infometrics.co.nz/Wellington%20City/StandardOfLiving/Housing_Affordability");
		aTag.setAttribute('target',"_blank");
		aTag.innerHTML = "Datasource: Housing Affordability Index";
		textdiv.appendChild(aTag);
		;}		
	
		
	data = [{
		
		x: $.map(chartData, function(data){
			return data[YearUsed];
		}),
		y: $.map(chartData, function(data){
			return data[DataToUse];
		}),
		type: 'bar',
		name: "Wellington",
		marker: {color: Colour1}

        },{
			
		x: $.map(chartData, function(data){
			return data[YearUsed];
		}),
		y: $.map(chartData, function(data){
			return data[DataToUse.concat("_NZ")];
		}),
		type: 'line',
		name: "New Zealand",
		marker: {color: Colour2}
			
		}];


	if (EndofString == " Index"){
		layout = {
		title: DataToUseWithSpaces,
		showlegend: true,
		xaxis: {
			fixedrange: Zooming, 
			zeroline: false, 
			tickmode: 'auto', 
			tickangle: 45
			},
		
		yaxis: {
			fixedrange: Zooming, 
			zeroline: false,
			tickformat: AxisFormat,
			range: RangeValues
		}};}
			
	else {
		layout = {
		title: DataToUseWithSpaces,
		showlegend: true,
		xaxis: {
			fixedrange: Zooming, 
			zeroline: false, 
			tickmode: 'auto', 
			tickangle: 45
			},
		yaxis: {
			fixedrange: Zooming, 
			zeroline: false,
			tickformat: AxisFormat,	
		}};}
		
			
				
		
	Plotly.newPlot('InfometricsGraph', data, layout);
	}


function InfometricsGraph_Data(){
var InfometricsGraph_Datatype1 = document.getElementById("InfometricsGraph_Datatype");
var InfometricsGraph_Datatype2 = InfometricsGraph_Datatype1.options[InfometricsGraph_Datatype1.selectedIndex].text;
return(InfometricsGraph_Datatype2);
	;}

	
	


function Area_SuburbRentalGraph(){
var Area_SuburbRentalGraph1 = document.getElementById("AreaDD_SuburbRentalGraph");
var Area_SuburbRentalGraph2 = Area_SuburbRentalGraph1.options[Area_SuburbRentalGraph1.selectedIndex].text;
return(Area_SuburbRentalGraph2);
	;}

function Type_SuburbRentalGraph(){
var Type_SuburbRentalGraph1 = document.getElementById("TypeDD_SuburbRentalGraph");
var Type_SuburbRentalGraph2 = Type_SuburbRentalGraph1.options[Type_SuburbRentalGraph1.selectedIndex].text;
return(Type_SuburbRentalGraph2);
	;}

function Bedrooms_SuburbRentalGraph(){
var Bedrooms_SuburbRentalGraph1 = document.getElementById("BedroomsDD_SuburbRentalGraph");
var Bedrooms_SuburbRentalGraph2 = Bedrooms_SuburbRentalGraph1.options[Bedrooms_SuburbRentalGraph1.selectedIndex].text;
return(Bedrooms_SuburbRentalGraph2);
	;}	
	
function SuburbRentalGraph(chartData){
	
var AreaToUse = Area_SuburbRentalGraph();
var TypeToUse = Type_SuburbRentalGraph();
var BedroomsToUse = Bedrooms_SuburbRentalGraph();
var DataToUse = AreaToUse.concat(TypeToUse.concat(BedroomsToUse));



if(TypeToUse == "Property Type Total" && BedroomsToUse == "Bedrooms Total" && AreaToUse != "TA Total")
	{alert("Please choose a property type or size")};


	data = [{
		x: $.map(chartData, function(data){
			return data["Quarter"];
		}),
		y: $.map(chartData, function(data){
			return data[DataToUse];
		}),
		type: 'bar',
		name: DataToUse,
		marker: {color: Colour2}
        }];
		
	layout = {
		title: 'Rental Costs',
		showlegend: false,
		xaxis: {
			fixedrange: Zooming, 
			zeroline: false, 
			tickmode: 'linear', 
			tick0: 0,
			dtick: 4,
			tickangle: 45},
		yaxis: {
			fixedrange: Zooming, 
			zeroline: false,
			tickformat: '$,s', 
			rangemode: "tozero"}
		};



Plotly.newPlot('SuburbRentalGraph', data, layout);
}
