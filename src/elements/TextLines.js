'use client'

import gsap from 'gsap'
import { SplitText } from 'gsap/SplitText'
import { useGSAP } from '@gsap/react'
import React, { useRef, useState, useEffect } from 'react'
import parse from 'html-react-parser'

export default function TextLines({
  children,
  classes,
  basic = true,
  tag = 'p',
  delay = 0,
  onSplitLines,
}) {
  const refText = useRef(null)
  const [lines, setLines] = useState([])

  useGSAP(() => {
    const splitText = new SplitText(refText.current, {
      type: 'lines',
      linesClass: 'line',
    })

    setLines(splitText.lines)

    const lineInners = []

    splitText.lines.forEach((line) => {
      const lineInner = document.createElement('div')
      lineInner.classList.add('line__inner')
      lineInner.textContent = line.textContent
      line.textContent = ''
      line.appendChild(lineInner)
      lineInners.push(lineInner)
    })

    gsap.set(lineInners, {
      yPercent: 118,
    })

    if (basic) {
      const tl = gsap.timeline({
        defaults: {
          ease: 'transition',
          duration: 0.5,
        },
        scrollTrigger: {
          trigger: refText.current,
          start: 'top bottom -=100',
        },
        delay,
      })

      tl.to(lineInners, {
        yPercent: 0,
        stagger: 0.1,
      })
    }
  }, [refText])

  useEffect(() => {
    if (onSplitLines) {
      onSplitLines(lines.length)
    }
  }, [lines, onSplitLines])

  return React.createElement(
    tag,
    { ref: refText, className: `${classes ? classes : ''} text-lines` },
    parse(children)
  )
}
