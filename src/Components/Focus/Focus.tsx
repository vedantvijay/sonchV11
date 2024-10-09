import React from 'react';
import { Cloud, Camera, Radio, Wind, Recycle, Droplet } from "lucide-react";
import './Focus.css';

const topics = [
  {
    icon: <Cloud className="icon" />,
    title: "Climate Change",
    description: "Accelerating effective solutions for mitigation and adaptation",
  },
  {
    icon: <Camera className="icon" />,
    title: "Environment, Social, Governance (ESG)",
    description: "Balancing Growth with Sustainability",
  },
  {
    icon: <Radio className="icon" />,
    title: "Just Transition",
    description: "Accelerating Just Climate Action for a Forward-Looking Future",
  },
  {
    icon: <Wind className="icon" />,
    title: "Air Quality Management",
    description: "Breathable and Healthy Air for All",
  },
  {
    icon: <Recycle className="icon" />,
    title: "Circular Economy",
    description: "Closing the Loop for a Sustainable World",
  },
  {
    icon: <Droplet className="icon" />,
    title: "Clean Water for All",
    description: "Conserve Water, Conserve Life",
  },
];

export default function Focus() {
  return (
    <div className="focus">
      <div className="container-focus">
        <h2 className="title">Focus Area</h2>
        <div className="topics-grid">
          {topics.map((topic, index) => (
            <div key={index} className="topic-card">
              <div className="icon-wrapper">{topic.icon}</div>
              <h3 className="topic-title">{topic.title}</h3>
              <p className="topic-description">{topic.description}</p>
              <a href="#" className="read-more">
                READ MORE
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}