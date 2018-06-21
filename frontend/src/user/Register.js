import React, { Component } from "react";
import axios from "axios";
import ajaxutil from '../util/AjaxUtil';
import UserNavigation from '../UserNavigation';
import Login from './Login';
import ReactDOM from 'react-dom';
import Header from '../Header';

class Register extends Component{

    constructor(props){
        super(props);
        if(props.message===undefined || props.message===null){
            this.state ={
                message : ""
            };
        }else{
            this.state ={
                message : props.message
            };
        }
        this.register = this.register.bind(this);
        
    }

    register(){
        console.log('resgister');
        let dummy ={
            key1 : "value1",
            key2 : "value2"
        };


        let data={
            username : document.getElementById('username').value,
            password : document.getElementById('password').value,
            email : document.getElementById('email').value,
            firstname : document.getElementById('firstname').value,
            lastname : document.getElementById('lastname').value,
            dummy :  dummy
        };
        
        console.log(ajaxutil.convertToParam(data));

        axios.post('http://localhost:3000/users/register',ajaxutil.convertToParam(data), ajaxutil.conf).then( response =>{
            let message = 'Registeration successful, Login now!';
            ReactDOM.render(<Header page='login'/>,document.getElementById('headerDiv'));
            ReactDOM.render(<Login message={message}/>, document.getElementById('bodyDiv'));
        }).catch(reason=>{
            console.log(JSON.stringify(reason));
            this.setState({
                message: reason.response.data.error
            });
        });
    }

    render(){
        let style ={
            color:'red'
        };
        return(<div><br/>
                User Name:<input type="text"  id="username"/><br/><br/>
                Password:<input type="password"  id="password" /><br/><br/>
                Email:<input type="text"  id="email"/><br/><br/>
                First Name:<input type="text"  id="firstname"/><br/><br/>
                Last Name:<input type="text"  id="lastname"/><br/><br/>
                <button onClick={this.register}>Register</button><br/><br/>
                <div style={style}>
                {this.state.message}
                </div>
                </div>
            );
    }

}

export default Register;