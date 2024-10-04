"use client";

import React from "react";
import { Github, Linkedin, FileText, MailIcon } from "lucide-react";
import DarkModeSwitch from "./DarkModeSwitch";

const ClickableIcon = ({
  href,
  Icon,
}: {
  href: string;
  Icon: React.ElementType;
}) => {
  return (
    <a
      href={href}
      className="transition-colors duration-300"
      target="_blank"
      rel="noreferrer"
    >
      <Icon className="w-8 h-8 text-gray-400 hover:text-violet-500" />
    </a>
  );
};

const IconsData = [
  { href: "https://github.com/Frankie-WSM", Icon: Github },
  { href: "https://www.linkedin.com/in/franki3/", Icon: Linkedin },
];

const Header = ({
  mailtoUrl,
  resumeUrl,
  darkMode,
  setDarkMode,
}: {
  mailtoUrl: string;
  resumeUrl: string;
  darkMode: boolean;
  setDarkMode: (darkMode: boolean) => void;
}) => {
  return (
    <header className="sticky top-0 z-50 bg-background text-foreground shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-4 sm:space-x-6">
            <DarkModeSwitch darkMode={darkMode} setDarkMode={setDarkMode} />
            <a
              href={resumeUrl}
              className="inline-flex items-center px-3 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-violet-600 hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-500 transition duration-150 ease-in-out"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FileText
                className="mr-2 -ml-1 h-5 w-5 sm:h-7 sm:w-7"
                aria-hidden="true"
              />
              Resume
            </a>
          </div>
          <div className="flex items-center space-x-4 sm:space-x-6">
            <div className="flex space-x-4">
              {IconsData.map((iconData, index) => (
                <ClickableIcon
                  key={index}
                  href={iconData.href}
                  Icon={iconData.Icon}
                />
              ))}
            </div>
            <a
              href={mailtoUrl}
              className="inline-flex items-center px-3 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-violet-600 hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-500 transition duration-150 ease-in-out"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MailIcon
                className="mr-2 -ml-1 h-5 w-5 sm:h-7 sm:w-7"
                aria-hidden="true"
              />
              Email me
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
