'use client'

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useRef, useState, useEffect } from 'react'

import Media from '@/elements/Media'
import LinkArrow from '@/elements/LinkArrow'
import TextLines from '@/elements/TextLines'

import styles from './HeroSlider.module.scss'

export default function HeroSlider({ items }) {
  const [active, setActive] = useState(0)
  const sliderRef = useRef(null)
  const paginationRef = useRef(null)
  const autoplayRef = useRef(null)
  const timelineRef = useRef(null)

  // Function to handle slide transition
  const _goToSlide = (index) => {
    // Clear existing timeline if any
    if (timelineRef.current) {
      timelineRef.current.kill()
    }

    // Create new timeline
    const tl = gsap.timeline()

    // Animate slider position
    tl.to(sliderRef.current, {
      x: `${-100 * index}%`,
      duration: 1,
      ease: 'power2.inOut',
    })

    // Update active state
    setActive(index)

    // Store timeline reference
    timelineRef.current = tl
  }

  // Handle next slide
  const _nextSlide = () => {
    const nextIndex = active === items.length - 1 ? 0 : active + 1
    _goToSlide(nextIndex)
  }

  // Handle pagination click
  const _handlePaginationClick = (index) => {
    _resetAutoplay()
    _goToSlide(index)
  }

  // Reset autoplay
  const _resetAutoplay = () => {
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current)
    }
    autoplayRef.current = setInterval(_nextSlide, 6000)
  }

  // Initialize GSAP animations and autoplay
  useGSAP(() => {
    // Set initial position
    gsap.set(sliderRef.current, {
      x: 0,
    })

    // Start autoplay
    _resetAutoplay()

    // Cleanup function
    return () => {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current)
      }
      if (timelineRef.current) {
        timelineRef.current.kill()
      }
    }
  }, []) // Empty dependency array means this runs once on mount

  // Handle cleanup and reset when active slide changes
  useEffect(() => {
    // Reset autoplay whenever active slide changes
    _resetAutoplay()

    return () => {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current)
      }
    }
  }, [active])

  return (
    <section className={styles.heroSlider}>
      {items && (
        <>
          <ul ref={sliderRef}>
            {items.map((item, index) => (
              <li
                key={index}
                className={active === index ? styles['--active'] : ''}
              >
                <Media src={item.src} />
                <div className={styles.content}>
                  <h2>{item.title}</h2>
                  <TextLines>{item.text}</TextLines>
                  {item.link && <LinkArrow {...item.link} isCream />}
                </div>
              </li>
            ))}
          </ul>
          <ul ref={paginationRef} className={styles.pagination}>
            {items.map((item, index) => (
              <li
                key={index}
                className={active === index ? styles['--active'] : ''}
                onClick={() => _handlePaginationClick(index)}
              >
                <span>{item.title}</span>
              </li>
            ))}
          </ul>
        </>
      )}
    </section>
  )
}
