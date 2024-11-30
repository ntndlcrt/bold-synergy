'use client'

import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { useRef, useState, useEffect } from 'react'
import parse from 'html-react-parser'

import LinkArrow from '@/elements/LinkArrow'
import { useStore } from '@/store'
import SVG from '@/elements/SVG'
import TransitionLink from '@/utils/TransitionLink'

import styles from './PopupHelp.module.scss'

export default function PopupHelp() {
  const { popupHelpOpen, setPopupHelpOpen, popupHelpData } = useStore()
  const [timeline, setTimeline] = useState(null)
  const [data, setData] = useState(null)
  const popupRef = useRef(null)
  const overlayRef = useRef(null)
  const innerRef = useRef(null)

  useEffect(() => {
    if (popupHelpData) {
      setData(popupHelpData)
    }
  }, [popupHelpData])

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

    if (popupHelpOpen) {
      timeline.play()
    } else {
      timeline.reverse()
    }
  }, [popupHelpOpen])

  return (
    <div ref={popupRef} id="popup-help" className={styles.popupHelp}>
      <div ref={overlayRef} className={styles.overlay} />
      <div ref={innerRef} className={styles.inner}>
        <div className={styles.header}>
          <div className={styles.breadcrumb}>
            {data?.breadcrumb &&
              data.breadcrumb.map((item, i) => (
                <>
                  <TransitionLink href={item.href}>{item.title}</TransitionLink>
                  <span>/</span>
                </>
              ))}
            <span>How can we help you ?</span>
          </div>
          <button
            onClick={() => {
              setPopupHelpOpen(false)
            }}
          >
            <SVG name="cross" />
          </button>
        </div>
        <div className={styles.content}>
          <div className={styles.text}>
            <div className={styles.title}>
              <SVG name="logo-icon" />
              <span>How can we help you with</span>
            </div>
            {parse(data?.content ?? '')}
            <div className={styles.bottom}>
              <span>Convinced ?</span>
              <LinkArrow title="Contact us to start your journey" href="#" />
            </div>
          </div>
          <aside>
            <span>See also</span>
            {data?.links && (
              <ul>
                {data.links.map((link, i) => (
                  <li key={i}>
                    <TransitionLink href={link.href ? link.href : '#'}>
                      {link.title}
                    </TransitionLink>
                  </li>
                ))}
              </ul>
            )}
          </aside>
        </div>
      </div>
    </div>
  )
}
