import Hero from '@/blocks/Hero'
import Text from '@/blocks/Text'
import ImageText from '@/blocks/ImageText'

export default function About() {
  return (
    <>
      <Hero
        uptitle="About us"
        title="Synergy Consulting: Empowering Business, Delivering Results"
        src="/images/hero-about.png"
      />
      <Text title="At <strong>Synergy Consulting</strong>, we are more than just consultants; we are your strategic partners in navigating the dynamic business landscape of Saudi Arabia. With a deep-rooted understanding of the Kingdom's unique market dynamics, regulatory environment, and cultural nuances, we empower Saudi firms to achieve sustainable growth and success." />
      <ImageText
        text="Our team of <strong>seasoned professionals</strong> boasts a proven track record of delivering tailored solutions that address the specific challenges and opportunities faced by Saudi businesses. We combine our in-depth industry expertise with a client-centric approach to forge lasting partnerships that drive tangible results."
        src="/images/image-text.png"
      />
    </>
  )
}
