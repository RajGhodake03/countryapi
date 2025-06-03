import React, { useContext, useState } from 'react'
import ThemeContext from '../contexts/ThemeContext';
import { useTheme } from '../hooks/useThemes';

export default function Header({theme}) {

   const [isDark,setIsdark]=useTheme();    //useContext(ThemeContext);
   // if(isDark){
   //    document.body.classList.add('dark');
   // }else{
   //    document.body.classList.remove('dark');
   // }
  return (
     <header className={`header-container ${isDark?" dark":""}`}>
        <div className='header-content'>
            <h2 className='title'><a href="/">where in the world</a></h2>
            <p className='theme-changer' onClick={()=>{
               
               setIsdark(!isDark)
               localStorage.setItem('isDarkMode',!isDark)
            }}>
               <i className={`fa-solid fa-${isDark?"sun":"moon"}`}></i>&nbsp;&nbsp;{isDark?"Light":"Dark"} Mode</p>
            
        </div>
     </header>
  )
}
