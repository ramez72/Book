import React, { Component } from "react";
import logo from './logo.svg';
import ReactDOM from 'react-dom';

import Login from "./user/Login";
import Register from "./user/Register";




class Header extends Component{


    
    constructor(props) {
        super(props);
        console.log('header cons');
        this.state ={ page: props.page };
       
        console.log(this.state);
      }

 


      loginPage(){
        this.setState({
          page: 'login'
        });
    ReactDOM.render(<Login/>, document.getElementById('bodyDiv'));
    
      }
    
    registerPage(){
      this.setState({
        page: 'register'
      });
      ReactDOM.render(<Register/>, document.getElementById('bodyDiv'));
    
    }


     DrawHeaderOptions(){
      console.log(this.state.page);
      if(this.state.page==="login"){
        return this.RegisterOption();
      }else if(this.state.page==="register"){
        return this.LoginOption();
      }else {
        return this.LogoutOption();
      }
    
    }
    
     LoginOption(){
      return (<div onClick={this.loginPage.bind(this)}>Login</div>);
    }
    
    
     RegisterOption(){
      return (<div onClick={this.registerPage.bind(this)}>Register</div>);
    }
    
     LogoutOption(){
      return (<div onClick={this.loginPage.bind(this)}>Logout</div>);
    }

    render(){
      let HeaderOptions = this.DrawHeaderOptions();
      
        return(
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <div align="right">
                {HeaderOptions}
              </div>
              <h1 className="App-title">{process.env.NODE_ENV}</h1>
             </header>
          );
    }
}


  
export default Header;