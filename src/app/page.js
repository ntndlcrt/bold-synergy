import HeroSlider from '@/blocks/HeroSlider'
import Consulting from '@/blocks/Consulting'
import GridIndustries from '@/blocks/GridIndustries'

export default function Home() {
  return (
    <>
      <HeroSlider
        items={[
          {
            title: 'Synergy Consulting',
            text: 'Made in Saudi<br/>solutions for global<br/>excellence',
            link: {
              href: '/about-us/',
              title: 'Learn more about us',
            },
            src: '/images/slider-home/1.png',
          },
          {
            title: 'Business Strategy & Transformation',
            text: 'Future-proof your business and chart your transformation journey with us',
            link: {
              href: '/about-us/',
              title: 'Learn more about us',
            },
            src: '/images/slider-home/2.png',
          },
          {
            title: 'Consumer Product, Retail & e-commerce',
            text: 'In the age of disruption, navigate the complexities of modern commerce with confidence ',
            link: {
              href: '/about-us/',
              title: 'Learn more about us',
            },
            src: '/images/slider-home/3.png',
          },
          {
            title: 'Growth, Sales & Marketing',
            text: 'Beyond the funnel, build a modern approach to Sales & Marketing',
            link: {
              href: '/about-us/',
              title: 'Learn more about us',
            },
            src: '/images/slider-home/4.png',
          },
          {
            title: 'Communications, Media & Technology',
            text: 'Beyond the buzz, strategic insights for a connected world',
            link: {
              href: '/about-us/',
              title: 'Learn more about us',
            },
            src: '/images/slider-home/5.png',
          },
        ]}
      />
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
      <GridIndustries
        uptitle="Our industries"
        text="Whether you are seeking to expand your business, improve operational efficiency, or navigate a new market, Synergy Consulting is your trusted partner. With a history of successful engagements, Synergy Consulting has a reputation for delivering results. We have helped numerous Saudi firms optimize their operations, enhance their market position, and achieve their growth aspirations. Let us leverage our expertise to help you unlock the full potential."
        items={[
          {
            title: 'Agribusiness',
            text: 'Office ipsum you must be muted. Ditching beforehand growth eager book. Incentivize die sky alarming asserts seat diligence hiring. Stand needle algorithm.',
            link: {
              href: '#',
              title: 'Learn more',
            },
          },
          {
            title: 'Communications, Media & Technology',
            text: 'Office ipsum you must be muted. Ditching beforehand growth eager book. Incentivize die sky alarming asserts seat diligence hiring. Stand needle algorithm.',
            link: {
              href: '#',
              title: 'Learn more',
            },
          },
          {
            title: 'Consumer Products, Retail & E-Commerce',
            text: 'Office ipsum you must be muted. Ditching beforehand growth eager book. Incentivize die sky alarming asserts seat diligence hiring. Stand needle algorithm.',
            link: {
              href: '#',
              title: 'Learn more',
            },
          },
          {
            title: 'Education',
            text: 'Office ipsum you must be muted. Ditching beforehand growth eager book. Incentivize die sky alarming asserts seat diligence hiring. Stand needle algorithm.',
            link: {
              href: '#',
              title: 'Learn more',
            },
          },
          {
            title: 'Healthcare',
            text: 'Office ipsum you must be muted. Ditching beforehand growth eager book. Incentivize die sky alarming asserts seat diligence hiring. Stand needle algorithm.',
            link: {
              href: '#',
              title: 'Learn more',
            },
          },
          {
            title: 'Travel & Tourism',
            text: 'Office ipsum you must be muted. Ditching beforehand growth eager book. Incentivize die sky alarming asserts seat diligence hiring. Stand needle algorithm.',
            link: {
              href: '#',
              title: 'Learn more',
            },
          },
        ]}
      />
    </>
  )
}
