

function getEmptyKey(obj){

    for (let key of Object.keys(obj)) {  
        if(isEmpty(obj[key]))
            return key;
    }

    return null;

}

function isEmpty(value){
    if(value===undefined || value === null)
        return true;
    if(typeof(value) === 'string' && value.trim() === ''){
        return true;
    }
    return false;
}

function replaceEmptyStringWithNull(obj){
    for (let key of Object.keys(obj)) {  
        if(obj[key]==="")
            obj[key] = null;
    }
    return obj;
}

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
    //console.log(array);
    return array;
  }
  


module.exports={
    getEmptyKey,
    isEmpty,
    replaceEmptyStringWithNull,
    getInstanceMethodNames
}