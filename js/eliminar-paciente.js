let tabla = document.querySelector("#tabla-pacientes");

tabla.addEventListener("dblclick", e => {
    e.target.parentNode.classList.add("fadeOut");

    let fila = e.target.parentNode; 

    setTimeout(() => {
        fila.remove();
    }, 300);
});
