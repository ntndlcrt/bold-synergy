import parse from 'html-react-parser'

import Media from '@/elements/Media'

import styles from './ImageText.module.scss'

export default function ImageText({ text, src }) {
  return (
    <section className={styles.imageText}>
      {text && <p>{parse(text)}</p>}
      {src && <Media src={src} />}
    </section>
  )
}
