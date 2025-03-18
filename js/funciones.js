
let modal = document.getElementById("modal");
let btnVerProyecto = document.getElementById("btn-ver-proyecto");
let cerrarModal = document.getElementById("cerrar-modal");
let iframe = document.getElementById("short-video");
const videoSrc = iframe.src;



btnVerProyecto.addEventListener("click", ()=>{
    modal.classList.add("mostrar")
});

cerrarModal.addEventListener("click", ()=>{
    modal.classList.remove("mostrar")
    iframe.src = ""; // Se borra el src
    setTimeout(() => {
        iframe.src = videoSrc; // Se vuelve a asignar después de un breve tiempo
    }, 300);
});



