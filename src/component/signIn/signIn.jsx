import React from 'react';
import './SignIn.css';


import { useTranslation } from 'react-i18next'
import cookies from 'js-cookie'

const languages = [
    {
      code: 'fr',
      country_code: 'fr',
    },
    {
      code: 'en',
      country_code: 'gb',
    },
  ]


const SignIn = () => {
    const currentLanguageCode = cookies.get('i18next') || 'en'
    const currentLanguage = languages.find((l) => l.code === currentLanguageCode)
    const { t } = useTranslation()


    return (
        <div>

            <div className="blockDimensionsCenter">
                <div className="blockAppearanceLogiIn">
                    <div className="blueSquare"></div>
                    <div className="SupplierPortal">{t("SUPPLIER_PORTAL")}</div>
                    <input className="emailLognIn" placeholder={t("Email")}></input>
                    <input className="passwordLognIn" placeholder={t("Password")}></input>
                    <div>                    
                        <input className="radioLognIn" type="radio"></input>
                        <span className="RememberUsername">{t("Remember_username")}</span>
                    </div>
                    <div>
                        <button className="buttonSignUp">{t("Sign_up")}</button>
                    </div>
                    <div className="CreateAccount">{t("Create account")}</div>
                </div>
            </div>
        </div>
    )
}

export default SignIn;