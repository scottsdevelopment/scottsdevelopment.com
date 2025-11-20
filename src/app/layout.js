import './globals.css'
import { colors } from '../config/colors'
import { Outfit, Inter } from 'next/font/google'
import Script from 'next/script'

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
const metaTitle = `${siteName} | Detroit Enterprise Web Development & Fractional CTO`
const metaDescription = "Detroit-based enterprise web development agency specializing in legacy system modernization, custom web applications, workflow automation, and fractional CTO services. We deliver secure, scalable solutions for government, healthcare, and high-growth businesses."

export const metadata = {
  metadataBase: new URL(siteUrl),

  // Basic metadata
  title: {
    default: metaTitle,
    template: `%s | ${siteName}`,
  },
  description: metaDescription,

  // Keywords
  keywords: [
    "Detroit Web Development",
    "Enterprise Web Applications",
    "Legacy System Modernization",
    "Fractional CTO",
    "Staff Engineering",
    "Next.js Development",
    "React Development",
    "Healthcare Software Development",
    "HIPAA Compliant Applications",
    "Workflow Automation",
    "Custom Web Solutions",
    "Michigan Web Development",
    "Ferndale Web Developer",
    "Enterprise Software Consulting",
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
        alt: `${siteName} - Enterprise Web Development`,
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
  // Structured Data (JSON-LD) for Organization
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteName,
    url: siteUrl,
    logo: `${siteUrl}/logo.png`,
    description: metaDescription,
    address: {
      '@type': 'PostalAddress',
      streetAddress: '***REMOVED***',
      addressLocality: 'Ferndale',
      addressRegion: 'MI',
      postalCode: '48220',
      addressCountry: 'US',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+1-***REMOVED***',
      contactType: 'Customer Service',
      email: 'scott@scottsdevelopment.com',
      areaServed: ['US', 'Detroit', 'Michigan'],
      availableLanguage: 'English',
    },
    sameAs: [
      // Add your social media profiles here
      // 'https://twitter.com/scottsdevelopment',
      // 'https://linkedin.com/company/scottsdevelopment',
      // 'https://github.com/scottsdevelopment',
    ],
    areaServed: {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: '42.4608',
        longitude: '-83.1347',
      },
      geoRadius: '50000', // 50km radius
    },
  }

  return (
    <html lang="en">
      <head>
        {/* Structured Data */}
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
      </head>
      <body className={`antialiased ${colors.bg.primary} ${colors.text.body} ${outfit.variable} ${inter.variable} font-sans`}>
        {children}
      </body>
    </html>
  )
}
