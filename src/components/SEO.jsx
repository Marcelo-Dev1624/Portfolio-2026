import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'

const SITE_URL = 'https://marcelodev.es'
const DEFAULT_OG_IMAGE = `${SITE_URL}/images/og-picture.jpg`
const SITE_NAME = 'Marcelo Villalobos — Portfolio'

/**
 * Per-route SEO helmet. Sets <title>, meta description, canonical, OG, Twitter,
 * hreflang alternates, and an optional JSON-LD blob per page.
 *
 * Props:
 *   title       — page title (will be suffixed with site name unless `noSuffix`)
 *   description — meta description (~150-160 chars)
 *   path        — pathname like "/projects/puntus" (used for canonical + alternates)
 *   image       — absolute or root-relative image URL for OG/Twitter
 *   type        — og:type, default "website" (use "article" for projects)
 *   noSuffix    — if true, use the raw title with no " — Portfolio" suffix
 *   jsonLd      — optional structured-data object to embed as <script type="application/ld+json">
 *   noindex     — set robots to noindex,nofollow
 */
export default function SEO({
  title,
  description,
  path = '/',
  image,
  type = 'website',
  noSuffix = false,
  jsonLd,
  noindex = false,
}) {
  const { i18n } = useTranslation()
  const lang = i18n.language?.startsWith('es') ? 'es' : 'en'
  const locale = lang === 'es' ? 'es_ES' : 'en_US'

  const fullTitle = noSuffix ? title : `${title} | ${SITE_NAME}`
  const url = `${SITE_URL}${path}`
  const ogImage = image
    ? (image.startsWith('http') ? image : `${SITE_URL}${image}`)
    : DEFAULT_OG_IMAGE

  return (
    <Helmet>
      <html lang={lang} />
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      {noindex && <meta name="robots" content="noindex, nofollow" />}

      {/* Language alternates */}
      <link rel="alternate" hrefLang="en" href={url} />
      <link rel="alternate" hrefLang="es" href={url} />
      <link rel="alternate" hrefLang="x-default" href={url} />

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:locale" content={locale} />
      <meta property="og:locale:alternate" content={locale === 'en_US' ? 'es_ES' : 'en_US'} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {jsonLd && (
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      )}
    </Helmet>
  )
}
