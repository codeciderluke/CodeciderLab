import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useLang } from '../i18n/LanguageContext'
import { getCategory } from '../data/categories'
import { getSoftware } from '../data/software'
import Board from '../components/Board'
import NotFound from './NotFound'

export default function SoftwareDetail() {
  const { categoryId, softwareId } = useParams()
  const { lang, t } = useLang()
  const [tab, setTab] = useState('overview')
  const item = getSoftware(softwareId)
  const cat = getCategory(categoryId)

  if (!item || !cat || item.category !== categoryId) return <NotFound />

  return (
    <section className="section page-top">
      <div className="container">
        <Link to={`/software/${categoryId}`} className="breadcrumb">
          ← {t('back_to_category')} · {t(cat.nameKey)}
        </Link>

        <div className="detail-header">
          <div>
            <span className="software-badge" style={{ '--cat-color': cat.color }}>
              {cat.icon}
              {t(cat.nameKey)}
            </span>
            <h1 className="page-title">{item.name}</h1>
            <p className="detail-summary">{item.summary[lang]}</p>
          </div>
          <div className="detail-actions">
            <a href={item.downloadUrl} target="_blank" rel="noreferrer" className="btn btn-primary btn-lg">
              ⬇ {t('download')}
            </a>
            <a href={item.github} target="_blank" rel="noreferrer" className="btn btn-ghost btn-lg">
              {t('view_on_github')}
            </a>
          </div>
        </div>

        <dl className="detail-meta">
          <div>
            <dt>{t('version')}</dt>
            <dd>v{item.version}</dd>
          </div>
          <div>
            <dt>{t('released')}</dt>
            <dd>{item.released}</dd>
          </div>
          <div>
            <dt>{t('license')}</dt>
            <dd>{item.license}</dd>
          </div>
          <div>
            <dt>{t('language')}</dt>
            <dd>{item.language}</dd>
          </div>
        </dl>

        <div className="tabs">
          <button className={tab === 'overview' ? 'tab active' : 'tab'} onClick={() => setTab('overview')}>
            {t('overview')}
          </button>
          <button className={tab === 'discussion' ? 'tab active' : 'tab'} onClick={() => setTab('discussion')}>
            💬 {t('discussion')}
          </button>
        </div>

        {tab === 'overview' ? (
          <div className="detail-body">
            <h2>{t('overview')}</h2>
            <p className="detail-overview">{item.overview[lang]}</p>

            <h2>{t('key_features')}</h2>
            <ul className="feature-list">
              {item.features[lang].map((f, i) => (
                <li key={i}>{f}</li>
              ))}
            </ul>

            {item.benchmark && (
              <>
                <h2>{t('benchmark')}</h2>
                <p className="benchmark-note">{item.benchmark[lang]}</p>
              </>
            )}

            <h2>{t('tech_stack')}</h2>
            <div className="tech-tags">
              {item.techStack.map((tech) => (
                <span key={tech} className="tech-tag">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ) : (
          <Board boardId={item.id} />
        )}
      </div>
    </section>
  )
}
