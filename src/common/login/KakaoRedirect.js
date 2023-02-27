// 카카오 로그인 리다이렉트될 화면
// KakaoRedirect.js
import React, { useEffect } from "react";
import App from "../../App";

const KakaoRedirect = (props) => {
    
  useEffect(()=> {    
    const params = new URL(document.location.toString()).searchParams;   
    const code = params.get("code"); // 인가코드 받는 부분    
    async function fetchData() {
        const token  = await getAuthToken(code);
        if(token) {
          props.logInCallBack(token);
          sendMsg(token);
        }          
    }
    fetchData();   
  }, [])

  const getAuthToken = async (code) => {
    const grant_type = "authorization_code";   
    const REST_API_KEY = "891d0a7d7eb0c26136e5ca4450b7f8bd";
    const REDIRECT_URI =  "https://skytosee.github.io/kakao-sender";
    const url = `https://kauth.kakao.com/oauth/token?grant_type=${grant_type}&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&code=${code}`
    const params = {
        method: "GET", 
        headers: {
            'Content-type': 'application/x-www-form-urlencoded;charset=utf-8'
        }
    }
    const response = await fetch(url, params)
    if (response.ok) {
      const data = await response.json() 
      console.log('Login OK', data.access_token)
      return data.access_token;
    } else {
      const failData = await response.json()
      console.log("Login Fail", failData)
      return "";
    }
  }

  const sendMsg = async (token) => {
    const url = "https://kapi.kakao.com/v2/api/talk/memo/default/send"
    const headers = {
        'Content-type': 'application/x-www-form-urlencoded;',
        "Authorization": "Bearer " + token
    }
    const sendData={
        "object_type":"text",
        "text":"로그인 완료",
        "link":{}    
    }
    const sendString = "template_object=" + JSON.stringify(sendData);       
    const response = await fetch(url, { method: "POST", headers: headers, body: sendString })
    if (response.ok) {
      console.log('Login SendMsg: ', '로그인 완료 메시지 전송 성공');
      return true;
    } else {
      console.log("Login SendMsg Fail")
      return false;
    }
  }

  return <App/>
};

export default KakaoRedirect;