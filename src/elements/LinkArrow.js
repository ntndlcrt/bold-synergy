import Link from 'next/link'

import SVG from '@/elements/SVG'

export default function LinkArrow({ href, title, isCream }) {
  return (
    <Link href={href} className={`link-arrow ${isCream ? '--cream' : ''}`}>
      <SVG name="arrow-right" />
      <span>{title}</span>
    </Link>
  )
}
