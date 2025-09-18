const ScrollAnimations = {

  revealOnScroll: function() {
    const reveals = document.querySelectorAll('.reveal');
    for (let i = 0; i < reveals.length; i++) {
      const windowHeight = window.innerHeight;
      const elementTop = reveals[i].getBoundingClientRect().top;
      const elementVisible = 100; 

      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active"); 
      }
    }
  },


  isElementVisible: function(element, threshold = 100) {
    if (!element) return false;
    const windowHeight = window.innerHeight;
    const elementTop = element.getBoundingClientRect().top;
    return elementTop < windowHeight - threshold;
  },


  addActiveClass: function(element) {
    if (element) {
      element.classList.add("active");
    }
  },


  removeActiveClass: function(element) {
    if (element) {
      element.classList.remove("active");
    }
  },


  getRevealElements: function() {
    return document.querySelectorAll('.reveal');
  },


  init: function() {
    window.addEventListener("scroll", this.revealOnScroll.bind(this));
    this.revealOnScroll();
  }
};


if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    ScrollAnimations.init();
  });
} else {
  ScrollAnimations.init();
}


if (typeof module !== 'undefined' && module.exports) {
  module.exports = ScrollAnimations;
}
