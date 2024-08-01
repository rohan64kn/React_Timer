//C:\react-js\myreactdev\src\App.js
import React, { } from 'react';
import './App.css';
 
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
 
import Login from './components/Login.js';
import Profile from './components/profile.js';
import {RequireToken} from './components/auth.js';


window.onload = function() {
  setInterval(function() {
      var date = new Date();
      var displayDate = date.toLocaleDateString();
      var displayTime = date.toLocaleTimeString();
      document.getElementById('datetime').innerHTML = displayDate + " " + displayTime;
  }, 1000); // 1000 milliseconds = 1 second
};
function App() {
  return (
    <body>
    {/* <div className="vh-100 gradient-custom">
    <div className="container"> */}
      <BrowserRouter>
      <nav>
        <ul>
          <li><Link to="/" className="btn-btn-success">Login</Link></li>
          <li><Link to="profile" className="btn-btn-success2">Profile</Link></li>
          <li id="datetime"></li>
        </ul>
        </nav>
        <Routes>
            <Route path="/" element={<Login />} />
            <Route
              path="/profile"
              element={
                <RequireToken>
                  <Profile />
                </RequireToken>
              }
            />
        </Routes>
      </BrowserRouter>

    {/* </div>
    </div> */}
    </body>
  );
}
  
export default App;