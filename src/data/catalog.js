/* کاتالوگ زمان‌یار — داده‌های نمایشی فروشگاه.
   قیمت‌ها به تومان و در محدوده واقعی ساعت میان‌رده. */

export const CATEGORIES = [
  {
    slug: 'men',
    name: 'مردانه',
    caption: 'خط‌های استوار و بندهای چرمی',
    count: 42,
    art: { shape: 'round', case: 'steel', dial: 'ivory', strap: 'espresso', markers: 'batons' },
  },
  {
    slug: 'women',
    name: 'زنانه',
    caption: 'قاب‌های باریک و رنگ‌های گرم',
    count: 37,
    art: { shape: 'slim', case: 'rose', dial: 'cream', strap: 'sand', markers: 'dots' },
  },
  {
    slug: 'sport',
    name: 'اسپرت',
    caption: 'مقاوم، سبک و ضدآب',
    count: 28,
    art: { shape: 'cushion', case: 'graphite', dial: 'taupe', strap: 'clay', markers: 'batons' },
  },
  {
    slug: 'classic',
    name: 'کلاسیک',
    caption: 'ساده، دقیق و همیشه‌مُد',
    count: 51,
    art: { shape: 'round', case: 'bronze', dial: 'ivory', strap: 'cognac', markers: 'batons' },
  },
  {
    slug: 'smart',
    name: 'هوشمند',
    caption: 'سلامت، پیام و باتری شارژی',
    count: 19,
    art: { shape: 'cushion', case: 'graphite', dial: 'espresso', strap: 'clay', markers: 'dots' },
  },
]

