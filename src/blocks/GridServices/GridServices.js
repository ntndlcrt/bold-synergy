import Heading from '@/components/Heading'
import LinkArrow from '@/elements/LinkArrow'
import Media from '@/elements/Media'

import styles from './GridServices.module.scss'

export default function GridServices({ uptitle, title, text, link, items }) {
  return (
    <section className={styles.gridServices}>
      <Heading {...{ uptitle, title, text, link }} />
      {items && (
        <ul>
          {items.map((item, index) => (
            <li key={index}>
              <div className={styles.content}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                {item.link && <LinkArrow {...item.link} isWhite />}
              </div>
              <Media src={item.src} />
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}
