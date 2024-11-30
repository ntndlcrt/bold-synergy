'use client'

import parse from 'html-react-parser'

import SVG from '@/elements/SVG'
import Media from '@/elements/Media'
import LinkArrow from '@/elements/LinkArrow'
import { useStore } from '@/store'

import styles from './PageHelp.module.scss'

export default function PageHelp({
  anchor,
  title,
  contentTop,
  items,
  contentBottom,
}) {
  const { setPopupHelpOpen, setPopupHelpData } = useStore()

  const _handleClick = (item) => {
    setPopupHelpData({ ...item })
    setPopupHelpOpen(true)
  }

  return (
    <div id={anchor ? anchor : ''} className={styles.pageHelp}>
      {title && (
        <h2 className="uptitle">
          <SVG name="logo-icon" />
          <span>{title}</span>
        </h2>
      )}
      {contentTop && <div className={styles.content}>{parse(contentTop)}</div>}
      {items && (
        <ul>
          {items.map((item, i) => (
            <li key={i} onClick={() => _handleClick(item)}>
              <Media src={item?.src} />
              <div className={styles.content}>
                <h3>{item?.title}</h3>
                <p>{item?.text}</p>
                <LinkArrow title="Learn more" />
              </div>
            </li>
          ))}
        </ul>
      )}
      {contentBottom && (
        <div className={styles.content}>{parse(contentBottom)}</div>
      )}
    </div>
  )
}
