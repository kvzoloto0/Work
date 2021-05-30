import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import i18next from 'i18next'
import cookies from 'js-cookie'
import classNames from 'classnames'
import './index.css'
import UkraineIconsLanguage from './img/UkraineIconsLanguage.svg'
import EnglishIconsLanguage from './img/EnglishIconsLanguage.svg'
import SignIn from './component/SignIn/SignIn'
import {BrowserRouter, Route, NavLink} from "react-router-dom";
import Language from './component/Language/Language'
import BasicExample from './component/qqq'



export default function App() {
  return(
    <div>
        
        {/* <BrowserRouter>  
          <NavLink to="/Language">Language</NavLink>     
          <Route path="/Language" render={ () => <Language /> } />

          <NavLink to="/SignIn">SignIn</NavLink>     
          <Route path="/SignIn" render={ () => <SignIn /> } />
        </BrowserRouter> */}

        
        {/* <BrowserRouter>   */}
          <Language />  
          {/* <Route path="/Language" render={ () => <Language /> } />
        </BrowserRouter> */}


        {/* <BrowserRouter>       
          <NavLink to="/SignIn">SignIn</NavLink>     
          <Route path="/SignIn" render={ () => <SignIn /> } />
        </BrowserRouter> */}

 {/* <SignIn /> */}


      </div>
  )
}
