'use client'

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollSmoother } from 'gsap/ScrollSmoother'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/SplitText'
import { CustomEase } from 'gsap/CustomEase'
import { GSDevTools } from 'gsap/GSDevTools'

export default function GSAP({ children }) {
  gsap.registerPlugin(
    ScrollSmoother,
    useGSAP,
    ScrollTrigger,
    SplitText,
    CustomEase,
    GSDevTools
  )

  useGSAP(() => {
    CustomEase.create('bezier', '0.33, 1, 0.68, 1')
    CustomEase.create('transition', '0.76, 0, 0.24, 1')

    const mm = gsap.matchMedia()

    mm.add('(min-width: 1024px)', () => {
      const scrollerInstance = ScrollSmoother.create({
        smooth: 1.2,
        effects: true,
        wrapper: '#smooth-wrapper',
        content: '#smooth-content',
      })
    })

    ScrollTrigger.create({
      start: 0,
      end: 'max',
      onUpdate: (self) => {
        gsap.to('#scroll-progress', {
          width: `${self.progress * 100}%`,
          duration: 0.1,
          ease: 'none',
        })
      },
    })
  })

  return (
    <div id="smooth-wrapper">
      <div id="smooth-content">{children}</div>
    </div>
  )
}
