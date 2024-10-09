"use client"

import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import './Gallery.css'
import gallery_1 from '../../assets/gallery-1.png'
import gallery_2 from '../../assets/gallery-2.png'
import gallery_3 from '../../assets/gallery-3.png'
import gallery_4 from '../../assets/gallery-4.png'

const images = [
 gallery_1,
  gallery_2,
  gallery_3,
  gallery_4,
  gallery_1,
 gallery_1,
  gallery_2,
  gallery_3,
]

export default function Gallery() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <div className="gallery-container" ref={ref}>
      <div className="gallery-content">
        <motion.h2
          className="gallery-title"
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Our Gallery
        </motion.h2>
        <div className="gallery-grid">
          {images.map((src, index) => (
            <motion.div
              key={index}
              className="gallery-item"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 1, delay: 0.2 + index * 0.1 }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 8px 16px rgba(0, 0, 0, 0.1)",
                transition: { duration: 0.3 }
              }}
            >
              <img
                src={src}
                alt={`Gallery image ${index + 1}`}
                className="gallery-image"
              />
              <motion.div
                className="gallery-overlay"
                whileHover={{ opacity: 1 }}
              >
                <p className="gallery-overlay-text">Image {index + 1}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}