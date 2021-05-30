import React from 'react';
import './SignIn.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

const SignIn = () => {
    return (
        <div>
            <div className="blockDimensionsCenter">
                <div className="blockAppearanceLogiIn">
                    <div className="blueSquare"></div>
                    <div className="SupplierPortal">SUPPLIER PORTAL</div>
                    <input className="emailLognIn" placeholder="Email"></input>
                    <input className="passwordLognIn" placeholder="Password"></input>
                    <div>
                        <input className="radioLognIn" type="radio"></input>
                        <span className="RememberUsername">Remember username</span>
                    </div>
                    <div>
                        <button className="buttonSignUp">Sign up</button>
                    </div>
                    <div className="CreateAccount">Create account</div>
                </div>
            </div>
        </div>
    )
}

export default SignIn;