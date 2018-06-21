
struct Book {
    1: string id;
    2: string author,
    3: required string title,
    4: double price 
}

exception ServiceException{
    1: string errcode;
	2: string error;
	3: string trace;
} 


service BookService{
    list<Book> getAllBooks(1:string dummy) throws (1: ServiceException excep);
    Book getBookById(1:string id) throws (1: ServiceException excep);
    Book addBook(1:Book book) throws (1: ServiceException excep);
    Book updateBook(1:Book book) throws (1: ServiceException excep);
    bool deleteBook(1:string id) throws (1: ServiceException excep);
}