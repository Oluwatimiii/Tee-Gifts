/* Change Background Header*/
function scrollHeader(){
    const header = document.getElementById('header')
    if(this.scrollY >= 50) 
         header.classList.add('scroll-header'); 
    else header.classList.remove('scroll-header') 
}
window.addEventListener('scroll', scrollHeader)


var swiperPopular = new Swiper(".popular__container",
    {
     spaceBetween: 32,
     grabCursor: true,
     centeredSlides: true,
     slidesPerView: 'auto',
     loop: true,
    
     navigation: 
     {
       nextEl: ".swiper-button-next",
       prevEl: ".swiper-button-prev",
     },
    });


    /* VALUE ACCORDION */
    const accordionItems = document.querySelectorAll('.value__accordion-item')

    accordionItems.forEach((item) => {
      const accordionHeader = item.querySelector('.value__accordion-header')

      accordionHeader.addEventListener('click', () => {
        const openItem = document.querySelector('.accordion-open')

         toogleItem(item)

         if(openItem && openItem !== item){
           toogleItem(openItem)
         }
      })
    })

    const toogleItem = (item) =>{
       const accordionContent = item.querySelector('.value__accordion-content')

       if(item.classList.contains('accordion-open')){
         accordionContent.removeAttribute('style')
         item.classList.remove('accordion-open')
       }
       else{
         accordionContent.style.height = accordionContent.scrollHeight + 'px'
       item.classList.add('accordion-open')
       }
    }

    /* Scroll SECTIONS ACTIVE LINK */
    const sections = document.querySelectorAll('section[id]')

    function scrollActive(){
      const scrollY = window.pageYOffset

      sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
          document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        } else{
          document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
      })
    }
    window.addEventListener('scroll', scrollActive)

    /* SHOW SCROLL UP */
    function scrollUp(){
      const scrollUp = document.getElementById('scroll-up');

      if(this.scrollY >= 350) 
          scrollUp.classList.add('show-scroll');
      else scrollUp.classList.remove('show-scroll')
    }
    window.addEventListener('scroll', scrollUp)

    
    /* Dark Light Theme */
       const themeButton = document.getElementById('theme-button')
       const darkTheme = 'dark-theme'
       const iconTheme = 'fa-sun'

       //previously selected topic (if user selected)
       const selectedTheme = localStorage.getItem('selected-theme')
       const selectedIcon = localStorage.getItem('selected-icon')
   
       //We obtain a current theme by validating the dark-theme class
       const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
       const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'fa-regular fa-moon' : 'fa-regular fa-sun'

       //We validate if the user previously chose a topic
       if (selectedTheme) {
         document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
         themeButton.classList[selectedIcon === 'fa-regular fa-moon' ? 'add' : 'remove'](iconTheme)
       }

       //Activate or deactivate the theme manually with the button
       themeButton.addEventListener('click', () => {
         //Add or remove the dark icon theme
         document.body.classList.toggle(darkTheme)
         themeButton.classList.toggle(iconTheme)
         //We save the theme and the current icon that the user choose
         localStorage.setItem('selected-theme', getCurrentTheme())
         localStorage.setItem('selected-icon', getCurrentIcon())
    })


    const sr = ScrollReveal({
      origin: 'top',
      distance: '60px',
      duration: 2500,
      delay: 400,
      // reset: true
    })

    sr.reveal(`.home__title`)
    sr.reveal('.home__description, .footer__info', {delay: 500})
    sr.reveal('.home__value', {delay: 700})
    sr.reveal('.home__images', {delay: 800, origin: 'bottom'})
    sr.reveal(`.value__images, .contact__content`,{origin: 'left'})
    sr.reveal(`.value__content, .contact__images`, {origin: 'left'})
    sr.reveal('.offerline', {origin: 'left'})


    