let selectHeader = document.getElementById("header");
if (selectHeader) {
  const headerScrolled = () => {
    if (window.scrollY > 100) {
      selectHeader.classList.add("header-scrolled");
    } else {
      selectHeader.classList.remove("header-scrolled");
    }
  };
  window.addEventListener("load", headerScrolled);
  window.addEventListener('scroll', headerScrolled);
}

const preloader = document.getElementById("preloader");

  window.addEventListener("load", () => {
    preloader.remove();
  });

  /*MOBILE NAV FUNCTION ------------------------------------------------*/
  let navbarlinks = document.querySelectorAll(".scrollto");
  const navbarlinksActive = () => {
  let position = window.scrollY + 200;
  navbarlinks.forEach((navbarlink) => {
    if (!navbarlink.hash) return;
    let section = document.querySelector('navbarlink.hash');
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
window.addEventListener('scroll', navbarlinksActive);


/**
 * Mobile nav toggle
 */
 document.querySelector(".mobile-nav-toggle",).addEventListener("click",  function (e) {
  document.getElementById("navbar").classList.toggle("navbar-mobile");
  this.classList.toggle("bi-list");
  this.classList.toggle("bi-x");
});

/**
 * Mobile nav dropdowns activate
 */
document.querySelectorAll(".navbar .dropdown > a").forEach(link => link.addEventListener(
  "click",
  function (e) {
    if (document.getElementById("navbar").classList.contains("navbar-mobile")) {
      e.preventDefault();
      this.nextElementSibling.classList.toggle("dropdown-active");
    }
  })
);




// CONTACT MODAL -----------------------------------------------------------------------------

const contactModal = document.querySelector('.contact-modal')
const contactModalCloseBtn = document.querySelector('.modal-close-btn')
const contactLink = document.getElementById('contact-nav-link')

contactLink.addEventListener('click', (e) => {
 // e.preventDefault()
  contactModal.classList.add('active-contact-modal');
  document.body.style.overflow = 'hidden';
})

contactModalCloseBtn.addEventListener('click', () => {
  contactModal.classList.remove('active-contact-modal');
  document.body.style.overflow = null;
})



var contactFormModal = document.getElementById("contact-us-form-modal");
var contactUsThanksModal = document.querySelector('.contact-thanks-modal')

var contactUsNameInputModal = document.querySelector(".name-contact-us-form-modal");
var contactUsEmailInputModal = document.querySelector(".email-contact-us-form-modal");
var contactUsSubjectInputModal = document.querySelector(".subject-contact-us-form-modal");
var contactUsTextEnteredInputModal = document.querySelector(".entered-text-contact-us-form-modal");

// contactFormModal.addEventListener("submit", function (e) {
//   // e.preventDefault();
//   contactModal.classList.remove("active-contact-modal");
//   // var request = new XMLHttpRequest();

//   // const params =   `You have received a contact us submmission from ${contactUsNameInputModal.value}.\n
//   //                   Their email is ${contactUsEmailInputModal.value}\n
//   //                   Subject: ${contactUsSubjectInputModal.value}\n
//   //                   They are writing to say: \n
//   //                   ${contactUsTextEnteredInputModal.value}`

//   // request.open("POST", "./forms/contactForm.php", true);
//   // request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
//   // request.send(params);

//   setTimeout(() => {
//     document.querySelector('.coin-modal-place-holder').style.display = 'none'

//     contactUsNameInputModal.value = ''
//     contactUsEmailInputModal.value = ''
//     contactUsSubjectInputModal.value = ''
//     contactUsTextEnteredInputModal.value = ''
//   }, 250);

//   document.querySelector('.contact-thanks-header').innerText = `Thanks for contacting us, ${contactUsNameInputModal.value}!`
//   contactUsThanksModal.classList.add('active-contact-thanks-modal');
// });


var formContactUsModal = document.getElementById("contact-us-form-modal");
    
async function handleSubmitModal(event) {
  event.preventDefault();
  var data = new FormData(event.target);
  fetch(event.target.action, {
    method: formContactUsModal.method,
    body: data,
    headers: {
        'Accept': 'application/json'
    }
  }).then(response => {
    if (response.ok) {
      contactModal.classList.remove("active-contact-modal");

      contactUsThanksModal.classList.add('active-contact-thanks-modal');
      document.querySelector('.contact-thanks-header').innerText = `Thanks for contacting us!`
      formContactUsModal.reset()
    } 
  });
}
formContactUsModal.addEventListener("submit", handleSubmitModal)



// THIS IS FOR SUBSCRIBE FORM FOOTER ------------------------------------------------

var subscribeFormFooter = document.getElementById("subscribe-form-footer");
var emailSubscriptionInputFooter = document.querySelector(".email-subscribe-footer");

// subscribeFormFooter.addEventListener("submit", function (e) {
//  // e.preventDefault();

//   // var request = new XMLHttpRequest();

//   // const params = `This new subscription is for the email: ${emailSubscriptionInputFooter.value}.`
    
//   // request.open("POST", "./forms/subscribeForm.php", true);
//   // request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
//   // request.send(params);

//   subscriptionModal.classList.add('active-submission-thanks-modal');
//   document.body.style.overflow = 'hidden';

//   setTimeout(() => {
//     emailSubscriptionInputFooter.value = ''
//   }, 250)
// });



// SUBSCRIBE -------- FOOTER


var formFooterSubscribe = document.getElementById("subscribe-form-footer");
    
async function handleSubmitFooter(event) {
  event.preventDefault();
  var data = new FormData(event.target);
  fetch(event.target.action, {
    method: formFooterSubscribe.method,
    body: data,
    headers: {
        'Accept': 'application/json'
    }
  }).then(response => {
    if (response.ok) {

      subscriptionModal.classList.add('active-submission-thanks-modal');

      formFooterSubscribe.reset()
    } 
  });
}
formFooterSubscribe.addEventListener("submit", handleSubmitFooter)

// SUBSCRIPTION MODAL  ------------------------------------------------

var subscriptionModal = document.querySelector('.submission-thanks-modal')
// SUBMISSION MODAL CLOSE ------------

const submissionModalBtnClose = document.querySelector('.submission-thanks-close-btn')
submissionModalBtnClose.addEventListener('click', () => {
  subscriptionModal.classList.remove('active-submission-thanks-modal')
  document.body.style.overflow = null;
})

// CONTACT US THANKS MODAL CLOSE ------------

const contactUsThanksModalBtnClose = document.querySelector('.contact-thanks-close-btn')
contactUsThanksModalBtnClose.addEventListener('click', () => {
  contactUsThanksModal.classList.remove('active-contact-thanks-modal')
  document.body.style.overflow = null;
})



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