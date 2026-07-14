import { Link } from 'react-router-dom'
import { useLang } from '../i18n/LanguageContext'

export default function NotFound() {
  const { t } = useLang()

  return (
    <section className="section page-top">
      <div className="container" style={{ textAlign: 'center', padding: '4rem 1rem' }}>
        <h1 className="page-title">404</h1>
        <p className="section-subtitle">Page not found.</p>
        <Link to="/" className="btn btn-primary btn-lg">
          {t('nav_home')}
        </Link>
      </div>
    </section>
  )
}
