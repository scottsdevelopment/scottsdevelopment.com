import './globals.css'
import { colors } from '../config/colors'
import { Outfit, Inter } from 'next/font/google'
import Script from 'next/script'
import Header from './components/Header'
import Footer from './components/Footer'

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
})
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const siteName = "Scott's Development"
const siteUrl = 'https://scottsdevelopment.com'
const metaTitle = "Principal Architect & Fractional CTO | Scott’s Development | Ferndale"
const metaDescription = "Principal Architect & Developer providing revenue-focused technical leadership. 10-20 hour fractional engagements for Metro Detroit businesses. Scale faster, rescue stalled projects, and drive impact."

export const metadata = {
  metadataBase: new URL(siteUrl),

  // Basic metadata
  title: {
    default: metaTitle,
    template: `%s | ${siteName}`,
  },
  description: metaDescription,
  icons: {
    icon: '/icon.png',
    apple: '/icon.png',
  },

  // Keywords
  keywords: [
    "Principal software architect Detroit",
    "Fractional CTO Ferndale",
    "Revenue-driven development",
    "Asynchronous technical leadership",
    "Web Development Detroit",
    "8 Mile Woodward Developer",
    "AI Business Automation",
    "Software Security Audit Michigan",
    "Enterprise Web Applications",
    "Legacy System Modernization",
    "Scott’s Development",
  ],

  // Authors
  authors: [{ name: "Scott's Development" }],
  creator: "Scott's Development",
  publisher: "Scott's Development",

  // Robots
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

  // Open Graph
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName: siteName,
    title: metaTitle,
    description: metaDescription,
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: `${siteName} - Principal Architect & Developer`,
      },
    ],
  },

  // Twitter Card
  twitter: {
    card: 'summary_large_image',
    title: metaTitle,
    description: metaDescription,
    images: ['/og-image.png'],
    creator: '@scottsdevelopment',
  },

  // Verification (add your verification codes when available)
  verification: {
    google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
    // bing: 'your-bing-verification-code',
  },

  // Alternate languages (if you add multilingual support)
  alternates: {
    canonical: siteUrl,
  },

  // Category
  category: 'technology',
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0f172a' },
  ],
}

export default function RootLayout({ children }) {
  // Structured Data (JSON-LD) for ProfessionalService
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Scott’s Development",
    "image": "https://scottsdevelopment.com/og-image.jpg",
    "url": "https://scottsdevelopment.com",
    "telephone": "+1-***REMOVED***",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "8 Mile & Woodward",
      "addressLocality": "Ferndale",
      "addressRegion": "MI",
      "postalCode": "48220",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 42.4433,
      "longitude": -83.1389
    },
    "founder": {
      "@type": "Person",
      "name": "Scott",
      "jobTitle": "Principal Architect & Developer",
      "knowsAbout": ["Web Development", "Legacy Modernization", "Software Architecture", "GEO", "AI Automation"]
    },
    "description": "Principal Architect & Developer providing revenue-focused technical leadership. 10-20 hour fractional engagements for Metro Detroit businesses."
  }

  return (
    <html lang="en">
      <head>
        {/* Structured Data */}
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>
      <body className={`antialiased ${colors.bg.primary} ${colors.text.body} ${outfit.variable} ${inter.variable} font-sans`}>
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-E6DYMZXL6X"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
        >
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-E6DYMZXL6X');
          `}
        </Script>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
