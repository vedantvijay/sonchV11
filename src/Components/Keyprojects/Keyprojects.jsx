import React from 'react'
import './Keyprojects.css'
import { useNavigate } from 'react-router-dom';
import gallery_1 from '../../assets/gallery-1.png'
import gallery_2 from '../../assets/gallery-2.png'
import gallery_3 from '../../assets/gallery-3.png'

function SonchCard({ title, content, image }) {
  const navigate = useNavigate();
  const handleGalleryClick = () => {
    navigate('/keymore');
  };

  return (
    <div className="snch-card">
      <div className="snch-card-image-container">
        <img 
          className="snch-card-image" 
          src={image}
          alt={title}
        />
      </div>
      <div className="snch-card-content">
        <h2 className="snch-card-title">{title}</h2>
        <p className="snch-card-text">
          {content}
        </p>
        <button className="snch-card-button" onClick={handleGalleryClick}>
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
  }
];

export default function SonchNews() {
  return (
    <div className="snch-news">
      <div className="snch-news-container">
        <h1 className="snch-news-title">Projects</h1>
        <div className="snch-news-grid">
          {newsItems.map((item, index) => (
            <SonchCard key={index} {...item} />
          ))}
        </div>
      </div>
    </div>
  )
}