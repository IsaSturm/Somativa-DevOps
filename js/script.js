// Função para revelar elementos ao rolar a página
function revealOnScroll() {
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
}

// Evento de scroll
window.addEventListener("scroll", revealOnScroll);

// Chamada inicial (para elementos já visíveis ao carregar a página)
revealOnScroll();
