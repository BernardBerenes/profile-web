import React, { useState, useEffect } from "react";

const images = [
  "src/assets/images/project-1.png",
  "src/assets/images/project-2.png",
  "src/assets/images/project-3.png",
  "src/assets/images/project-4.png",
];

const ScrollImageChanger: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;
    const newIndex = Math.min(
      Math.floor(scrollPosition / windowHeight),
      images.length - 1
    );
    setActiveIndex(newIndex);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flex flex-col items-center">
        <div className="sticky top-0">
            <img src={images[activeIndex]} alt={`Gambar ${activeIndex + 1}`} className="w-full h-auto max-w-screen-md"/>
        </div>
    </div>
  );
};

export default ScrollImageChanger;
