let ServiceException = require('../api/BookService_types').ServiceException;
let logger = require('../util/Logger');



function hasMethod (obj, name) {
  const desc = Object.getOwnPropertyDescriptor (obj, name);
  return !!desc && typeof desc.value === 'function';
}
function getInstanceMethodNames (obj, stop) {
  let array = [];
  let proto = Object.getPrototypeOf (obj);
  while (proto && proto !== stop) {
    Object.getOwnPropertyNames (proto)
      .forEach (name => {
        if (name !== 'constructor') {
          if (hasMethod (proto, name)) {
            array.push (name);
          }
        }
      });
    proto = Object.getPrototypeOf (proto);
  }
  return array;
}

class Implemet {
  constructor(obj){
    this.target = obj;

    getInstanceMethodNames(obj).forEach(name=>{
       this[name] = async(...args)=>{
        try{
          logger.debug('Method '+name+' args '+JSON.stringify(args));
          let result =await obj[name](...args);
          logger.debug('result '+JSON.stringify(result));
          args[args.length-1](null,result);
        }catch(e){
          logger.error(e.message, e);
          args[args.length-1](new ServiceException(e));
        }
       }
    });
  }
}


let use = serviceClass=>{
    let service = new serviceClass();
    return new Implemet(service);
}

module.exports={
  use
};