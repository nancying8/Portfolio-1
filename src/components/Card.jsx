// import React, { useState } from 'react';
// import { motion } from 'framer-motion';

// const Card= () => {
//   // Define the items and corresponding images
//   const items = [
//     { label: 'Sketch', image: 'https://res.cloudinary.com/du7l1kfwn/image/upload/f_auto,q_auto/okmv4ro3gan47xgzn3sj' },
//     { label: 'Moodboard', image: 'https://res.cloudinary.com/du7l1kfwn/image/upload/f_auto,q_auto/olb9sebttbzeatdblecw' },
//     { label: 'Colour Palette', image: 'https://res.cloudinary.com/du7l1kfwn/image/upload/f_auto,q_auto/okmv4ro3gan47xgzn3sj' },
//     { label: 'Mockup', image: 'https://res.cloudinary.com/du7l1kfwn/image/upload/f_auto,q_auto/olb9sebttbzeatdblecw' },
//   ];

//   // State to track the selected image
//   const [selectedImage, setSelectedImage] = useState(items[0].image);

//   return (
//     <div style={{ display: 'flex', alignItems: 'center', height: '100vh' }}>
//       {/* Left Side: List */}
//       <ul style={{ width: '30%', listStyle: 'none', padding: '0', margin: '0' }}>
//         {items.map((item) => (
//           <li
//             key={item.label}
//             style={{
//               margin: '1rem 0',
//               cursor: 'pointer',
//               fontWeight: selectedImage === item.image ? 'bold' : 'normal',
//             }}
//             onClick={() => setSelectedImage(item.image)}
//           >
//             {item.label}
//           </li>
//         ))}
//       </ul>

//       {/* Right Side: Image */}
//       <div style={{ width: '70%', display: 'flex', justifyContent: 'center' }}>
//         <motion.img
//           key={selectedImage} // Key ensures Framer Motion recognizes the change
//           src={selectedImage}
//           alt="Selected work"
//           style={{
//             width: '80%',
//             height: 'auto',
//             borderRadius: '8px',
//             boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
//           }}
//           initial={{ opacity: 0, x: 50 }}
//           animate={{ opacity: 1, x: 0 }}
//           exit={{ opacity: 0, x: -50 }}
//           transition={{ duration: 0.5 }}
//         />
//       </div>
//     </div>
//   );
// };

// export default Card;


import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Card = () => {
  // Define the items and corresponding details
  const items = [
    {
      label: 'Sketch',
      image: 'https://res.cloudinary.com/du7l1kfwn/image/upload/f_auto,q_auto/okmv4ro3gan47xgzn3sj',
      title: 'Sketch Design',
      description: 'A hand-drawn concept that lays the foundation for the final design.',
    },
    {
      label: 'Moodboard',
      image: 'https://res.cloudinary.com/du7l1kfwn/image/upload/f_auto,q_auto/olb9sebttbzeatdblecw',
      title: 'Moodboard',
      description: 'A collage of ideas and inspiration for the project’s visual tone.',
    },
    {
      label: 'Colour Palette',
      image: 'https://res.cloudinary.com/du7l1kfwn/image/upload/f_auto,q_auto/okmv4ro3gan47xgzn3sj',
      title: 'Colour Palette',
      description: 'A carefully curated set of colors to convey the brand’s identity.',
    },
    {
      label: 'Mockup',
      image: 'https://res.cloudinary.com/du7l1kfwn/image/upload/f_auto,q_auto/olb9sebttbzeatdblecw',
      title: 'Mockup',
      description: 'A digital representation of the final design for presentation.',
    },
  ];

  // State to track the selected item
  const [selectedItem, setSelectedItem] = useState(items[0]);

  return (
    <div style={{ display: 'flex', alignItems: 'center', height: '100vh' }}>
      {/* Left Side: List */}
      <ul style={{ width: '30%', listStyle: 'none', padding: '0', margin: '0' }}>
        {items.map((item) => (
          <li
            key={item.label}
            style={{
              margin: '1rem 0',
              cursor: 'pointer',
              fontWeight: selectedItem.label === item.label ? 'bold' : 'normal',
              fontSize: selectedItem.label === item.label ? '1.2rem' : '1rem',
              color: selectedItem.label === item.label ? '#007bff' : '#333',
              transition: 'all 0.3s ease',
            }}
            onClick={() => setSelectedItem(item)}
          >
            {item.label}
          </li>
        ))}
      </ul>

      {/* Right Side: Image and Details */}
      <div style={{ width: '70%', textAlign: 'center' }}>
        {/* Image */}
        <motion.img
          key={selectedItem.image} // Key ensures Framer Motion recognizes the change
          src={selectedItem.image}
          alt={selectedItem.label}
          style={{
            width: '80%',
            height: 'auto',
            borderRadius: '8px',
            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
          }}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5 }}
        />

        {/* Title */}
        <motion.h2
          key={selectedItem.title}
          style={{ marginTop: '1rem', fontSize: '1.5rem', color: '#333' }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {selectedItem.title}
        </motion.h2>

        {/* Description */}
        <motion.p
          key={selectedItem.description}
          style={{ fontSize: '1rem', color: '#666' }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {selectedItem.description}
        </motion.p>
      </div>
    </div>
  );
};

export default Card;
