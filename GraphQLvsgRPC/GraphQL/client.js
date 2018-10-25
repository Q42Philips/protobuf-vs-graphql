import request from "request";
import fs from "fs";
import os from "os";

const itterations = 1000;

for (let i = 0; i < itterations; i++) {

    // start time
    let starttime = process.hrtime()

    request.post({
        headers: {'Content-Type' : 'application/json'},
        url:     'http://localhost:1234',
        body:    '{"query": "{ data{testint, teststring, testdate, teststring2, testbool} }" }'
      }, function(error, response, body){
        //console.log(body); // uncomment to see the response
      });

    // stop timer
    time = process.hrtime(starttime)
    // take first element of time array (seconds) and divide to make milliseconds
    totaltime = time[1] / 1000000
    console.info('Execution time: %dms', totaltime)

    fs.appendFile('results.txt', totaltime + os.EOL , function(err) {
        if(err) {
            return console.log(err);
        }
        //console.log("Successfully saved scores into the file");
    }); 

}
