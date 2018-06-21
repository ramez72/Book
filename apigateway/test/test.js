const request = require('supertest');
const app = require('../app')

test('It should response the GET method', done=> {
    request(app).get('/').then( response =>{
        expect(response.statusCode).toBe(200);
        done();
    });
});


let time = new Date().getMilliseconds();


test('Testing Book APIs',async  done=>{

    let username = 'user'+time;
    let password = 'Pasword1';
    let userDetail = {username:username,
        password:password, 
        email: 'abc'+time+'@xyz.com',
        firstname: 'testFirstName',
        lastname: 'testLastName'
        };

    let response = await  request(app).post('/users/register').send(userDetail);
      
      expect(response.statusCode).toBe(201);
      expect(response.body.id).toBeTruthy();

      response = await  request(app).post('/users/register').send(userDetail)
      
      expect(response.statusCode).toBe(422);

     response = await request(app).post('/users/authenticate').send({username:username,password:password});

     expect(response.statusCode).toBe(200);
     expect(response.body.token).toBeTruthy();

     let auth = 'Basic '+Buffer.from(username+':'+response.body.token).toString('base64');

     let title ='Hello World'+time;

     let bookDetail = {
        author: 'Ramesh',
        title: title,
        price: 5.40
     };
   
     response =await request(app).post('/book').set('Authorization', auth).send(bookDetail);

     expect(response.statusCode).toBe(201);
     expect(response.body.id).toBeTruthy();

     let bookid =response.body.id;

     bookDetail.id = bookid;
     

     response = await request(app).get('/book').set('Authorization', auth);

     expect(response.statusCode).toBe(200);
     
     let books = response.body;

     books.forEach(book => {
         if(book.id === bookDetail.id){
            expect(book.author).toBe(bookDetail.author);
            expect(book.title).toBe(bookDetail.title);
            expect(book.price).toBeCloseTo(bookDetail.price);
         }
     });

     bookDetail.author = 'Kumar';

     response = await request(app).put('/book').set('Authorization', auth).send(bookDetail);

     expect(response.statusCode).toBe(200);

     response = await request(app).get('/book/'+bookDetail.id).set('Authorization', auth);

     expect(response.statusCode).toBe(200);
     
     let book = response.body;

     expect(book.id).toBe(bookDetail.id);
     expect(book.author).toBe(bookDetail.author);
     expect(book.title).toBe(bookDetail.title);
     expect(book.price).toBeCloseTo(bookDetail.price);

     response = await request(app).delete('/book/'+bookDetail.id).set('Authorization', auth);


     expect(response.statusCode).toBe(200);

     response = await request(app).get('/book/'+bookDetail.id).set('Authorization', auth);

     expect(response.statusCode).toBe(500);

     bookDetail.title = undefined;
     response =await request(app).post('/book').set('Authorization', auth).send(bookDetail);
     expect(response.statusCode).toBe(500);

    done();

});

