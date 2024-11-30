import parse from 'html-react-parser'

import SVG from '@/elements/SVG'

import styles from './PageText.module.scss'

export default function PageText({ anchor, title, content }) {
  return (
    <div id={anchor ? anchor : ''} className={styles.pageText}>
      {title && (
        <h2 className="uptitle">
          <SVG name="logo-icon" />
          <span>{title}</span>
        </h2>
      )}
      <div className={styles.content}>{content && parse(content)}</div>
    </div>
  )
}
