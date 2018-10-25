var request = require('request')
var fs = require('fs');
var os = require('os');

var itterations = 1000;

for (var i = 0; i < itterations; i++) {

    var starttime = process.hrtime()

    request.post({
        headers: {'content-type' : 'application/json'},
        url:     'http://localhost:1234',
        body:    '{"query": "{ data{testint, teststring, testdate, teststring2, testbool} }" }'
      }, function(error, response, body){
        //console.log(body);
      });

    time = process.hrtime(starttime)
    totaltime = time[1] / 1000000
    console.info('Execution time: %dms', totaltime)

    fs.appendFile('results.txt', totaltime+ os.EOL , function(err) {
        if(err) {
            return console.log(err);
        }
        //console.log("Successfully saved scores into the file");
    }); 

}