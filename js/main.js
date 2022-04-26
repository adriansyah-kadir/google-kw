let contentItems = document.querySelectorAll(".content-item");
let navSearch = document.querySelector(".nav-search");
let sideNav = document.querySelector(".side-nav");
let sideNavTog = document.querySelector(".side-nav-tog");

navSearch.firstElementChild.value = "";

contentItems.forEach((e) => {
  e.addEventListener("click", () => {
    navSearch.style.display = "flex";
    navSearch.firstElementChild.value = e.parentElement.href;
  });
});

// setTimeout(() => {
//   sideNav.classList.add("side-nav-active");
// }, 2000);

sideNavTog.onclick = () => {
  sideNav.style.display = "block";
  setTimeout(() => {
    sideNav.classList.add("side-nav-active");
  }, 10);
};

sideNav.onclick = function () {
  this.classList.remove("side-nav-active");
  setTimeout(() => {
    this.style.display = "none";
  }, 300);
};
