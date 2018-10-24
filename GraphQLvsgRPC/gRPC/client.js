var PROTO_PATH = __dirname + '/timetest.proto';
var grpc = require('grpc');
var protoLoader = require('@grpc/proto-loader');
var fs = require('fs');
var os = require('os');

var packageDefinition = protoLoader.loadSync(
    PROTO_PATH,
    {
        keepCase: true,
        longs: String,
        enums: String,
        defaults: true,
        oneofs: true
    });
var speed_test = grpc.loadPackageDefinition(packageDefinition).speedtest;

var itterations = 1000;

for (var i = 0; i < itterations; i++) {

    var starttime = process.hrtime()

    var client = new speed_test.RequestResponse('localhost:50051', grpc.credentials.createInsecure());
    client.doCycle({ name: "test" }, function (err, response) {
        // console.log(response.testint);
        // console.log(response.teststring);
        // console.log(response.testdate);
        // console.log(response.teststring2);
        // console.log(response.testbool);
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
