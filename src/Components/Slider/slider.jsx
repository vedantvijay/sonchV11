'use client'

import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import './slider.css'
import mrinalini from '../../assets/Mrinalini profpic.jpeg'
import gallery_1 from '../../assets/gallery-1.png'
const slides = [
  {
    image: "https://media.geeksforgeeks.org/wp-content/uploads/geeksforgeeks-13.png",
    title: "JUST TRANSITION FOR FUTURE READY JHARKHAND",
    subtitle: "The project aimed at facilitating just and inclusive transition with developmental goal and guided by net-zero emission."
  },
  {
    image: gallery_1,
    title: "BUILDING A CLIMATE-RESILIENT JHARKHAND",
    subtitle: "Way-forward for adaptation and mitigation"
  },
  {
    image: mrinalini,
    title: "COMMUNITY ENGAGEMENT",
    subtitle: "Working together for a sustainable future"
  }
]

export default function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }
  
  return (
    <div className="slider-container">
      <div className="slides">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`slide ${index === currentSlide ? 'active' : ''}`}
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="slide-content">
              <h1>{slide.title}</h1>
              <p>{slide.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
      
      <button className="nav-button prev" onClick={prevSlide} aria-label="Previous slide">
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button className="nav-button next" onClick={nextSlide} aria-label="Next slide">
        <ChevronRight className="w-6 h-6" />
      </button>

      <div className="more-projects">
        <button className="more-projects-btn">
          More Projects
        </button>
      </div>

      <div className="slide-indicators">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`indicator ${index === currentSlide ? 'active' : ''}`}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          ></button>
        ))}
      </div>
    </div>
  )
}

