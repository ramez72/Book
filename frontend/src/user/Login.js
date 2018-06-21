import React, { Component } from "react";
import axios from "axios";
import ajaxutil from '../util/AjaxUtil';
import ReactDOM from 'react-dom';
import Header from '../Header';

const style ={
    color : 'red' 
};

class Login extends Component{

   
    constructor(props){
        super();
        this.message = props.message;
        this.requiredFields ={
                username: "",
                password: ""
            };
        this.state = {
            requiredFields : this.requiredFields
        }

        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.login = this.login.bind(this);
    }

    handleUsernameChange(event) {
        this.requiredFields.username= event.target.value;
        this.setState({requiredFields : this.requiredFields});
      }
      handlePasswordChange(event) {
        this.requiredFields.password= event.target.value;
        this.setState({requiredFields : this.requiredFields});
      }

    login(){
        

        axios.post('http://localhost:3000/users/authenticate',ajaxutil.convertToParam(this.state.requiredFields), ajaxutil.conf).then( response =>{
            let message = 'Registeration successful, Login now!';
           // ReactDOM.render(<Header page='login'/>,document.getElementById('headerDiv'));
            ReactDOM.render(<Login message={message}/>, document.getElementById('bodyDiv'));
        }).catch(reason=>{
            console.log(JSON.stringify(reason));
            this.setState({
                message: reason.response.data.error
            });
        });
    }

    render(){
        return(<div>
                <div style={style}> 
                    {this.message}
                </div>
                <br/>
                User Name: <input type="text" value={this.state.requiredFields.username} onChange={this.handleUsernameChange}/><br/><br/>
                Password: <input type="password" value={this.state.requiredFields.password}  onChange={this.handlePasswordChange}/><br/><br/>
                <button onClick={this.login}>Login</button>
                </div>
            );
    }

}

export default Login;