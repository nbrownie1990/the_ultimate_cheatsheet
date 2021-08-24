/*
	Directive by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function ($) {
  var $window = $(window),
    $body = $("body");

  // Breakpoints.
  breakpoints({
    wide: ["1281px", "1680px"],
    normal: ["981px", "1280px"],
    narrow: ["841px", "980px"],
    narrower: ["737px", "840px"],
    mobile: ["481px", "736px"],
    mobilep: [null, "480px"],
  });

  // Play initial animations on page load.
  $window.on("load", function () {
    window.setTimeout(function () {
      $body.removeClass("is-preload");
    }, 100);
  });
})(jQuery);

// Events for the accordion on the subsites.

const accordionTitles = document.querySelectorAll(".accordion-title");

accordionTitles.forEach((accordionTitle) => {
  accordionTitle.addEventListener("click", () => {
    const height = accordionTitle.nextElementSibling.scrollHeight;
    console.log(height);
    accordionTitle.classList.toggle("active-header");
    if (accordionTitle.classList.contains("active-header")) {
      accordionTitle.nextElementSibling.style.maxHeight = `${height}px`;
    } else {
      accordionTitle.nextElementSibling.style.maxHeight = "0px";
    }
  });
});
