import { useEffect, useState } from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import "./css/App.css";
import Main from './common/Main';
import LogIn from './common/login/LogIn';
import KakaoRedirect from './common/login/KakaoRedirect';

function App() {
  const navigate = useNavigate();
  const [isLoggedIn, setisLoggedIn] = useState(false);
  const [token, setToken] = useState("");
  console.log("App location3", window.location.href);
 
  /*
  useEffect(() => {
    // Checking if user is not loggedIn
    if (isLoggedIn) {    
      navigate("/main");
    } else if (document.location.toString().includes("/oauth"))
    {
    } else {      
      navigate("/");
    }
  }, [navigate, isLoggedIn]);
  */

  return (   
    <Routes>   
      <Route path='/main' element={<Main token={token}/>} />
      <Route path="/:code" element={<KakaoRedirect logInCallBack= {(token) => {setisLoggedIn(true); setToken(token); }}/>} />     
      <Route path='/' element={<LogIn/>} />       
    </Routes>    
  );
}
 
export default App;