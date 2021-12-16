$(document).ready(function () {
  $('.navbar-toggler').click(function () {
    $('.navbar-toggler').toggleClass('change')
  })
})

$(window).scroll(function () {
  let position = $(this).scrollTop()

  if (position >= 149) {
    $('.navbar').addClass('navbar-background')
    $('.navbar').addClass('navbar-fixed-top')
  } else {
    $('.navbar').removeClass('navbar-background')
    $('.navbar').removeClass('fixed-top')
  }
})

//smooth scroll

$('.nav-item a').click(function (link) {
  link.preventDefault()

  let target = $(this).attr('href')
  $('html, body')
    .stop()
    .animate(
      {
        scrollTop: $(target).offset().top,
      },
      3000
    )
})

// init Isotope
let $grid = $('.grid').isotope({
  // options
})
// filter items on button click
$('.filter-button-group').on('click', 'button', function () {
  let filterValue = $(this).attr('data-filter')
  $grid.isotope({ filter: filterValue })
})

// const toggleButton = document.querySelector('.navbar-toggler')

// toggleButton.addEventListener('click', function () {
//   toggleButton.classList.toggle('change')
// })

// add fixed class to navbar
window.addEventListener('scroll', function () {
  if (window.pageYOffset >= 149) {
    navbar.classList.add('navbar-background')
    navbar.classList.add('fixed-top')
  } else {
    navbar.classList.remove('navbar-background')
    navbar.classList.remove('fixed-top')
  }
})

// ********** smooth scroll ************
// select links
// const scrollLinks = document.querySelectorAll('.nav-item a')

// scrollLinks.forEach((link) => {
//   link.addEventListener('click', (e) => {
//     e.preventDefault()

//     const id = e.target.getAttribute('href').slice(1)
//     const element = document.getElementById(id)
//     //
//     let position = element.offsetTop - 149

//     window.scrollTo({
//       left: 0,

//       top: position,
//       behavior: 'smooth',
//     })
//   })
// })
