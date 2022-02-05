document.addEventListener('DOMContentLoaded', () => {
  const tabs = document.querySelector('[data-navigation]')
  const tabsBtn = document.querySelectorAll('[data-tabs-path]')
  const tabsCard = document.querySelectorAll('[data-tabs-target]')
  
  tabs.addEventListener('click', (event) => {
    if(event.target.dataset.tabsPath) {
      tabsHandler(event.target.dataset.tabsPath)
    }
  })
  
  const tabsHandler = (path) => {
    tabsBtn.forEach(el => el.classList.remove('tab-navigation__item--active'))
    document.querySelector(`[data-tabs-path="${path}"]`).classList.add('tab-navigation__item--active')
  
    tabsCard.forEach(el => el.classList.remove("tab-card--active"))
    document.querySelector(`[data-tabs-target="${path}"]`).classList.add('tab-card--active')
  }

  const windowInnerWidth = window.innerWidth 
  
  if(windowInnerWidth <= 1023) {
    document.querySelector('[data-mobile-item=""]>button').classList.remove('button--red')
    document.querySelector('[data-mobile-item=""]>button').classList.add('button--transparent')

  }

  const mainNavigation = document.querySelector('[data-element="main-navigation"]')
  const mainNavigationToggle  = document.querySelector('[data-element="main-navigation-toggle"]')
  
  mainNavigationToggle.addEventListener('click', () => {
    if(mainNavigation.dataset.visible === 'false') {
      mainNavigation.dataset.visible = 'true'
      mainNavigation.closest('header').classList.add('page-header--isOpen-mobile-menu')
    } else if(mainNavigation.dataset.visible === 'true') {
      mainNavigation.dataset.visible = 'false'
      mainNavigation.closest('header').classList.remove('page-header--isOpen-mobile-menu')
    }
  })

  const faq = document.querySelector('[data-accordion-items="faq"]')

  faq.addEventListener('click', event => {
    if(event.target.dataset.element === "faq-button") {
      if(event.target.nextElementSibling.dataset.answer === "false") {
        event.target.nextElementSibling.dataset.answer = "true"
      } else if(event.target.nextElementSibling.dataset.answer === "true") {
        event.target.nextElementSibling.dataset.answer = "false"
      }
    }
  })
})