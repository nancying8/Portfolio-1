
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import "../styles/BlenzPage.css";



const BlenzDetails= () => {
  const items = [
    {
      label: 'Original',
      image: 'https://res.cloudinary.com/du7l1kfwn/image/upload/f_auto,q_auto/jdvphoucqjpk7uzziqfb',
      title: 'Original Poster',
      description: 'The poster was',
    },
    {
      label: 'Moodboard',
      image: '/images/moodboard.jpg',
      title: 'Moodboard',
      description: 'A collage of ideas and inspiration for the project’s visual tone.',
    },
    {
      label: 'Colour Palette',
      image: '/images/colour-palette.jpg',
      title: 'Colour Palette',
      description: 'A carefully curated set of colors to convey the brand’s identity.',
    },
    {
      label: 'Mockup',
      image: '/images/mockup.jpg',
      title: 'Change',
      description: 'A digital representation of the final design for presentation.',
    },
  ];

  const [selectedItem, setSelectedItem] = useState(items[0]);

  return (
    <section>

      
      <div>
        <div>
          
        </div>
      </div>
      <div className="portfolio-container">
        {/* Left Side: List */}
        <ul className="portfolio-list">
          {items.map((item) => (
            <li
            key={item.label}
            className={`portfolio-list-item ${
              selectedItem.label === item.label ? 'active' : ''
            }`}
            onClick={() => setSelectedItem(item)}
            >
              {item.label}
            </li>
          ))}
        </ul>

        {/* Right Side: Image and Details */}
        <div className="portfolio-details">
          {/* Image */}
          <motion.img
            key={selectedItem.image}
            src={selectedItem.image}
            alt={selectedItem.label}
            className="portfolio-image"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            />

          {/* Title */}
          <motion.h2
            key={selectedItem.title}
            className="portfolio-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            >
            {selectedItem.title}
          </motion.h2>

          {/* Description */}
          <motion.p
            key={selectedItem.description}
            className="portfolio-description"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            >
            {selectedItem.description}
          </motion.p>
        </div>
      </div>
   
    </section>
  );
};

export default BlenzDetails;
