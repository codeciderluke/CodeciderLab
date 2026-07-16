import { useLang } from '../i18n/LanguageContext'
import Logo from './Logo'

export default function Footer() {
  const { t } = useLang()
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <Logo size={28} />
          <p>{t('footer_slogan')}</p>
        </div>
        <p className="footer-copy">
          © {year} {t('org_name')}. {t('footer_rights')}
        </p>
      </div>
    </footer>
  )
}
