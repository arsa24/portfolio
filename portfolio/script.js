// loading

window.addEventListener("load", () => {
  const loading = document.querySelector(".loading");
  loading.style.display = "none";
});

// modal
function closeModal() {
  const modal = document.querySelector(".modal");
  document.addEventListener("click", () => {
    modal.classList.add("hidden-modal");
  });
}

// carousel
const items = document.querySelectorAll(".item");
const carouselList = document.querySelector(".carousel .list");
let currentIndex = Math.floor(items.length / 2);

const main = document.querySelector("main");

function updateSlider(index) {
  const itemWidth = items[0].offsetWidth + 20;
  const offset = -(itemWidth * index) + (window.innerWidth / 2 - itemWidth / 2);

  carouselList.style.transform = `translateX(${offset}px)`;

  items.forEach((item, i) => {
    if (i === index) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
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
