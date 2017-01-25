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
