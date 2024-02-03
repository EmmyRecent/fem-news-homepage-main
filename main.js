import "./scss/style.scss";

const btnOpen = document.querySelector("#btnOpen");

const media = window.matchMedia("(width < 69.375em)"); // media Query. also written as window.matchMedia("(width < 69.375em)").matches; while will give either true or false.

// This function handles the opening of the mobile navigation.
function openMobileMenu() {
	console.log("Open menu"); // Test.

	btnOpen.setAttribute("aria-expanded", "true"); // This is for the accessibility for screen readers.
}

function setupNav(e) {
	if (e.matches) {
		// This is mobile
		console.log("This is mobile");
	} else {
		// This is desktop.
		console.log("This is desktop");
	}
}

btnOpen.addEventListener("click", openMobileMenu);

media.addEventListener("change", function (e) {
	// console.log(`window.matchMedia change = ${+e.matches}`);
	setupNav(e);
});
