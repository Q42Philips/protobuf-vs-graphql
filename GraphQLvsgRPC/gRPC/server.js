const PROTO_PATH = __dirname + '/timetest.proto';
const grpc = require('grpc');
const protoLoader = require('@grpc/proto-loader');

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
    callback(null, 
        {
        testint: 1234,
        teststring: "helloworldstring",
        testdate: Date(),
        teststring2: "1234567890",
        testbool: true
        + call.request.testint
        }
        );
}

function main() {
    const server = new grpc.Server();
    server.addService(speed_test.RequestResponse.service, {doCycle: doCycle});
    server.bind('0.0.0.0:50051', grpc.ServerCredentials.createInsecure());
    server.start();
    console.log("I started a server at http://localhost:50051 ")
}

main();
