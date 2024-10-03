"use client";

import Image from "next/image";

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
            <h1 className="text-5xl sm:text-7xl font-bold text-center sm:text-left">
              Hi! I&apos;m Frankie
            </h1>
          </div>
          <div className="text-center sm:text-left">
            <p className="text-l sm:text-2xl my-8">
              A full-stack developer passionate about building bespoke web
              experiences as well as useful and fun tools.
            </p>
            <p className="text-l sm:text-2xl my-8">
              I&apos;m currently studying for my undergrad in Computer Science
              at Loughborough University and seeking opportunities for after I
              graduate!
            </p>
          </div>
        </section>
        <section className="mb-12">
          <h3 className="text-2xl font-bold mb-4">My Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
              <h4 className="text-xl font-semibold mb-2">Globe Hopper</h4>
              <p>A fun platformer game built with Pygame.</p>
            </div>
            <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
              <h4 className="text-xl font-semibold mb-2">Babblr</h4>
              <p>
                A language learning website, using LLMs to roleplay different
                situations. (WIP)
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
