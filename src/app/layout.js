import GSAP from '@/libs/gsap'
import CursorProvider from '@/libs/cursor'
import fonts from '@/libs/fonts'

import '@/styles/app.scss'

export const metadata = {
  title: 'Bold Starter',
  description: 'Insert the title here',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={fonts}>
      <body>
        <GSAP>
          <CursorProvider>{children}</CursorProvider>
        </GSAP>
      </body>
    </html>
  )
}
