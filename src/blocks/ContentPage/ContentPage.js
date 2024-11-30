'use client'

import { useRef, useEffect, useState } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import ScrollSmoother from 'gsap/ScrollSmoother'

import PageIntro from '@/components/PageIntro'
import PageText from '@/components/PageText'
import PageHelp from '@/components/PageHelp'

import styles from './ContentPage.module.scss'

const ContentPage = ({ blocks }) => {
  const [anchors, setAnchors] = useState([])
  const [activeAnchor, setActiveAnchor] = useState('')
  const sectionRef = useRef(null)
  const asideRef = useRef(null)

  useEffect(() => {
    const _collectAnchors = () => {
      const anchorElements = sectionRef.current.querySelectorAll('[id]')
      const anchorData = []
      Array.from(anchorElements).forEach((el) => {
        if (el.id === '') return

        anchorData.push({
          id: el.id,
          title: el.querySelector('h2')?.textContent || el.id,
        })
      })
      setAnchors(anchorData)
    }

    setTimeout(_collectAnchors, 100)
  }, [blocks])

  // GSAP scroll handling
  useGSAP(() => {
    const blocks = sectionRef.current.querySelectorAll('[id]')

    blocks.forEach((section) => {
      ScrollTrigger.create({
        trigger: section,
        start: 'top top+=200',
        end: 'bottom top+=200',
        onEnter: () => setActiveAnchor(section.id),
        onEnterBack: () => setActiveAnchor(section.id),
      })
    })
  }, [anchors])

  useGSAP(() => {
    setTimeout(() => {
      gsap.to(asideRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: 'bottom center-=100',
          scrub: true,
          pin: asideRef.current,
          pinSpacing: false,
          pinReparent: true,
          pinType: 'transform',
        },
        top: 50,
      })
    }, 1500)
  }, [])

  const _handleAnchorClick = (id, e) => {
    e.preventDefault()
    const element = document.getElementById(id)
    const smoother = ScrollSmoother.get()

    if (smoother && element) {
      smoother.scrollTo(element, {
        duration: 1.2,
      })
    }
  }

  const _renderBlock = (block, index) => {
    const props = block.anchor ? { id: block.anchor } : {}

    switch (block.type) {
      case 'intro':
        return <PageIntro key={index} {...block} {...props} />
      case 'text':
        return <PageText key={index} {...block} {...props} />
      case 'help':
        return <PageHelp key={index} {...block} {...props} />
      default:
        console.warn(`Unknown block type: ${block.type}`)
        return null
    }
  }

  return (
    <section ref={sectionRef} className={styles.contentPage}>
      {anchors.length > 0 && (
        <aside ref={asideRef}>
          <nav>
            <ul>
              {anchors.map(({ id, title }) => (
                <li
                  key={id}
                  className={activeAnchor === id ? styles['--active'] : ''}
                >
                  <a href={`#${id}`} onClick={(e) => _handleAnchorClick(id, e)}>
                    {title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </aside>
      )}
      {blocks?.map((block, index) => _renderBlock(block, index))}
    </section>
  )
}

export default ContentPage
