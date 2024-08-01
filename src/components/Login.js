import React, { useState } from 'react';
import axios from 'axios';
import {useNavigate} from "react-router-dom";
import {setToken, fetchToken} from './auth.js'
import './Login.css';
 
export default function Login(){
    const navigate = useNavigate();
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
  
    const handleSubmit = () => {
        if(username.length === 0){
          alert("Username has left Blank!");
        }
        else if(password.length === 0){
          alert("password has left Blank!");
        }
        else{
            console.log('axios')
            axios.post('http://127.0.0.1:8000/login', {
              username: username,
              password: password
          }, {
              headers: {
                  'Content-Type': 'application/json'
              }
          }).then((response) => {
                // console.log(response);
                // console.log(response.data);
                // alert(response.data["message"])
                if (response.data["message"]==="Login failed") {
                    alert("Login failed");
                }else { 
                    if(response.data.token){
                        setToken(response.data.token)
                        navigate("/profile");
                    }
                }
            })
            .catch(function (error) {
                console.log(error, 'error');
            });
        }
    }
  return (
            <div className="card">
              <div className="card-body-p-5">
              {
                fetchToken() 
                ? (
                    <p className="card">You are logged in!</p>
                )
                : (
                    <p className="card">Login Account!</p>
                )
              } 
                <form>
                   
                  <div className="form-outline mb-4">
                    <label className="form-label">User Name:</label>
                    <input type="text" className="form-control form-control-lg" name="username" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
                  </div>
                   
                  <div className="form-outline mb-4">
                    <label className="form-label">Password:</label>
                    <input type="text" className="form-control form-control-lg" name="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                  </div>
                   
 
                  <div className="d-flex justify-content-center">
                  <input type="button" className="btn-btn-success-btn-lg" name="submit" id="submit" value="Login" onClick={handleSubmit} />
                  </div>
  
                </form>
            </div>
            </div>
  );
}