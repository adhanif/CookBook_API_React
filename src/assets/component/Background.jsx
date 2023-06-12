

import React, { useState } from "react";
import "./Background.css";

const Background1 = () => {
  const [backgroundIndex, setBackgroundIndex] = useState(0);
  const backgrounds = [
    'https://img.freepik.com/free-photo/old-black-background-grunge-texture-dark-wallpaper-blackboard-chalkboard-room-wall_1258-28313.jpg?w=360',
    'https://images.alphacoders.com/238/238803.jpg',
    // Add more image URLs here
  ];

  const changeBackground = () => {
    setBackgroundIndex((prevIndex) => (prevIndex + 1) % backgrounds.length);
  };

  const backgroundStyle = {
    backgroundImage: backgrounds[backgroundIndex],
  };

  return (
    <div className="background-container">
      <div className="background-image" style={backgroundStyle} />
      <button onClick={changeBackground}>Change Background</button>
    </div>
  );
};

export default Background1;
