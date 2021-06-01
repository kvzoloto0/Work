import React from 'react'
import './index.css'
import Language from './component/Language/Language'
import {BrowserRouter, Route, NavLink} from "react-router-dom";




export default function App() {
  return(
    <div>
      <Language />  
      {/* <BrowserRouter>
          <NavLink activeClassName="qqq" to="/">{Language}</NavLink>     
          <Route path="/" render={ () => <Language /> } />
      </BrowserRouter> */}
    </div>
  )
}
