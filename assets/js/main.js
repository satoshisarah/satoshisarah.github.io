/**
 * Template Name: Gp - v4.7.0
 * Template URL: https://bootstrapmade.com/gp-free-multipurpose-html-bootstrap-template/
 * Author: BootstrapMade.com
 * License: https://bootstrapmade.com/license/
 */
(function () {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim();
    if (all) {
      return [...document.querySelectorAll(el)];
    } else {
      return document.querySelector(el);
    }
  };

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all);
    if (selectEl) {
      if (all) {
        selectEl.forEach((e) => e.addEventListener(type, listener));
      } else {
        selectEl.addEventListener(type, listener);
      }
    }
  };

  /**
   * Easy on scroll event listener
   */
  const onscroll = (el, listener) => {
    el.addEventListener("scroll", listener);
  };

  /**
   * Navbar links active state on scroll
   */
  let navbarlinks = select("#navbar .scrollto", true);
  const navbarlinksActive = () => {
    let position = window.scrollY + 200;
    navbarlinks.forEach((navbarlink) => {
      if (!navbarlink.hash) return;
      let section = select(navbarlink.hash);
      if (!section) return;
      if (
        position >= section.offsetTop &&
        position <= section.offsetTop + section.offsetHeight
      ) {
        navbarlink.classList.add("active");
      } else {
        navbarlink.classList.remove("active");
      }
    });
  };
  window.addEventListener("load", navbarlinksActive);
  onscroll(document, navbarlinksActive);

  /**
   * Scrolls to an element with header offset
   */
  const scrollto = (el) => {
    let header = select("#header");
    let offset = header.offsetHeight;

    let elementPos = select(el).offsetTop;
    window.scrollTo({
      top: elementPos - offset,
      behavior: "smooth",
    });
  };

  /**
   * Toggle .header-scrolled class to #header when page is scrolled
   */
  let selectHeader = select("#header");
  if (selectHeader) {
    const headerScrolled = () => {
      if (window.scrollY > 100) {
        selectHeader.classList.add("header-scrolled");
      } else {
        selectHeader.classList.remove("header-scrolled");
      }
    };
    window.addEventListener("load", headerScrolled);
    onscroll(document, headerScrolled);
  }

  /**
   * Back to top button
   */
  let backtotop = select(".back-to-top");
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add("active");
      } else {
        backtotop.classList.remove("active");
      }
    };
    window.addEventListener("load", toggleBacktotop);
    onscroll(document, toggleBacktotop);
  }

  /**
   * Mobile nav toggle
   */
  on("click", ".mobile-nav-toggle", function (e) {
    select("#navbar").classList.toggle("navbar-mobile");
    this.classList.toggle("bi-list");
    this.classList.toggle("bi-x");
  });

  /**
   * Mobile nav dropdowns activate
   */
  on(
    "click",
    ".navbar .dropdown > a",
    function (e) {
      if (select("#navbar").classList.contains("navbar-mobile")) {
        e.preventDefault();
        this.nextElementSibling.classList.toggle("dropdown-active");
      }
    },
    true
  );

  /**
   * Scrool with ofset on links with a class name .scrollto
   */
  on(
    "click",
    ".scrollto",
    function (e) {
      if (select(this.hash)) {
        e.preventDefault();

        let navbar = select("#navbar");
        if (navbar.classList.contains("navbar-mobile")) {
          navbar.classList.remove("navbar-mobile");
          let navbarToggle = select(".mobile-nav-toggle");
          navbarToggle.classList.toggle("bi-list");
          navbarToggle.classList.toggle("bi-x");
        }
        scrollto(this.hash);
      }
    },
    true
  );

  /**
   * Scroll with ofset on page load with hash links in the url
   */
  window.addEventListener("load", () => {
    if (window.location.hash) {
      if (select(window.location.hash)) {
        scrollto(window.location.hash);
      }
    }
  });

  /**
   * Preloader
   */
  let preloader = select("#preloader");
  if (preloader) {
    window.addEventListener("load", () => {
      preloader.remove();
    });
  }

  
   /* Clients Slider*/
 
  new Swiper(".clients-slider", {
    speed: 400,
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    slidesPerView: "auto",
    pagination: {
      el: ".swiper-pagination",
      type: "none",
      clickable: true,
    },
    breakpoints: {
      320: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
      480: {
        slidesPerView: 3,
        spaceBetween: 60,
      },
      640: {
        slidesPerView: 4,
        spaceBetween: 80,
      },
      992: {
        slidesPerView: 4,
        spaceBetween: 120,
      },
    },
  }); 

  /**
   * Porfolio isotope and filter
   */
  window.addEventListener("load", () => {
    let portfolioContainer = select(".portfolio-container");
    if (portfolioContainer) {
      let portfolioIsotope = new Isotope(portfolioContainer, {
        itemSelector: ".portfolio-item",
      });

      let portfolioFilters = select("#portfolio-flters li", true);

      on(
        "click",
        "#portfolio-flters li",
        function (e) {
          e.preventDefault();
          portfolioFilters.forEach(function (el) {
            el.classList.remove("filter-active");
          });
          this.classList.add("filter-active");

          portfolioIsotope.arrange({
            filter: this.getAttribute("data-filter"),
          });
          portfolioIsotope.on("arrangeComplete", function () {
            AOS.refresh();
          });
        },
        true
      );
    }
  });

  /**
   * Initiate portfolio lightbox
  
  const portfolioLightbox = GLightbox({
    selector: ".portfolio-lightbox",
  }); */

  /**
   * Portfolio details slider
  
  new Swiper(".portfolio-details-slider", {
    speed: 400,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true,
    },
  });*/
 
  /**
   * Testimonials slider
   
  new Swiper(".testimonials-slider", {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    slidesPerView: "auto",
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true,
    },
  });*/

  /**
   * Animation on scroll
   */
  window.addEventListener("load", () => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });
  });
})();

