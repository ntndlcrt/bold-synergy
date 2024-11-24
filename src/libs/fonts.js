import localFont from 'next/font/local'

export const generalSans = localFont({
  src: '../../public/fonts/GeneralSans-Variable.woff2',
  variable: '--font-general-sans',
  display: 'swap',
  preload: true,
  fallback: ['system-ui', 'arial'],
  adjustFontFallback: true,
})

const fonts = `${generalSans.variable}`
export default fonts
