'use client'

import gsap from 'gsap'
import { usePathname } from 'next/navigation'
import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import ScrollTrigger from 'gsap/ScrollTrigger'

import { useStore } from '@/store'

export default function PageTransition({ children }) {
  const pathname = usePathname()
  const transitionRef = useRef(null)
  const iconRef = useRef(null)
  const {
    isTransitionActive,
    setIsTransitionActive,
    isFirstLoad,
    setIsFirstLoad,
  } = useStore()

  const _hide = () => {
    const tl = gsap.timeline({
      delay: isFirstLoad ? 0.4 : 0,
      defaults: {
        ease: 'transition',
        duration: 0.4,
      },
      onComplete: () => {
        setIsFirstLoad(false)
        setIsTransitionActive(false)
      },
    })

    tl.to(iconRef.current, {
      width: (81 * 100) / window.innerWidth + 'vw',
      height: (84 * 100) / window.innerWidth + 'vw',
    })
      .to(iconRef.current, {
        rotate: 360,
      })
      .to(transitionRef.current, {
        yPercent: -100,
        duration: 0.6,
      })
  }

  const _show = () => {
    gsap.set(transitionRef.current, {
      yPercent: 100,
    })

    gsap.set(iconRef.current, {
      width: (175 * 100) / window.innerWidth + 'vw',
      height: (182 * 100) / window.innerWidth + 'vw',
      rotate: 0,
    })

    const tl = gsap.timeline()

    tl.to(transitionRef.current, {
      yPercent: 0,
      ease: 'transition',
      duration: 0.6,
    })
  }

  useGSAP(() => {
    ScrollTrigger.refresh()

    _hide()
  }, [pathname])

  useGSAP(() => {
    if (isFirstLoad) {
    }
  }, [isFirstLoad])

  useGSAP(() => {
    if (isTransitionActive) {
      _show()
    }
  }, [isTransitionActive])

  return (
    <>
      <main key={pathname}>{children}</main>
      <div ref={transitionRef} className="transition">
        <div ref={iconRef} className="transition__icon">
          <svg
            width="48"
            height="49"
            viewBox="0 0 48 49"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 46.497V36.9922C0 35.8041 0.846472 35.1268 1.85897 35.1268H27.9009C31.7903 35.1268 34.327 32.5812 34.327 28.6783V1.86545C34.327 0.849423 35.0047 0 36.0172 0H45.489C46.673 0 47.348 0.849423 47.348 1.86545V25.4526C47.348 26.8128 47.0105 27.6595 46.164 28.5089L27.7322 47.0023C26.7169 48.0211 26.0419 48.3625 24.6865 48.3625H1.85897C0.846472 48.3625 0 47.5131 0 46.497Z"
              fill="#F4F4E8"
            />
          </svg>

          <svg
            width="48"
            height="49"
            viewBox="0 0 48 49"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M46.1411 13.3625C47.1563 13.3625 48 12.6851 48 11.497V2.16157C48 0.973468 47.1563 0.296112 46.1411 0.296112H23.1448C21.9608 0.296112 21.1144 0.637523 20.2706 1.65355L1.83876 19.9803C0.992285 20.9964 0.654785 21.6764 0.654785 23.0339V47.1318C0.654785 48.1478 1.32979 48.9973 2.34501 48.9973H11.8141C12.998 48.9973 13.673 48.1478 13.673 47.1318V19.811C13.673 15.9053 16.2097 13.3625 20.0991 13.3625H46.1411Z"
              fill="#F4F4E8"
            />
          </svg>
        </div>
      </div>
    </>
  )
}
