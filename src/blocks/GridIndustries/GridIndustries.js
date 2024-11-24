import Heading from '@/components/Heading'
import LinkArrow from '@/elements/LinkArrow'

import styles from './GridIndustries.module.scss'

export default function GridIndustries({ uptitle, title, text, link, items }) {
  return (
    <section className={styles.gridIndustries}>
      <Heading {...{ uptitle, title, text, link }} />
      {items && (
        <ul>
          {items.map((item, index) => (
            <li key={index}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              {item.link && <LinkArrow {...item.link} />}
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}
