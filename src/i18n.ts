import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import Backend from 'i18next-http-backend'
import { initReactI18next } from 'react-i18next'

import { LANGUAGE, LANGUAGE_VI } from '@/constants/language'

const detectLang = localStorage.getItem(LANGUAGE)

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    lng: detectLang || LANGUAGE_VI,
    fallbackLng: LANGUAGE_VI,
    debug: false,
    backend: {
      loadPath: 'lang/{{lng}}.json',
    },
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    react: {
      useSuspense: true,
    },
  })

export default i18n
