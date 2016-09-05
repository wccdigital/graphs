var Colour1 = 'rgb(69, 71, 82)';
var Colour2 = 'rgb(255, 227, 115)';
var Colour3 = 'rgb(191, 189, 191)';
var Colour4 = 'rgb(166, 150, 120)';
var Colour5 = 'rgb(214, 191, 110)';

var Zooming = false;

// Changing D3 default number formats

var d3_formatPrefixes = ["e-24", "e-21", "e-18", "e-15", "e-12", "e-9", "e-6", "e-3", "", "K", "M", "B", "T", "P", "E", "Z", "Y"].map(d3_formatPrefix);

// Override d3's formatPrefix function

var d3 = Plotly.d3;

d3.formatPrefix = function (value, precision) {
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
		scale : i > 8 ? function (d) {
			return d / k;
		}
		 : function (d) {
			return d * k;
		},
		symbol : d
	};
}

function d3_format_precision(x, p) {
	return p - (x ? Math.ceil(Math.log(x) / Math.LN10) : 1);
}

function generateGraphFromCsv(pathToCsvFile, graphFunction) {

	var requestCsv = $.ajax(pathToCsvFile, {
			dataType : 'text'
		}),
	parseCsv = requestCsv.then(function (data) {
			return $.csv.toObjects(data);
		});

	parseCsv.done(window[graphFunction]);

}
function generateGraphFromCsvData(csv, version, csvData, graphFunction) {

	$.getScript("http://wellington.govt.nz/~/media/GraphData/SuburbBCDataAnnualbyYear.js", function(data) {
		graphmaker_suburbgraph(csvdata);
	});
}

function getGraph(id) {
	generateGraphFromCsv(graphdata[id].csv, graphdata[id].func);
}

function createDropDowns(parent, itemIndex, data) {
	$.each(data, function(index, drop) {
		var dd = 	'<div class="dropGroup">' +
						'<div class="dropText">' + drop.text + '</div>' +
						'<div class="dropItem">' +
							'<select id="' + drop.id + '" onchange="getGraph(' + itemIndex + ')">';
		$.each(drop.valtext, function(valind, val) {
			dd += '<option value="' + val + '">' + val + '</option>';
		});			
		dd += '</select></div></div>';
		$('#' + parent).append(dd);
	});	
}

function createButtons(parent, buttonData) {
	$.each(buttonData, function(index, bttn) {
		$('#' + parent).append('<div class="buttonItem"><button id="' + bttn.id + '">' + bttn.text + '</button></div>');
	});
}

function createLinks(parent, linkdata) {
	$.each(linkdata, function(index, link) {
		var ld = '<div class="linkGroup"><div class="linkText">' + link.linktext + '</div><div class="linkItem">' +
					'<a href="' + link.url + '" target="_blank">' + link.text + '</a></div></div>';
		$('#' + parent).append(ld);
	});
}

function createDivs(parent, divdata) {
	$.each(divdata, function(index, div) {
		$('#' + parent).append('<div id="' + div.id + '"></div>');
	});
}

/*$.getScript("http://wellington.govt.nz/~/media/GraphData/GraphData.js", function(data) {
	dataReady();
});*/

function getUrlVars()
{
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for(var i = 0; i < hashes.length; i++)
    {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars;
}

$.getScript("http://graphs/oldcontent/bits/GraphData.js", function(data) {
	dataReady();
});

function dataReady() {
	var graph = getUrlVars()['graph'];
	if (graph != null && graph.length > 0) {
		$.each(graphdata, function (index, gdata) {
			if (gdata.id == graph) {
				$.getScript(gdata.funcFile, function(data) {
					$('#graphPanel').append('<div id="'+gdata.id+'"><div id="'+gdata.container+'" style="width:'+gdata.width+'";height:'+gdata.height+';"></div></div>');

					createButtons(gdata.id, gdata.button);
					createDropDowns(gdata.id, index, gdata.drop);
					createLinks(gdata.id, gdata.link);
					createDivs(gdata.id, gdata.div);
					generateGraphFromCsv(gdata.csv, gdata.func);
				});
			}
		});
	}
}

$(window).resize(function () {
	$.each(graphdata, function (index, gdata) {
		generateGraphFromCsv(gdata.csv, gdata.func);
	});
});