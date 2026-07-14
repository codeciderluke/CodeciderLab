import { useLang } from '../i18n/LanguageContext'
import { categories } from '../data/categories'
import CategoryCard from '../components/CategoryCard'

export default function SoftwareIndex() {
  const { t } = useLang()

  return (
    <section className="section page-top">
      <div className="container">
        <h1 className="page-title">{t('categories_title')}</h1>
        <p className="section-subtitle">{t('categories_subtitle')}</p>
        <div className="category-grid">
          {categories.map((c) => (
            <CategoryCard key={c.id} category={c} />
          ))}
        </div>
      </div>
    </section>
  )
}
