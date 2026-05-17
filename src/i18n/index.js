import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import en from './locales/en.json'
import es from './locales/es.json'

const STORAGE_KEY = 'preferredLanguage'

/** Returns the initial language: stored preference > English default. */
function getInitialLanguage() {
  if (typeof window === 'undefined') return 'en'
  const stored = window.localStorage.getItem(STORAGE_KEY)
  if (stored === 'en' || stored === 'es') return stored
  return 'en'
}

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      es: { translation: es },
    },
    lng: getInitialLanguage(),
    fallbackLng: 'en',
    interpolation: { escapeValue: false }, // React already escapes
    react: {
      // Keep simple HTML tags inline (<br/>, <strong/>) so descriptions stay readable
      transKeepBasicHtmlNodesFor: ['br', 'strong', 'i', 'em'],
    },
  })

// Persist any future change to localStorage
i18n.on('languageChanged', (lng) => {
  if (typeof window !== 'undefined') {
    window.localStorage.setItem(STORAGE_KEY, lng)
  }
})

export default i18n
