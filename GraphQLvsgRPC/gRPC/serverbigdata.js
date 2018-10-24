var PROTO_PATH = __dirname + '/timetest.proto';
var grpc = require('grpc');
var protoLoader = require('@grpc/proto-loader');

const myModule = require('./bigdata');

let data = myModule.datas();

var packageDefinition = protoLoader.loadSync(
    PROTO_PATH,
    {keepCase: true,
     longs: String,
     enums: String,
     defaults: true,
     oneofs: true
    });
var speed_test = grpc.loadPackageDefinition(packageDefinition).speedtest;

function doCycle(call, callback) {
    callback(null, data);
}

function main() {
    var server = new grpc.Server();
    server.addService(speed_test.RequestResponse.service, {doCycle: doCycle});
    server.bind('0.0.0.0:50051', grpc.ServerCredentials.createInsecure());
    server.start();
    console.log("I started a server at http://localhost:50051 ")
}

main();