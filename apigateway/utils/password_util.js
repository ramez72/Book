const crypto = require(`crypto`);


genRandomSALT = length => {
    if(!length) length = 15; // default
    return crypto.randomBytes(Math.ceil(length/2))
            .toString('hex') 
            .slice(0,length);  
};

sha512 = (password, salt) => {
    var hash = crypto.createHmac('sha512', salt); /** Hashing algorithm sha512 */
    hash.update(password);
    return  hash.digest('hex');
};


module.exports={
    genRandomSALT, sha512
}