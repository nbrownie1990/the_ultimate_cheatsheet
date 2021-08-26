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

//COOKIE CONSENT
//(Classic)
const CookieConsent = window.CookieConsent;

// Initialize the popup and open it
const cc = new CookieConsent({
  title: "I use cookies 🍪",
  // ... other options
  description: `Click “Accept” to enable us to use cookies to personalize
                this site. Customize your preferences in your
                Cookie Settings or click “Reject” if you do not want me
                to use cookies for this purpose. Learn more in our
                <a href="https://www.ninabraunger.de/datenschutz.html">Cookie Notice</a>.`,

  buttons: {
    acceptAll: "Accept",
    acceptSelected: "Accept Cookies",
    reject: "Reject",
    showSettings: "Cookies settings",
    hideSettings: "Hide",
  },

  categories: {
    essentials: {
      label: "Essential",
      description: `Essential cookies are necessary for features which
                    are essential to your use of our site or services,
                    such as account login, authentication, and site security.`,
      checked: true,
      mandatory: true,
    },
    analytics: {
      label: "Analytics",
      description: `Analytics cookies allow us to analyze your visits and
                    actions on our websites, and offer you a more relevant
                    experience.`,
    },
  },

  cookie: {
    // Name of the cookie storing the consent state
    name: "cookie_consent",

    // If null, will take `location.hostname` by default
    domain: null,

    // Duration of the consent
    expiryDays: 365,

    // If true, the cookies will only be allowed over https
    secure: false,

    // See https://developer.mozilla.org/fr/docs/Web/HTTP/Headers/Set-Cookie/SameSite
    sameSite: "Lax",
  },
});

// Events
cc.on("accept", (cc /* your CookieConsent instance */) =>
  console.log("Accepted !")
);
cc.on("reject", (cc) => console.log("Rejected !"));
cc.on("change", (cc) => console.log("Any change !"));
// All events can also be binded to `CookieConsent`.

// Main accessors
console.log(cc.status); // accepted, rejected
console.log(cc.acceptedCategories); // ["essential", "analytics"]
// also available under `CookieConsent`

// Re-open the popup to allow user to change its consent
cc.open();
// also available under `CookieConsent` once initialized
