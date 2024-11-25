import Media from '@/elements/Media'

import styles from './Hero.module.scss'

export default function Hero({ uptitle, title, src }) {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        {uptitle && <h1>{uptitle}</h1>}
        {title && <p>{title}</p>}
      </div>
      {src && <Media src={src} />}
    </section>
  )
}