export const PRODUCTS = [
  {
    id: 'p1',
    slug: 'gen5-smart',
    name: 'ساعت هوشمند نسل پنجم',
    line: 'GEN 5',
    brand: 'ZAMANYAR',
    price: 8450000,
    oldPrice: 9300000,
    rating: 4.8,
    reviews: 214,
    category: 'smart',
    badge: 'پرفروش',
    featured: true,
    fresh: true,
    description:
      'نسل پنجم زمان‌یار با نمایشگر روشن همیشه‌روشن، پایش ضربان قلب و خواب، و باتری شارژی که تا ده روز همراهت می‌ماند. بدنه سبک و بند سیلیکون نرم برای استفاده تمام‌روز.',
    specs: {
      برند: 'ZAMANYAR',
      'نوع موومنت': 'هوشمند، باتری شارژی',
      'سایز قاب': '۴۴ میلی‌متر',
      'جنس بند': 'سیلیکون نرم',
      'مقاومت آب': '۵ اتمسفر',
    },
    art: { shape: 'cushion', case: 'graphite', dial: 'espresso', strap: 'clay', markers: 'dots' },
  },
  {
    id: 'p2',
    slug: 'classic-38',
    name: 'ساعت مچی کلاسیک ۳۸',
    line: 'CLASSIC 38',
    brand: 'MERIDIAN',
    price: 5900000,
    rating: 4.7,
    reviews: 132,
    category: 'classic',
    featured: true,
    description:
      'قاب فولادی ۳۸ میلی‌متری با صفحه کرم و اندیس‌های میله‌ای؛ اندازه‌ای که روی هر مچی می‌نشیند و با هر لباسی هماهنگ می‌شود.',
    specs: {
      برند: 'MERIDIAN',
      'نوع موومنت': 'کوارتز سوئیسی',
      'سایز قاب': '۳۸ میلی‌متر',
      'جنس بند': 'چرم طبیعی',
      'مقاومت آب': '۳ اتمسفر',
    },
    art: { shape: 'round', case: 'steel', dial: 'ivory', strap: 'espresso', markers: 'batons' },
  },
  {
    id: 'p3',
    slug: 'leather-cognac',
    name: 'ساعت چرمی قهوه‌ای',
    line: 'HERITAGE',
    brand: 'KAVO',
    price: 3250000,
    oldPrice: 3700000,
    rating: 4.5,
    reviews: 88,
    category: 'men',
    featured: true,
    description:
      'بند چرم دست‌دوز به رنگ عسل و صفحه‌ای ساده بدون تاریخ؛ انتخابی روزمره که با گذر زمان خوش‌رنگ‌تر می‌شود.',
    specs: {
      برند: 'KAVO',
      'نوع موومنت': 'کوارتز',
      'سایز قاب': '۴۰ میلی‌متر',
      'جنس بند': 'چرم دست‌دوز',
      'مقاومت آب': '۳ اتمسفر',
    },
    art: { shape: 'round', case: 'sand', dial: 'cream', strap: 'cognac', markers: 'batons' },
  },
  {
    id: 'p4',
    slug: 'minimal-sand',
    name: 'ساعت مینیمال شنی',
    line: 'LUMEN 01',
    brand: 'SOLARA',
    price: 4100000,
    rating: 4.6,
    reviews: 76,
    category: 'women',
    featured: true,
    description:
      'صفحه‌ای خالی از جزئیات اضافه؛ فقط دو عقربه و دوازده نقطه. سبک، ظریف و مناسب استفاده روزانه.',
    specs: {
      برند: 'SOLARA',
      'نوع موومنت': 'کوارتز',
      'سایز قاب': '۳۴ میلی‌متر',
      'جنس بند': 'چرم نرم',
      'مقاومت آب': '۳ اتمسفر',
    },
    art: { shape: 'slim', case: 'rose', dial: 'cream', strap: 'sand', markers: 'dots' },
  },
  {
    id: 'p5',
    slug: 'sport-chrono',
    name: 'ساعت اسپرت کرونوگراف',
    line: 'TERRA CHRONO',
    brand: 'TERRANO',
    price: 6700000,
    rating: 4.7,
    reviews: 143,
    category: 'sport',
    featured: true,
    description:
      'سه شمارنده کوچک برای زمان‌سنجی، قاب مقاوم و شیشه سخت؛ ساخته‌شده برای حرکت و کار روزمره.',
    specs: {
      برند: 'TERRANO',
      'نوع موومنت': 'کوارتز کرونوگراف',
      'سایز قاب': '۴۲ میلی‌متر',
      'جنس بند': 'چرم صنعتی',
      'مقاومت آب': '۵ اتمسفر',
    },
    art: { shape: 'cushion', case: 'steel', dial: 'taupe', strap: 'clay', markers: 'batons' },
  },
  {
    id: 'p6',
    slug: 'automatic-42',
    name: 'ساعت اتوماتیک ۴۲',
    line: 'HALCYON AUTO',
    brand: 'HALCYON',
    price: 7900000,
    oldPrice: 8600000,
    rating: 4.9,
    reviews: 97,
    category: 'classic',
    featured: true,
    badge: 'ویژه',
    description:
      'موومنت اتوماتیک با ذخیره انرژی چهل ساعت؛ عقربه ثانیه‌شمار روان و پشت شیشه‌ای که کارکرد موتور را نشان می‌دهد.',
    specs: {
      برند: 'HALCYON',
      'نوع موومنت': 'اتوماتیک',
      'سایز قاب': '۴۲ میلی‌متر',
      'جنس بند': 'چرم طبیعی',
      'مقاومت آب': '۵ اتمسفر',
    },
    art: { shape: 'round', case: 'bronze', dial: 'ivory', strap: 'espresso', markers: 'batons' },
  },
  {
    id: 'p7',
    slug: 'quartz-everyday',
    name: 'ساعت کوارتز روزمره',
    line: 'DAILY 36',
    brand: 'LUMEN',
    price: 2450000,
    rating: 4.4,
    reviews: 205,
    category: 'men',
    featured: true,
    description:
      'سبک‌ترین انتخاب زمان‌یار؛ قاب باریک، صفحه شنی و بند چرمی نرم برای استفاده هر روز.',
    specs: {
      برند: 'LUMEN',
      'نوع موومنت': 'کوارتز',
      'سایز قاب': '۳۶ میلی‌متر',
      'جنس بند': 'چرم نرم',
      'مقاومت آب': '۳ اتمسفر',
    },
    art: { shape: 'slim', case: 'sand', dial: 'sand', strap: 'tan', markers: 'batons' },
  },
  {
    id: 'p8',
    slug: 'voss-40',
    name: 'ساعت چرمی وُس',
    line: 'VOSS 40',
    brand: 'VOSS',
    price: 3800000,
    rating: 4.5,
    reviews: 61,
    category: 'men',
    featured: true,
    description:
      'قاب فولادی مات با صفحه خاک‌رُسی و بند قهوه‌ای تیره؛ ترکیبی گرم و آرام برای محیط کار.',
    specs: {
      برند: 'VOSS',
      'نوع موومنت': 'کوارتز',
      'سایز قاب': '۴۰ میلی‌متر',
      'جنس بند': 'چرم طبیعی',
      'مقاومت آب': '۳ اتمسفر',
    },
    art: { shape: 'round', case: 'steel', dial: 'clay', strap: 'espresso', markers: 'batons' },
  },
  {
    id: 'p9',
    slug: 'northline-diver',
    name: 'ساعت اسپرت ضدآب',
    line: 'NORTHLINE DIVER',
    brand: 'NORTHLINE',
    price: 5200000,
    oldPrice: 5800000,
    rating: 4.6,
    reviews: 118,
    category: 'sport',
    fresh: true,
    description:
      'مقاومت آب ده اتمسفر، نشانگر شب‌نما روی عقربه‌ها و قاب چرخان؛ همراه مطمئن سفر و شنا.',
    specs: {
      برند: 'NORTHLINE',
      'نوع موومنت': 'کوارتز',
      'سایز قاب': '۴۳ میلی‌متر',
      'جنس بند': 'سیلیکون',
      'مقاومت آب': '۱۰ اتمسفر',
    },
    art: { shape: 'round', case: 'graphite', dial: 'espresso', strap: 'tan', markers: 'dots' },
  },
  {
    id: 'p10',
    slug: 'solara-02',
    name: 'ساعت مینیمال بژ',
    line: 'SOLARA 02',
    brand: 'SOLARA',
    price: 3600000,
    rating: 4.5,
    reviews: 54,
    category: 'women',
    fresh: true,
    description:
      'قاب گلابی‌رنگ با صفحه بژ و بند هم‌رنگ؛ آرام، روشن و مناسب استفاده روزمره.',
    specs: {
      برند: 'SOLARA',
      'نوع موومنت': 'کوارتز',
      'سایز قاب': '۳۲ میلی‌متر',
      'جنس بند': 'چرم نرم',
      'مقاومت آب': '۳ اتمسفر',
    },
    art: { shape: 'cushion', case: 'rose', dial: 'sand', strap: 'sand', markers: 'dots' },
  },
  {
    id: 'p11',
    slug: 'linea-32',
    name: 'ساعت زنانه باریک',
    line: 'LINEA 32',
    brand: 'MERIDIAN',
    price: 4650000,
    rating: 4.8,
    reviews: 69,
    category: 'women',
    fresh: true,
    badge: 'جدید',
    description:
      'قاب ۳۲ میلی‌متری با ضخامت کم و بند باریک خاک‌رُسی؛ ظرافتی که زیر آستین هم دیده می‌شود.',
    specs: {
      برند: 'MERIDIAN',
      'نوع موومنت': 'کوارتز',
      'سایز قاب': '۳۲ میلی‌متر',
      'جنس بند': 'چرم باریک',
      'مقاومت آب': '۳ اتمسفر',
    },
    art: { shape: 'slim', case: 'rose', dial: 'cream', strap: 'clay', markers: 'dots' },
  },
  {
    id: 'p12',
    slug: 'grand-41',
    name: 'ساعت کلاسیک رومی',
    line: 'GRAND 41',
    brand: 'HALCYON',
    price: 6150000,
    rating: 4.7,
    reviews: 84,
    category: 'classic',
    fresh: true,
    description:
      'صفحه کرم با اندیس‌های دقیق و قاب فولادی صیقلی؛ ساعتی که سال‌ها روی مچ می‌ماند.',
    specs: {
      برند: 'HALCYON',
      'نوع موومنت': 'اتوماتیک',
      'سایز قاب': '۴۱ میلی‌متر',
      'جنس بند': 'چرم طبیعی',
      'مقاومت آب': '۵ اتمسفر',
    },
    art: { shape: 'round', case: 'steel', dial: 'cream', strap: 'cognac', markers: 'batons' },
  },
]

