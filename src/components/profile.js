import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import useSWR from 'swr';
import axios from 'axios';
import './profile.css';
import photo from './profile_dp.png'


export default function Profile(){
    const [uptime,setUptime] = useState('');
    const[input, setInput]= useState('');
    // useEffect(()=>
    //   {
    //     console.log('Hello1')
    //     if (parseInt(time)>0)
    //     {
    //       // console.log(time)
    //       console.log('Hello')
    //       const timer = setTimeout(()=>setInput(parseInt(time)-1, 1000));
    //       time--;
    //       console.log(time)
    //       console.log('Hello2')
    //       // console.log(input)
    //       return()=>clearTimeout(timer);
    //     }  
    //   },)

// Create a new Date object and set the seconds
const date = new Date(null);
date.setSeconds(input);

// Get the time portion in HH:MM:SS format
const formattedTime = date.toISOString().substr(11, 8);

    useEffect(()=>
  {
    if (uptime>0)
    {
      const timer = setTimeout(()=>setInput(uptime-1),1000);
      return()=>clearTimeout(timer);
    }  
  })
    const {
      data: uptimeLOCALAPIData,
    } = useSWR(
      () =>{
     
      axios.get('http://localhost:8000/profile')
      .then((res)=>{ 
        // console.log(res);
        if(res.data !== undefined)
        {
          if(res.data.uptime>=10798 && res.data.uptime <=10800)
          {
            alert("Checktime complete")
          }
          else
          {
            console.log(res.data.uptime)
            setUptime(res.data.uptime)
          }
        }
      })
    },
  { refreshInterval: 1* 1000}
    );
  // const settimer = () =>{

  // }
  // const {
  //     data: uptimeLOCALAPIData,
  //   } = useSWR(
  //     () => [`http://localhost:8000/profile`],
  //     UptimeFetch.axiosFetcher,
  //     { refreshInterval: 1 * 1000 }
  //   );
  //   console.log({uptimeLOCALAPIData})

    const navigate = useNavigate();
    const signOut = () => {
        localStorage.removeItem('cairocodersToken')
        navigate("/");
    }
    return(
        <body>
          <nav>
          <ul>
        <li><button type ='button' className="btn-btn-success-btn-lg" onClick= {signOut}>Sign Out</button></li>
        <li><img id="header-img" src={photo} alt="Profile Photo"/></li>
          </ul>
        </nav>
            <div className="container" style = {{minHeight: 800, marginTop: 20}}>
                <h1>Profile Page</h1>
                <p onChange={()=>setInput()}>
                <b>Time Left: </b> {formattedTime}
                </p>
            </div>
        </body>
    )
}