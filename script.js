document.addEventListener("DOMContentLoaded", function () {
  // Referências aos elementos
  const banner = document.querySelector(".banner");
  const evaluationLink = document.getElementById("evaluationLink");
  const bannerIcon = document.querySelector(".banner-icon");

  // Animação de entrada do banner
  banner.style.transform = "translateY(-100%)";
  banner.style.transition = "transform 0.5s ease-out";

  setTimeout(() => {
    banner.style.transform = "translateY(0)";
  }, 100);

  // Efeito de clique no link de avaliação
  evaluationLink.addEventListener("click", function (e) {
    // Efeito visual de clique
    this.style.transform = "scale(0.95)";
    setTimeout(() => {
      this.style.transform = "scale(1)";
    }, 150);

    // Animação do ícone
    const linkIcon = this.querySelector(".link-icon");
    linkIcon.style.transform = "rotate(90deg)";
    setTimeout(() => {
      linkIcon.style.transform = "rotate(0deg)";
    }, 300);

    // O link agora abre automaticamente em nova aba
  });

  // Efeito de pulsação no ícone principal
  let pulseInterval = setInterval(() => {
    bannerIcon.style.transform = "scale(1.1)";
    setTimeout(() => {
      bannerIcon.style.transform = "scale(1)";
    }, 200);
  }, 3000);

  // Parar a pulsação quando o usuário interagir com o banner
  banner.addEventListener("mouseenter", () => {
    clearInterval(pulseInterval);
  });

  // Efeito de hover no banner inteiro
  banner.addEventListener("mouseenter", function () {
    this.style.boxShadow = "0 4px 20px rgba(0, 0, 0, 0.15)";
  });

  banner.addEventListener("mouseleave", function () {
    this.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.1)";
  });

  // Tornar o banner responsivo ao scroll
  let lastScrollTop = 0;
  window.addEventListener("scroll", function () {
    let currentScroll =
      window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > lastScrollTop && currentScroll > 100) {
      // Scrolling down - esconder banner
      banner.style.transform = "translateY(-100%)";
    } else {
      // Scrolling up - mostrar banner
      banner.style.transform = "translateY(0)";
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
  });

  // Adicionar classe ativa quando a página carregar
  setTimeout(() => {
    banner.classList.add("loaded");
  }, 600);
});

// Função utilitária para mudar o link do banner
function updateEvaluationLink(newUrl, newText) {
  const link = document.getElementById("evaluationLink");
  const linkText = link.querySelector(".link-text");

  if (newUrl) {
    link.href = newUrl;
    // Manter target="_blank" para sempre abrir em nova aba
    link.target = "_blank";
    link.rel = "noopener noreferrer";
  }

  if (newText) {
    linkText.textContent = newText;
  }
}

// Função para mostrar/esconder o banner programaticamente
function toggleBanner(show = true) {
  const banner = document.querySelector(".banner");
  banner.style.transform = show ? "translateY(0)" : "translateY(-100%)";
}

// Adicionar estilo CSS adicional via JavaScript para a classe 'loaded'
const style = document.createElement("style");
style.textContent = `
    .banner.loaded {
        box-shadow: 0 2px 15px rgba(108, 39, 79, 0.3);
    }
    
    .banner-icon, .link-icon {
        transition: transform 0.3s ease;
    }
`;
document.head.appendChild(style);
