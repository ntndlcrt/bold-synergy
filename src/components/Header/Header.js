'use client'

import gsap from 'gsap'
import { useState, useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { usePathname } from 'next/navigation'

import TransitionLink from '@/utils/TransitionLink'
import SVG from '@/elements/SVG'
import { useStore } from '@/store'

import styles from './Header.module.scss'

export default function Header() {
  const industriesRef = useRef(null)
  const servicesRef = useRef(null)
  const [industriesOpen, setIndustriesOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [isCream, setIsCream] = useState(false)
  const pathname = usePathname()
  const { setPopupContactOpen } = useStore()

  useGSAP(() => {
    if (
      pathname.includes('services') ||
      pathname.includes('about-us') ||
      pathname === '/'
    ) {
      setIsCream(true)
    }

    gsap.set([industriesRef.current, servicesRef.current], {
      clipPath: 'inset(0 0 100% 0)',
      autoAlpha: 0,
    })
    gsap.set(
      [
        industriesRef.current.querySelector('span'),
        [...industriesRef.current.querySelectorAll('li')],
        servicesRef.current.querySelector('span'),
        [...servicesRef.current.querySelectorAll('li')],
      ],
      {
        y: 32,
        autoAlpha: 0,
      }
    )
  }, [])

  const _openSubmenu = (ref) => {
    setIsCream(true)

    const tl = gsap.timeline({
      defaults: { ease: 'transition' },
    })

    tl.to(ref.current, {
      autoAlpha: 1,
      duration: 0,
    })
      .to(ref.current, {
        clipPath: 'inset(0 0 0% 0)',
        duration: 0.6,
      })
      .to(
        [
          ref.current.querySelector('span'),
          [...ref.current.querySelectorAll('li')],
        ],
        {
          y: 0,
          autoAlpha: 1,
          stagger: 0.1,
          duration: 0.4,
        },
        '<'
      )
  }

  const _closeSubmenu = (ref) => {
    if (
      !pathname.includes('services') &&
      !pathname.includes('about-us') &&
      pathname !== '/'
    ) {
      setIsCream(false)
    }

    const tl = gsap.timeline({
      defaults: { ease: 'transition' },
    })

    tl.to(
      [
        ref.current.querySelector('span'),
        [...ref.current.querySelectorAll('li')],
      ],
      {
        y: 32,
        autoAlpha: 0,
        stagger: 0.1,
        duration: 0.4,
      }
    )
      .to(
        ref.current,
        {
          clipPath: 'inset(0 0 100% 0)',
          duration: 0.6,
        },
        '<'
      )
      .to(ref.current, {
        autoAlpha: 0,
        duration: 0,
      })
  }

  return (
    <div className={styles.header}>
      <div className={`${styles.inner} ${isCream ? styles['--cream'] : ''}`}>
        <TransitionLink href="/" classes={styles.logo}>
          <SVG name="logo-header" />
        </TransitionLink>
        <ul>
          <li
            className={industriesOpen ? styles['--active'] : ''}
            onClick={() => {
              servicesOpen && _closeSubmenu(servicesRef)
              servicesOpen && setServicesOpen(false)
              industriesOpen
                ? _closeSubmenu(industriesRef)
                : _openSubmenu(industriesRef)
              setIndustriesOpen(!industriesOpen)
            }}
          >
            Industries
          </li>
          <li
            className={servicesOpen ? styles['--active'] : ''}
            onClick={() => {
              industriesOpen && _closeSubmenu(industriesRef)
              industriesOpen && setIndustriesOpen(false)
              servicesOpen
                ? _closeSubmenu(servicesRef)
                : _openSubmenu(servicesRef)
              setServicesOpen(!servicesOpen)
            }}
          >
            Consulting Services
          </li>
          <li>
            <TransitionLink href="/about-us/">About us</TransitionLink>
          </li>
        </ul>
        <div className={styles.right}>
          <button
            onClick={() => {
              setPopupContactOpen(true)
            }}
            className={`button ${!isCream ? '--black' : ''}`}
          >
            <span>Start your journey</span>
          </button>
        </div>
      </div>
      <div ref={industriesRef} className={styles.submenu}>
        <span>Our industries</span>
        <ul>
          <li>
            <TransitionLink href="/industries/industry/">
              Agribusiness
            </TransitionLink>
          </li>
          <li>
            <TransitionLink href="/industries/industry/">
              Communications, Media & Technology
            </TransitionLink>
          </li>
          <li>
            <TransitionLink href="/industries/industry/">
              Consumer Products, Retail & E-Commerce
            </TransitionLink>
          </li>
          <li>
            <TransitionLink href="/industries/industry/">
              Education
            </TransitionLink>
          </li>
          <li>
            <TransitionLink href="/industries/industry/">
              Healthcare
            </TransitionLink>
          </li>
          <li>
            <TransitionLink href="/industries/industry/">
              Travel & Tourism
            </TransitionLink>
          </li>
        </ul>
      </div>
      <div ref={servicesRef} className={styles.submenu}>
        <span>Our consulting services</span>
        <ul>
          <li>
            <TransitionLink href="/services/service/">
              Business Strategy & Transformation
            </TransitionLink>
          </li>
          <li>
            <TransitionLink href="/services/service/">
              Corporate Finance
            </TransitionLink>
          </li>
          <li>
            <TransitionLink href="/services/service/">
              Digital Transformation
            </TransitionLink>
          </li>
          <li>
            <TransitionLink href="/services/service/">
              Growth, Marketing & Sales
            </TransitionLink>
          </li>
          <li>
            <TransitionLink href="/services/service/">
              Mergers and acquisitions
            </TransitionLink>
          </li>
          <li>
            <TransitionLink href="/services/service/">
              Operational Optimization
            </TransitionLink>
          </li>
          <li>
            <TransitionLink href="/services/service/">
              People & Organizational Performance
            </TransitionLink>
          </li>
        </ul>
      </div>
    </div>
  )
}
