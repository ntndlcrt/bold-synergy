'use client'

import { useRef, useState } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

import { useStore } from '@/store'
import SVG from '@/elements/SVG'
import TransitionLink from '@/utils/TransitionLink'

import styles from './Search.module.scss'

export default function Search({ results }) {
  const { searchOpen, setSearchOpen } = useStore()
  const searchRef = useRef(null)
  const [timeline, setTimeline] = useState(null)
  const [filteredResults, setFilteredResults] = useState([])

  useGSAP(() => {
    gsap.set(searchRef.current, { yPercent: -105 })

    const tl = gsap.timeline({
      defaults: { duration: 0.8, ease: 'transition' },
      paused: true,
    })

    tl.to(searchRef.current, {
      yPercent: 0,
    })

    setTimeline(tl)
  }, [])

  useGSAP(() => {
    if (!timeline) return

    if (searchOpen) {
      timeline.play()
    } else {
      timeline.reverse()
    }
  }, [searchOpen])

  const _handleChange = (e) => {
    const query = e.target.value.toLowerCase()
    const filteredResults = results.filter((result) =>
      result.title.toLowerCase().includes(query)
    )

    setFilteredResults(filteredResults.slice(0, 6))
  }

  return (
    <div ref={searchRef} className={styles.search}>
      <div className={styles.input}>
        <SVG name="search" />
        <input
          type="text"
          placeholder="Type here..."
          onChange={_handleChange}
        />
        <SVG
          name="cross"
          onClickEvent={() => {
            setSearchOpen(false)
          }}
        />
      </div>
      {filteredResults.length > 0 && (
        <ul>
          {filteredResults.map((result, index) => (
            <li key={index}>
              <TransitionLink
                href={result.href}
                onClickEvent={() => setSearchOpen(false)}
              >
                {result.title}
              </TransitionLink>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
