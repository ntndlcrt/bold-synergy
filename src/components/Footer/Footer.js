'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import parse from 'html-react-parser'

import SVG from '@/elements/SVG'

import styles from './Footer.module.scss'

export default function Footer({ frames = [], text, links, socials }) {
  const pathname = usePathname()

  return (
    <div className={styles.footer}>
      <div className={styles.inner}>
        {pathname === '/' ? (
          <div className={styles.frames}>
            {frames &&
              frames.map((frame, index) => (
                <div key={index} className={styles.frame}>
                  <p>{parse(frame.text)}</p>
                  <Link
                    className="button"
                    href={frame.link.href}
                    target={frame.link.target}
                  >
                    <span>{frame.link.title}</span>
                  </Link>
                </div>
              ))}
          </div>
        ) : (
          <div className={styles.content}>{text && parse(text)}</div>
        )}
        <div className={styles.bottom}>
          <SVG name="logo" />
          <span>&copy;{new Date().getFullYear()} Synergy</span>
          <ul>
            {links.map((link, index) => (
              <li key={index}>
                <Link href={link.href}>{link.title}</Link>
              </li>
            ))}
          </ul>
          <ul>
            {socials.map((social, index) => (
              <li key={index}>
                <a href={social.href} target="_blank">
                  <SVG name={social.icon} />
                </a>
              </li>
            ))}
          </ul>
          <div className={styles.group}>
            <span>Synergy is part of</span>
            <a href="https://google.fr/" target="_blank">
              <SVG name="logo-group" />
            </a>
          </div>
        </div>
      </div>
      <SVG name="pattern-footer" />
    </div>
  )
}