// SCRIPT FOR PARALLAX BITCOIN DIVIDER

const parallaxBitcoin = document.querySelectorAll(".parallax-bitcoin");
window.addEventListener("scroll", () => {
  let offset = window.pageYOffset;
  parallaxBitcoin.forEach((divider) => {
    divider.style.backgroundPositionY = `${offset * 0.8}px`;
  });
});

// REMOVE ADD ACTIVE CLASS OF SELECTOR
// function addCarouselActiveClass(el) {
//   carouselSelectors.forEach((coin) => {
//     coin.classList.remove("active-carousel-selector");
//   });
//   el.classList.add("active-carousel-selector");
// }

// TYPEWRITER FUNCTION
//const typewriterTextContainer = document.querySelector('.typewriter-writer-written-text')
let heroIndex = 0; // -------------- THIS INDEX IS FOR THE COINS ON HERO
const typewriterText =
  "bitcoin is a decentralized digital currency, without a central bank or single administrator, that can be sent from user to user on the peer-to-peer Bitcoin network without the need for intermediaries. ";
const typewriterTextArray = Array.from(typewriterText);
window.onload = () => {
  let i = 0;
  const typeIt = setInterval(() => {
    document.querySelector(".typewriter-written-text").innerHTML +=
      typewriterTextArray[i];
    i++;
    if (i >= typewriterTextArray.length) {
      clearInterval(typeIt);
      //carouselIntervalFunc(heroIndex); // FUNCTION FOR CAROUSEL STARTS WHEN TYPE WRITER IS DONE
     // document.querySelector(".carousel-controls").style.opacity = 1;
    }
  }, 15);
};

// // CAROUSEL INTERVAL -----------------------------------------------------------------------------

// let carouselIntervalBack; // DECLARED GLOBAL TO BE CLEARED ON CLICK FOR COIN SELECTOR
// let carouselIntervalForward; // DECLARED GLOBAL TO BE CLEARED ON CLICK FOR COIN SELECTOR