export const TRUST_ITEMS = [
  { icon: 'shield', title: 'ضمانت اصالت', caption: 'کارت ضمانت و فاکتور رسمی' },
  { icon: 'truck', title: 'ارسال سریع', caption: 'ارسال رایگان بالای ۳ میلیون' },
  { icon: 'return', title: '۷ روز ضمانت بازگشت', caption: 'بازگشت بی‌قید و شرط کالا' },
  { icon: 'headset', title: 'پشتیبانی واقعی', caption: 'مشاوره تلفنی تا انتخاب نهایی' },
]

export const REASONS = [
  {
    icon: 'target',
    title: 'انتخاب دقیق',
    text: 'از میان صدها مدل، فقط ساعت‌هایی را می‌آوریم که موومنت سالم، قاب بی‌خط‌وخش و قطعات قابل تعمیر دارند.',
  },
  {
    icon: 'tag',
    title: 'قیمت منصفانه',
    text: 'بدون واسطه خرید می‌کنیم و قیمت را شفاف روی هر محصول می‌نویسیم؛ تخفیف‌ها هم واقعی است، نه تزئینی.',
  },
  {
    icon: 'chat',
    title: 'مشاوره واقعی',
    text: 'قبل از خرید می‌توانی با کارشناس ما حرف بزنی؛ اندازه مچ، سلیقه و بودجه‌ات را می‌پرسیم و صادقانه راهنمایی می‌کنیم.',
  },
]

