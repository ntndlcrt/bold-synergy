'use client'

import { useRef, useState } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

import SVG from '@/elements/SVG'
import TransitionLink from '@/utils/TransitionLink'

import styles from './Breadcrumb.module.scss'

export default function Breadcrumb({ title, pageTitle, links, isBlack }) {
  const containerRef = useRef(null)
  const headerRef = useRef(null)
  const titleRef = useRef(null)
  const listRef = useRef(null)
  const [isOpen, setIsOpen] = useState(false)
  const [isHidden, setIsHidden] = useState(true)
  const timeline = useRef(null)

  useGSAP(() => {
    gsap.set(listRef.current, {
      clipPath: 'inset(0 0 100% 0)',
      autoAlpha: 0,
    })

    gsap.set(listRef.current.children, {
      y: 32,
      autoAlpha: 0,
    })

    gsap.set(headerRef.current, {
      yPercent: -105,
    })

    const tl = gsap.timeline({
      defaults: { ease: 'transition' },
      paused: true,
    })

    tl.to(listRef.current, {
      autoAlpha: 1,
      duration: 0,
    })
      .to(listRef.current, {
        clipPath: 'inset(0 0 0% 0)',
        duration: 0.6,
      })
      .to(
        listRef.current.children,
        {
          y: 0,
          autoAlpha: 1,
          stagger: 0.1,
          duration: 0.4,
        },
        '<'
      )

    timeline.current = tl

    gsap.to(containerRef.current, {
      scrollTrigger: {
        trigger: '#smooth-content',
        start: 'top top',
        end: 'bottom bottom',
        scrub: true,
        pin: containerRef.current,
        pinSpacing: false,
        pinReparent: true,
        pinType: 'transform',
      },
      top: 0,
    })

    gsap.to(headerRef.current, {
      yPercent: 0,
      scrollTrigger: {
        trigger: '#smooth-content',
        start: `${window.innerHeight} top`,
        end: `${window.innerHeight} top`,
        onEnter: () => setIsHidden(false),
        onLeaveBack: () => setIsHidden(true),
      },
      duration: 0.6,
      ease: 'transition',
    })
  }, [])

  useGSAP(() => {
    if (isHidden) {
      gsap.to(headerRef.current, {
        yPercent: -105,
        duration: 0.6,
        ease: 'transition',
      })
    } else {
      gsap.to(headerRef.current, {
        yPercent: 0,
        duration: 0.6,
        ease: 'transition',
      })
    }
  }, [isHidden])

  useGSAP(() => {
    if (!timeline.current) return

    if (isOpen) {
      timeline.current.play()
    } else {
      timeline.current.reverse()
    }
  }, [isOpen])

  return (
    <div
      ref={containerRef}
      className={`${styles.breadcrumb} ${isBlack ? styles['--black'] : ''}`}
    >
      <div ref={headerRef} className={styles.header}>
        <SVG name="logo-icon" />
        {title && (
          <span
            ref={titleRef}
            onClick={() => {
              setIsOpen(!isOpen)
            }}
          >
            {title}
          </span>
        )}
        <span>/</span>
        {pageTitle && <span>{pageTitle}</span>}
      </div>
      {links && (
        <ul ref={listRef}>
          {links.map((link, index) => (
            <li key={index}>
              <TransitionLink href={TransitionLink.href}>
                {link.title}
              </TransitionLink>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
