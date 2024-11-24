import Consulting from '@/blocks/Consulting'

export default function Home() {
  return (
    <>
      <Consulting
        uptitle="Who we are"
        title="At <strong>Synergy Consulting</strong>, we are more than just consultants; we are your strategic partners in navigating the dynamic business landscape of Saudi Arabia."
        text="With a deep-rooted understanding of the Kingdom's unique market dynamics, regulatory environment, and cultural nuances, we empower Saudi firms to achieve sustainable growth and success. Our team of seasoned professionals boasts a proven track record of delivering tailored solutions that address the specific challenges and opportunities faced by Saudi businesses. We combine our in-depth industry expertise with a client-centric approach to forge lasting partnerships that drive tangible results."
        link={{
          href: '/about-us/',
          title: 'Learn more about us',
        }}
        subtitle="What sets Synergy Consulting apart:"
        items={[
          {
            icon: '/svg/consulting-1.svg',
            title: 'We have Local Market Insights',
          },
          {
            icon: '/svg/consulting-2.svg',
            title: 'We provide Customized Solutions',
          },
          {
            icon: '/svg/consulting-3.svg',
            title: 'We have a huge Cultural Sensitivity',
          },
          {
            icon: '/svg/consulting-4.svg',
            title: 'We have a Regulatory Expertise',
          },
        ]}
      />
    </>
  )
}
