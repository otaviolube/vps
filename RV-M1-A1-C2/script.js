document.addEventListener("DOMContentLoaded", function () {
  // Referências aos elementos
  const banner = document.querySelector(".banner");
  const downloadLink = document.getElementById("downloadLink");
  const bannerIcon = document.querySelector(".banner-icon");

  // Animação de entrada do banner
  banner.style.transform = "translateY(-100%)";
  banner.style.transition = "transform 0.5s ease-out";

  setTimeout(() => {
    banner.style.transform = "translateY(0)";
  }, 100);

  // Efeito de clique no link de download
  downloadLink.addEventListener("click", function (e) {
    // Efeito visual de clique
    this.style.transform = "scale(0.95)";
    setTimeout(() => {
      this.style.transform = "scale(1)";
    }, 150);

    // Animação do ícone
    const linkIcon = this.querySelector(".link-icon");
    linkIcon.style.transform = "translateY(2px)";
    setTimeout(() => {
      linkIcon.style.transform = "translateY(0)";
    }, 300);
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

// Função para realizar o download da Roda Viva
function downloadRodaViva() {
  // Simular download - você pode substituir por um arquivo real
  const fileName = "roda-da-vida.pdf";
  const fileUrl =
    "https://github.com/otaviolube/vps/raw/main/RV-M1-A1-C2/roda-da-vida.pdf"; // Substitua pelo URL real do arquivo

  // Criar elemento temporário para download
  const link = document.createElement("a");
  link.href = fileUrl;
  link.download = fileName;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  // Feedback visual
  const downloadButton = document.getElementById("downloadLink");
  const originalText = downloadButton.querySelector(".link-text").textContent;
  downloadButton.querySelector(".link-text").textContent = "Baixando...";

  setTimeout(() => {
    downloadButton.querySelector(".link-text").textContent = "Concluído!";
    setTimeout(() => {
      downloadButton.querySelector(".link-text").textContent = originalText;
    }, 2000);
  }, 1000);
}

// Função utilitária para mudar o link de download do banner
function updateDownloadLink(newUrl, newText, newFileName) {
  const link = document.getElementById("downloadLink");
  const linkText = link.querySelector(".link-text");

  if (newUrl) {
    link.onclick = function () {
      const tempLink = document.createElement("a");
      tempLink.href = newUrl;
      tempLink.download = newFileName || "download";
      document.body.appendChild(tempLink);
      tempLink.click();
      document.body.removeChild(tempLink);
    };
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
