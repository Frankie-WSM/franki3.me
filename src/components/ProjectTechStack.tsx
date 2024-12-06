import React from "react";
import Image from "next/image";

interface ProjectTechIconProps {
  name: string;
  imagePath: string;
}

const ProjectTechIcon: React.FC<ProjectTechIconProps> = ({
  name,
  imagePath,
}) => (
  <div className="relative group">
    <div className="relative h-16 w-16">
      <Image
        src={imagePath}
        alt={`${name} icon`}
        layout="fill"
        className="object-contain"
      />
    </div>
    <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
      {name}
    </span>
  </div>
);

interface Technology {
  name: string;
  image: string;
}

interface ProjectTechStackProps {
  technologies: Technology[];
}

const ProjectTechStack: React.FC<ProjectTechStackProps> = ({
  technologies,
}) => (
  <div className="flex justify-evenly items-center w-full pt-4">
    {technologies.map((tech, index) => (
      <ProjectTechIcon key={index} name={tech.name} imagePath={tech.image} />
    ))}
  </div>
);

export default ProjectTechStack;
