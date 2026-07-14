import { Link } from 'react-router-dom'
import { useLang } from '../i18n/LanguageContext'
import { getSoftwareByCategory } from '../data/software'

export default function CategoryCard({ category }) {
  const { t } = useLang()
  const count = getSoftwareByCategory(category.id).length

  return (
    <Link
      to={`/software/${category.id}`}
      className="category-card"
      style={{ '--cat-color': category.color }}
    >
      <div className="category-icon">{category.icon}</div>
      <h3>{t(category.nameKey)}</h3>
      <p>{t(category.descKey)}</p>
      <div className="category-meta">
        <span className="category-count">{t('software_count', count)}</span>
        <span className="category-link">{t('view_category')} →</span>
      </div>
    </Link>
  )
}
