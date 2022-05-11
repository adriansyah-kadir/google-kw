let contentItems = document.querySelectorAll(".content-item");
let navSearch = document.querySelector(".nav-search");
let sideNav = document.querySelector(".side-nav");
let sideNavTog = document.querySelector(".side-nav-tog");
let bub = document.querySelectorAll(".content > *");
let tabs = document.querySelector(".tabs");
console.log(bub);

navSearch.firstElementChild.value = "";

contentItems.forEach((e) => {
	e.addEventListener("click", () => {
		navSearch.style.display = "flex";
		navSearch.firstElementChild.value = e.parentElement.href;
	});
});

bub.forEach((e, n) => {
	e.addEventListener("click", () => {
		tabs.textContent++;
	});
});

// setTimeout(() => {
//   sideNav.classList.add("side-nav-active");
// }, 2000);

// sideNavTog.onclick = () => {
// 	sideNav.style.display = "block";
// 	setTimeout(() => {
// 		sideNav.classList.add("side-nav-active");
// 	}, 10);
// };

// sideNav.onclick = function () {
// 	this.classList.remove("side-nav-active");
// 	setTimeout(() => {
// 		this.style.display = "none";
// 	}, 300);
// };

window.onclick = (ev) => {
	if (ev.path.indexOf(sideNavTog) >= 0) {
		sideNav.style.display = "block";
		setTimeout(() => {
			sideNav.classList.add("side-nav-active");
		}, 10);
		return;
	}
	if (ev.path.indexOf(sideNav) < 0) {
		sideNav.classList.remove("side-nav-active");
		setTimeout(() => {
			sideNav.style.display = "none";
		}, 300);
	}
};
