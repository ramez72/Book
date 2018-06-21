let UserServiceConf = require('../conf/UserService.json');
let BookServiceConf = require('../conf/BookService.json');
let UserService = require('../api/UserService');
let BookService = require('../api/BookService');
const genericPool = require("generic-pool");
let objectUtil = require("./ObjectUtil");
let logger = require("./Logger");

let thrift = require('thrift');

class Implemet {
  constructor(obj, client, connectionPool){
    objectUtil.getInstanceMethodNames(obj).forEach(name=>{
       this[name] = async(...args)=>{
        let connection = null;
          try{
            connection =await connectionPool.acquire();
            logger.debug("Service : "+name+", args : "+JSON.stringify(args));
            let clientApi = await thrift.createClient(client, connection);
            let result =await clientApi[name](...args);
            logger.debug("result : "+JSON.stringify(result));
            return result;
          }catch(e){
            throw e;
          }finally{
            if(connection!==null)
               connectionPool.release(connection);
          }
       }
    });
  }
}



var transport = thrift.TBufferedTransport;
var protocol = thrift.TBinaryProtocol;


 
getServiceFactory = (conf) =>{
  return serviceFactory ={
    create : () =>{
      let connection = thrift.createConnection(conf.url, conf.port, {
        transport : transport,
        protocol : protocol
      });
      connection.on('error', e=>{
        logger.error("Error in connection, Service name: "+ conf.name+", url: "+conf.url+", port: "+conf.port, e);
      });
      logger.info("Creating connection- Id "+connection.seqId2Service +", Service name: "+ conf.name+", url: "+conf.url+", port: "+conf.port);
      return connection;
    },
    destroy: (connection) =>{
      logger.info("Ending connection: "+connection.seqId2Service);
      connection.end();
    }
  };
}
  

let userServicePool = genericPool.createPool(getServiceFactory(UserServiceConf), {min:UserServiceConf.minConnections, max:UserServiceConf.maxConnections});


let userService = null;

getUserService= async()=>{
  if(userService != null )
    return userService;
  else{
    let connection = await userServicePool.acquire();
    let sampleObj=await thrift.createClient(UserService.Client, connection);
    userService = new Implemet(sampleObj, UserService.Client,  userServicePool);
    userServicePool.release(connection);
    return userService;
  }
}
  


let bookServicePool = genericPool.createPool(getServiceFactory(BookServiceConf), {min:BookServiceConf.minConnections, max:BookServiceConf.maxConnections});

let bookService = null;

getBookService= async()=>{
  if(bookService != null )
    return bookService;
  else{
    let connection = await bookServicePool.acquire();
    let sampleObj= thrift.createClient(BookService.Client,  connection);
    bookService = new Implemet(sampleObj, BookService.Client, bookServicePool);
    bookServicePool.release(connection);
    return bookService;
  }
}


init = () =>{
  getUserService();
  getBookService();
}

init();

module.exports={
    UserService : getUserService(),
    BookService: getBookService()
}