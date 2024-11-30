import parse from 'html-react-parser'

import Media from '@/elements/Media'

import styles from './HeroIndustry.module.scss'

export default function HeroIndustry({ uptitle, title, text, src }) {
  return (
    <section className={styles.heroIndustry}>
      {uptitle && <span>{uptitle}</span>}
      {title && <h1>{parse(title)}</h1>}
      {text && <p>{parse(text)}</p>}
      {src && <Media src={src} />}
    </section>
  )
}
