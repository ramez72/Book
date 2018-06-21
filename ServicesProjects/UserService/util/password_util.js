const crypto = require(`crypto`);


genRandomSALT = length => {
    return crypto.randomBytes(Math.ceil(length/2))
            .toString('hex') /** convert to hexadecimal format */
            .slice(0,length);   /** return required number of characters */
};

sha512 = (password, salt) => {
    var hash = crypto.createHmac('sha512', salt); /** Hashing algorithm sha512 */
    hash.update(password);
    return  hash.digest('hex');
};


module.exports={
    genRandomSALT, sha512
}