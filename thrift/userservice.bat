cd C:\Users\prameshkumar\node_projects\project1\thrift
call thrift-0.11.0.exe --gen js:node UserService.thrift
cd gen-nodejs
copy UserService.js C:\Users\prameshkumar\node_projects\project1\apigateway\api
copy UserService_types.js C:\Users\prameshkumar\node_projects\project1\apigateway\api
copy UserService.js C:\Users\prameshkumar\node_projects\project1\ServicesProjects\UserService\api
copy UserService_types.js C:\Users\prameshkumar\node_projects\project1\ServicesProjects\UserService\api