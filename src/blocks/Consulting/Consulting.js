import Image from 'next/image'

import Heading from '@/components/Heading'

import styles from './Consulting.module.scss'

export default function Consulting({
  uptitle,
  title,
  text,
  link,
  subtitle,
  items,
}) {
  return (
    <section className={styles.consulting}>
      <Heading {...{ uptitle, title, text, link }} />
      {subtitle && <p className="intro">{subtitle}</p>}
      {items && (
        <ul>
          {items.map((item, index) => (
            <li key={index}>
              <div className={styles.icon}>
                <Image src={item.icon} alt={item.title} fill />
              </div>
              {item.title && (
                <div className={styles.title}>
                  <h3>{item.title}</h3>
                </div>
              )}
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}
