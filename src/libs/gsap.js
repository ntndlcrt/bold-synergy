'use client'

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollSmoother } from 'gsap/ScrollSmoother'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/SplitText'
import { CustomEase } from 'gsap/CustomEase'
import { GSDevTools } from 'gsap/GSDevTools'
import { useRef, createContext, useContext, useState } from 'react'
// import { usePathname } from 'next/navigation'

export default function GSAP({ children }) {
  // const pathname = usePathname()
  const prevScrollY = useRef(0)

  gsap.registerPlugin(
    ScrollSmoother,
    useGSAP,
    ScrollTrigger,
    SplitText,
    CustomEase,
    GSDevTools
  )

  useGSAP(() => {
    // if (pathname === '/') {
    //   gsap.set('header', {
    //     'data-white': true,
    //   })
    // }

    CustomEase.create('bezier', '0.33, 1, 0.68, 1')
    CustomEase.create('transition', '0.76, 0, 0.24, 1')

    const mm = gsap.matchMedia()

    mm.add('(min-width: 1024px)', () => {
      const scrollerInstance = ScrollSmoother.create({
        smooth: 1.2,
        effects: true,
        wrapper: '#smooth-wrapper',
        content: '#smooth-content',
        onUpdate: (self) => {
          let scrollY = self.scrollTop()
          const isScrollingDown = scrollY > prevScrollY.current

          prevScrollY.current = scrollY

          const header = document.querySelector('header')

          if (header) {
            gsap.set('header', {
              top: scrollY,
              duration: 0,
              ease: 'none',
            })

            if (scrollY > 100) {
              document
                .querySelector('header')
                .setAttribute('data-background', true)

              if (pathname === '/') {
                document.querySelector('header').removeAttribute('data-white')
              }
            } else {
              document
                .querySelector('header')
                .removeAttribute('data-background')

              if (pathname === '/') {
                document
                  .querySelector('header')
                  .setAttribute('data-white', true)
              }
            }

            if (isScrollingDown) {
              header.setAttribute('data-scrolling', true)
            } else {
              header.removeAttribute('data-scrolling')
            }
          }
        },
      })
    })
  })

  return (
    <div id="smooth-wrapper">
      <div id="smooth-content">{children}</div>
    </div>
  )
}
