import React, { Component } from "react";
import logo from './logo.svg';
import ReactDOM from 'react-dom';

import Login from "./user/Login";
import Register from "./user/Register";




class Body extends Component{


    
    constructor(props) {
        super(props);
        this.state ={ page: props.page };
      }



      DrawBodyContent(){
      console.log(this.state.page);
      if(this.state.page==="login"){
        return (<Login/>);
      }else if(this.state.page==="register"){
        return (<Register/>);
      }else {
        return (<Login/>);
      }
    
    }
    
    

    render(){
      let BodyContent = this.DrawBodyContent();
        return(<div>
                {BodyContent}
 </div>
          );
    }
}


  
export default Body;