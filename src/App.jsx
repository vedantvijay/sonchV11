import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Programs from './Components/Programs/Programs'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Focus from './Components/Focus/Focus'
import Timeline from './Components/Timeline/timeline'
import Campus from './Components/Campus/Campus'
import Testimonials from './Components/Testimonials/Testimonials'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import VideoPlayer from './Components/VideoPlayer/VideoPlayer'
import Gallery from './Components/Gallary/Gallery'
import News from './Components/News/News'
const App = () => {
  const [playState, setPlayState] = useState(false);

  return (
    <Router>
      <div>
        <Navbar />
        <div className="container" >
          <Routes>
            <Route path="/" element={<Home setPlayState={setPlayState} />} />
            <Route path="/programs" element={<ProgramsPage />} />
            <Route path="/about" element={<AboutPage setPlayState={setPlayState} />} />
            <Route path="/campus" element={<CampusPage />} />
            <Route path="/testimonials" element={<TestimonialsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/focus" element={<Focus />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/sonch-in-news" element={<NewsPage/>} />
          </Routes>
        </div>
        <Footer />
        <VideoPlayer playState={playState} setPlayState={setPlayState} />
      </div>
    </Router>
  )
}

const Home = ({ setPlayState }) => (
  <>
    <Hero />
    <Title subTitle='Our Mission' title='What We Focus On' />
    <Programs />
    
    <Title subTitle='Gallery' title='Our Journey' />
    <Campus />
    <Timeline />
    <Title subTitle='OUR IMPACT' title='What we have achieved' />
    <Testimonials />
    <Title subTitle='Contact Us' title='Get in Touch' />
    <Contact />
  </>
)



const AboutPage = ({ setPlayState }) => (
  <>
    <Title subTitle='About Us' title='Our Story' />
    <About setPlayState={setPlayState} />
  </>
)
const ProgramsPage = () => (
  <>
    <Title subTitle='Our Programs' title='What We Offer' />
    <Programs />
  </>
)

const CampusPage = () => (
  <>
    <Title subTitle='Our Campus' title='Where We Learn' />
    <Campus />
  </>
)

const TestimonialsPage = () => (
  <>
    <Title subTitle='OUR IMPACT' title='What We Have Achieved' />
    <Testimonials />
  </>
)

const ContactPage = () => (
  <>
    <Title subTitle='Contact Us' title='Get in Touch' />
    <Contact />
  </>
)
const GalleryPage = () => (
  <>
   
    <Gallery/>
  </>
)
const NewsPage = () => (
  <>
   
    <News/>
  </>
)

export default App