// // INTERVALS NOW RUN BACK AND FORTH THROUGH HERO
// function carouselIntervalFunc(heroIndex) {
//   let transformAmount = 0;
//   carouselIntervalForward = setInterval(() => {
//     // MOVEMENT
//     carouselContainer.style.transform = `translateX(-${(transformAmount += 20)}%)`;
//     selectorArray[heroIndex].classList.remove("active-carousel-selector");
//     heroIndex++; // INTERVAL UP FOR COIN SELECTOR ANIMATION

//     if (heroIndex > 3) {
//       // TRICKY LITTLE SWITCH TO SEEM LIKE ENDLESS CAROUSEL
//       heroIndex = 0;
//       setTimeout(() => {
//         carouselContainer.style.transition = "none";
//         carouselContainer.style.transform = `translateX(0%)`;
//         setTimeout(() => {
//           carouselContainer.style.transition = "transform ease 750ms";
//         }, 50);
//         transformAmount = 0;
//       }, 750);
//     }
//     selectorArray[heroIndex].classList.add("active-carousel-selector");
//     /* if (heroIndex > 3) {

//       // BACKWARDS INTERVAL  transition: transform ease 750ms;
//       clearInterval(carouselIntervalForward);
//       carouselIntervalBack = setInterval(() => {
//         carouselContainer.style.transform = `translateX(-${(transformAmount -= 25)}%)`;
//         selectorArray[heroIndex].classList.remove("active-carousel-selector");
//         heroIndex--;
//         selectorArray[heroIndex].classList.add("active-carousel-selector");
//         if (heroIndex <= 0) {
//           clearInterval(carouselIntervalBack);
//           carouselIntervalFunc(heroIndex);
//           return;
//         }
//       }, 4000);
   
//     }*/
//   }, 4000);
// }

// /* CAROUSEL FUNCTIONALITY */

// const carouselContainer = document.querySelector(".carousel-content-holder");
// const carouselSelectors = document.querySelectorAll(".carousel-selector");
// // CHANGE SLIDE ------------------------------------------------------------------
// const selectorArray = Array.from(carouselSelectors);

// carouselSelectors.forEach((selector) => {
//   selector.addEventListener("click", () => {
//     clearInterval(carouselIntervalForward);
//     clearInterval(carouselIntervalBack);
//     addCarouselActiveClass(selector);
//     const indexMove = selectorArray.indexOf(selector) * 20;
//     carouselContainer.style.transform = `translateX(-${indexMove}%)`;
//   });
// });

// MOBILE SWIPE ------------------------------------------------------------------

// let movement = 0;
// let startX;
// //let startY;
// let moveX;
// //let moveY;
// (function heroMobileSwipe() {
  // Y SCROLL CHECK FOR INTENDED UP DOWN SCROLLING -----------------
  /* carouselContainer.addEventListener("touchstart", (e) => {
    document.querySelector("html").style.overflowY = "hidden";
    startY = e.touches[0].clientY;
  });

  carouselContainer.addEventListener("touchmove", (e) => {
    moveY = e.touches[0].clientY;
  });

  carouselContainer.addEventListener("touchend", () => {
    if (moveY + 25 < startY) {
      const move = startY - moveY;
      window.scrollBy({
        top: move,
        left: 0,
        behavior: "smooth",
      });
      document.querySelector("html").style.overflowY = "scroll";
      return;
    } else if (moveY - 25 > startY) {
      const move = moveY - startY;
      window.scrollBy({
        top: -move,
        left: 0,
        behavior: "smooth",
      });
      document.querySelector("html").style.overflowY = "scroll";

      return;
    }
  });*/
  // X SCROLL CHECK FOR INTENDED SIDE SCROLLING ---------=============

//   carouselContainer.addEventListener("touchstart", (e) => {
//     startX = e.touches[0].clientX;
//     clearInterval(carouselIntervalForward);
//     clearInterval(carouselIntervalBack);
//   });

//   carouselContainer.addEventListener("touchmove", (e) => {
//     moveX = e.touches[0].clientX;
//   });

