import './globals.css'
import { Bricolage_Grotesque, Inter } from 'next/font/google'
import Script from 'next/script'
import Header from './components/Header'
import Footer from './components/Footer'
import { owner } from '../content/site'

const bricolage = Bricolage_Grotesque({
  subsets: ['latin'],
  variable: '--font-bricolage',
  display: 'swap',
  axes: ['opsz', 'wdth'],
})
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const siteName = "Scott's Development"
const siteUrl = 'https://scottsdevelopment.com'
const metaTitle = "Scott's Development | Websites and small software for local businesses"
const metaDescription =
  'Websites and small software for local businesses from a full-stack engineer in Ferndale, Michigan: fixed-scope builds, quick technical engagements, and a monthly care plan with hosting and analytics.'

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: metaTitle,
    template: `%s | ${siteName}`,
  },
  description: metaDescription,
  icons: {
    icon: '/icon.png',
    apple: '/icon.png',
  },
  keywords: [
    'Scott’s Development',
    'Ferndale web developer',
    'Next.js static sites',
    'FastAPI PostgreSQL',
    'AWS S3 CloudFront hosting',
    'data pipelines and scrapers',
    'GA4 Search Console reporting',
    'website care plan',
  ],
  authors: [{ name: siteName }],
  creator: siteName,
  publisher: siteName,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName,
    title: metaTitle,
    description: metaDescription,
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: `${siteName}`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: metaTitle,
    description: metaDescription,
    images: ['/og-image.png'],
    creator: '@scottsdevelopment',
  },
  alternates: {
    canonical: siteUrl,
  },
  category: 'technology',
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: '#F5F7F3',
}

export default function RootLayout({ children }) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: siteName,
    image: `${siteUrl}/icon.png`,
    url: siteUrl,
    email: owner.email,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Ferndale',
      addressRegion: 'MI',
      postalCode: '48220',
      addressCountry: 'US',
    },
    founder: {
      '@type': 'Person',
      name: owner.name,
      url: owner.github,
      knowsAbout: [
        'Web Development',
        'Data Pipelines',
        'AWS Infrastructure',
        'Web Analytics and SEO',
      ],
    },
    description: metaDescription,
  }

  return (
    <html lang="en" className={`${bricolage.variable} ${inter.variable}`}>
      <head>
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="antialiased bg-paper text-ink font-sans">
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-E6DYMZXL6X"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-E6DYMZXL6X');
          `}
        </Script>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-ink focus:px-4 focus:py-2 focus:text-paper"
        >
          Skip to content
        </a>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
