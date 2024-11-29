'use client'

import Heading from '@/components/Heading'
import Media from '@/elements/Media'
import LinkArrow from '@/elements/LinkArrow'
import { useStore } from '@/store'

import styles from './GridTeam.module.scss'

export default function GridTeam({ uptitle, title, items }) {
  const { setPopupTeamOpen, setPopupTeamData } = useStore()

  const _handleClick = (item) => {
    setPopupTeamData({ ...item })
    setPopupTeamOpen(true)
  }

  return (
    <section className={styles.gridTeam}>
      <Heading {...{ uptitle, title }} />
      {items && (
        <ul>
          {items.map((item, i) => (
            <li key={i} onClick={() => _handleClick(item)}>
              {item.src && <Media src={item.src} />}
              <div className={styles.content}>
                <h3>{item.name}</h3>
                <span>{item.job}</span>
                <LinkArrow title="View more" isBlack />
              </div>
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}