//   carouselContainer.addEventListener("touchend", () => {
//     if (moveX - 100 < startX) {
//       movement += 20;
//       if (movement >= 100) {
//         movement = 100;
//       }
//       document.body.style.overflowY = "hidden";
//       heroIndex++;
//       if (heroIndex > 3) {
//         // TRICKY LITTLE SWITCH TO SEEM LIKE ENDLESS CAROUSEL
//         heroIndex = 0;
//         setTimeout(() => {
//           carouselContainer.style.transition = "none";
//           carouselContainer.style.transform = `translateX(0%)`;
//           setTimeout(() => {
//             carouselContainer.style.transition = "transform ease 750ms";
//           }, 10);
//           movement = 0;
//         }, 550);
//       }
//       setTimeout(() => {
//         carouselContainer.style.transform = `translateX(-${movement}%)`;
//         document.body.style.overflowY = "scroll";
//         addCarouselActiveClass(selectorArray[heroIndex]);
//       }, 10);
//     }
//     if (moveX + 100 > startX) {
//       movement -= 20;
//       if (movement <= 0) {
//         movement = 0;
//       }
//       heroIndex--;
//       if (heroIndex < 0) {
//         heroIndex = 0;
//       }
//       document.body.style.overflowY = "hidden";
//       setTimeout(() => {
//         carouselContainer.style.transform = `translateX(-${movement}%)`;
//         document.body.style.overflowY = "scroll";
//         addCarouselActiveClass(selectorArray[heroIndex]);
//       }, 10);
//     }
//   });
// })();

// EVENT CAROUSEL  ------------------------------------------------------------

const eventCarouselCard = document.querySelectorAll(".event-content-card");
const eventCarouselContainer = document.querySelector(
  ".event-carousel-content"
);
const eventCarouselLeftArrow = document.querySelector(
  ".event-carousel-controls-arrow-left"
);
const eventCarouselRightArrow = document.querySelector(
  ".event-carousel-controls-arrow-right"
);

let eventCardWidth = eventCarouselCard.clientWidth;

// WIDTH DIVIDED BY LENGTH OF EVENT CARD TO HANDLE FUTURE LENGTH CHANGE
let eventContainerWidth =
  eventCarouselContainer.clientWidth / eventCarouselContainer.childElementCount;
let eventContainerWidthTotal = eventCarouselContainer.clientWidth;
let windowWidthEventCarouselCheck;

// FOR CONTINOUS CLICK THROUGH
const eventsCardArray = Array.from(
  document.querySelector(".event-carousel-content").children
);

window.addEventListener("resize", () => {
  eventContainerWidth =
    eventCarouselContainer.clientWidth /
    eventCarouselContainer.childElementCount;
  eventContainerWidthTotal = eventCarouselContainer.clientWidth;
  windowWidthEventCarouselCheck = window.innerWidth;
});

// EVENT CAROUSEL ENDLESS SCROLL FUNCTION --------------------------------------------

(function handleEventCarousel() {
  eventCarouselRightArrow.addEventListener("click", () => {
    const movement = -eventContainerWidth;
    eventCarouselContainer.style.transition = "transform ease-in-out 500ms";
    eventCarouselContainer.style.transform = `translateX(${movement}px)`;

    setTimeout(() => {
      const child = eventCarouselContainer.firstElementChild;
      eventCarouselContainer.removeChild(child);
      eventCarouselContainer.append(child);

      eventCarouselContainer.style.transition = null;
      eventCarouselContainer.style.transform = `translateX(0px)`;
      setTimeout(() => {
        eventCarouselContainer.style.transition = "transform ease-in-out 500ms";
      }, 10);
    }, 500);
  });
  eventCarouselLeftArrow.addEventListener("click", () => {
    const movement = -eventContainerWidth;

    eventCarouselContainer.style.transition = null;
    eventCarouselContainer.style.transform = `translateX(0px)`;
    eventCarouselContainer.style.transform = `translateX(${movement}px)`;
    const child = eventCarouselContainer.lastElementChild;
    eventCarouselContainer.removeChild(child);
    eventCarouselContainer.prepend(child);
    setTimeout(() => {
      eventCarouselContainer.style.transition = "transform ease-in-out 500ms";
      eventCarouselContainer.style.transform = `translateX(0px)`;
    }, 10);
  });
})();

