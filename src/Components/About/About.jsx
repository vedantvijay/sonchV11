import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import './About.css'

const foundersData = [
  {
    name: "Dr. Shaibal Gupta",
    image: "/placeholder.svg?height=300&width=300",
    description: "During formative days, Padmashree awardee (late) Dr. Saibal Gupta, founder and member-secretary of Asian Development Research Institute (ADRI, Patna) has inspired and guided CEED in numerous ways and helped in shaping its future course of actions in areas of social development, sustainability and inclusivity. Dr. Saibal Gupta was part of the CEED's advisory group till his last breath."
  },
  {
    name: "Dr. Ramesh Kumar",
    image: "/placeholder.svg?height=300&width=300",
    description: "Dr. Ramesh Kumar, a renowned environmental scientist, has been instrumental in shaping CEED's approach to sustainable development. With over two decades of experience in climate change research, Dr. Kumar brings invaluable expertise to our advisory board. His work has significantly influenced our strategies for promoting renewable energy and environmental conservation in the Indo-Gangetic plain."
  }
]

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
}

const AnimatedSection = ({ children, className }) => {
  const ref = React.useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={fadeInUp}
      className={className}
    >
      {children}
    </motion.section>
  )
}

const About = () => {
  const founderRef = useRef(null); // Create a ref for the founder section

  return (
    <div className="about-container">
      <AnimatedSection className="about">
        
        <h2>Our Organisation</h2>
        <p><strong>SONCH</strong>  is a mission-driven organization dedicated to fostering inclusive growth and sustainable development. We work to empower communities by creating opportunities for self-governance, promoting equitable access to resources, and driving positive social change. Through collaborative efforts, SONCH aims to create a lasting impact by uplifting marginalized sections of society and advocating for a just, equitable future for all.
SONCH strives to build a just society where equality and self-governance thrive. By strengthening local governance systems and encouraging the active participation of marginalized communities, SONCH helps people improve their living conditions and make informed decisions about their future. The organization’s efforts focus on sustainable development, women empowerment, education, healthcare, and livelihood promotion.
</p>
        <p>Our mission:</p>
        <ul>
          <li>Advocate for progressive policies</li>
          <li>Enhance community capacities</li>
          <li>Promote social equity</li>
          <li>Empower local governance</li>
        </ul>
        <p>We focus on empowering <em>marginalized groups</em>, ensuring their voices are heard in decision-making processes. Our goal is to create a society where <strong>every individual can thrive with dignity</strong>.</p>
        <p>Join us in building stronger, more resilient communities.</p>
      </AnimatedSection>

      <AnimatedSection className="about">
        
        <h2>Our Journey</h2>
        <p><strong>SONCH</strong> has an interesting saga even before its advent. Much before the name and organisation CEED formalised for leading the transformative works in the Indo-Gangetic plain, a team of young, passionate and highly motivated professionals started a public awareness on renewable energy through 'Bihar Renewable Energy Development Support Network (BREDSN)' in Bihar in 2010, which for the first time in the state created buzz around cleaner energy, particularly solar, and its decentralised models with the aim to promote energy access and climate solutions.</p>
      </AnimatedSection>

      <AnimatedSection className="about">
        
        <h2>Mission and Goal</h2>
        <p><strong>SONCH</strong> is committed to empowering communities by promoting self-governance and sustainable development. Our mission is to enhance socio-economic and cultural growth through skill development, knowledge-sharing, and equitable participation in decision-making. We aim to create an inclusive society where individuals are equipped with the resources to improve their quality of life and foster positive social change.</p>
      </AnimatedSection>
      <AnimatedSection className="about">
        
        <h2>Our Values</h2>
        <p> At <strong>SONCH</strong>, we are driven by a commitment to transparency, teamwork, and accountability in all our activities. We believe in the power of democratic processes and collective decision-making to foster sustainable development. Our guiding principles emphasize community-led initiatives, where local participation is central to addressing social challenges. We uphold the belief that true change begins from within the community, and through empowerment, people can overcome poverty and achieve lasting development. We prioritize ethical practices, inclusivity, and social responsibility in everything we do.</p>
      </AnimatedSection>

      <AnimatedSection className="founder" id="founder" ref={founderRef}>
        <div className="founder-content">
      
          <h2>Founder & Advisory Group</h2>
          <p>In order to bring forth and provide a solution driven approach in climate and energy related fields in the Indo-Gangetic plain, CEED has carved a niche in a very short span of time that seeks an optimal and smart approach to work toward environmental conservation.</p>
          <p>Over the years, CEED has roped in luminaries, changemakers and notable people with impeccable domain expertise in advisory roles to build and nurture the work and activities in a variety of fields. The advisory group of the CEED is composed of noted experts, academicians, development professionals and people of repute from all walks of life. The advisory group plays a significant role in validating the mission and vision of CEED and regularly advises on matters of important issues while shaping the sustainable trajectory of the organisation.</p>
          {foundersData.map((founder, index) => (
            <motion.div 
              key={index} 
              className="founder-profile"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <motion.img 
                src={founder.image} 
                alt={founder.name} 
                className="founder-image"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              />
              <div className="founder-info">
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  {founder.name}
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  {founder.description}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </div>
      </AnimatedSection>
    </div>
  )
}

export default About
