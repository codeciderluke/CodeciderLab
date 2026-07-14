import { Link } from 'react-router-dom'
import { useLang } from '../i18n/LanguageContext'
import { categories } from '../data/categories'
import { software } from '../data/software'
import CategoryCard from '../components/CategoryCard'
import SoftwareCard from '../components/SoftwareCard'
import Logo from '../components/Logo'

export default function Home() {
  const { t } = useLang()

  return (
    <>
      <section className="hero">
        <div className="container hero-inner">
          <div className="hero-copy">
            <p className="hero-org">{t('org_name')}</p>
            <h1>
              {t('hero_title_1')}
              <br />
              <span className="accent">{t('hero_title_2')}</span>
            </h1>
            <p className="hero-subtitle">{t('hero_subtitle')}</p>
            <div className="hero-actions">
              <Link to="/software" className="btn btn-primary btn-lg">
                {t('hero_cta_browse')}
              </Link>
              <Link to="/about" className="btn btn-ghost btn-lg">
                {t('hero_cta_about')}
              </Link>
            </div>
            <ul className="hero-points">
              <li>✓ {t('hero_point_1')}</li>
              <li>✓ {t('hero_point_2')}</li>
              <li>✓ {t('hero_point_3')}</li>
            </ul>
          </div>

          <div className="hero-visual" aria-hidden="true">
            <div className="bottle-float">
              <Logo size={380} animated />
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <h2 className="section-title">{t('latest_software')}</h2>
          <div className="software-grid">
            {software.map((s) => (
              <SoftwareCard key={s.id} item={s} />
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">{t('categories_title')}</h2>
          <p className="section-subtitle">{t('categories_subtitle')}</p>
          <div className="category-grid">
            {categories.map((c) => (
              <CategoryCard key={c.id} category={c} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
