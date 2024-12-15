'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useRef } from 'react'

import { useStore } from '@/store'

export default function TransitionLink({
  href,
  children,
  classes,
  refProp,
  cursor,
  onClickEvent,
}) {
  const router = useRouter()
  const refDefault = useRef(null)
  const {
    isTransitionActive,
    setIsTransitionActive,
    setPopupContactOpen,
    setPopupTeamOpen,
    setPopupHelpOpen,
  } = useStore()

  return (
    <Link
      ref={refProp ?? refDefault}
      key={href}
      data-cursor={cursor ?? ''}
      onClick={(e) => {
        e.preventDefault()
        if (isTransitionActive) return
        setPopupContactOpen(false)
        setPopupTeamOpen(false)
        setPopupHelpOpen(false)
        setIsTransitionActive(true)
        onClickEvent && onClickEvent()
        setTimeout(() => {
          router.push(href)
        }, 800)
      }}
      href={href}
      className={classes ?? ''}
    >
      {children}
    </Link>
  )
}
