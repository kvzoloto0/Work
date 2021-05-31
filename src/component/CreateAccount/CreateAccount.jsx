import React from 'react';
import './CreateAccount.css';


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

const CreateAccount = () => {
    const currentLanguageCode = cookies.get('i18next') || 'en'
    const currentLanguage = languages.find((l) => l.code === currentLanguageCode)
    const { t } = useTranslation()





    return (
        <div>
            <div className="blockDimensionsCenter">
                <div className="blockAppearanceCreateAccount">
                    <div className="CreateAccountText">Create account</div>
                    <input className="inputFormCreateAccount" placeholder={t("Email")}></input>
                    <input className="inputFormCreateAccount" placeholder={t("Password")}></input>
                    <input className="inputFormCreateAccount" placeholder="Last name"></input>
                    <input className="inputFormCreateAccount" placeholder="Mobile"></input>
                    <input className="inputFormCreateAccount" placeholder="Supplier name"></input>
                    <input className="inputFormCreateAccount" placeholder="Supplier code (EDRPOU)"></input>
                    <div>
                        <button className="buttonSendRequest">Send request</button>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default CreateAccount;