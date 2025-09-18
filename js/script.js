// Módulo para funcionalidades de scroll e animações
const ScrollAnimations = {
  // Função para revelar elementos ao rolar a página
  revealOnScroll: function() {
    const reveals = document.querySelectorAll('.reveal');
    for (let i = 0; i < reveals.length; i++) {
      const windowHeight = window.innerHeight;
      const elementTop = reveals[i].getBoundingClientRect().top;
      const elementVisible = 100; // distância do fundo da tela antes de ativar

      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active"); // opcional: remove efeito ao rolar pra cima
      }
    }
  },

  // Função para verificar se um elemento está visível
  isElementVisible: function(element, threshold = 100) {
    if (!element) return false;
    const windowHeight = window.innerHeight;
    const elementTop = element.getBoundingClientRect().top;
    return elementTop < windowHeight - threshold;
  },

  // Função para adicionar classe ativa a um elemento
  addActiveClass: function(element) {
    if (element) {
      element.classList.add("active");
    }
  },

  // Função para remover classe ativa de um elemento
  removeActiveClass: function(element) {
    if (element) {
      element.classList.remove("active");
    }
  },

  // Função para obter todos os elementos com classe reveal
  getRevealElements: function() {
    return document.querySelectorAll('.reveal');
  },

  // Função para inicializar os eventos de scroll
  init: function() {
    window.addEventListener("scroll", this.revealOnScroll.bind(this));
    // Chamada inicial (para elementos já visíveis ao carregar a página)
    this.revealOnScroll();
  }
};

// Inicializar quando o DOM estiver carregado
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    ScrollAnimations.init();
  });
} else {
  ScrollAnimations.init();
}

// Exportar para testes (se estiver em ambiente Node.js)
if (typeof module !== 'undefined' && module.exports) {
  module.exports = ScrollAnimations;
}
