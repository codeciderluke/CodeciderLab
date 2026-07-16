import { useLang } from '../i18n/LanguageContext'
import BottleLogo from './BottleLogo'

export default function Footer() {
  const { t } = useLang()
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <BottleLogo size={34} />
          <p>{t('footer_slogan')}</p>
        </div>
        <p className="footer-copy">
          © {year} {t('org_name')}. {t('footer_rights')}
        </p>
      </div>
    </footer>
  )
}
