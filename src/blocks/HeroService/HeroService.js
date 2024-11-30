import parse from 'html-react-parser'

import Media from '@/elements/Media'

import styles from './HeroService.module.scss'

export default function HeroService({ uptitle, title, text, src }) {
  return (
    <section className={styles.heroService}>
      <div className={styles.content}>
        {uptitle && <span>{uptitle}</span>}
        {title && <h1>{parse(title)}</h1>}
        {text && <p>{parse(text)}</p>}
      </div>
      {src && <Media src={src} />}
    </section>
  )
}
