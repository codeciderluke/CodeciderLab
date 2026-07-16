import { Link, NavLink } from 'react-router-dom'
import { useLang } from '../i18n/LanguageContext'
import Logo from './Logo'

export default function Header() {
  const { lang, toggleLang, t } = useLang()

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link to="/" className="brand">
          <Logo size={40} />
        </Link>

        <nav className="main-nav">
          <NavLink to="/" end>
            {t('nav_home')}
          </NavLink>
          <NavLink to="/software">{t('nav_software')}</NavLink>
          <NavLink to="/boards">{t('nav_boards')}</NavLink>
          <NavLink to="/about">{t('nav_about')}</NavLink>
        </nav>

        <button
          className="lang-toggle"
          onClick={toggleLang}
          aria-label="Switch language"
          title={lang === 'en' ? '한국어로 전환' : 'Switch to English'}
        >
          <span className={lang === 'en' ? 'active' : ''}>EN</span>
          <span className="lang-sep">|</span>
          <span className={lang === 'ko' ? 'active' : ''}>KO</span>
        </button>
      </div>
    </header>
  )
}
