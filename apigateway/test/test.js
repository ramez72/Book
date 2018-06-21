const request = require('supertest');
const app = require('../app')

test('test',()=>{
    expect(1+1).toBe(2);
});

describe('Test the root path', () => {
    test('It should response the GET method', done=> {
        request(app).get('/').then( response =>{
            expect(response.statusCode).toBe(200);
            done();
        });
    });
});


test('It should response the GET method', done=> {
    request(app).get('/book').set('Authorization', 'Basic aGk6MjNiZWYwZGVmNGE4YWZlOTQ4ZmZmODQyNw==').then( response =>{
        console.log(response.text);
        expect(response.statusCode).toBe(200);
        done();
    });
});
