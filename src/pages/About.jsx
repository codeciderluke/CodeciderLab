import { useLang } from '../i18n/LanguageContext'
import collabIllustration from '../assets/collab.svg'

export default function About() {
  const { t } = useLang()

  return (
    <section className="section page-top">
      <div className="container about">
        <div className="about-hero">
          <h1 className="page-title">{t('about_title')}</h1>
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

        <ul className="about-values">
          <li>{t('about_values_1')}</li>
          <li>{t('about_values_2')}</li>
          <li>{t('about_values_3')}</li>
        </ul>

        <div className="about-collab">
          <img
            src={collabIllustration}
            alt={t('about_collab_title')}
            className="about-collab-img"
          />
          <h2>{t('about_collab_title')}</h2>
          <p>{t('about_collab_desc')}</p>
        </div>
      </div>
    </section>
  )
}
