window.addEventListener("load", () => {
  const loading = document.querySelector(".loading");
  loading.style.display = "none";
});

const items = document.querySelectorAll(".item");
const carouselList = document.querySelector(".carousel .list");

let currentIndex = Math.floor(items.length / 2); // Awalnya pilih item tengah

function updateSlider(index) {
  const itemWidth = items[0].offsetWidth + 20; // Lebar item + gap
  const offset = -(itemWidth * index) + (window.innerWidth / 2 - itemWidth / 2);

  carouselList.style.transform = `translateX(${offset}px)`;

  items.forEach((item, i) => {
    if (i === index) {
      item.classList.add("active"); // Tambah efek untuk card tengah
    } else {
      item.classList.remove("active"); // Hilangkan efek untuk card lain
    }
  });
}

// Set posisi awal slider
updateSlider(currentIndex);

// Tambahkan event listener untuk klik
items.forEach((item, index) => {
  item.addEventListener("click", () => {
    currentIndex = index;
    updateSlider(currentIndex);
  });
});
