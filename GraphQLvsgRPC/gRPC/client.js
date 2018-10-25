const PROTO_PATH = __dirname + '/timetest.proto';
const grpc = require('grpc');
const protoLoader = require('@grpc/proto-loader');
import fs from "fs";
import os from "os";

const packageDefinition = protoLoader.loadSync(
    PROTO_PATH,
    {
        keepCase: true,
        longs: String,
        enums: String,
        defaults: true,
        oneofs: true
    });
const speed_test = grpc.loadPackageDefinition(packageDefinition).speedtest;

const itterations = 1000;

for (let i = 0; i < itterations; i++) {

    // start timer
    let starttime = process.hrtime()

    let client = new speed_test.RequestResponse('localhost:50051', grpc.credentials.createInsecure());
    client.doCycle({ name: "test" }, function (err, response) {
        // uncomment these to see the response

        // console.log(response.testint);
        // console.log(response.teststring);
        // console.log(response.testdate);
        // console.log(response.teststring2);
        // console.log(response.testbool);
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
