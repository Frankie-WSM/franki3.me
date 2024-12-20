"use client";

import TechCarousel from "@/components/TechCarousel";
import ProjectTechStack from "@/components/ProjectTechStack";
import Image from "next/image";

const technologies = [
  { name: "TypeScript", image: "/images/techs/ts.png" },
  { name: "Python", image: "/images/techs/py.png" },
  { name: "React", image: "/images/techs/react.png" },
  { name: "Next.js", image: "/images/techs/next.png" },
  { name: "NodeJS", image: "/images/techs/node.png" },
  { name: "Tailwind CSS", image: "/images/techs/tailwind.png" },
  { name: "GraphQL", image: "/images/techs/gql.png" },
  { name: "Electron", image: "/images/techs/electron.png" },
  { name: "Git", image: "/images/techs/git.png" },
  { name: "Jest", image: "/images/techs/jest.png" },
  { name: "React Testing", image: "/images/techs/rtl.png" },
  { name: "AWS", image: "/images/techs/aws.png" },
  { name: "Azure", image: "/images/techs/azure.png" },
];

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center p-4 sm:p-8 mt-4">
      <main className="max-w-4xl w-full">
        <section className="mb-12">
          <div className="flex flex-col sm:flex-row items-center sm:items-center sm:space-x-8 mb-6">
            <div className="relative w-40 h-40 sm:w-60 sm:h-60 mb-4 sm:mb-0 rounded-full overflow-hidden flex-shrink-0 border-violet-500 border-4 sm:border-8">
              <Image
                src="/images/me.jpg"
                alt="Frank McMorrow"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="flex flex-col items-center sm:space-y-1">
              <h1 className="text-5xl sm:text-7xl font-bold text-center sm:text-left">
                Hi! I&apos;m Frankie
              </h1>
              <h2 className="text-xl sm:text-2xl font-bold text-center sm:text-left text-gray-400">
                (Also Frank)
              </h2>
            </div>
          </div>
          <div className="text-center sm:text-left">
            <p className="text-l sm:text-2xl my-8">
              A full-stack developer passionate about building bespoke web
              experiences, powerful mobile apps, and fun tools.
            </p>
            <p className="text-l sm:text-2xl my-8">
              I&apos;m currently studying for my undergrad in Computer Science
              at Loughborough University and seeking opportunities for after I
              graduate!
            </p>
          </div>
          <h2 className="text-3xl font-bold mb-6">My Tech Stack</h2>
          <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
            <TechCarousel technologies={technologies} speed={50} />
          </div>
        </section>
        <section className="mb-12">
          <h3 className="text-2xl font-bold mb-4">My Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-100 dark:bg-gray-800 rounded-3xl p-4 flex flex-col h-full">
              <div className="flex-1">
                <h4 className="text-xl font-semibold mb-2">Globe Hopper</h4>
                <p>A fun platformer game built with Pygame.</p>
              </div>
              <ProjectTechStack
                technologies={[
                  { name: "Python", image: "/images/techs/py.png" },
                  { name: "Pygame", image: "/images/techs/pygame.png" },
                ]}
              />
            </div>
            <div className="bg-gray-100 dark:bg-gray-800 rounded-3xl p-4 flex flex-col h-full">
              <div className="flex-1">
                <h4 className="text-xl font-semibold mb-2">Babblr (WIP)</h4>
                <p>
                  A language learning app, using LLMs to roleplay different
                  situations.
                </p>
              </div>
              <ProjectTechStack
                technologies={[
                  { name: "Flutter", image: "/images/techs/flutter.png" },
                  { name: "Dart", image: "/images/techs/dart.png" },
                  { name: "AWS Amplify", image: "/images/techs/amplify.png" },
                ]}
              />
            </div>
            <div className="bg-gray-100 dark:bg-gray-800 rounded-3xl p-4 flex flex-col h-full">
              <div className="flex-1">
                <h4 className="text-xl font-semibold mb-2">This Website!</h4>
                <p>
                  A simple personal website, built with Next.js, React,
                  TypeScript, and Tailwind CSS.
                </p>
              </div>
              <ProjectTechStack
                technologies={[
                  { name: "Next.js", image: "/images/techs/next.png" },
                  { name: "React", image: "/images/techs/react.png" },
                  { name: "TypeScript", image: "/images/techs/ts.png" },
                  { name: "Tailwind CSS", image: "/images/techs/tailwind.png" },
                ]}
              />
            </div>
            <div className="bg-gray-100 dark:bg-gray-800 rounded-3xl p-4 flex flex-col h-full">
              <div className="flex-1">
                <h4 className="text-xl font-semibold mb-2">More to come...</h4>
                <p>Watch this space.</p>
              </div>
              <ProjectTechStack
                technologies={[{ name: "👀", image: "/images/techs/eyes.png" }]}
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
