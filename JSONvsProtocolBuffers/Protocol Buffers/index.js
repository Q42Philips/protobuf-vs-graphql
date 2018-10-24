var protobuf = require('protocol-buffers')
var fs = require('fs');
const express = require('express')
const app = express()
const port = 6666

// pass a proto file as a buffer/string or pass a parsed protobuf-schema object
var messages = protobuf(fs.readFileSync('timetest.proto'))

//encoding
var buf = messages.Test.encode(
  {
  testinit: 1234,
  teststring: "helloworldstring",
  testdate: Date(),
  teststring2: "1234567890",
  testbool: true
  }
)
console.log(buf) 

app.get('/', (req, res) => {
  res.contentType('application/octet-stream'); 
  res.send(buf)
})

app.listen(port, () => console.log(`Server listening on port ${port}!`))
