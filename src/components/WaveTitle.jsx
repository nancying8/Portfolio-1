import React from "react"; // Import React to use JSX
import { motion } from "framer-motion"; // Import motion from Framer Motion for animations

// WaveTitle component creates a waving text animation effect for each letter by using {motion}
// {text} is a prop that pass the data to other file and able to put specific words.
// Split the provided text into an array of individual letters

const WaveTitle = ({ text }) => {
const letters = text.split(""); 
  
return (
    <div className="title">
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          initial={{ y: 0 }}
          animate={{ y: [0, -10, 0] }}
          transition={{
            duration: 1,
            delay: index * 0.1,
            repeat: Infinity,
            repeatDelay: 0.5,
          }}
          style={{ display:"inline-block", margin: "0 2px"}}
          >
          {letter}
        </motion.span>
      ))}
    </div>
  );
};

export default WaveTitle;
