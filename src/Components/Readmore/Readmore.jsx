import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import './Readmore.css'
import gallery_1 from '../../assets/gallery-1.png'
import gallery_2 from '../../assets/gallery-2.png'
import gallery_3 from '../../assets/gallery-3.png'
import gallery_4 from '../../assets/gallery-4.png'

const newsItems = [
  {
    title: "Sonch on Trees",
    content: "At Sonch, we believe in the power of trees to transform communities and combat climate change. Our tree planting initiatives have helped restore forests, provide habitats for wildlife, and improve air quality in rural areas across India.",
    image: gallery_1
  },
  {
    title: "Education Program Reaches Milestone",
    content: "Sonch's education program has successfully helped 1000 underprivileged children access quality education in remote areas, transforming lives and communities.",
    image: gallery_2
  },
  {
    title: "Sustainable Agriculture Workshop",
    content: "Sonch organized a workshop on sustainable agriculture techniques, benefiting over 500 farmers in drought-prone regions and promoting food security.",
    image: gallery_3
  },
  {
    title: "Women Empowerment Through Skill Development",
    content: "Sonch's skill development program has empowered 250 women with tailoring skills, enabling them to start their own businesses and achieve financial independence.",
    image: gallery_4
  },
  {
    title: "Clean Water Project Expands",
    content: "Sonch has expanded its clean water project, providing access to safe drinking water for 10 more villages in rural areas, improving health and sanitation.",
    image: gallery_1
  },
  {
    title: "Annual Fundraising Gala Success",
    content: "Sonch's annual fundraising gala raised record amounts to support ongoing projects and launch new initiatives for community development and environmental conservation.",
    image: gallery_2
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
      <AnimatedSection className="founder" id="founder" ref={founderRef}>
        <div className="founder-content">
          
          <h1>News Highlights</h1>
          <p>Here are some of the latest updates and initiatives from Sonch:</p>
          {newsItems.map((item, index) => (
            <motion.div 
              key={index} 
              className="founder-profile"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <motion.img 
                src={item.image} 
                alt={item.title} 
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
                  {item.title}
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  {item.content}
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
