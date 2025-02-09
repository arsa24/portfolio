"use client";

import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
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
    <div className="min-h-screen bg-primary-light text-text-light dark:bg-primary-dark dark:text-text-dark">

      {/* Hero Section */}
      <section className="h-screen flex items-center px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
          <div className="flex flex-col justify-center">
            <h1 className="text-5xl font-extrabold">Empowering Future Developers</h1>
            <p className="text-lg mt-4">Kami adalah murid SMK Wira Informatika Global yang sedang belajar dan mengembangkan desain serta teknologi digital.</p>
            <div className="mt-6 flex flex-wrap gap-4">
              <a href="#team" className="bg-primary-dark text-text-dark px-6 py-3 rounded-lg font-semibold dark:bg-secondary">Meet Our Team</a>
              <a href="#projects" className="border border-primary-dark dark:border-secondary px-6 py-3 rounded-lg font-semibold">Our Projects</a>
            </div>
          </div>
          <div className="flex justify-center">
            <img src="/source/hero-image.png" alt="Hero Image" className="w-full max-w-sm md:max-w-md rounded-lg shadow-lg" />
          </div>
        </div>
      </section>

      {/* Meet Our Team */}
      <section id="team" className="py-16 px-6 text-center">
        <h2 className="text-4xl font-extrabold">Meet Our Team</h2>
        <p className="text-gray-500 dark:text-gray-400 mt-3">Kami adalah murid SMK Wira Informatika Global yang sedang belajar dan berkembang.</p>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 mt-10 max-w-5xl mx-auto">
          {[
            { name: "Muhammad Rifa", role: "UI/UX Designer & Illustrator", image: "/source/ipay.jpeg" },
            { name: "Annisa Ramadani Fatah", role: "UI/UX Designer", image: "/source/anisa.jpg" },
            { name: "Arij Sahmawan", role: "Full-Stack Developer", image: "/source/arij.jpg" }
          ].map((member, index) => (
            <div key={index} className="bg-cardLight dark:bg-cardDark p-6 rounded-lg shadow-lg">
              <img src={member.image} alt={member.name} className="w-24 h-24 md:w-32 md:h-32 rounded-full mx-auto object-cover" />
              <h3 className="text-lg md:text-xl font-semibold mt-4 text-text-dark">{member.name}</h3>
              <p className="text-sm text-gray-300 dark:text-gray-400">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Our Project */}
      <section id="projects" className="py-16 px-6 text-center bg-gray-300 dark:bg-gray-800">
        <h2 className="text-4xl font-extrabold">Our Project</h2>
        <p className="text-gray-600 dark:text-gray-400 mt-3">Salah satu proyek unggulan yang telah kami kerjakan.</p>
        <div className="max-w-4xl mx-auto mt-10">
          <div className="bg-white dark:bg-gray-700 p-6 md:p-8 rounded-lg shadow-lg flex flex-col md:flex-row items-center gap-6">
            <img src="/source/ecommerce.png" alt="Website E-Commerce" className="w-full md:w-64 rounded-lg shadow-lg" />
            <div className="text-left">
              <h3 className="text-xl md:text-2xl font-semibold">Website E-Commerce</h3>
              <p className="text-gray-600 dark:text-gray-300 mt-2">Membangun platform e-commerce dengan pengalaman pengguna yang lancar dan modern.</p>
              <a href="#" className="mt-4 inline-block bg-gray-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-gray-500 transition">View Project</a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-10 px-6 text-center">
        <h3 className="text-xl md:text-2xl font-bold">Get in Touch</h3>
        <p className="text-gray-400 mt-2">Kami siap membantu proyek digital Anda!</p>
        <div className="flex justify-center flex-wrap gap-6 mt-4">
          <a href="#" className="hover:text-gray-300 transition">LinkedIn</a>
          <a href="#" className="hover:text-gray-300 transition">GitHub</a>
          <a href="#" className="hover:text-gray-300 transition">Email</a>
        </div>
        <p className="text-gray-500 mt-6">© 2025 Digital Team. All rights reserved.</p>
      </footer>
    </div>
  );
}
