import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import i18next from 'i18next'
import cookies from 'js-cookie'
import classNames from 'classnames'
import signIn from './component/signIn/signIn'
import './index.css'
import UkraineIconsLanguage from './img/UkraineIconsLanguage.svg'
import EnglishIconsLanguage from './img/EnglishIconsLanguage.svg'

const languages = [
  {
    code: 'fr',
    name: <div className="UkraineBlockLanguage"><img src={UkraineIconsLanguage} /></div>,
    country_code: 'fr',
  },
  {
    code: 'en',
    name: <div className="EnglishBlockLanguage"><img src={EnglishIconsLanguage} /></div>,
    country_code: 'gb',
  },
]



export default function App() {
  const currentLanguageCode = cookies.get('i18next') || 'en'
  const currentLanguage = languages.find((l) => l.code === currentLanguageCode)
  const { t } = useTranslation()




  return (
  

    <div className="container blockDimensionsCenter">
      <div className="language-select blockDimensions">



      <div className="row">
        <div className="col-12">
          <h1 className="textDecorationSelectLanguage">{t('welcome_message')}</h1> 
        </div>    
      </div>



      <div className="languageSelectionUkraineAndEnglish">
        {languages.map(({ code, name, country_code }) => (        
          <div key={country_code}>
            <a
              href="#"
              className={classNames({
                disabled: currentLanguageCode === code,
              })}
              onClick={() => {
                i18next.changeLanguage(code)
              }}
            >
              {name}
            </a>                       
          </div>
        ))}
      </div>

      
      </div>



    </div>
  )
}
