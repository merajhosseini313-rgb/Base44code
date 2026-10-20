import Hero from '../components/Hero.jsx'
import TrustBar from '../components/TrustBar.jsx'
import CategoryGrid from '../components/CategoryGrid.jsx'
import ProductCard from '../components/ProductCard.jsx'
import ProductRail from '../components/ProductRail.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import WhyZamanyar from '../components/WhyZamanyar.jsx'
import Testimonials from '../components/Testimonials.jsx'
import BlogPreview from '../components/BlogPreview.jsx'
import Newsletter from '../components/Newsletter.jsx'
import { featuredProducts, freshProducts } from '../data/catalog.js'
import './Home.css'

export default function Home() {
  const featured = featuredProducts()
  const fresh = freshProducts()

  return (
    <>
      <Hero />
      <TrustBar />

      <section className="section" id="categories">
        <div className="shell">
          <SectionHeading
            eyebrow="انتخاب سریع‌تر"
            title="دسته‌بندی‌ها"
            description="اگر نمی‌دانی از کجا شروع کنی، از سلیقه‌ات شروع کن: هر دسته چند مدل منتخب دارد."
          />
          <CategoryGrid />
        </div>
      </section>

      <section className="section section--sand" id="featured">
        <div className="shell">
          <SectionHeading
            eyebrow="محبوب‌ترین انتخاب‌ها"
            title="پرفروش‌ترین‌ها"
            description="ساعت‌هایی که بیشتر از همه انتخاب شده‌اند و بازخورد خوبی گرفته‌اند."
            action="دیدن دسته‌بندی‌ها"
            actionTo="/#categories"
          />
          <ul className="product-grid">
            {featured.map((product) => (
              <li key={product.id}>
                <ProductCard product={product} />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section" id="fresh">
        <div className="shell">
          <SectionHeading
            eyebrow="تازه رسیده‌ها"
            title="جدیدترین‌ها"
            description="مدل‌هایی که همین هفته به ویترین زمان‌یار اضافه شده‌اند."
          />
          <ProductRail products={fresh} label="جدیدترین ساعت‌های زمان‌یار" />
        </div>
      </section>

      <WhyZamanyar />

      <section className="section section--sand" id="testimonials">
        <div className="shell">
          <SectionHeading eyebrow="تجربه خرید واقعی" title="نظر مشتریان" />
          <Testimonials />
        </div>
      </section>

      <section className="section" id="blog">
        <div className="shell">
          <SectionHeading
            eyebrow="مجله زمان‌یار"
            title="راهنمای انتخاب ساعت"
            description="چند یادداشت کوتاه که قبل از خرید به کارت می‌آید."
          />
          <BlogPreview />
        </div>
      </section>

      <Newsletter />
    </>
  )
}
