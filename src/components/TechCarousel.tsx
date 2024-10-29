import React from "react";
import Marquee from "react-fast-marquee";

interface Technology {
  image: string;
  name: string;
}

interface TechCarouselProps {
  technologies: Technology[];
  speed?: number;
}

const TechCarousel: React.FC<TechCarouselProps> = ({
  technologies,
  speed = 50,
}) => {
  return (
    <Marquee speed={speed} gradient={false}>
      {technologies.map((tech, index) => (
        <div key={index} className="flex flex-col items-center mx-2 sm:mx-4">
          <img
            src={tech.image}
            alt={tech.name}
            className="h-10 sm:h-16 w-10 sm:w-16 object-contain"
          />
          <p className="text-center mt-2 text-xs sm:text-sm">{tech.name}</p>
        </div>
      ))}
    </Marquee>
  );
};

export default TechCarousel;
