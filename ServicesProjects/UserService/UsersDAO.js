const DBUtil =  require('./util/DB');
const mongodb = require('mongodb');

let db = null;


class UserDAO{

    constructor(){
       this.initialize();
    }

    async initialize(){
        db =await DBUtil.getConnection();
    }

    async getUserProfile(username){
            let query = {};
            query.username = username;
   
            let result =await db.collection('userprofile').findOne(query);

            console.log(result);
        
            return result;
    }

    async saveUserProfile(profileData){
        let query = {     
            username : profileData.username,
            hash : profileData.hash,
            salt : profileData.salt,
            email : profileData.email,
            firstname : profileData.firstname,
            lastname : profileData.lastname
        }
        let result = await db.collection('userprofile').insertOne(query);
        return result;
    }
    
    async saveToken(userid, token){
        let query={
            userid : mongodb.ObjectId.createFromHexString(userid),
            token : token,
            create_dt : new Date()
        };
        let result = await db.collection('user_auth_token').insertOne(query);
        return result;
    }

    async validateToken(username, token){
        let data = await db.collection('user_auth_token').aggregate([
           { $lookup :{
                from: 'userprofile',
                localField: 'userid',
                foreignField: '_id',
                as: 'userprofile'
              }
            },
            {
                $match:{
                    'userprofile.username':username,
                     token:token
                }
            },
            {
                $project:{
                    token: 1
                }
            }
        ]).toArray();
        if(data.length>0)
            return true;
        return false;
    }
}



module.exports = UserDAO;
