import { Link, useParams } from 'react-router-dom'
import { useLang } from '../i18n/LanguageContext'
import { getCategory } from '../data/categories'
import { getSoftware } from '../data/software'
import Board from '../components/Board'
import NotFound from './NotFound'

export default function BoardPage() {
  const { softwareId } = useParams()
  const { t } = useLang()
  const item = getSoftware(softwareId)

  if (!item) return <NotFound />
  const cat = getCategory(item.category)

  return (
    <section className="section page-top">
      <div className="container">
        <Link to="/boards" className="breadcrumb">
          ← {t('nav_boards')}
        </Link>
        <div className="board-page-head">
          <span className="software-badge" style={{ '--cat-color': cat.color }}>
            {cat.icon}
            {t(cat.nameKey)}
          </span>
          <h1 className="page-title">{item.name}</h1>
          <Link to={`/software/${item.category}/${item.id}`} className="board-software-link">
            {t('overview')} →
          </Link>
        </div>
        <Board boardId={item.id} />
      </div>
    </section>
  )
}
