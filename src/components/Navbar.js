"use client";

import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react"; 
import Link from "next/link";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedMode = localStorage.getItem("theme");
    if (savedMode === "dark") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);

    if (newMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <nav className="w-full bg-gray-100 dark:bg-primary-dark shadow-md py-4 absolute top-0">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6">
        <Link href="/" className="text-2xl font-bold text-gray-900 dark:text-white">
          ThreeWorks
        </Link>

        <button
          onClick={toggleTheme}
          className="p-2 rounded-md bg-gray-300 dark:bg-secondary hover:bg-gray-400 dark:hover:bg-[#e6307c] transition"
        >
          {darkMode ? <Sun className="w-5 h-5 text-white" /> : <Moon className="w-5 h-5 text-gray-900" />}
        </button>
      </div>
    </nav>
  );
}
