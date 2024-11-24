import HeroSlider from '@/blocks/HeroSlider'
import Consulting from '@/blocks/Consulting'
import GridServices from '@/blocks/GridServices'
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
      <GridServices
        uptitle="Our services"
        title="Synergy consulting is your trusted partner for business expansion, operational efficiency, and market navigation.With proven track record, we have helped Saudi firms optimise operations, enhance market position and achieve growth."
        text="Synergy Consulting offers a suite of comprehensive services tailored to help businesses navigate today's complex landscape. From crafting effective business strategies to driving digital transformation, our experts provide the guidance and support needed to achieve sustainable growth. Our services encompass a wide range of areas, including market analysis, operational optimization, and sales and marketing strategies. By leveraging our deep industry knowledge and innovative approach, we empower businesses to make informed decisions, enhance efficiency, and unlock new opportunities."
        items={[
          {
            title: 'Business Strategy & Transformation',
            text: 'Product innovation and market positioning are crucial for initial success, but sustainable competitive advantage requires fostering a high-performing workforce. The key to long-term success lies in your most valuable asset - your people. At Synergy, we understand that a highly engaged and empowered workforce is the engine that propels organizational growth.',
            src: '/images/services/grid/1.png',
            link: {
              href: '#',
              title: 'View more',
            },
          },
          {
            title: 'Corporate Finance',
            text: 'In a changing business environment, financial health is crucial for sustainable success. Corporate finance balances risk and return while maximizing shareholder value. At Synergy, we help businesses navigate financial complexities, optimize performance, and mitigate risk. Our partnership strengthens your financial foundation, enables data-driven decisions, and supports long-term well-being.',
            src: '/images/services/grid/2.png',
            link: {
              href: '#',
              title: 'View more',
            },
          },
          {
            title: 'Digital Transformation',
            text: 'In the digital age, falling behind can jeopardize established companies. Tech-savvy customers expect seamless experiences, and resistance to transformation risks loss. At Synergy, our digital transformation consultants help businesses unlock their potential. We tailor our approach to your unique challenges and goals, creating a customized roadmap for your digital journey to enhance your chances of success.',
            src: '/images/services/grid/3.png',
            link: {
              href: '#',
              title: 'View more',
            },
          },
          {
            title: 'Growth, Marketing & Sales',
            text: 'Sustainable growth during transformation demands a strategic understanding of your audience and market landscape. At Synergy, we help businesses unlock their growth potential with tailored services, from brand strategy to sales optimization. Our experienced team combines data-driven analysis and creative solutions for measurable results.',
            src: '/images/services/grid/4.png',
            link: {
              href: '#',
              title: 'View more',
            },
          },
          {
            title: 'Mergers and acquisitions',
            text: 'Mergers and acquisitions (M&A) are vital for growth, market expansion, and diversification, but they require specialized expertise to navigate complexities. At Synergy, we provide M&A consulting services to guide you through every stage, from strategy development to successful integration.',
            src: '/images/services/grid/5.png',
            link: {
              href: '#',
              title: 'View more',
            },
          },
          {
            title: 'Operational Optimization',
            text: 'Efficiency is essential in today’s competitive landscape, and organizations must optimize operations to thrive. At Synergy, we specialize in operational optimization, helping businesses identify bottlenecks, eliminate waste, and enhance productivity. Our approach leads to reduced costs, improved customer satisfaction, and a culture of continuous improvement.',
            src: '/images/services/grid/6.png',
            link: {
              href: '#',
              title: 'View more',
            },
          },
          {
            title: 'People & Organizational Performance',
            text: 'Product innovation and market positioning are crucial for initial success, but sustainable competitive advantage requires fostering a high-performing workforce. The key to long-term success lies in your most valuable asset - your people. At Synergy, we understand that a highly engaged and empowered workforce is the engine that propels organizational growth.',
            src: '/images/services/grid/7.png',
            link: {
              href: '#',
              title: 'View more',
            },
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