// EVENT MOBILE SWIPE FUNCTION --------------------------------------------

(function heroMobileSwipe() {
  eventCarouselContainer.addEventListener("touchstart", (e) => {
    document.querySelector("html").style.overflowY = "hidden";
    startX = e.touches[0].clientX;
  });

  eventCarouselContainer.addEventListener("touchmove", (e) => {
    moveX = e.touches[0].clientX;
  });

  eventCarouselContainer.addEventListener("touchend", () => {
    document.querySelector("html").style.overflowY = "scroll";
    if (moveX + 100 < startX) {
      const movement = -eventContainerWidth;
      eventCarouselContainer.style.transition = "transform ease-in-out 500ms";
      eventCarouselContainer.style.transform = `translateX(${movement}px)`;

      setTimeout(() => {
        const child = eventCarouselContainer.firstElementChild;
        eventCarouselContainer.removeChild(child);
        eventCarouselContainer.append(child);
        eventCarouselContainer.style.transition = null;
        eventCarouselContainer.style.transform = `translateX(0px)`;
        setTimeout(() => {
          eventCarouselContainer.style.transition =
            "transform ease-in-out 500ms";
        }, 10);
      }, 500);
    }
    if (moveX - 100 > startX) {
      const movement = -eventContainerWidth;
      eventCarouselContainer.style.transition = null;
      eventCarouselContainer.style.transform = `translateX(0px)`;
      eventCarouselContainer.style.transform = `translateX(${movement}px)`;
      const child = eventCarouselContainer.lastElementChild;
      eventCarouselContainer.removeChild(child);
      eventCarouselContainer.prepend(child);
      setTimeout(() => {
        eventCarouselContainer.style.transition = "transform ease-in-out 500ms";
        eventCarouselContainer.style.transform = `translateX(0px)`;
      }, 10);
    }
  });
})();

// FEATURED FUNCTIONALITY --------------------------------------------

const featuredCardOne = document.querySelector(".featured-scroll-card-one");
const featuredCardTwo = document.querySelector(".featured-scroll-card-two");
const featuredCardThree = document.querySelector(".featured-scroll-card-three");

const featuredIconOne = document.querySelector(".featured-icon-one");
const featuredIconTwo = document.querySelector(".featured-icon-two");
const featuredIconThree = document.querySelector(".featured-icon-three");

const featuredHeaderOne = document.querySelector(".featured-icon-header-one");
const featuredHeaderTwo = document.querySelector(".featured-icon-header-two");
const featuredHeaderThree = document.querySelector(
  ".featured-icon-header-three"
);

let featuredCardHeight = (featuredCardOne.offsetHeight * 0.2).toFixed(0);
// MOBILE NEEDS THIS CHECK TO WORK
if (window.innerWidth < 770) {
  featuredCardHeight = (featuredCardOne.offsetHeight * 0.15).toFixed(0);
}

const options = {
  root: null,
  threshold: 0.75,
  rootMargin: `-${featuredCardHeight}px`,
};
// OBSERVORS ----------------------------------------------------
const observorTopOne = new IntersectionObserver((entries) => {
  if (entries[0].isIntersecting) {
    featuredIconOne.classList.add("active-featured-icon");
    featuredIconTwo.classList.remove("active-featured-icon");
    featuredIconThree.classList.remove("active-featured-icon");

    featuredHeaderOne.classList.add("active-featured-icon-header");
    featuredHeaderTwo.classList.remove("active-featured-icon-header");
    featuredHeaderThree.classList.remove("active-featured-icon-header");
  }
}, options);
const observorTopTwo = new IntersectionObserver((entries) => {
  if (entries[0].isIntersecting) {
    featuredIconTwo.classList.add("active-featured-icon");
    featuredIconOne.classList.remove("active-featured-icon");
    featuredIconThree.classList.remove("active-featured-icon");

    featuredHeaderTwo.classList.add("active-featured-icon-header");
    featuredHeaderOne.classList.remove("active-featured-icon-header");
    featuredHeaderThree.classList.remove("active-featured-icon-header");
  }
}, options);
const observorTopThree = new IntersectionObserver((entries) => {
  if (entries[0].isIntersecting) {
    featuredIconThree.classList.add("active-featured-icon");
    featuredIconOne.classList.remove("active-featured-icon");
    featuredIconTwo.classList.remove("active-featured-icon");

    featuredHeaderThree.classList.add("active-featured-icon-header");
    featuredHeaderTwo.classList.remove("active-featured-icon-header");
    featuredHeaderOne.classList.remove("active-featured-icon-header");
  }
}, options);
//const observorBottom = new IntersectionObserver(callback, options)