export const TESTIMONIALS = [
  {
    name: 'مریم رضایی',
    city: 'تهران',
    rating: 5,
    text: 'قبل از خرید تماس گرفتم و اندازه مچم را با هم چک کردیم. ساعتی که رسید دقیقاً همان بود که توصیف کردند، حتی رنگ بندش گرم‌تر از عکس‌ها بود.',
  },
  {
    name: 'امیر کاظمی',
    city: 'اصفهان',
    rating: 5,
    text: 'بسته‌بندی خیلی تمیز بود و کارت ضمانت داخل جعبه گذاشته بودند. ساعت اتوماتیکی که گرفتم دو ماه است بدون تنظیم دقیق کار می‌کند.',
  },
  {
    name: 'نگار سعیدی',
    city: 'شیراز',
    rating: 4,
    text: 'برای هدیه می‌خواستم و راهنمایی‌شان واقعاً کمک کرد؛ می‌توانستم گران‌تر بفروشند ولی مدل مناسب‌تری پیشنهاد دادند.',
  },
]

export const POSTS = [
  {
    index: '۰۱',
    title: 'چطور سایز ساعت مناسب را انتخاب کنیم؟',
    excerpt:
      'قطر قاب باید با پهنای مچ هماهنگ باشد؛ سه اندازه کاربردی و روش ساده اندازه‌گیری در خانه.',
    readTime: '۵ دقیقه مطالعه',
    tag: 'راهنمای خرید',
  },
  {
    index: '۰۲',
    title: 'تفاوت ساعت مکانیکی و کوارتز',
    excerpt:
      'یکی با فنر کار می‌کند و یکی با باتری؛ کدام برای استفاده روزمره کم‌دردسرتر است؟',
    readTime: '۷ دقیقه مطالعه',
    tag: 'دانش ساعت',
  },
  {
    index: '۰۳',
    title: 'نگهداری از ساعت',
    excerpt:
      'گرد و غبار، آب و آفتاب سه دشمن ساعت‌اند؛ عادت‌های کوچکی که عمر ساعت را چند سال بیشتر می‌کند.',
    readTime: '۴ دقیقه مطالعه',
    tag: 'نگهداری',
  },
]

export const findProduct = (slug) => PRODUCTS.find((product) => product.slug === slug)

export const featuredProducts = () => PRODUCTS.filter((product) => product.featured)

export const freshProducts = () => PRODUCTS.filter((product) => product.fresh)

export const relatedProducts = (product, limit = 4) =>
  PRODUCTS.filter((item) => item.slug !== product.slug && item.category === product.category)
    .concat(PRODUCTS.filter((item) => item.slug !== product.slug && item.category !== product.category))
    .slice(0, limit)
