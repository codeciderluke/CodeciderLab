import { createContext, useCallback, useContext, useMemo, useState } from 'react'
import { translations } from './translations'

const LanguageContext = createContext(null)

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => localStorage.getItem('codecider-lang') || 'en')

  const toggleLang = useCallback(() => {
    setLang((prev) => {
      const next = prev === 'en' ? 'ko' : 'en'
      localStorage.setItem('codecider-lang', next)
      return next
    })
  }, [])

  const t = useCallback(
    (key, ...args) => {
      const entry = translations[lang][key] ?? translations.en[key] ?? key
      return typeof entry === 'function' ? entry(...args) : entry
    },
    [lang],
  )

  const value = useMemo(() => ({ lang, toggleLang, t }), [lang, toggleLang, t])

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLang() {
  return useContext(LanguageContext)
}
