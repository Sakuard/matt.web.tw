/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu')
  })
}/*if navToggle被用Click觸發*/ 

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu')
  })
}/*if navClose被用Click觸發*/

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link');

function linkAction() {
  const navMenu = document.getElementById('nav-menu');
  navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== ACCORDION SKILLS ====================*/
const skillsContent = document.querySelector('.skills__content')

if(skillsContent) {
  skillsContent.addEventListener('click', () => {
    document.querySelector('.skills__content').classList.toggle('skills__close');
    document.querySelector('.skills__arrow').classList.toggle('skills__arrow__down')
  })
}

// const skillsContent = document.getElementsByClassName('skills__content'),
//       skillsHeader = document.querySelectorAll('.skills__header')


// function toggleSkills() {
//   let itemClass = this.parentNode.className
  
//   for(i = 0; i < skillsContent.length; i++) {
//     skillsContent[i].className = 'Skills__content skills__close'
//   }
//   if(itemClass === 'skills__content skills__close') {
//     this.parentNode.className = 'skills__content skills__open'
//   }
// }


// skillsHeader.forEach((el) => {
//   el.addEventListener('click', toggleSkills)
// })

/*==================== QUALIFICATION TABS ====================*/
const educationBTN = document.querySelector('.tabs__btn__education'),
      workBTN = document.querySelector('.tabs__btn__work'),
      qualificationWork = document.getElementById('education')

if(educationBTN) {
  educationBTN.addEventListener('click', ()=> {
    document.querySelector('#work').classList.remove('qualification__active')
    document.querySelector('#education').classList.add('qualification__active')    
  })
}
if(workBTN) {
  workBTN.addEventListener('click', ()=> {
    document.querySelector('#education').classList.remove('qualification__active')
    document.querySelector('#work').classList.add('qualification__active')
  })
}

/*==================== SERVICES MODAL ====================*/
const modalViews = document.querySelectorAll('.services__modal'),
      modalBtns = document.querySelectorAll('.services__button'),
      modalCloses = document.querySelectorAll('.services__modal-close')

let modal = function(item) {
  modalViews[item].classList.add('active-modal')
}
modalBtns.forEach((item, i) => {
  item.addEventListener('click', () => {
    modal(i)
  })
})

// let modalToggle = function(item) {
//   modalViews[item].classList.toggle('active-modal')
// }
// modalCloses.forEach((modalCloses, i) => {
//   modalCloses.addEventListener('click', () => {
//     modalToggle(i)
//   })
// })

modalCloses.forEach((item) => {
  item.addEventListener('click', () => {
    modalViews.forEach((item) => {
      item.classList.remove('active-modal')
    })
  })
})




/*==================== PORTFOLIO SWIPER  ====================*/
var swiperPortfolio = new Swiper(".mySwiper", {
  cssMode: true,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  mousewheel: false,
});



/*==================== TESTIMONIAL ====================*/
var swiperTestmonial = new Swiper(".testimonial__container", {
  loop: true,
  grabCursor: true,
  spaceBetween: 48,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true
  },
  breakpoints: {
    568: {
      slidesPerView: 2,
    }
  }
});

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive() {

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight,
          sectoinTop = current.offsetTop - 50;
          sectionId = current.getAttribute('id')

          if(scrollY > sectoinTop && scrollY <= sectoinTop + sectionHeight) {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
          }else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
          }
  })
}
window.addEventListener('scroll', scrollActive)



/*==================== CHANGE BACKGROUND HEADER ====================*/ 
function scrollHeader(){
  const nav = document.getElementById('header')
  // When the scroll is greater than 80 viewport height, add the scroll-header class to the header tag
  if(this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*==================== SHOW SCROLL UP ====================*/ 
function scrollup() {
  const scrollup = document.getElementById('scroll-up');
  //When the scroll is higher than 250 viewport hieght, add the show-scroll class
  if(this.scrollY >= 250) scrollup.classList.add('show-scroll');else scrollup.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollup)


/*==================== DARK LIGHT THEME ====================*/ 

//第一版
// //Theme Toggle
// const themeBtns = document.querySelector('.change-theme'),
//       themetype = document.querySelector('.change-theme')

// if(themeBtns) {
// themeBtns.addEventListener('click', () => {
//   document.body.classList.toggle('dark-theme')
//   themetype.classList.toggle('uil-sun')
// })}



// //ThemeStorage
// var ThemeStorage = localStorage.themeStyle; //themeStyel for the key of theme value
// var ThemeToggleStorage = localStorage.themeToggleStyel;
// ThemeStorage === "dark-theme" ? document.body.classList = "theme-body dark-theme" : document.body.classList = "theme-body";
// ThemeToggleStorage === 'uil-sun'? 
// document.querySelector('#theme-button').classList = 'uil uil-sun uil-moon change-theme' : 
// document.querySelector('#theme-button').classList = 'uil uil-moon change-theme';


// //set a variable for current theme value
// var themeClassList = document.body.classList,
//     themeToggleClassList = document.querySelector('#theme-button').classList,
//     themeValue = "",
//     themeToggleValue =  ""
// window.addEventListener('click', () => {
//   themeClassList.contains('dark-theme') ? window.themeValue = "" : window.themeValue = "dark-theme"
//   themeToggleClassList.contains('uil-sun')? window.themeToggleValue = '' : window.themeToggleValue = 'uil-sun'
// })

// //once Toggle toggle current theme value also storage into localstorage
// themeBtns.addEventListener('click', () => {
//   localStorage.setItem('themeStyle', themeValue)
//   localStorage.setItem('themeToggleStyel', themeToggleValue)
// })

//參考 but 功能有缺失
// const themeButton = document.getElementById('theme-button')
// const darkTheme = 'dark-theme'
// const iconTheme = 'uil-sun'

// const selectedTheme = localStorage.getItem('selected-theme')
// const selectedIcon = localStorage.getItem('selectedIcon')

// const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
// const getCurrentIcon  = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'

// if (selectedTheme) {
//   document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
//   themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
// }

// themeButton.addEventListener('click', () => {
//   document.body.classList.toggle(darkTheme)
//   themeButton.classList.toggle(iconThe)
// })



//最終版次
//抓取change-theme button備用
const themeButton = document.getElementById('theme-button');

//預先讀取localStorage的Key以預先確認selected 'theme' & 'icon'
const selectedTheme = localStorage.getItem('selected-theme');
const selectIcon = localStorage.getItem('selected-icon');

//讀取後預先變更 'theme' & 'icon' Style
document.body.classList[ selectedTheme === 'light' ? 'remove' : 'add' ]('dark-theme')
document.querySelector('.change-theme').classList[ selectIcon === 'uil-sun' ? 'remove' : 'add' ]('uil-sun')

//set function for getCurrentTheme and getCurrentIcon
const getCurrentTheme = () => document.body.classList.contains('dark-theme') ? 'dark' : 'light';
const getCurrentIcon = () => themeButton.classList.contains('uil-sun') ? 'uil-moon' : 'uil-sun';
const CurrentIcon = getCurrentIcon();

//with click on change-theme button, toggle 'theme' & 'toggle'
//while changing 'theme' and 'icon' also storage the value into localStorage
themeButton.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme')
  themeButton.classList.toggle('uil-sun')
  getCurrentTheme();
  const CurrentTheme = getCurrentTheme();
  localStorage.setItem('selected-theme', CurrentTheme);
  getCurrentIcon();
  const CurrentIcon = getCurrentIcon();
  localStorage.setItem('selected-icon', CurrentIcon);
})