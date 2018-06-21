const express = require('express');
const http_status_codes = require('http-status-codes');
const ObjectUtil = require('../utils/ObjectUtil');
const logger =require('../utils/Logger');

const username_already_exist = 'A0001';
const password_length_error = 'B0001';

let userServiceApi ;

async function init(){
  try{
     userServiceApi =await require('../utils/ServiceInvoker').UserService;
  }catch(e){
    logger.error("Error in getting user service :"+e.message, e);
  }
}

init();

let router = express.Router();

router.route('/authenticate')
.post(async (req, res) =>{ 

  try{
    let isvalid =await userServiceApi.validateCredential(req.body.username, req.body.password);
    if(isvalid){
      let userProfile = await userServiceApi.getProfile(req.body.username);
      let token = await userServiceApi.generateToken(userProfile.id);
      userProfile.token = token;
      res.json(userProfile);
    }else{
      res.status(http_status_codes.UNAUTHORIZED).json({error:`Authentication failed!`});
    }
  }catch(e){
    next(e);
  }

});


router.route('/register')
.post(async (req, res)=>{

  try{
    let data = ObjectUtil.replaceEmptyStringWithNull(req.body);
      if(await userServiceApi.checkUsernameExist(data.username)){
        let err = { 
          errcode : username_already_exist,
          error : 'Username already exist!'
        };
        res.status(http_status_codes.UNPROCESSABLE_ENTITY).json(err);
      }else if(data.password && data.password.length>=8 && data.password.length<=12){
        res.status(http_status_codes.UNPROCESSABLE_ENTITY).json({errcode:password_length_error, error:'Password length should be 8 to 12 characters'});
      }else {

        let result = await userServiceApi.createUser(data);

         res.status(http_status_codes.CREATED)
            .json(result);
      }
  }catch(e){
    next(e);
  }
});


module.exports = router;