observorTopOne.observe(featuredCardOne);
observorTopTwo.observe(featuredCardTwo);
observorTopThree.observe(featuredCardThree);

/*

  if (entries[0].isIntersecting) {
    featuredIconOne.classList.add('active-featured-icon')
  } else {
    featuredIconOne.classList.remove('active-featured-icon')
  }
*/

// CONTACT MODAL -----------------------------------------------------------------------------

const contactModal = document.querySelector(".contact-modal");
const contactModalCloseBtn = document.querySelector(".modal-close-btn");
const contactLink = document.getElementById("contact-nav-link");

contactLink.addEventListener("click", (e) => {
  e.preventDefault();
  contactModal.classList.add("active-contact-modal");
  document.body.style.overflow = "hidden";
});

contactModalCloseBtn.addEventListener("click", () => {
  contactModal.classList.remove("active-contact-modal");
  document.body.style.overflow = null;
});

// MOUSE PARALLAX HERO CAROUSEL
const heroParallaxSlide = document.querySelectorAll(".parallax-hero-slide");
const heroParallaxText = document.querySelectorAll(".carousel-parallax-text");
const heroParallaxImg = document.querySelectorAll(".carousel-parallax-image");
if (window.innerWidth > 800) {
  // MOBILE CHECK TO REDUCE LAG

  heroParallaxSlide.forEach((slide) => {
    slide.addEventListener("mousemove", (e) => {
      let x = e.clientX * 0.02;
      let y = e.clientY * 0.02;

      heroParallaxText.forEach((box) => {
        box.style.transform = `translate(${x}px,${y}px)`;
      });

      let imgX = x * -1;
      let imgY = y * -1;

      heroParallaxImg.forEach((img) => {
        img.style.transform = `translate(${imgX}px,${imgY}px)`;
      });
    });
  });
}

// SUBMISSION THANKS MODAL CLOSE ------------

const submissionModalBtnClose = document.querySelector(
  ".submission-thanks-close-btn"
);
submissionModalBtnClose.addEventListener("click", () => {
  subscriptionModal.classList.remove("active-submission-thanks-modal");
  document.body.style.overflow = null;
});

// CONTACT US THANKS MODAL CLOSE ------------

const contactUsThanksModalBtnClose = document.querySelector(
  ".contact-thanks-close-btn"
);
contactUsThanksModalBtnClose.addEventListener("click", () => {
  contactUsThanksModal.classList.remove("active-contact-thanks-modal");
  document.body.style.overflow = null;
});

// IOS MOBILE DOUBLE TOUCH FIX ---------------------------------------------

if (window.innerWidth < 700) {
  const allLinks = document.querySelectorAll("a");

  for (const link of allLinks) {
    link.addEventListener('touchend', () => {
      var linkAttr = link.getAttribute('href')
      var targetAttr = link.getAttribute('target')
      if (targetAttr === '_blank') {
        window.open = linkAttr
      } else if (targetAttr === "_self" || targetAttr === null) {
        window.location = linkAttr
      }
    })
  }
}

// MENTOR BTN ANIMATION ---------------------------------------------


const mentorBtn = document.getElementById('mentor-btn')

mentorBtn.addEventListener('click', (e) => {
  e.preventDefault()
})