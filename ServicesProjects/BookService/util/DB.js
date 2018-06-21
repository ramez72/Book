const mongodb = require('mongodb');
const dbConf = require('../conf/db.json');

let dbConnection = null;


async function connect() {
    let connectionStr = 'mongodb://'+dbConf.url+':'+dbConf.port+'/';
    let mongoClient = await mongodb.MongoClient.connect(connectionStr);
    dbConnection = mongoClient.db('forumdb');
    return dbConnection;
}

function getConnection(){
    if(dbConnection == null ){
        return connect();
    }
    return dbConnection;
}

initializeConnection = () =>{
    connect();
}


module.exports = {
    connect,
    getConnection
}