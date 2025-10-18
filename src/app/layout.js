import './globals.css'
import { colors } from '../config/colors'

const metaTitle = "Scott's Development - Michigan Enterprise Web Development Agency"
const metaDescription = "Scott's Development is a Michigan-based enterprise web development agency specializing in legacy system modernization, HIPAA-compliant healthcare applications, and secure, scalable web solutions. We deliver cloud-native applications, AI-powered automation, and compliance-ready platforms for government, healthcare, and enterprise organizations."
const ogDescription = "Michigan enterprise web development agency delivering secure, scalable, and HIPAA-compliant web applications. Specializing in legacy system modernization, cloud-native applications, AI-powered automation, and compliance-ready platforms, Scott's Development helps government, healthcare, and enterprise organizations achieve long-term growth and performance."

export const metadata = {
  title: metaTitle,
  description: metaDescription,
  openGraph: {
    title: metaTitle,
    description: ogDescription,
    type: "website",
  },
}
  

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`antialiased ${colors.bg.primary} ${colors.text.body}`}>
        {children}
      </body>
    </html>
  )
}
