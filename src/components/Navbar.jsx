import { useEffect } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { Link } from "react-router-dom";

const Navbar = () => {
  gsap.registerPlugin(useGSAP);
  useGSAP(() => {
    gsap.from(".nav-logo", {
      opacity: 0,
      x: 0,
      duration: .3,
      delay: .5,
      stagger: {
        amount: 1,
      },
    });
  });
  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const links = document.querySelectorAll(".nav-content li a");
    const header = document.querySelector("header");

    const setActive = () => {
      let currentSection = "";

      if (window.scrollY > 5) {
        header.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
      } else {
        header.style.background = "none";
      }

      sections.forEach((e) => {
        const sectionTop = e.offsetTop - 50;
        const sectionY = e.offsetHeight;

        if (
          window.scrollY >= sectionTop &&
          window.scrollY < sectionTop + sectionY
        ) {
          currentSection = e.getAttribute("id");
        }
        links.forEach((link) => {
          if (link.getAttribute("href") === `#${currentSection}`) {
            link.classList.add("active");
          } else {
            link.classList.remove("active");
          }
        });
      });
    };

    window.addEventListener("scroll", setActive);
    setActive();

    return () => {
      window.removeEventListener("scroll", setActive);
    };
  }, []);

  const openNav = () => {
    const nav = document.querySelector(".nav-content");
    nav.style.transform = "translateX(1px)";
  };

  const closeNav = () => {
    const nav = document.querySelector(".nav-content");
    nav.style.transform = "translateX(1000px)";
  };

  return (
    <header>
      <div className="nav">
        <h1 className="nav-logo">Logo</h1>
        <ul className="nav-content">
          <li id="close" onClick={closeNav}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#000"
            >
              <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
            </svg>
          </li>
          <li>
            <a href="#hero">Home</a>
          </li>
          <li>
            <a href="#about">About Us</a>
          </li>
          <li>
            <a href="#blog">Blog</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          <li className="nav-portfolio">
            <Link to="/portfolio">Portfolio</Link>
          </li>
        </ul>
        <div className="toggle" onClick={openNav}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#ffff"
          >
            <path d="M160-240q-17 0-28.5-11.5T120-280q0-17 11.5-28.5T160-320h640q17 0 28.5 11.5T840-280q0 17-11.5 28.5T800-240H160Zm0-200q-17 0-28.5-11.5T120-480q0-17 11.5-28.5T160-520h640q17 0 28.5 11.5T840-480q0 17-11.5 28.5T800-440H160Zm0-200q-17 0-28.5-11.5T120-680q0-17 11.5-28.5T160-720h640q17 0 28.5 11.5T840-680q0 17-11.5 28.5T800-640H160Z" />
          </svg>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
