let boton = document.querySelectorAll("[data-abrir-modal]")

// Seleccionamos todos los botones que abren un modal
document.querySelectorAll("[data-abrir-modal]").forEach(boton => {
    boton.addEventListener("click", () => {
        const modalId = boton.getAttribute("data-abrir-modal");
        document.getElementById(modalId).style.display = "flex";
    });
});

// Seleccionamos todos los botones de cierre
document.querySelectorAll("[data-cerrar-modal]").forEach(boton => {
    boton.addEventListener("click", () => {
        const modal = boton.closest(".modal");
        const iframe = modal.querySelector("iframe");
        modal.style.display = "none";

        // Si hay un iframe dentro, detener el video de YouTube
        if (iframe) {
            const videoSrc = iframe.getAttribute("src");
            iframe.setAttribute("src", ""); // Borrar src para detener
            setTimeout(() => {
                iframe.setAttribute("src", videoSrc); // Restaurar src
            }, 300);
        }
    });
});


