import Link from 'next/link'

import SVG from '@/elements/SVG'

export default function LinkArrow({ href, title }) {
  return (
    <Link href={href} className="link-arrow">
      <SVG name="arrow-right" />
      <span>{title}</span>
    </Link>
  )
}
