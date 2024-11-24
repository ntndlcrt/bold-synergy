import Link from 'next/link'

import SVG from '@/elements/SVG'

export default function LinkArrow({ href, title, isCream, isWhite }) {
  return (
    <Link
      href={href}
      className={`link-arrow ${isCream ? '--cream' : ''} ${
        isWhite ? '--white' : ''
      }`}
    >
      <SVG name="arrow-right" />
      <span>{title}</span>
    </Link>
  )
}
