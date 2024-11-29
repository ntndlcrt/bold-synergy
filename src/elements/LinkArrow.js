import Link from 'next/link'

import SVG from '@/elements/SVG'

export default function LinkArrow({ href, title, isCream, isWhite, isBlack }) {
  if (href) {
    return (
      <Link
        href={href}
        className={`link-arrow ${isCream ? '--cream' : ''} ${
          isWhite ? '--white' : ''
        } ${isBlack ? '--black' : ''}`}
      >
        <SVG name="arrow-right" />
        <span>{title}</span>
      </Link>
    )
  } else {
    return (
      <div
        className={`link-arrow ${isCream ? '--cream' : ''} ${
          isWhite ? '--white' : ''
        } ${isBlack ? '--black' : ''}`}
      >
        <SVG name="arrow-right" />
        <span>{title}</span>
      </div>
    )
  }
}
