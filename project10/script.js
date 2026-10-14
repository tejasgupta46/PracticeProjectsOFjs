
const image = document.querySelector("#img");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      image.classList.add("show");
    } else {
      image.classList.remove("show");
    }
  });
}, {
  threshold: 0.2
});

observer.observe(image);
