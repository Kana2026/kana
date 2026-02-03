window.addEventListener("load", () => {

  /* ===============================
     FADE IN (index)
  =============================== */
  const fadeCards = document.querySelectorAll(".fade-in");

  fadeCards.forEach((card, index) => {
    setTimeout(() => {
      card.classList.add("visible");
    }, index * 200);
  });

  /* ===============================
     CURSOR PREVIEW (index)
  =============================== */
  const cursor = document.getElementById("cursor-preview");
  const productCards = document.querySelectorAll(".card");

  if (cursor && productCards.length > 0) {
    document.addEventListener("mousemove", (e) => {
      cursor.style.left = e.clientX + "px";
      cursor.style.top = e.clientY + "px";
    });

    productCards.forEach(card => {
      card.addEventListener("mouseenter", () => {
        cursor.style.opacity = "1";
      });

      card.addEventListener("mouseleave", () => {
        cursor.style.opacity = "0";
      });
    });
  }

  /* ===============================
     SELECTOR DE TALLAS (producto)
  =============================== */
  const tallas = document.querySelectorAll(".tallas span");
  const botonComprar = document.querySelector(".comprar-btn");

  if (tallas.length > 0 && botonComprar) {

    // estado inicial
    botonComprar.classList.add("disabled");
    botonComprar.removeAttribute("href");

    let tallaSeleccionada = "";

    tallas.forEach(talla => {
      talla.addEventListener("click", () => {

        // quitar selección anterior
        tallas.forEach(t => t.classList.remove("active"));

        // marcar talla
        talla.classList.add("active");
        tallaSeleccionada = talla.dataset.talla;

        // activar botón
        botonComprar.classList.remove("disabled");
        botonComprar.classList.add("active");

        // mensaje WhatsApp
        const mensaje = `Hola, quiero el Polo Negro Oversize talla ${tallaSeleccionada}`;
        botonComprar.href = `https://wa.me/51951745919?text=${encodeURIComponent(mensaje)}`;
      });
    });
  }

});
document.querySelectorAll("a").forEach(link => {
  if (link.href && !link.target) {
    link.addEventListener("click", e => {
      e.preventDefault();

      document.body.classList.add("fade-out");

      setTimeout(() => {
        window.location = link.href;
      }, 450);
    });
  }
});