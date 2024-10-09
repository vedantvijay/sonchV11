"use client"

import React, { useEffect, useRef } from "react"
import { motion, useInView, useAnimation } from "framer-motion"
import styles from './timeline.module.css'; // Use .module.css for CSS modules

const timelineEvents = [
  {
    year: "2010",
    title: "SONCH Founded",
    description: "SONCH was established with a mission to empower rural communities through sustainable development initiatives."
  },
  {
    year: "2015",
  
    title: "Sustainable Agriculture Program Launched",
    description: "Introduced innovative farming techniques to over 1000 farmers, doubling crop yields and reducing expenses."
  },
  {
    year: "2018",
    title: "Girls' Education Initiative",
    description: "Started a program to promote girls' education, providing books and mentorship to 500 young women."
  },
  {
    year: "2020",
    title: "Micro-loan Program",
    description: "Launched a micro-loan program, empowering 200 women to start their own businesses and achieve financial independence."
  },
  {
    year: "2023",
    title: "Expansion to New Regions",
    description: "Extended our programs to three new states, impacting over 10,000 lives across rural India."
  }
]

const TimelineEvent = ({ event, index }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const mainControls = useAnimation()

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible")
    }
  }, [isInView, mainControls])

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={mainControls}
      variants={{
        hidden: { opacity: 0, y: 75 },
        visible: { opacity: 1, y: 0 }
      }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className={`${styles.timelineEvent} ${index % 2 === 0 ? styles.left : styles.right}`}
    >
      <div className={styles.eventContent}>
        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <h3 className={styles.year}>{event.year}</h3>
          </div>
          <div className={styles.cardContent}>
            <h4 className={styles.title}>{event.title}</h4>
            <p className={styles.description}>{event.description}</p>
          </div>
        </div>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
          className={styles.eventMarker}
        />
      </div>
    </motion.div>
  )
}

 function Timeline() {
  return (
    <section className={styles.timelineSection}>
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={styles.sectionTitle}
      >
        Our Journey
      </motion.h2>
      <div className={styles.timelineContainer}>
        <motion.div
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          style={{ originY: 0 }}
          className={styles.timelineLine}
        />
        {timelineEvents.map((event, index) => (
          <TimelineEvent key={index} event={event} index={index} />
        ))}
      </div>
    </section>
  )
}
export default Timeline