import { useLang } from '../i18n/LanguageContext'

export default function Footer() {
  const { t } = useLang()
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <p className="footer-tagline">
          <span className="accent">Code.</span> Create.{' '}
          <span className="accent">Collaborate.</span>
        </p>
        <p className="footer-copy">
          © {year} {t('org_name')}. {t('footer_rights')}
        </p>
      </div>
    </footer>
  )
}
