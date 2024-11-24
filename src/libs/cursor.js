'use client'

import { createContext, useContext, useState, useEffect } from 'react'
import MouseFollower from 'mouse-follower'
import gsap from 'gsap'

const CursorContext = createContext()

export default function CursorProvider({ children }) {
  const [cursor, setCursor] = useState(null)

  useEffect(() => {
    MouseFollower.registerGSAP(gsap)
    const cursorInstance = new MouseFollower({
      hiddenState: '--hidden',
      textState: '--text',
      iconState: '--icon',
      activeState: '--active',
      mediaState: '--media',
      iconSvgSrc: '/svg/sprite.svg',
      skewingIcon: 0,
    })

    setCursor(cursorInstance)

    return () => {
      if (cursorInstance) {
        cursorInstance.destroy()
      }
    }
  }, [])

  return (
    <CursorContext.Provider value={cursor}>{children}</CursorContext.Provider>
  )
}

export function useCursor() {
  return useContext(CursorContext)
}
