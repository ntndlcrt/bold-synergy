import parse from 'html-react-parser'

import Media from '@/elements/Media'
import LinkArrow from '@/elements/LinkArrow'
import SVG from '@/elements/SVG'

import styles from './ImageTextFullscreen.module.scss'

export default function ImageTextFullscreen({ src, text, link }) {
  return (
    <section className={styles.imageTextFullscreen}>
      <div className={styles.content}>
        <SVG name="logo-icon" />
        {text && <p>{parse(text)}</p>}
        {link && <LinkArrow {...link} isCream />}
      </div>
      {src && <Media src={src} />}
    </section>
  )
}
