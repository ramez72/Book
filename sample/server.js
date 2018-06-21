let MultiplicationService = require('../service/MultiplicationService');
let thrift = require("thrift");
let MultiplicationServiceImpl = require('./MultiplicationServiceImpl');


let server = thrift.createServer( MultiplicationService, new MultiplicationServiceImpl());

server.listen(7878);