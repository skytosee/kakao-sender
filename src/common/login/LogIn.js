import React, { Component } from 'react';
import '../../css/Login.css';

const REST_API_KEY = "891d0a7d7eb0c26136e5ca4450b7f8bd";
const REDIRECT_URI =  "https://skytosee.github.io/kakaosender";
const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code&scope=talk_message,friends`;

class LogIn extends Component
{        
    render(){
        return (
            <div className="App">
              <header className="App-header">
                <img src="https://media.giphy.com/media/xTkcEQACH24SMPxIQg/giphy.gif" alt="logo" height="300" width="300" />
                <p></p>  
                <a href={KAKAO_AUTH_URL}>
                    <div className="kakao_btn">
                    </div>
                </a>  
              </header>
            </div>
        );       
    }
}

export default LogIn;