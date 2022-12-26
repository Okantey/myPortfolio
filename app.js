// auto type feature
var typed = new Typed(".auto-type", {
  strings: ["Frontend Developer.","UI/UX Designer.", "Freelancer." ],
  typeSpeed: 100,
  backSpeed:10,
  loop: true
})

// navbar 

const navicon = document.getElementById("navicon")
const listItem = document.querySelector(".nav-list")

navicon.addEventListener('click', function(){
  listItem.classList.toggle("active")
  navbar.classList.toggle("active")



  if(listItem.classList.contains("active")) {
    navicon.className = "fa fa-close"
    navicon.style.fontSize = "2rem"
    navicon.style.cursor = "pointer"
    navicon.style.transition = "2s ease"
  } else {
    navicon.className = "fa fa-navicon"
  }
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