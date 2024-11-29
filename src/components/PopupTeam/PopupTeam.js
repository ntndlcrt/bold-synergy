'use client'

import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { useRef, useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import parse from 'html-react-parser'

import { useStore } from '@/store'
import SVG from '@/elements/SVG'

import styles from './PopupTeam.module.scss'

export default function PopupTeam() {
  const { popupTeamOpen, setPopupTeamOpen, popupTeamData } = useStore()
  const [timeline, setTimeline] = useState(null)
  const [data, setData] = useState(null)
  const popupRef = useRef(null)
  const overlayRef = useRef(null)
  const innerRef = useRef(null)

  useEffect(() => {
    if (popupTeamData) {
      setData(popupTeamData)
    }
  }, [popupTeamData])

  useGSAP(() => {
    gsap.set(overlayRef.current, { autoAlpha: 0 })
    gsap.set(innerRef.current, { xPercent: 100 })

    const tl = gsap.timeline({
      defaults: { duration: 0.8, ease: 'transition' },
      paused: true,
    })

    tl.to(overlayRef.current, { autoAlpha: 1 }).to(
      innerRef.current,
      {
        xPercent: 0,
      },
      '<+0.2'
    )

    setTimeline(tl)
  }, [])

  useGSAP(() => {
    if (!timeline) return

    if (popupTeamOpen) {
      timeline.play()
    } else {
      timeline.reverse()
    }
  }, [popupTeamOpen])

  return (
    <div ref={popupRef} id="popup-team" className={styles.popupTeam}>
      <div ref={overlayRef} className={styles.overlay} />
      <div ref={innerRef} className={styles.inner}>
        <div className={styles.header}>
          <div className={styles.breadcrumb}>
            <Link href="/about-us/">About us</Link>
            <span>/</span>
            <span>The team</span>
          </div>
          <button
            onClick={() => {
              setPopupTeamOpen(false)
            }}
          >
            <SVG name="cross" />
          </button>
        </div>
        <div className={styles.content}>
          <picture>
            <Image src={data?.src} fill alt="" />
          </picture>
          <div className={styles.text}>
            <h3>{data?.name}</h3>
            <span>{data?.job}</span>
            <div id="popup-team-content">{parse(data?.content ?? '')}</div>
          </div>
        </div>
      </div>
    </div>
  )
}
