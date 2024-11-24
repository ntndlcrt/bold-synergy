import parse from 'html-react-parser'

import SVG from '@/elements/SVG'
import LinkArrow from '@/elements/LinkArrow'

import styles from './Heading.module.scss'

export default function Heading({ uptitle, title, text, link, shrunkText }) {
  return (
    <div
      className={`${styles.heading} ${
        shrunkText ? styles['--shrunk-text'] : ''
      }`}
    >
      {uptitle && (
        <h2 className="uptitle">
          <SVG name="logo-icon" />
          <span>{uptitle}</span>
        </h2>
      )}
      {title && <p className="intro">{parse(title)}</p>}
      {text && <p>{parse(text)}</p>}
      {link && <LinkArrow {...link} />}
    </div>
  )
}
