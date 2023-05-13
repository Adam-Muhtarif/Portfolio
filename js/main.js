// Active Link
const links = document.querySelectorAll(".links li a");
links.forEach((link) => {
  link.addEventListener("click", () => {
    links.forEach((link) => {
      link.classList.remove("active");
    });
    link.classList.add("active");
  });
});

// Navbar Background
window.addEventListener("scroll", () => {
  if (scrollY >= 125) {
    document.querySelector("header").classList.add("addBackground");
  } else {
    document.querySelector("header").classList.remove("addBackground");
  }

  // Change Active Link On Scroll

  if (window.scrollY < 793.75) {
    links.forEach((link) => {
      link.classList.remove("active");
    });
    document.querySelector("nav .home").classList.add("active");
  }

  if (window.scrollY >= 750) {
    links.forEach((link) => {
      link.classList.remove("active");
    });
    document.querySelector("nav .about").classList.add("active");
  }

  if (window.scrollY >= 1525) {
    links.forEach((link) => {
      link.classList.remove("active");
    });
    document.querySelector("nav .resume").classList.add("active");
  }

  if (window.scrollY >= 2825) {
    links.forEach((link) => {
      link.classList.remove("active");
    });
    document.querySelector("nav .services").classList.add("active");
  }

  if (window.scrollY >= 3723.75) {
    links.forEach((link) => {
      link.classList.remove("active");
    });
    document.querySelector("nav .skills").classList.add("active");
  }

  if (window.scrollY >= 4350) {
    links.forEach((link) => {
      link.classList.remove("active");
    });
    document.querySelector("nav .projects").classList.add("active");
  }

  if (window.scrollY >= 5698.75) {
    links.forEach((link) => {
      link.classList.remove("active");
    });
    document.querySelector("nav .blog").classList.add("active");
  }

  if (window.scrollY >= 7298.75) {
    links.forEach((link) => {
      link.classList.remove("active");
    });
    document.querySelector("nav .contact").classList.add("active");
  }
});

// Menu Button
document.querySelector("nav .links + div").addEventListener("click", () => {
  document.querySelector(".mobile-nav").classList.toggle("hide");
});
