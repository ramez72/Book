let thrift = require('thrift');
let thrift_pool = require('node-thrift-pool');
let MultiplicationService = require('./MultiplicationService');


var transport = thrift.TBufferedTransport;
var protocol = new thrift.TBinaryProtocol(transport);



var connection = thrift.createConnection("localhost", 9090, {
  transport : transport,
  protocol : protocol
});

connection.on('error', function(err) {
  assert(false, err);
});



var thrift_client = thrift_pool(thrift, MultiplicationService,
    {max_connections: 100, min_connections: 5, idle_timeout: 3000, host: "localhost", port: 7878 }, {timeout:60000});

for(let i=0 ;i<100;i++)
thrift_client.multiply( i, i, (err, res)=>{
if(err)
 console.log(err);

console.log(res);

});



