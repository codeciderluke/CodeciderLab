import { Link } from 'react-router-dom'
import { useLang } from '../i18n/LanguageContext'
import { getCategory } from '../data/categories'
import { software } from '../data/software'

export default function BoardsIndex() {
  const { lang, t } = useLang()

  return (
    <section className="section page-top">
      <div className="container">
        <h1 className="page-title">{t('nav_boards')}</h1>
        <p className="section-subtitle">{t('boards_page_subtitle')}</p>

        <ul className="boards-list">
          {software.map((s) => {
            const cat = getCategory(s.category)
            return (
              <li key={s.id}>
                <Link to={`/boards/${s.id}`} className="boards-item" style={{ '--cat-color': cat.color }}>
                  <span className="category-icon">{cat.icon}</span>
                  <div className="boards-item-text">
                    <h3>{s.name}</h3>
                    <p>{s.summary[lang]}</p>
                  </div>
                  <span className="boards-open">{t('board_go')} →</span>
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
