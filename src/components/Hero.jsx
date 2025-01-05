import { useEffect, useState } from "react";

const Hero = () => {
  const title = "PORTFOLIO";
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed, setSpeed] = useState(250);

  useEffect(() => {
    const bg = document.querySelectorAll(".bg");
    const titleHero = document.querySelector(".hero h1");

    if (!bg.length || !titleHero) {
      console.error(
        "Element(s) not found. Make sure DOM is rendered properly."
      );
      return;
    }

    const handleTyping = () => {
      if (isDeleting) {
        setCurrentText((prev) => prev.slice(0, prev.length - 1));
        setSpeed(105);
      } else {
        setCurrentText((prev) => title.slice(0, prev.length + 1));
        setSpeed(250);
      }

      if (!isDeleting && currentText === title) {
        setTimeout(() => {
          setIsDeleting(true);
        }, 1000);
      } else if (isDeleting && currentText === "") {
        setTimeout(() => {
          setIsDeleting(false);
        }, 500);
      }
    };

    const typingInterval = setInterval(handleTyping, speed);

    const handleScroll = () => {
      let top = window.scrollY;
      bg.forEach((e, i) => {
        let speed = i === 0 || i === bg.length - 1 ? 0.3 : (i + 1) / 2;
        if (i === 3) {
          e.style.transform = `translateY(${Math.min(
            top * speed,
            window.innerHeight / 2
          )}px)`;
        } else {
          e.style.transform = `translateY(${top * speed}px)`;
        }
      });
      titleHero.style.transform = `translateY(${top / 2}px)`;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      clearInterval(typingInterval);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [currentText, isDeleting, speed, title]);

  return (
    <section id="hero">
      <div className="hero">
        <div className="bg bg-1"></div>
        <div className="bg bg-5"></div>
        <div className="ttl">
          <h1 className="flex items-center justify-center">
            {currentText}
            <span className="md:text-[5rem] text-black shadow-none text-[3rem]">|</span>
          </h1>
          <p className="absolute left-0 right-0 top-16 h-dvh md:top-36 sm:top-24 max-w-sm:top-20">PORTFOLIO DARI BEBERAPA MURID WIBAL</p>
        </div>
        <div className="bg bg-2"></div>
        <div className="bg bg-3"></div>
        <div className="bg bg-4"></div>
      </div>
    </section>
  );
};

export default Hero;
