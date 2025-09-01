document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const cartCount = document.querySelector('.cart-count');

    // Funcionalidade para o menu responsivo
    menuToggle.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });

    // Exemplo de como você atualizaria a sacola
    // Por exemplo, quando o usuário adiciona um item ao carrinho
    // Você chamaria uma função como esta
    function updateCartCount(count) {
        cartCount.textContent = count;
    }

    // Exemplo: Simular a adição de 2 itens
    // updateCartCount(2);
});



  // Scroll reveal nos produtos
  const featuredItems = document.querySelectorAll(".featured-item");

  const revealOnScroll = () => {
    const triggerBottom = window.innerHeight * 0.85;
    featuredItems.forEach(item => {
      const boxTop = item.getBoundingClientRect().top;
      if (boxTop < triggerBottom) {
        item.classList.add("reveal");
      }
    });
  };

  window.addEventListener("scroll", revealOnScroll);
  window.addEventListener("load", revealOnScroll);

