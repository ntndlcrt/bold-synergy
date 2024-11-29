import Hero from '@/blocks/Hero'
import Text from '@/blocks/Text'
import ImageText from '@/blocks/ImageText'
import GridTeam from '@/blocks/GridTeam'

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
      <GridTeam
        uptitle="Our team"
        title="Synergy Consulting is your <strong>trusted partner</strong> for business expansion, operational efficiency, and market navigation. With a proven track record, we’ve helped Saudi firms optimize operations, enhance market position, and achieve growth. Let us help you unlock your full potential."
        items={[
          {
            name: 'Zubin Kabeer',
            job: 'Managing Partner',
            src: '/images/team/1.png',
            content:
              "<p>With over 15 years of experience, this seasoned Management Consultant specialises in business process re-engineering, customer experience, marketing, and strategy across Media, Retail, Manufacturing, and Social sectors.</p><p>Previously a consultant for Tata Consultancy Services, a group generating $150 billion annually and operating in 150 locations across 46 countries, he drove product and brand growth, enhanced process efficiencies, and built strategic partnerships for major MNC clients like JC Penney and Tesco. As Marketing Head - Promotions for Reliance Retail, he managed promotions for India's largest grocery chain with over 3,000 stores. He has successfully developed business plans, performance systems, and organisational structures for leading groups in Saudi Arabia, including Aleesa Group, Bold Advertising Co., Kabbani Trading Company, and Al Farabi Labs.</p><p>He holds a degree in computer engineering and an MBA from the Indian Institute of Management</p>",
          },
          {
            name: 'Shamin Sahar',
            job: 'Partner, Growth Strategist & Business Expansion Expert',
            src: '/images/team/2.png',
            content:
              "<p>With over 15 years of experience, this seasoned Management Consultant specialises in business process re-engineering, customer experience, marketing, and strategy across Media, Retail, Manufacturing, and Social sectors.</p><p>Previously a consultant for Tata Consultancy Services, a group generating $150 billion annually and operating in 150 locations across 46 countries, he drove product and brand growth, enhanced process efficiencies, and built strategic partnerships for major MNC clients like JC Penney and Tesco. As Marketing Head - Promotions for Reliance Retail, he managed promotions for India's largest grocery chain with over 3,000 stores. He has successfully developed business plans, performance systems, and organisational structures for leading groups in Saudi Arabia, including Aleesa Group, Bold Advertising Co., Kabbani Trading Company, and Al Farabi Labs.</p><p>He holds a degree in computer engineering and an MBA from the Indian Institute of Management</p>",
          },
          {
            name: 'Abeer Saud Alessa',
            job: 'Partner',
            src: '/images/team/3.png',
            content:
              "<p>With over 15 years of experience, this seasoned Management Consultant specialises in business process re-engineering, customer experience, marketing, and strategy across Media, Retail, Manufacturing, and Social sectors.</p><p>Previously a consultant for Tata Consultancy Services, a group generating $150 billion annually and operating in 150 locations across 46 countries, he drove product and brand growth, enhanced process efficiencies, and built strategic partnerships for major MNC clients like JC Penney and Tesco. As Marketing Head - Promotions for Reliance Retail, he managed promotions for India's largest grocery chain with over 3,000 stores. He has successfully developed business plans, performance systems, and organisational structures for leading groups in Saudi Arabia, including Aleesa Group, Bold Advertising Co., Kabbani Trading Company, and Al Farabi Labs.</p><p>He holds a degree in computer engineering and an MBA from the Indian Institute of Management</p>",
          },
          {
            name: 'Fahad Saud Alessa',
            job: 'Partner',
            src: '/images/team/4.png',
            content:
              "<p>With over 15 years of experience, this seasoned Management Consultant specialises in business process re-engineering, customer experience, marketing, and strategy across Media, Retail, Manufacturing, and Social sectors.</p><p>Previously a consultant for Tata Consultancy Services, a group generating $150 billion annually and operating in 150 locations across 46 countries, he drove product and brand growth, enhanced process efficiencies, and built strategic partnerships for major MNC clients like JC Penney and Tesco. As Marketing Head - Promotions for Reliance Retail, he managed promotions for India's largest grocery chain with over 3,000 stores. He has successfully developed business plans, performance systems, and organisational structures for leading groups in Saudi Arabia, including Aleesa Group, Bold Advertising Co., Kabbani Trading Company, and Al Farabi Labs.</p><p>He holds a degree in computer engineering and an MBA from the Indian Institute of Management</p>",
          },
          {
            name: 'Utkarsh Rajgarhia',
            job: 'Senior Consultant',
            src: '/images/team/5.png',
            content:
              "<p>With over 15 years of experience, this seasoned Management Consultant specialises in business process re-engineering, customer experience, marketing, and strategy across Media, Retail, Manufacturing, and Social sectors.</p><p>Previously a consultant for Tata Consultancy Services, a group generating $150 billion annually and operating in 150 locations across 46 countries, he drove product and brand growth, enhanced process efficiencies, and built strategic partnerships for major MNC clients like JC Penney and Tesco. As Marketing Head - Promotions for Reliance Retail, he managed promotions for India's largest grocery chain with over 3,000 stores. He has successfully developed business plans, performance systems, and organisational structures for leading groups in Saudi Arabia, including Aleesa Group, Bold Advertising Co., Kabbani Trading Company, and Al Farabi Labs.</p><p>He holds a degree in computer engineering and an MBA from the Indian Institute of Management</p>",
          },
          {
            name: 'Aswin M',
            job: 'Associate Consultant',
            content:
              "<p>With over 15 years of experience, this seasoned Management Consultant specialises in business process re-engineering, customer experience, marketing, and strategy across Media, Retail, Manufacturing, and Social sectors.</p><p>Previously a consultant for Tata Consultancy Services, a group generating $150 billion annually and operating in 150 locations across 46 countries, he drove product and brand growth, enhanced process efficiencies, and built strategic partnerships for major MNC clients like JC Penney and Tesco. As Marketing Head - Promotions for Reliance Retail, he managed promotions for India's largest grocery chain with over 3,000 stores. He has successfully developed business plans, performance systems, and organisational structures for leading groups in Saudi Arabia, including Aleesa Group, Bold Advertising Co., Kabbani Trading Company, and Al Farabi Labs.</p><p>He holds a degree in computer engineering and an MBA from the Indian Institute of Management</p>",
          },
        ]}
      />
    </>
  )
}
