const http_status_codes = require('http-status-codes');
const logger =require('../utils/Logger');

let userServiceApi = null;

async function init(){
    userServiceApi =await require('../utils/ServiceInvoker').UserService;
}
  
init();


authorize = async (req, res, next) =>{ // does Basic auth only

        try{
            if(req.headers || req.headers.authorization){
                let auth = req.headers.authorization;
                logger.debug(auth);
                let credential = new Buffer(auth.split('Basic ')[1], 'base64').toString();
                logger.debug(credential);
                let credentialArray = credential.split(':');
                let username = credentialArray[0];
                let token = credentialArray[1];
                let isValid = await userServiceApi.validateToken(username,token);
                if(isValid){
                    req.username = username;
                    if(next){
                        next();
                    }
                    return;
                }else{
                    logger.error("Invalid token, User :"+username);
                    res.sendStatus(http_status_codes.UNAUTHORIZED);
                }
            }
        }catch(e){
           next(e);
        }
    
}

module.exports = {
    authorize
}