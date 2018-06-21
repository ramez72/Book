const UserDAO = require('./UsersDAO');
const password_util = require('./util/password_util');

let userDAO = new UserDAO();

class UserService{

    async getProfile(username){  
        let data = await userDAO.getUserProfile(username);
        
        if(data == null){
          throw {message:'User not found'};
        }
        
        data.id = data._id+"";
        return data;
    }

    async checkUsernameExist(username){
        let data = await userDAO.getUserProfile(username);
        if(data == null )
            return false;
        return true;
    }


    async validateToken(username, token){
        let isValid= await userDAO.validateToken(username, token);
        return isValid;
    }

    async validateCredential(username, password){
        let data = await userDAO.getUserProfile(username);
        console.log(username);
        if(data == null)
            throw {message:'User not found'};
        
        let hash = password_util.sha512(password, data.salt);
        if(hash === data.hash)
            return true;
        
        return false;
    }

    async generateToken(userid){
        let token = password_util.genRandomSALT(25);
        await userDAO.saveToken(userid, token);
        return token;
    }

    async createUser(profileData){
        profileData.salt = password_util.genRandomSALT(10);
        profileData.hash = password_util.sha512(profileData.password, profileData.salt);
        let data = await userDAO.saveUserProfile(profileData);
        profileData.id = data.insertedId+"";
        return profileData;
    }

}

module.exports=UserService;