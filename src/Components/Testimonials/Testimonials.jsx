"use client"
import React, { useRef } from 'react'
import './Testimonials.css'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'
import { motion, useInView } from 'framer-motion'

const testimonials = [
  {
    name: "Aditya Pratap Singh",
    location: "Patna, Bihar",
    image: user_1,
    text: "Sonch NGO revolutionized my farming. Their sustainable agriculture program doubled my crop yield and reduced expenses. Now I can provide better for my family and send my kids to school. Sonch gave me hope for a brighter future in farming."
  },
  {
    name: "Satwik Srivastava",
    location: "Bareily, UP",
    image: user_2,
    text: "Thanks to Sonch NGO, I'm the first in my village to attend college. They provided books, convinced my parents about girls' education, and continue to mentor me. Sonch changed my life's trajectory."
  },
  {
    name: "KripaShankar",
    location: "Baliya, UP",
    image:user_3,
    text: "Sonch NGO's program transformed me. I learned tailoring, got a micro-loan, and started my business. Now I'm financially independent and active in village decisions. Sonch empowered me and many women in our community."
  },
  {
    name: "William Jackson",
    location: "Edusity, USA",
    image: user_4,
    text: "Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations."
  }
]

export default function Testimonials() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <div className="testimonials" ref={ref}>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        Testimonials
      </motion.h2>
      <div className="testimonials-grid">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            className="testimonial-card"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 1, delay: 0.2 + index * 0.2 }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 8px 16px rgba(0, 0, 0, 0.1)",
              transition: { duration: 0.3 }
            }}
          >
            <div className="user-info">
              <motion.img 
                src={testimonial.image} 
                alt={testimonial.name}
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              />
              <div>
                <h3>{testimonial.name}</h3>
                <span>{testimonial.location}</span>
              </div>
            </div>
            <p>{testimonial.text}</p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}