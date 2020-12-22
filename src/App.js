import React from 'react';
import './App.css';
import LogIn from './components/logIn';
import { useImmer } from "use-immer";
import 'semantic-ui-css/semantic.min.css'
import axios from "./untils/axios";



function App() {
  const[user,setUser]=useImmer({
    username:'',
    moblienumber: '',
    verificationCode: '',
    verificationSent: false,
  });

   async function sendSmsCode(){
    console.log('sending sms');
    await axios.post('/login',{
      to: user.moblienumber,
      username:user.username,
      channel:'sms',
    })
    setUser(draft => {
      draft.verificationSent=true;
    })
  }
  async function sendverificationCode(){
    console.log('sending verification');
    const response=await axios.post('/verify', {
      to: user.moblienumber,
      code: user.verificationCode,
    })
    console.log(response.data);
  }

  return (
    <div>
      <LogIn user={user} 
      setUser={setUser} 
      sendSmsCode={sendSmsCode}
      sendverificationCode={sendverificationCode}
       />
    </div>
 
  );
}

export default App;
