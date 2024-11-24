'use client'

import { useGSAP } from '@gsap/react'
import { useRef } from 'react'
import gsap from 'gsap'
import NextImage from 'next/image'

import { getVw } from '@/libs/helpers'

export default function Media({
  refProp,
  src,
  contain,
  parallax = true,
  parallaxDirection = '--vertical --to-bottom',
  darken = true,
  zoom = false,
  dataCursor = '',
  dataCursorIcon = '',
  isVideo = false,
  reveal = false,
  revealDelay = null,
  style,
}) {
  const classes = [
    'media',
    contain && '--contain',
    parallax && '--parallax',
    parallax && parallaxDirection,
  ]
    .filter(Boolean)
    .join(' ')
  const refDefault = useRef(null)
  const refMediaInner = useRef(null)
  const refMedia = refProp ?? refDefault

  useGSAP(() => {
    gsap.set(refMediaInner.current, {
      willChange: 'transform, filter',
    })

    if (parallax && !zoom) {
      if (!reveal) {
        gsap.set(refMedia.current.querySelector(isVideo ? 'video' : 'img'), {
          scaleX: parallaxDirection.includes('--horizontal') ? 1.6 : 1,
          scaleY: parallaxDirection.includes('--vertical') ? 1.6 : 1,
        })
      }

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: refMedia.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      })

      if (parallaxDirection.includes('--horizontal')) {
        tl.to(refMediaInner.current, {
          xPercent: parallaxDirection.includes('--to-right') ? 16 : -16,
        })
      } else {
        tl.to(refMediaInner.current, {
          yPercent: parallaxDirection.includes('--to-bottom') ? 16 : -16,
        })
      }

      if (!reveal) {
        gsap.to(refMedia.current.querySelector(isVideo ? 'video' : 'img'), {
          scrollTrigger: {
            trigger: refMedia.current,
            start: 'top bottom',
            end: 'top center+=300',
            scrub: true,
          },
          scaleX: 1,
          scaleY: 1,
        })
      }
    }

    if (darken) {
      gsap.set(refMediaInner.current, { filter: 'brightness(1)' })

      gsap.to(refMediaInner.current, {
        scrollTrigger: {
          trigger: refMedia.current,
          start: 'center top',
          end: 'bottom top',
          scrub: true,
        },
        filter: 'brightness(0.6)',
      })
    }

    if (zoom) {
      gsap.set(refMediaInner.current.querySelector(isVideo ? 'video' : 'img'), {
        scale: 1.8,
      })
      gsap.set(refMedia.current, { clipPath: `inset(${getVw(100)})` })

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: refMedia.current,
          start: 'top bottom',
          end: 'center center',
          scrub: true,
        },
      })

      tl.to(refMediaInner.current.querySelector(isVideo ? 'video' : 'img'), {
        scale: 1,
      }).to(
        refMedia.current,
        {
          clipPath: `inset(${getVw(0)})`,
        },
        '<'
      )
    }

    if (reveal) {
      gsap.set(refMediaInner.current.querySelector(isVideo ? 'video' : 'img'), {
        scale: 1.6,
      })
      gsap.set(refMedia.current, { clipPath: `inset(0 0 100% 0)` })

      const tl = gsap.timeline({
        defaults: {
          duration: 0.8,
          ease: 'transition',
        },
        delay: revealDelay,
      })

      tl.to(refMediaInner.current.querySelector(isVideo ? 'video' : 'img'), {
        scale: 1,
      }).to(
        refMedia.current,
        {
          clipPath: `inset(0 0 0% 0)`,
        },
        '<'
      )
    }
  }, [])

  return (
    <div
      ref={refMedia}
      className={classes}
      data-cursor={dataCursor}
      data-cursor-icon={dataCursorIcon}
      style={style}
    >
      <div ref={refMediaInner} className="mediaInner">
        {isVideo ? (
          <video
            autoPlay
            loop
            muted
            style={{
              position: 'absolute',
              inset: '0',
              objectFit: 'cover',
              objectPosition: 'center',
            }}
          >
            <source src={src} type="video/mp4" />
          </video>
        ) : (
          <NextImage src={src} fill alt="" />
        )}
      </div>
    </div>
  )
}
