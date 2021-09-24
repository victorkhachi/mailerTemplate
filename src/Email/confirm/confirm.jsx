import React from 'react'
import logo from './images/logo.png'
import './confirm.scss'

export default function Confirm({props}) {
    
   

    
    return (
        <div class='email-template'>
           <head><img src={logo} alt=''/></head>
           <body>
               <h2>{props.title}</h2>
               <p class='name'>hello dimgba</p>
               {props.body}
                <div class='greeting'><span>Best,</span><p>SWIRGE team</p></div>
               </body> 

               <footer>Copyright 2021 SWIRGE.All rights reserved.</footer>
        </div>
    )
}
