const express = require('express');
const http_status_codes = require('http-status-codes');
const Authorizationutil = require('../utils/AuthorizationUtil');
const logger =require('../utils/Logger');

let bookServiceApi = null;

let router = express.Router();

async function init(){
    try{
        bookServiceApi =await require('../utils/ServiceInvoker').BookService;
    }catch(e){
        logger.error("Error in getting book service :"+e.message, e);
    }
}
  
init();


router.use(Authorizationutil.authorize); 

router.route('/')
.get( async (req, res, next) =>{
    try{
        let books = await bookServiceApi.getAllBooks();
        res.json(books);   
    }catch(e){
        next(e);
    }
})
.post( async (req, res, next) =>{

    try{
        let book = await bookServiceApi.addBook(req.body);
        res.status(http_status_codes.CREATED)
        .json(book);
    }catch(e){
        next(e);
    }
})
.put(async(req, res, next)=>{
    try{
        let book = await bookServiceApi.updateBook(req.body);
        res.json(book);
    }catch(e){
        next(e);
    }
    
});

router.route('/:id').get(async(req, res)=>{
    try{
        let book = await bookServiceApi.getBookById(req.params.id);
        res.json(book);
    }catch(e){
        next(e);
    }
})
.delete(async(req, res)=>{
    try{
        let result = await bookServiceApi.deleteBook(req.params.id);
        res.json(result);
    }catch(e){
        next(e);
    }
});


module.exports = router;

