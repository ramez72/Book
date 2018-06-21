import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Body from './Body';
import Login from "./user/Login";



class App extends Component {

  constructor(props){
    super(props);
    this.state = {page: 'login'};
  }
  
 
  render() {
    return (
      <div className="App">
      <div id="headerDiv">
        <Header page={this.state.page}/>
        </div>
        <div id="bodyDiv">
        <Login/>
        </div>
      </div>
    );
  }
}


export default App;
