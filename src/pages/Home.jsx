import Hero from "../components/Hero";
import About from "../components/About";
import Blog from "../components/Blog";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Home = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.utils.toArray(".title-section").forEach((title) => {
      gsap.fromTo(
        title,
        {
          opacity: 0,
          x: 150,
          skewX: 30,
        },
        {
          opacity: 1,
          x: 0,
          skewX: 0,
          duration: 1,
          delay: 0.5,
          scrollTrigger: {
            trigger: title,
            start: "top 80%",
            end: "top 30%",
            scrub: true,
          },
        }
      );
    });

    gsap.utils.toArray(".text-section").forEach((p) => {
        gsap.fromTo(
          p,
          {
            opacity: 0,
            x: 150,
            skewX: 30,
          },
          {
            opacity: 1,
            x: 0,
            skewX: 0,
            duration: 1,
            delay: 0.5,
            scrollTrigger: {
              trigger: p,
              start: "top 80%",
              end: "top 30%",
              scrub: true,
            },
          }
        );
      });
  }, []);

  return (
    <>
      <Hero />
      <About />
      <Blog />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
