import React from 'react'
import './Keyprojects.css'
import { useNavigate } from 'react-router-dom';
import gallery_1 from '../../assets/gallery-1.png'
import gallery_2 from '../../assets/gallery-2.png'
import gallery_3 from '../../assets/gallery-3.png'
import gallery_4 from '../../assets/gallery-4.png'


function SonchCard({ title, content, image }) {
  const navigate = useNavigate();
   const handleGalleryClick = () => {
    navigate('/keymore'); // Route to the Gallery component
  };
  console.log('Card props:', { title, content, image });
  // Debugging log
  return (
    <div className="sonch-card">
      <img 
        className="sonch-card-image" 
        src={image}
        alt={title}
      />
      <div className="sonch-card-content">
        <h2 className="sonch-card-title">{title}</h2>
        <p className="sonch-card-text">
          {content}
        </p>
        <button className="sonch-card-button" onClick={handleGalleryClick}>
          Learn More
        </button>
      </div>
    </div>
  )
}

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

export default function SonchNews() {
  console.log('News items:', newsItems); // Debugging log
  return (
    <div className="sonch-news">
      <div className="sonch-news-container">
        <h1 className="sonch-news-title">Sonch in News</h1>
        <div className="sonch-news-grid">
          {newsItems.map((item, index) => (
            <SonchCard key={index} {...item} />
          ))}
        </div>
      </div>
    </div>
  )
}