import "./scss/style.scss";

const body = document.querySelector("body");
const main = document.querySelector("main");
const btnOpen = document.querySelector("#btnOpen");
const btnClose = document.querySelector("#btnClose");
const media = window.matchMedia("(width < 69.375em)"); // media Query. also written as window.matchMedia("(width < 69.375em)").matches; while will give true or false.
const navContent = document.querySelector(".nav__content");
const navOverlay = document.querySelector(".nav__overlay");

// This function handles the opening of the mobile navigation.
function openMobileMenu() {
	console.log("Open menu"); // Test.

	btnOpen.setAttribute("aria-expanded", "true"); // This is for the accessibility for screen readers.

	body.classList.add("noscroll"); // Adding the class noscroll to the body tag when the mobile navigation is open.

	navContent.removeAttribute("inert");

	main.setAttribute("inert", "");

	btnClose.focus(); // To focus on the close menu btn navigation is open and vice versa.
}

// This function handles the closing of the mobile navigation.
function closeMobileMenu() {
	console.log("Close menu"); // Test.

	btnOpen.setAttribute("aria-expanded", "false"); // This is for the accessibility for screen readers also for the navigation.

	body.classList.remove("noscroll"); // Removing the class when the close menu is being clicked

	navContent.setAttribute("inert", "");

	main.removeAttribute("inert");

	btnOpen.focus();
}

function setupNav(e) {
	if (e.matches) {
		// This is mobile
		console.log("This is mobile");

		navContent.setAttribute("inert", ""); // setting the attribute inert to the navContent on mobile screen

		// Delayed the animation for 500ms for the style when window is being reloaded. and set to display block
		setTimeout(() => {
			navContent.style.display = "block";

			navOverlay.style.display = "block";
		}, 500);
	} else {
		// This is desktop.
		console.log("This is desktop");

		navContent.removeAttribute("inert"); // Removing the attribute on desktop.

		main.removeAttribute("inert");

		navContent.style.display = "";
	}
}

setupNav(media);

// Open button event listener.
btnOpen.addEventListener("click", openMobileMenu);

// Close button event listener.
btnClose.addEventListener("click", closeMobileMenu);

// This is an event listener for media query to change the style at different screen sizes.
media.addEventListener("change", function (e) {
	// console.log(`window.matchMedia change = ${+e.matches}`);
	setupNav(e);
});

document.addEventListener("keyup", (e) => {
	if (e.key == "Tab") {
		console.log(document.activeElement);
	}
});
