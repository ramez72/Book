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

    async getAllBooks(){
        let result =await db.collection('book').find({}).toArray();
        return result;
    }

    async getBookById(id){
        let result =await db.collection('book').findOne({_id:mongodb.ObjectId.createFromHexString(id)});
        if(result === null)
            throw {message: "Book not found"};
        return result;
    }


    
    async addBook(book){
        let result =await db.collection('book').insertOne(book);
        return result.insertedId;
    }

    async updateBook(book){
        let myquery = { _id: mongodb.ObjectId.createFromHexString(book.id) };
        book.id = undefined;
        let newvalues = { $set: book };
        await db.collection("book").updateOne(myquery, newvalues);
        book.id = myquery._id+"";
        return book;
    }


    async deleteBook(id){
        let query = {_id: mongodb.ObjectId.createFromHexString(id)};
        await db.collection("book").deleteOne(query);
        return true;
    }

}



module.exports = UserDAO;
