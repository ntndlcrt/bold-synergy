import Heading from '@/components/Heading'

import styles from './Text.module.scss'

export default function Text({ uptitle, title, text, link }) {
  return (
    <section className={styles.text}>
      <Heading {...{ uptitle, title, text, link }} />
    </section>
  )
}
