import Image from 'next/image'

export default function LogoIcon({ size = 'w-10 h-10', className = '' }) {
  // Remove w- and h- classes from size string to get dimensions if needed, 
  // but simpler to just let the parent control size or use standard size.
  // We'll use the size class on a wrapper div and fill the image.

  return (
    <div className={`relative ${size} ${className} flex-shrink-0`}>
      <Image
        src="/logo.png"
        alt="Scott's Development Logo"
        fill
        className="object-contain" // Preserves aspect ratio
        sizes="40px"
        priority
      />
    </div>
  )
}
