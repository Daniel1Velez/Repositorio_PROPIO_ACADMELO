window.addEventListener('load', function () {
    load()
  })
  
  document.addEventListener('DOMContentLoaded', function () {
    darkTheme()
    headerScroll()
    navMenu()
    cartMenu()
    sectionActive()
    renderCart()
    renderProducts()
    activeProduct()
  
    mixitup('.products__content', {
      selectors: {
        target: '.products__card'
      },
      animation: {
        duration: 300
      }
    }).filter('all')
  })