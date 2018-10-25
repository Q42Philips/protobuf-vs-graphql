const PROTO_PATH = __dirname + '/timetest.proto';
const grpc = require('grpc');
const protoLoader = require('@grpc/proto-loader');

const myModule = require('./bigdata');

let data = myModule.datas();

const packageDefinition = protoLoader.loadSync(
    PROTO_PATH,
    {keepCase: true,
     longs: String,
     enums: String,
     defaults: true,
     oneofs: true
    });
const speed_test = grpc.loadPackageDefinition(packageDefinition).speedtest;

function doCycle(call, callback) {
    callback(null, data);
}

function main() {
    const server = new grpc.Server(
    // {'grpc.default_compression_level': 3} // remove comment to enable compression (1->Low -- 3->High)
    );
    server.addService(speed_test.RequestResponse.service, {doCycle: doCycle});
    server.bind('0.0.0.0:50051', grpc.ServerCredentials.createInsecure());
    server.start();
    console.log("I started a server at http://localhost:50051 ")
}

main();
