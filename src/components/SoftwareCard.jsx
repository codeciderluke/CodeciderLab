import { Link } from 'react-router-dom'
import { useLang } from '../i18n/LanguageContext'
import { getCategory } from '../data/categories'

export default function SoftwareCard({ item }) {
  const { lang, t } = useLang()
  const cat = getCategory(item.category)

  return (
    <Link to={`/software/${item.category}/${item.id}`} className="software-card">
      <div className="software-card-head">
        <span className="software-badge" style={{ '--cat-color': cat.color }}>
          {cat.icon}
          {t(cat.nameKey)}
        </span>
        <span className="software-version">v{item.version}</span>
      </div>
      <h3>{item.name}</h3>
      <p>{item.summary[lang]}</p>
      <div className="software-card-foot">
        <span>{item.language}</span>
        <span>{item.license}</span>
      </div>
    </Link>
  )
}
