# Book
API List
User
   - Register, login
Book
   - Add, delete, get, get all, edit
 
There are 4 different projects are there
  API Gateway 
  User Service
  Book Service
  Front End
  
API Gateway: (apigateway)
  Main library's used: Express, thrift
  Before starting API gateway, start user service and book service
  
User Service (ServicesProjects/UserService)
   Main library's used: thrift

Book Service (ServicesProjects/BookService)
   Main library's used: thrift
 
Front End (frontend)
 Main library's used: React js
 
Testing
  goto apigateway/test
  Run jest
  This is API testing, before doing testing start User service and book service thrift servers, and no need to start api gateway

Configuration files
  projectDir/conf folder will have all the configurations needed for the server
 
Log files
  projectDir/log
  Library's used: morgan for request logs, winston for application logs
  
 Thrift files
    thrift/ServiceName.thrift,  after generating js files add into projectDir/api
 
 DataBase
  Mongo DB
  
