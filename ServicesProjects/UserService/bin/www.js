let thrift = require("thrift");
let userService = require('../api/UserService');
let UserServiceImpl = require('../UserServiceImpl');
let ServiceImplementor = require('../util/ServiceImplemter');
let DBUtil = require('../util/DB');
let logger = require('../util/Logger');
let envConf = require('../conf/env.json')


let server = thrift.createServer( userService, ServiceImplementor.use(UserServiceImpl));

server.on('error', e=>{
    logger.error('Server error',e);
});


DBUtil.connect().then( success =>{
    server.listen(envConf.port);
    logger.info('Service started at : '+envConf.port);
}).catch( err=>{
    logger.error("Error in starting Service",err);
});

