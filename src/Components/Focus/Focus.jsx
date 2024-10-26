import React from 'react'
import './Focus.css'
import gallery_1 from '../../assets/gallery-1.png'
import gallery_2 from '../../assets/gallery-2.png'
import gallery_3 from '../../assets/gallery-3.png'
import gallery_4 from '../../assets/gallery-4.png'

function SonchCard({ title, content, image }) {
  console.log('Card props:', { title, content, image }); // Debugging log
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
        
      </div>
    </div>
  )
}

const newsItems = [
  {
    title: "Digital Literacy",
    content: "SONCH empowers communities by providing essential digital skills, helping individuals access information, enhance employability, and engage with modern technology for personal and professional growth.",
    image: gallery_1
  },
  {
    title: "Climate and Environmental Change",
    content: "We address the urgent challenges of climate change by promoting sustainable practices, raising awareness, and working on projects that protect natural resources and mitigate environmental impacts.",
    image: gallery_2
  },
  {
    title: "Women Empowerment",
    content: "SONCH promotes gender equality by ensuring women’s active participation in decision-making processes, livelihood generation, and community leadership, leading to a more just and equitable society.",
    image: gallery_3
  },
  {
    title: "Livelihood Promotion",
    content: "Through skill development and training programs, SONCH equips marginalized individuals with the tools to secure sustainable livelihoods, fostering economic independence and community development.",
    image: gallery_4
  },
  {
    title: "Primary Education",
    content: "We are committed to increasing access to quality education for children in underserved communities, providing them with the knowledge and skills to create a brighter future.",
    image: gallery_1
  },
  {
    title: "Healthcare & Sanitation",
    content: "SONCH promotes health awareness and sanitation by advocating for preventive care, hygiene practices, and clean water, ensuring healthier and more resilient communities.",
    image: gallery_2
  }
];


export default function SonchNews() {
  console.log('News items:', newsItems); // Debugging log
  return (
    <div className="sonch-news">
      <div className="sonch-news-container">
        <h1 className="sonch-news-title">Focus Area</h1>
        <div className="sonch-news-grid">
          {newsItems.map((item, index) => (
            <SonchCard key={index} {...item} />
          ))}
        </div>
      </div>
    </div>
  )
}