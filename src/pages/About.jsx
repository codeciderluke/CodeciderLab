import { useLang } from '../i18n/LanguageContext'
import Logo from '../components/Logo'

export default function About() {
  const { t } = useLang()

  return (
    <section className="section page-top">
      <div className="container about">
        <div className="about-hero">
          <Logo size={64} />
          <h1 className="page-title">{t('about_title')}</h1>
          <p className="section-subtitle">{t('tagline')}</p>
        </div>

        <div className="about-block">
          <h2>{t('concept_title')}</h2>
          <div className="concept-grid">
            <div className="concept-card">
              <span className="concept-icon green">&lt;/&gt;</span>
              <h3>{t('concept_code_cider')}</h3>
              <p>{t('concept_code_cider_desc')}</p>
            </div>
            <div className="concept-card">
              <span className="concept-icon blue">🤝</span>
              <h3>{t('concept_co_decider')}</h3>
              <p>{t('concept_co_decider_desc')}</p>
            </div>
          </div>
        </div>

        <div className="about-block">
          <h2>{t('about_mission_title')}</h2>
          <p>{t('about_mission')}</p>
        </div>

        <div className="about-columns">
          <div className="about-block">
            <h2>{t('about_how_title')}</h2>
            <div className="about-item">
              <span className="about-icon green">AD</span>
              <div>
                <h3>{t('about_ads')}</h3>
                <p>{t('about_ads_desc')}</p>
              </div>
            </div>
            <div className="about-item">
              <span className="about-icon green">♥</span>
              <div>
                <h3>{t('about_donation')}</h3>
                <p>{t('about_donation_desc')}</p>
              </div>
            </div>
          </div>

          <div className="about-block">
            <h2>{t('about_future_title')}</h2>
            <div className="about-item">
              <span className="about-icon purple">◆</span>
              <div>
                <h3>{t('about_source')}</h3>
                <p>{t('about_source_desc')}</p>
              </div>
            </div>
            <div className="about-item">
              <span className="about-icon purple">📖</span>
              <div>
                <h3>{t('about_manual')}</h3>
                <p>{t('about_manual_desc')}</p>
              </div>
            </div>
          </div>
        </div>

        <ul className="about-values">
          <li>{t('about_values_1')}</li>
          <li>{t('about_values_2')}</li>
          <li>{t('about_values_3')}</li>
        </ul>
      </div>
    </section>
  )
}
