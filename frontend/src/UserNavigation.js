import ReactDOM from 'react-dom';
import Header from './Header';
import Login from "./user/Login";
import Register from "./user/Register";
import React, { Component } from 'react';


class UserNavigation{

    

    static loginPage(){

        ReactDOM.render(<Header state="login" />, document.getElementById('headerDiv'));
        ReactDOM.render(<Login/>, document.getElementById('bodyDiv'));
    }
    
   static registerPage(){
          console.log('registerPage');
          ReactDOM.render(<Header state="register" />, document.getElementById('headerDiv'));
          ReactDOM.render(<Register/>, document.getElementById('bodyDiv')); 
    }
}



export default UserNavigation;
