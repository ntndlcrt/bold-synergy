import HeroService from '@/blocks/HeroService'
import Breadcrumb from '@/components/Breadcrumb'
import ContentPage from '@/blocks/ContentPage'
import ImageTextFullscreen from '@/blocks/ImageTextFullscreen'

export default function Industry() {
  return (
    <>
      <HeroService
        uptitle="Consulting services"
        title="People & Organizational Performance"
        text="Unlock peak performance and empower your people for organizational success"
        src="/images/hero-service.jpeg"
      />
      <Breadcrumb
        title="Consulting services"
        pageTitle="Business Strategy & Transformation"
        isBlack
        links={[
          {
            title: 'Business Strategy & Transformation',
            href: '/services/business-strategy-and-transformation',
          },
          {
            title: 'Corporate Finance',
            href: '/services/corporate-finance',
          },
          {
            title: 'Digital Transformation',
            href: '/services/digital-transformation',
          },
          {
            title: 'Growth, Marketing & Sales',
            href: '/services/growth-marketing-and-sales',
          },
          {
            title: 'Mergers and acquisitions',
            href: '/services/mergers-and-acquisitions',
          },
          {
            title: 'Operational Optimization',
            href: '/services/operational-optimization',
          },
          {
            title: 'People & Organizational Performance',
            href: '/services/people-and-organizational-performance',
          },
        ]}
      />
      <ContentPage
        blocks={[
          {
            type: 'intro',
            content:
              '<p className="intro">Agribusiness faces high costs, shrinking margins, tech disruptions, climate change, shifting customer preferences, sustainability demands, regulations, and geopolitical issues. Yet, key trends are driving its transformation.</p><p className="statement">The global consumer products landscape is undergoing a seismic shift. Size of e-commerce is ballooning and is expected to reach a projected market volume of <strong>US$6,478 billion by 2029.</strong></p>',
            bigGap: true,
          },
          {
            type: 'text',
            anchor: 'global-outlook',
            title: 'Global outlook',
            content:
              "<p>The global consumer products landscape is undergoing a seismic shift. The size of e-commerce is ballooning and is expected to reach a projected market volume of US$6,478 billion by 2029[1]. With the number of users expected to amount to 3.6bn users by 2029, we have barely scratched the surface of the potential of the e-commerce market. Today's customer demands a trifecta of personalization, convenience, and ethical sourcing. Sustainability and social responsibility are no longer afterthoughts, but key purchase drivers. This, coupled with the e-commerce boom, is disrupting traditional retail models. Brick-and-mortar stores are scrambling to adapt, offering seamless omnichannel experiences that blend online and offline touchpoints. Meanwhile, technological advancements like AI, Big Data, and automation are transforming every stage of the value chain, from personalized marketing to optimized supply chains. However, navigating this dynamic environment is not without its challenges. Geopolitical tensions, supply chain disruptions, and rising inflation create a complex global picture. Businesses that can adapt and innovate with agility will be best positioned to thrive in this new era.</p>",
          },
          {
            type: 'text',
            anchor: 'saudi-outlook',
            title: 'Saudi outlook',
            content:
              "<p>The consumer products, retail, and e-commerce sector in KSA is a vibrant and rapidly growing market brimming with potential. Fuelled by a young, tech-savvy population with a growing disposable income, KSA boasts the largest population in the GCC and boasts an internet penetration rate exceeding 90%. This translates to a massive customer base eager to embrace e-commerce, with a staggering 80% of active internet users already shopping online – a figure on par with China. This digital adoption is reflected in the KSA e-commerce market, projected to reach a staggering 21 billion USD by 2025[2], representing a significant chunk (around 8%) of the entire retail market. Saudi Central Bank’s (SAMA) initiatives, to facilitate digital payments facilitate the growth of e-commerce in the Kingdom. The government's ambitious Vision 2030 further bolsters this growth, actively promoting e-commerce and fostering a culture of innovation.</p><p>However, the landscape isn't without its nuances. Traditional retail chains remain strong, highlighting the importance of crafting a seamless omnichannel strategy. Additionally, understanding cultural preferences is paramount for success, as catering to local tastes and adapting marketing messages are crucial for capturing a share of this dynamic market. Global e-commerce giants are entering the Saudi market, intensifying competition. While improving, the logistics infrastructure in Saudi Arabia needs further development to ensure efficient e-commerce fulfilment. With limited domestic manufacturing, the Kingdom relies heavily on imports, making it vulnerable to global supply chain disruptions.</p>",
          },
          {
            anchor: 'how-can-we-help',
            title: 'How can we help?',
            contentTop:
              '<p class="statement">Our team of experienced M&A professionals brings a wealth of knowledge and a proven track record of success to each client engagement. We partner with you to understand your unique business objectives and develop a tailored M&A strategy that aligns with your long-term goals.</p><p>We understand that every business has unique needs and challenges. That is why we take a customized approach to operational optimization. Our approach to operational excellence is a collaborative journey. We work with you to define your strategic goals and ensure all operations are aligned to achieve them. Then, we delve into your processes, identifying areas for improvement and bottlenecks. We then prioritize these and implement solutions that streamline workflows and boost efficiency. Technology integration can be a powerful tool here, automating tasks and fostering transparency. But at the heart of it all lies your people. We help empower your employees through training and engagement initiatives, fostering a culture of continuous improvement where everyone feels valued and contributes to success. This ensures long-term sustainability and keeps your organization on the path to operational excellence.</p>',
            contentBottom:
              '<p>Process optimization offers a wide range of benefits. Optimized processes are more consistent and efficient, with fewer errors and reduced risk. They also streamline compliance and communication, allowing employees to focus on high-impact tasks. This translates to a competitive advantage with faster turnaround times and better quality products or services. Overall, process optimization helps businesses proactively solve problems and achieve greater success.</p><img src="/images/popup-help.png" alt="" />',
            type: 'help',
            items: [
              {
                src: '/images/help.png',
                title: 'Business Model Transformation',
                text: "Office ipsum you must be muted. Prioritize too first-order first 5. Manage next make hammer supervisor. Awareness horse we've both awareness opportunity jumping company psl...",
                content: `
                <h3 class="title">Helping Businesses Through Turnaround and Restructuring</h3>
                <p class="intro">In the absence of a dedicated CFO, our virtual CFO services offer a comprehensive solution to fill that critical leadership gap. Our experienced professionals can seamlessly integrate with your team, providing the strategic financial guidance you need to excel in several key areas. This includes overseeing all financial operations, ensuring efficient management of financial reporting, budgeting, forecasting, and cash flow analysis.</p>
                <img src="/images/popup-help.png" alt="Virtual CFO Benefits" />
                <p>The virtual CFO will also collaborate with your leadership team to develop long-term financial strategies that perfectly align with your overall business goals. Together, they will delve into your business goals and aspirations, meticulously crafting a long-term financial strategy perfectly aligned with your vision. This strategic roadmap will serve as a compass, guiding your financial decision-making for years to come. They will serve as a bridge for clear communication, effectively translating complex financial information to both internal and external stakeholders, fostering trust and transparency.</p>
              `,
                links: [
                  { href: '#', title: 'Ed-Tech Solutions' },
                  { href: '#', title: 'M&A and Partnerships' },
                ],
              },
              {
                src: '/images/help.png',
                title: 'Corporate Strategy',
                text: "Office ipsum you must be muted. Prioritize too first-order first 5. Manage next make hammer supervisor. Awareness horse we've both awareness opportunity jumping company psl...",
                content: `
                <p class="intro">In the absence of a dedicated CFO, our virtual CFO services offer a comprehensive solution to fill that critical leadership gap. Our experienced professionals can seamlessly integrate with your team, providing the strategic financial guidance you need to excel in several key areas. This includes overseeing all financial operations, ensuring efficient management of financial reporting, budgeting, forecasting, and cash flow analysis.</p>
                <img src="/images/popup-help.png" alt="Virtual CFO Benefits" />
                <p>The virtual CFO will also collaborate with your leadership team to develop long-term financial strategies that perfectly align with your overall business goals. Together, they will delve into your business goals and aspirations, meticulously crafting a long-term financial strategy perfectly aligned with your vision. This strategic roadmap will serve as a compass, guiding your financial decision-making for years to come. They will serve as a bridge for clear communication, effectively translating complex financial information to both internal and external stakeholders, fostering trust and transparency.</p>
              `,
                links: [{ href: '#', title: 'M&A and Partnerships' }],
              },
              {
                src: '/images/help.png',
                title: 'Digital Transformation',
                text: "Office ipsum you must be muted. Prioritize too first-order first 5. Manage next make hammer supervisor. Awareness horse we've both awareness opportunity jumping company psl...",
                content: `
                <p class="intro">In the absence of a dedicated CFO, our virtual CFO services offer a comprehensive solution to fill that critical leadership gap. Our experienced professionals can seamlessly integrate with your team, providing the strategic financial guidance you need to excel in several key areas. This includes overseeing all financial operations, ensuring efficient management of financial reporting, budgeting, forecasting, and cash flow analysis.</p>
                <img src="/images/popup-help.png" alt="Virtual CFO Benefits" />
                <p>The virtual CFO will also collaborate with your leadership team to develop long-term financial strategies that perfectly align with your overall business goals. Together, they will delve into your business goals and aspirations, meticulously crafting a long-term financial strategy perfectly aligned with your vision. This strategic roadmap will serve as a compass, guiding your financial decision-making for years to come. They will serve as a bridge for clear communication, effectively translating complex financial information to both internal and external stakeholders, fostering trust and transparency.</p>
              `,
                links: [
                  { href: '#', title: 'Ed-Tech Solutions' },
                  { href: '#', title: 'M&A and Partnerships' },
                ],
              },
              {
                src: '/images/help.png',
                title: 'Pricing & Revenue',
                text: "Office ipsum you must be muted. Prioritize too first-order first 5. Manage next make hammer supervisor. Awareness horse we've both awareness opportunity jumping company psl...",
                content: `
                <p class="intro">In the absence of a dedicated CFO, our virtual CFO services offer a comprehensive solution to fill that critical leadership gap. Our experienced professionals can seamlessly integrate with your team, providing the strategic financial guidance you need to excel in several key areas. This includes overseeing all financial operations, ensuring efficient management of financial reporting, budgeting, forecasting, and cash flow analysis.</p>
                <img src="/images/popup-help.png" alt="Virtual CFO Benefits" />
                <p>The virtual CFO will also collaborate with your leadership team to develop long-term financial strategies that perfectly align with your overall business goals. Together, they will delve into your business goals and aspirations, meticulously crafting a long-term financial strategy perfectly aligned with your vision. This strategic roadmap will serve as a compass, guiding your financial decision-making for years to come. They will serve as a bridge for clear communication, effectively translating complex financial information to both internal and external stakeholders, fostering trust and transparency.</p>
              `,
                links: [
                  { href: '#', title: 'Ed-Tech Solutions' },
                  { href: '#', title: 'M&A and Partnerships' },
                ],
              },
              {
                src: '/images/help.png',
                title: 'Project Management & Costing',
                text: "Office ipsum you must be muted. Prioritize too first-order first 5. Manage next make hammer supervisor. Awareness horse we've both awareness opportunity jumping company psl...",
                content: `
                <p class="intro">In the absence of a dedicated CFO, our virtual CFO services offer a comprehensive solution to fill that critical leadership gap. Our experienced professionals can seamlessly integrate with your team, providing the strategic financial guidance you need to excel in several key areas. This includes overseeing all financial operations, ensuring efficient management of financial reporting, budgeting, forecasting, and cash flow analysis.</p>
                <img src="/images/popup-help.png" alt="Virtual CFO Benefits" />
                <p>The virtual CFO will also collaborate with your leadership team to develop long-term financial strategies that perfectly align with your overall business goals. Together, they will delve into your business goals and aspirations, meticulously crafting a long-term financial strategy perfectly aligned with your vision. This strategic roadmap will serve as a compass, guiding your financial decision-making for years to come. They will serve as a bridge for clear communication, effectively translating complex financial information to both internal and external stakeholders, fostering trust and transparency.</p>
              `,
                links: [
                  { href: '#', title: 'Ed-Tech Solutions' },
                  { href: '#', title: 'M&A and Partnerships' },
                ],
              },
              {
                src: '/images/help.png',
                title: 'Movies & OTT',
                text: "Office ipsum you must be muted. Prioritize too first-order first 5. Manage next make hammer supervisor. Awareness horse we've both awareness opportunity jumping company psl...",
                content: `
                <p class="intro">In the absence of a dedicated CFO, our virtual CFO services offer a comprehensive solution to fill that critical leadership gap. Our experienced professionals can seamlessly integrate with your team, providing the strategic financial guidance you need to excel in several key areas. This includes overseeing all financial operations, ensuring efficient management of financial reporting, budgeting, forecasting, and cash flow analysis.</p>
                <img src="/images/popup-help.png" alt="Virtual CFO Benefits" />
                <p>The virtual CFO will also collaborate with your leadership team to develop long-term financial strategies that perfectly align with your overall business goals. Together, they will delve into your business goals and aspirations, meticulously crafting a long-term financial strategy perfectly aligned with your vision. This strategic roadmap will serve as a compass, guiding your financial decision-making for years to come. They will serve as a bridge for clear communication, effectively translating complex financial information to both internal and external stakeholders, fostering trust and transparency.</p>
              `,
                links: [
                  { href: '#', title: 'Ed-Tech Solutions' },
                  { href: '#', title: 'M&A and Partnerships' },
                ],
              },
              {
                src: '/images/help.png',
                title: 'Entertainment Events',
                text: "Office ipsum you must be muted. Prioritize too first-order first 5. Manage next make hammer supervisor. Awareness horse we've both awareness opportunity jumping company psl...",
                content: `
                <p class="intro">In the absence of a dedicated CFO, our virtual CFO services offer a comprehensive solution to fill that critical leadership gap. Our experienced professionals can seamlessly integrate with your team, providing the strategic financial guidance you need to excel in several key areas. This includes overseeing all financial operations, ensuring efficient management of financial reporting, budgeting, forecasting, and cash flow analysis.</p>
                <img src="/images/popup-help.png" alt="Virtual CFO Benefits" />
                <p>The virtual CFO will also collaborate with your leadership team to develop long-term financial strategies that perfectly align with your overall business goals. Together, they will delve into your business goals and aspirations, meticulously crafting a long-term financial strategy perfectly aligned with your vision. This strategic roadmap will serve as a compass, guiding your financial decision-making for years to come. They will serve as a bridge for clear communication, effectively translating complex financial information to both internal and external stakeholders, fostering trust and transparency.</p>
              `,
                links: [
                  { href: '#', title: 'Ed-Tech Solutions' },
                  { href: '#', title: 'M&A and Partnerships' },
                ],
              },
              {
                src: '/images/help.png',
                title: 'Sports Events',
                text: "Office ipsum you must be muted. Prioritize too first-order first 5. Manage next make hammer supervisor. Awareness horse we've both awareness opportunity jumping company psl...",
                content: `
                <p class="intro">In the absence of a dedicated CFO, our virtual CFO services offer a comprehensive solution to fill that critical leadership gap. Our experienced professionals can seamlessly integrate with your team, providing the strategic financial guidance you need to excel in several key areas. This includes overseeing all financial operations, ensuring efficient management of financial reporting, budgeting, forecasting, and cash flow analysis.</p>
                <img src="/images/popup-help.png" alt="Virtual CFO Benefits" />
                <p>The virtual CFO will also collaborate with your leadership team to develop long-term financial strategies that perfectly align with your overall business goals. Together, they will delve into your business goals and aspirations, meticulously crafting a long-term financial strategy perfectly aligned with your vision. This strategic roadmap will serve as a compass, guiding your financial decision-making for years to come. They will serve as a bridge for clear communication, effectively translating complex financial information to both internal and external stakeholders, fostering trust and transparency.</p>
              `,
                links: [
                  { href: '#', title: 'Ed-Tech Solutions' },
                  { href: '#', title: 'M&A and Partnerships' },
                ],
              },
              {
                src: '/images/help.png',
                title: 'Gaming',
                text: "Office ipsum you must be muted. Prioritize too first-order first 5. Manage next make hammer supervisor. Awareness horse we've both awareness opportunity jumping company psl...",
                content: `
                <p class="intro">In the absence of a dedicated CFO, our virtual CFO services offer a comprehensive solution to fill that critical leadership gap. Our experienced professionals can seamlessly integrate with your team, providing the strategic financial guidance you need to excel in several key areas. This includes overseeing all financial operations, ensuring efficient management of financial reporting, budgeting, forecasting, and cash flow analysis.</p>
                <img src="/images/popup-help.png" alt="Virtual CFO Benefits" />
                <p>The virtual CFO will also collaborate with your leadership team to develop long-term financial strategies that perfectly align with your overall business goals. Together, they will delve into your business goals and aspirations, meticulously crafting a long-term financial strategy perfectly aligned with your vision. This strategic roadmap will serve as a compass, guiding your financial decision-making for years to come. They will serve as a bridge for clear communication, effectively translating complex financial information to both internal and external stakeholders, fostering trust and transparency.</p>
              `,
                links: [
                  { href: '#', title: 'Ed-Tech Solutions' },
                  { href: '#', title: 'M&A and Partnerships' },
                ],
              },
            ],
          },
        ]}
      />
      <ImageTextFullscreen
        src="/images/image-text-fullscreen.png"
        text="At Synergy, we believe that operational optimization is the key to unlocking your business potential. Let us help you streamline your operations, reduce costs, and achieve remarkable results."
        link={{
          title: 'Contact us to start your journey',
          href: '#',
        }}
      />
    </>
  )
}
