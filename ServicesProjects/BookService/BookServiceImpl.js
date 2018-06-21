const BookDAO = require('./BookDAO');


let bookDAO = new BookDAO();

class BookServiceImpl{

   async getAllBooks(){
       let result =await bookDAO.getAllBooks();
       if(result!=null && result.length>0)
        result.forEach(element => {
            element.id =element._id+"";
        });
        return result;
   }

   async getBookById(id){
       let book = await bookDAO.getBookById(id);
       book.id = id;
       return book;
   }

   async addBook(book){
       let id = await bookDAO.addBook(book);
       book.id = id+"";
       return book;
   }

   async updateBook(book){
       let result = await bookDAO.updateBook(book);
        return result;
   }

   async deleteBook(id){
        return await bookDAO.deleteBook(id);
   }


}


module.exports = BookServiceImpl;