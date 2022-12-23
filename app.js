// auto type feature
var typed = new Typed(".auto-type", {
  strings: ["Frontend Developer.","UI/UX Product Designer.", "Freelancer" ],
  typeSpeed: 100,
  backSpeed:10,
  loop: true
})

const header = document.querySelector(".hero")
const navbar = document.querySelector(".navbar")
const headerOptions = {
  rootMargin: "-300px 0px 0px 0px"
}

const headerObserver = new IntersectionObserver(function(entries, headerObserver) {
  entries.forEach(entry => {
    if(!entry.isIntersecting) {
      navbar.classList.add("nav-scroll") 
    } else {
      navbar.classList.remove("nav-scroll")
    }
  })

}, headerOptions)
headerObserver.observe(header)