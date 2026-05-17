import { useTranslation } from 'react-i18next'

/**
 * Floating bottom-right button that toggles between English and Spanish.
 * Shows the OPPOSITE language as the button text — clicking switches to it.
 */
export default function LangSwitcher() {
  const { i18n, t } = useTranslation()
  const current = i18n.language?.startsWith('es') ? 'es' : 'en'
  const target = current === 'es' ? 'en' : 'es'
  const targetLabel = target === 'es' ? 'ES' : 'EN'
  const targetFullName = target === 'es' ? t('lang.spanish') : t('lang.english')

  const handleClick = () => {
    i18n.changeLanguage(target)
    if (typeof document !== 'undefined') {
      document.documentElement.lang = target
    }
  }

  return (
    <button
      type="button"
      className="lang-switcher"
      onClick={handleClick}
      aria-label={t('lang.switchTo', { lang: targetFullName })}
      title={t('lang.switchTo', { lang: targetFullName })}
    >
      {targetLabel}
    </button>
  )
}
