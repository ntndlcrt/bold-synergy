import parse from 'html-react-parser'

import styles from './PageIntro.module.scss'

export default function PageIntro({ bigGap = false, content }) {
  return (
    <div className={`${styles.pageIntro} ${bigGap ? styles['--big-gap'] : ''}`}>
      {content && parse(content)}
    </div>
  )
}
