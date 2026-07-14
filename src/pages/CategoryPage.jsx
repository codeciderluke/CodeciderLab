import { Link, useParams } from 'react-router-dom'
import { useLang } from '../i18n/LanguageContext'
import { getCategory } from '../data/categories'
import { getSoftwareByCategory } from '../data/software'
import SoftwareCard from '../components/SoftwareCard'
import NotFound from './NotFound'

export default function CategoryPage() {
  const { categoryId } = useParams()
  const { t } = useLang()
  const cat = getCategory(categoryId)

  if (!cat) return <NotFound />

  const items = getSoftwareByCategory(categoryId)

  return (
    <section className="section page-top">
      <div className="container">
        <Link to="/software" className="breadcrumb">
          ← {t('nav_software')}
        </Link>
        <div className="category-header" style={{ '--cat-color': cat.color }}>
          <div className="category-icon large">{cat.icon}</div>
          <div>
            <h1 className="page-title">{t(cat.nameKey)}</h1>
            <p className="section-subtitle">{t(cat.descKey)}</p>
          </div>
        </div>

        {items.length === 0 ? (
          <p className="empty-note">{t('no_software')}</p>
        ) : (
          <div className="software-grid">
            {items.map((s) => (
              <SoftwareCard key={s.id} item={s} />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
