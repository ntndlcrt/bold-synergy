import Link from 'next/link'

import SVG from '@/elements/SVG'
import TransitionLink from '@/utils/TransitionLink'

export default function LinkArrow({ href, title, isCream, isWhite, isBlack }) {
  if (href) {
    return (
      <TransitionLink
        href={href}
        classes={`link-arrow ${isCream ? '--cream' : ''} ${
          isWhite ? '--white' : ''
        } ${isBlack ? '--black' : ''}`}
      >
        <SVG name="arrow-right" />
        <span>{title}</span>
      </TransitionLink>
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
