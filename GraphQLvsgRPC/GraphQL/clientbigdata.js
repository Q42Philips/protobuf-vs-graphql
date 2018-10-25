var request = require('request')
var fs = require('fs');
var os = require('os');

var itterations = 1000;

for (var i = 0; i < itterations; i++) {

    var starttime = process.hrtime()

    request.post({
        headers: {'content-type' : 'application/json'},
        url:     'http://localhost:4000',
        body:    '"query":"{ data {string1, string2, string3, string4, string5, string6, string7, string8, string9, string10, string11, string12, string13, string14, string15, string16,string17, string18, string19, string20, string21, string22, string23, string24, string25, string26, string27, string28, string29, string30, string31, string32, string33, string34, string35, string36, string37, string38, string39, string40, string41, string42, string43, string44, string45, string46, string47, string48, string49, string50, string51, string52, string53, string54, string55, string56, string57, string58, string59, string60, string61, string62, string63, string64, string65, string66, string67, string68, string69, string70, string71, string72, string73, string74, string75, string76, string77, string78, string79, string80, string81, string82, string83, string84, string85, string86, string87, string88, string89, string90, string91, string92, string93, string94, string95, string96, string97, string98, string99,}"'
      }, function(error, response, body){
        //console.log(body);
      });

    time = process.hrtime(starttime)
    totaltime = time[1] / 1000000
    console.info('Execution time: %dms', totaltime)

    fs.appendFile('resultsbigdata.txt', totaltime+ os.EOL , function(err) {
        if(err) {
            return console.log(err);
        }
        //console.log("Successfully saved scores into the file");
    }); 

}