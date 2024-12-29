// loading screen
window.addEventListener("load", () => {
  const loading = document.querySelector(".loading");
  loading.style.display = "none";
});

// navbar
const bg = document.querySelectorAll(".bg");
const sections = document.querySelectorAll("section");
const titleHero = document.querySelector(".hero h1");

const links = document.querySelectorAll(".nav-content li a");
const header = document.querySelector("header");

const setActive = () => {
  let currentSection = "";
  if (window.scrollY > 5) {
    header.style.backgroundColor = "rgba(0, 0, 0, 0.5)"
  }else {
    header.style.background = "none"
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

// nav mobile
function openNav() {
  const nav = document.querySelector(".nav-content")
  nav.style.transform = "translateX(1px)"
}

function closeNav(){
  const nav = document.querySelector(".nav-content")
  nav.style.transform = "translateX(1000px)"
}

window.addEventListener("scroll", setActive);
setActive();

window.addEventListener("scroll", () => {
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

    // sections.forEach((e) => {
    //   if(e.offsetTop - top < 550){
    //       e.classList.add("active")
    //   }else {
    //       e.classList.remove("active")
    //   }
    // })
});
