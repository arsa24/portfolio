const bg = document.querySelectorAll(".bg");
const titleHero = document.querySelector(".hero h1");

window.addEventListener("scroll", () => {
  let top = window.scrollY;

  bg.forEach((e, i) => {
    let speed = i === 0 || i === bg.length - 1 ? 0.3 : (i + 1) / 2;

    if (i === 3) {
      e.style.transform = `translateY(${Math.min(top * speed, window.innerHeight / 2)}px)`;
    } else {
      e.style.transform = `translateY(${top * speed}px)`;
    }
  });

  titleHero.style.transform = `translateY(${top / 2}px)`;
});
