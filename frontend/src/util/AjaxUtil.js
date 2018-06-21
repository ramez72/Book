

let headers ={
  'Access-Control-Allow-Origin': '*'
}

  let conf ={
    baseURL : (process.env.NODE_ENV === 'development') ? "http://localhost:3000" : "",
    timeout : (120*1000),
    headers : headers,
    method: 'post'
  };

  function convertToParam (obj){

  let params = "";

  for (const key of Object.keys(obj)) {

    if(params!="")
      params += "&";

    params += encodeURIComponent(key) + "=" +encodeURIComponent(obj[key]);
  }
  return params;
}

  module.exports = {
     conf, convertToParam
  }
