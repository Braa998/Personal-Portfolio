/*Show Menu Hidden*/
const navMenu = document.getElementById('nav-menu'),
navToggle = document.getElementById('nav-toggle'),
navClose = document.getElementById('nav-close')

/*Show Menu*/
/*Validate if constant exists*/
if(navToggle){
  navToggle.addEventListener('click', () =>{
    navMenu.classList.add('show-menu')
  })
}

/*Hide Menu*/
/*Validate if constant exists*/
if(navClose){
  navClose.addEventListener('click', () =>{
    navMenu.classList.remove('show-menu')
  })
}

/*Remove Mobile Menu*/
const navLink = document.querySelectorAll('.nav-link')

function linkAction() {
  const navMenu = document.getElementById('nav-menu')
  /* When we cick on each nav-link, we remove show-menu class */
  navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*Accordion Skills*/
const skillsContent = document.getElementsByClassName('skills-content'),
skillsHeader = document.querySelectorAll('.skills-header')

function toggleSkills(){
  let itemClass = this.parentNode.className

  for (var i = 0; i < skillsContent.length; i++) {
    skillsContent[i].className = 'skills-content skills-close'
  }
  if (itemClass === 'skills-content skills-close') {
    this.parentNode.className = 'skills-content skills-open'
  }
}

skillsHeader.forEach((el) => {
  el.addEventListener('click', toggleSkills)
});

/*Experience Info*/
const infoViews = document.querySelectorAll('.experience-info'),
infoBtns = document.querySelectorAll('.experience-button'),
infoCloses = document.querySelectorAll('.experience-info-close')

let info = function(infoClick){
  infoViews[infoClick].classList.add('active-info')
}

infoBtns.forEach((infoBtn, i) => {
  infoBtn.addEventListener('click', () =>{
    info(i)
  })
})

infoCloses.forEach((infoClose) => {
  infoClose.addEventListener('click', () =>{
    infoViews.forEach((infoView) => {
      infoView.classList.remove('active-info')
    })
  })
})

/*Scroll Section Active Link*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
  const scrollY = window.pageYOffset

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute('id')

    if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
      document.querySelectorAll('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link')
    } else {
      document.querySelectorAll('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link')

    }
  })
}

window.addEventListener('scroll', scrollActive)

/*Change Background Header*/
function scrollHeader(){
  const nav = document.getElementById('header')
  /*When the scroll is greater than 200 veiwpoint height, and the scroll-header class to the header tag*/
  if(this.scrollY >= 200) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}

window.addEventListener('scroll', scrollHeader)

/*Show Scroll Up*/
function scrollUp(){
  const scrollUp = document.getElementById('scroll-up');
  /* When the scroll is higher than 560 veiwpoint height, and the scroll-scroll class to the header tag */
  if(this.scrollY >= 560) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}

window.addEventListener('scroll', scrollUp)

/*Dark light Theme*/
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'uil-sun'
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => document.body.classList.contains(darkIcon) ? 'uil-moon' : 'uil-sun'

if(selectedTheme){
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  document.body.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
}

themeButton.addEventListener('click', () => {
  document.body.classList.toggle(darkTheme)
  themeButton.classList.toggle(iconTheme)
  localStorage.setItem('selected-theme', getCurrentTheme())
  localStorage.setItem('selected-icon', getCurrentIcon())
})
