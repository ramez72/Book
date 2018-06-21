namespace java com.epoc.api



struct UserData {
    1: required string username;
    2: string password;
    3: required string email;
    4: required string firstname;
    5: required string lastname;
}

struct UserProfile {
	1: optional string id;
    2: required string username;
    3: required string email;
    4: required string firstname;
    5: required string lastname;
}

exception ServiceException{
    1: string errcode;
	2: string error;
	3: string trace;
} 

service UserService{
		UserProfile createUser(1:UserData userData) throws (1: ServiceException excep),
		bool checkUsernameExist(1: required string username) throws (1: ServiceException excep),
        bool validateToken(1:required string username, 2:required string token) throws (1: ServiceException excep),
		UserProfile getProfile(1: required string username) throws (1: ServiceException excep),
		bool validateCredential(1:required string  username, 2:string password) throws (1: ServiceException excep),
		string generateToken(1: required string userid) throws (1: ServiceException excep),	
}