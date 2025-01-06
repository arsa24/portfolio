import illust from "../../assets/illust.svg";
import dev from "../../assets/dev.svg";
import ui from "../../assets/ui.svg";
import "./portfolio.css";
import { useEffect } from "react";

const Portfolio = () => {
  useEffect(() => {
    // loading
    window.addEventListener("load", () => {
      const loading = document.querySelector(".loading");
      loading.style.display = "none";
    });

    // carousel
    const items = document.querySelectorAll(".item");
    const carouselList = document.querySelector(".carousel .list");
    let currentIndex = Math.floor(items.length / 2);

    function updateSlider(index) {
      const itemWidth = items[0].offsetWidth + 20;
      const offset =
        -(itemWidth * index) + (window.innerWidth / 2 - itemWidth / 2);

      carouselList.style.transform = `translateX(${offset}px)`;

      items.forEach((item, i) => {
        if (i === index) {
          item.classList.add("active-card");
        } else {
          item.classList.remove("active-card");
        }
      });
    }

    updateSlider(currentIndex);

    items.forEach((item, index) => {
      item.addEventListener("click", () => {
        currentIndex = index;
        updateSlider(currentIndex);
      });
    });

    const nextButton = document.querySelector(".next");
    const prevButton = document.querySelector(".prev");

    nextButton.addEventListener("click", () => {
      currentIndex = (currentIndex + 1) % items.length;
      updateSlider(currentIndex);
    });

    prevButton.addEventListener("click", () => {
      currentIndex = (currentIndex - 1 + items.length) % items.length;
      updateSlider(currentIndex);
    });
  }, []);

  return (
    <main>
      <h1 className="title-carousel">Choose The People</h1>
      <div className="carousel">
        <div className="list">
          <div className="item">
            <div className="item-img dev">
              <img className="character" src={dev} alt="" />
              <div className="info">
                <h1>Arij Sahmawan</h1>
                <h3>Developer</h3>
                <a href="./arij" className="btn-portfolio">
                  <button className="bg-white">Lihat Portfolio</button>
                </a>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="item-img ui">
              <img className="character" src={ui} alt="" />
              <div className="info">
                <h1>Anisa Rahmawati</h1>
                <h3>UI/UX Designer</h3>
                <a href="./anisa/" className="btn-portfolio">
                  <button className="bg-white">Lihat Portfolio</button>
                </a>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="item-img illust">
              <img className="character" src={illust} alt="" />
              <div className="info">
                <h1>Muhammad Rifa</h1>
                <h3>Illurtrator & Designer</h3>
                <a href="./rifa/" className="btn-portfolio">
                  <button className="bg-white">Lihat Portfolio</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="carousel-controls">
        <div className="prev">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="32px"
            viewBox="0 -960 960 960"
            width="32px"
            fill="#000"
          >
            <path d="M400-80 0-480l400-400 71 71-329 329 329 329-71 71Z" />
          </svg>
        </div>
        <div className="next">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="32px"
            viewBox="0 -960 960 960"
            width="32px"
            fill="#000"
          >
            <path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z" />
          </svg>
        </div>
      </div>
    </main>
  );
};

export default Portfolio;
