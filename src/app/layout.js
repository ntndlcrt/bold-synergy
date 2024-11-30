import GSAP from '@/libs/gsap'
import CursorProvider from '@/libs/cursor'
import fonts from '@/libs/fonts'

import PopupTeam from '@/components/PopupTeam'
import PopupHelp from '@/components/PopupHelp/PopupHelp'
import Footer from '@/components/Footer'

import '@/styles/app.scss'

export const metadata = {
  title: 'Synergy',
  description: 'Insert the title here',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={fonts}>
      <body>
        <GSAP>
          <CursorProvider>
            {children}
            <Footer
              text="<p>Experience the Synergy difference: strategic growth, tailored solutions</p><button data-open-contact>Contact us</button>"
              frames={[
                {
                  text: "Ready to take your business to the next level? Let's talk.",
                  link: {
                    title: 'Contact us',
                    href: '/contact/',
                  },
                },
                {
                  text: 'Explore a Career<br/>with us.',
                  link: {
                    title: 'Explore careers',
                    href: 'https://google.fr/',
                    target: '_blank',
                  },
                },
              ]}
              links={[
                {
                  title: 'Terms of use',
                  href: '/terms-of-use',
                },
                {
                  title: 'Privacy',
                  href: '/privacy',
                },
              ]}
              socials={[
                {
                  icon: 'x',
                  href: 'https://twitter.com/',
                },
                {
                  icon: 'linkedin',
                  href: 'https://linkedin.com/',
                },
                {
                  icon: 'instagram',
                  href: 'https://instagram.com/',
                },
              ]}
            />
          </CursorProvider>
        </GSAP>
        <div id="scroll-progress" />
        <PopupTeam />
        <PopupHelp />
      </body>
    </html>
  )
}
