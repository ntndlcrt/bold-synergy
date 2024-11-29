import Heading from '@/components/Heading'

import styles from './List.module.scss'

export default function List({ uptitle, title, items }) {
  return (
    <section className={styles.list}>
      <Heading {...{ uptitle, title }} />
      {items && (
        <ul>
          {items.map((item, i) => (
            <li key={i}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}
