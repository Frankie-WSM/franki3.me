"use client";
import React, { useState, useEffect } from "react";
import Header from "./Header";

const ClientWrapper = ({ children }: { children: React.ReactNode }) => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const isDarkMode = localStorage.getItem("darkMode") === "true";
    setDarkMode(isDarkMode);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <div className="flex flex-col min-h-screen">
      <Header
        mailtoUrl="mailto:frankie.mcmorrow@outlook.com"
        resumeUrl="/documents/CV.pdf"
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />
      <main className="flex-grow bg-background text-foreground">
        {children}
      </main>
    </div>
  );
};

export default ClientWrapper;
