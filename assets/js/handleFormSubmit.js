// THIS IS FOR CONTACT FORM -------------------------------------------------

var contactForm = document.getElementById("contact-us-form");

var contactUsNameInput = document.querySelector(".name-contact-us-form");
var contactUsEmailInput = document.querySelector(".email-contact-us-form");
var contactUsSubjectInput = document.querySelector(".subject-contact-us-form");
var contactUsTextEnteredInput = document.querySelector(".entered-text-contact-us-form");

var contactUsThanksModal = document.querySelector('.contact-thanks-modal')

// contactForm.addEventListener("submit", function (e) {
//   //e.preventDefault();

//   // var request = new XMLHttpRequest();

//   // const params =   `You have received a contact us submmission from ${contactUsNameInput.value}.\n
//   //                   Their email is ${contactUsEmailInput.value}\n
//   //                   Subject: ${contactUsSubjectInput.value}\n
//   //                   They are writing to say: \n
//   //                   ${contactUsTextEnteredInput.value}`

//   // request.open("POST", "./forms/contactForm.php", true);
//   // request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
//   // request.send(params);


//   document.querySelector('.coin-modal-place-holder').style.display = 'block'
//   setTimeout(() => {
//     document.querySelector('.coin-modal-place-holder').style.display = 'none'

//     contactUsNameInput.value = ''
//     contactUsEmailInput.value = ''
//     contactUsSubjectInput.value = ''
//     contactUsTextEnteredInput.value = ''
//   }, 250); 

//   document.querySelector('.contact-thanks-header').innerText = `Thanks for contacting us, ${contactUsNameInput.value}!`
//   contactUsThanksModal.classList.add('active-contact-thanks-modal');
//   document.body.style.overflow = 'hidden';


// });


var contactFormModal = document.getElementById("contact-us-form-modal");

var contactUsNameInputModal = document.querySelector(".name-contact-us-form-modal");
var contactUsEmailInputModal = document.querySelector(".email-contact-us-form-modal");
var contactUsSubjectInputModal = document.querySelector(".subject-contact-us-form-modal");
var contactUsTextEnteredInputModal = document.querySelector(".entered-text-contact-us-form-modal");

// contactFormModal.addEventListener("submit", function (e) {
//   e.preventDefault();
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

//   document.querySelector('.coin-modal-place-holder').style.display = 'block'

//   setTimeout(() => {
//     document.querySelector('.coin-modal-place-holder').style.display = 'none'

//     contactUsNameInputModal.value = ''
//     contactUsEmailInputModal.value = ''
//     contactUsSubjectInputModal.value = ''
//     contactUsTextEnteredInputModal.value = ''
//   }, 250);

//   document.querySelector('.contact-thanks-header').innerText = `Thanks for contacting us, ${contactUsNameInputModal.value}!`
//   contactUsThanksModal.classList.add('active-contact-thanks-modal');
//   document.body.style.overflow = 'hidden';

// });

// FORM -------- CONTACT US

var formContactUs = document.getElementById("contact-us-form");
    
async function handleSubmitContactUs(event) {
  event.preventDefault();
  var data = new FormData(event.target);
  fetch(event.target.action, {
    method: formContactUs.method,
    body: data,
    headers: {
        'Accept': 'application/json'
    }
  }).then(response => {
    if (response.ok) {
      document.querySelector('.contact-thanks-header').innerText = `Thanks for contacting us!`
      contactUsThanksModal.classList.add('active-contact-thanks-modal');
      
      setTimeout(() => {
        formContactUs.reset()
      }, 500)
      
    } 
  });
} 

// MODAL -------- CONTACT US MODAL

formContactUs.addEventListener("submit", handleSubmitContactUs)

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
      document.querySelector('.contact-thanks-header').innerText = `Thanks for contacting us!`
      contactModal.classList.remove("active-contact-modal");
      contactUsThanksModal.classList.add('active-contact-thanks-modal');
      formContactUsModal.reset()
    } 
  });
}
formContactUsModal.addEventListener("submit", handleSubmitModal)


// THIS IS FOR SUBSCRIBE FORM --------------------------------------------

var subscribeForm = document.getElementById("subscribe-form");
var emailSubscriptionInput = document.querySelector(".email-subscribe");

var subscriptionModal = document.querySelector('.submission-thanks-modal')

// subscribeForm.addEventListener("submit", function (e) {
//  // e.preventDefault();

//   // var request = new XMLHttpRequest();

//   // const params = `This subscription is for the email: ${emailSubscriptionInput.value}.`
    
//   // request.open("POST", "./forms/subscribeForm.php", true);
//   // request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
//   // request.send(params);

//   // subscriptionModal.classList.add('active-submission-thanks-modal');
  

//   // setTimeout(() => {
//   //   emailSubscriptionInput.value = ''
//   // }, 250)
// });
// THIS IS FOR SUBSCRIBE FORM FOOTER ------------------------------------------------

// var subscribeFormFooter = document.getElementById("subscribe-form-footer");
// var emailSubscriptionInputFooter = document.querySelector(".email-subscribe-footer");

// subscribeFormFooter.addEventListener("submit", function (e) {
//  // e.preventDefault();

//   // var request = new XMLHttpRequest();

//   // const params = `This new subscription is for the email: ${emailSubscriptionInputFooter.value}.`
    
//   // request.open("POST", "./forms/subscribeForm.php", true);
//   // request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
//   // request.send(params);

//   subscriptionModal.classList.add('active-submission-thanks-modal');

//   setTimeout(() => {
//     emailSubscriptionInputFooter.value = ''
//   }, 250)
// });

// SUBSCRIBE -------- 


var formSubscribe = document.getElementById("subscribe-form");
    
async function handleSubmitSubscribe(event) {
  event.preventDefault();
  var data = new FormData(event.target);
  fetch(event.target.action, {
    method: formSubscribe.method,
    body: data,
    headers: {
        'Accept': 'application/json'
    }
  }).then(response => {
    if (response.ok) {
      subscriptionModal.classList.add('active-submission-thanks-modal');
      formSubscribe.reset()
    } 
  });
}
formSubscribe.addEventListener("submit", handleSubmitSubscribe)


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