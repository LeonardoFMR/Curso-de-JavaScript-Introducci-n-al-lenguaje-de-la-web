let botonBuscar = document.querySelector("#buscar-paciente");


botonBuscar.addEventListener("click", function () {

    let xhr = new XMLHttpRequest();

    xhr.open("GET", "https://alura-es-cursos.github.io/api-pacientes/4pacientes.json");
    xhr.addEventListener("load", function () {

        let errorAjax = document.querySelector("#error-ajax");
        errorAjax.classList.add("invisible");

        if (xhr.status == 200) {
            let respuesta = xhr.responseText;
            let pacientes = JSON.parse(respuesta);
            pacientes.forEach(paciente => {
                adicionarPacienteEnLaTabla(paciente);
            });
        } else {
            errorAjax.classList.remove("invisible");

        }

    });
    xhr.send();
});