'use client'

import { useRef, useState } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import Form from 'next/form'

import { useStore } from '@/store'
import SVG from '@/elements/SVG'

import styles from './PopupContact.module.scss'

export default function PopupContact() {
  const popupRef = useRef(null)
  const { popupContactOpen, setPopupContactOpen } = useStore()
  const [timeline, setTimeline] = useState(null)
  const overlayRef = useRef(null)
  const innerRef = useRef(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  useGSAP(() => {
    gsap.set(overlayRef.current, { autoAlpha: 0 })
    gsap.set(innerRef.current, { xPercent: 100 })

    const tl = gsap.timeline({
      defaults: { duration: 0.8, ease: 'transition' },
      paused: true,
    })

    tl.to(overlayRef.current, { autoAlpha: 1 }).to(
      innerRef.current,
      {
        xPercent: 0,
      },
      '<+0.2'
    )

    setTimeline(tl)
  }, [])

  useGSAP(() => {
    if (!timeline) return

    if (popupContactOpen) {
      timeline.play()
    } else {
      timeline.reverse()
    }
  }, [popupContactOpen])

  const _handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Get all form data
    const formData = new FormData(e.target)
    const formValues = {
      email: formData.get('email'),
      industry: formData.get('industry'),
      service: formData.get('service'),
      message: formData.get('message'),
    }
    console.log(formValues)

    setTimeout(() => {
      setIsSubmitted(true)
      setIsSubmitting(false)
    }, 2000)
  }

  return (
    <div ref={popupRef} className={styles.popupContact}>
      <div ref={overlayRef} className={styles.overlay} />
      <div ref={innerRef} className={styles.inner}>
        <div className={styles.header}>
          <div className={styles.breadcrumb}>
            <span>Contact us</span>
          </div>
          <button
            onClick={() => {
              setPopupContactOpen(false)
            }}
          >
            <SVG name="cross" />
          </button>
        </div>
        <div className={styles.content}>
          <div className={styles.form}>
            <h2>
              Looking for expert advice or want to collaborate with us? Let's
              connect!
            </h2>
            <p>
              Looking to connect with our team? As a leading consulting firm,
              we’re dedicated to providing tailored solutions to our clients.
              Whether you’re interested in exploring career opportunities,
              learning more about our consulting services, partner with us or
              simply seeking information, we invite you to reach out.
            </p>
            <Form
              className={`${styles.fields} ${
                isSubmitting ? styles['--faded'] : ''
              }`}
              onSubmit={_handleSubmit}
            >
              <div className={styles.field}>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="email@domain.com"
                  required
                />
              </div>
              <div className={styles.field}>
                <label htmlFor="industry">Industry</label>
                <select id="industry" name="industry">
                  <option value="">Select an industry</option>
                  <option value="agribusiness">Agribusiness</option>
                  <option value="communications">
                    Communications, Media & Technology
                  </option>
                  <option value="consumer">
                    Consumer Products, Retail & E-Commerce
                  </option>
                  <option value="education">Education</option>
                  <option value="healthcare">Healthcare</option>
                  <option value="travel">Travel & Tourism</option>
                </select>
              </div>
              <div className={styles.field}>
                <label htmlFor="service">Services</label>
                <select id="service" name="service">
                  <option value="">Select a service</option>
                  <option value="strategy">
                    Business Strategy & Transformation
                  </option>
                  <option value="finance">Corporate Finance</option>
                  <option value="digital">Digital Transformation</option>
                  <option value="growth">Growth, Marketing & Sales</option>
                  <option value="mergers">Mergers and acquisitions</option>
                  <option value="optimization">Operational Optimization</option>
                  <option value="people">
                    People & Organizational Performance
                  </option>
                </select>
              </div>
              <div className={styles.field}>
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Your message here"
                />
              </div>
              <button type="submit" className="button --black">
                {isSubmitted ? 'Sended!' : isSubmitting ? 'Sending...' : 'Send'}
              </button>
            </Form>
          </div>
          <aside>
            <ul>
              <li>
                <h3>Our office</h3>
                <p>
                  Bold Synergy
                  <br />
                  8161 Al Thoumamah Rd, Ar
                  <br />
                  Rabi, Riyadh 13315,
                  <br />
                  Saudia Arabia
                </p>
                <p>
                  T/ <a href="tel:+966114330099">+966 11 433 0099</a>
                </p>
                <p>
                  M/{' '}
                  <a href="mailto:contact@boldsynergy.com">
                    contact@boldsynergy.com
                  </a>
                </p>
              </li>
              <li>
                <h3>Follow us</h3>
                <a href="#" target="_blank">
                  Linkedin
                </a>
                <a href="#" target="_blank">
                  Twitter
                </a>
                <a href="#" target="_blank">
                  Facebook
                </a>
                <a href="#" target="_blank">
                  Instagram
                </a>
              </li>
            </ul>
          </aside>
        </div>
      </div>
    </div>
  )
}
