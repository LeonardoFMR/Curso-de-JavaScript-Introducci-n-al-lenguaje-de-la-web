let botonAdicionar = document.querySelector("#adicionar-paciente");


botonAdicionar.addEventListener("click", function (event) {
  event.preventDefault();

  let form = document.querySelector("#form-adicionar");
  let paciente = capturarDatosPaciente(form);

  // let tabla = document.querySelector("#tabla-pacientes");
  // let pacienteTr = construirTr(paciente);
  let errores1 = validarPaciente(paciente);
  
  if (errores1.length > 0 ) {
   exhibirMensajeErrores(errores1)
    return;
  }

  // tabla.appendChild(pacienteTr);

  adicionarPacienteEnLaTabla(paciente);
  form.reset();

  let mensajesErrores = document.querySelector("#mensaje-errores");
  mensajesErrores.innerHTML = "";
});


function adicionarPacienteEnLaTabla(paciente){
  let pacienteTr = construirTr(paciente);
  let tabla = document.querySelector("#tabla-pacientes");
  tabla.appendChild(pacienteTr);

}

function capturarDatosPaciente(form) {
  //Capturando datos del usuario
  let paciente = {
    nombre: form.nombre.value,
    peso: form.peso.value,
    altura: form.altura.value,
    gordura: form.gordura.value,
    imc: calcularIMC(form.peso.value, form.altura.value)

  }

  return paciente;
}

function construirTr(paciente) {

  //Crear los <td> y un <tr>
  let pacienteTr = document.createElement("tr");
  pacienteTr.classList.add("paciente");


  //Asigna al <tr> los <td>
  pacienteTr.appendChild(construirTd(paciente.nombre, "info_nombre"));
  pacienteTr.appendChild(construirTd(paciente.peso, "info_peso"));
  pacienteTr.appendChild(construirTd(paciente.altura, "info_altura"));
  pacienteTr.appendChild(construirTd(paciente.gordura, "info_gordura"));
  pacienteTr.appendChild(construirTd(paciente.imc, "info_imc"));

  return pacienteTr;

}

function construirTd(dato, clase) {
  let td = document.createElement("td");
  td.classList.add(clase);
  td.textContent = dato;
  return td;
}

function validarPaciente(paciente) {
  let errores2 = []; // Este es un nuevo array de errores dentro de esta función

  if (paciente.nombre.length == 0) {
    errores2.push("El nombre no puede estar vacío");
  }

  if (paciente.peso.length == 0) {
    errores2.push("El peso no puede estar vacío");
  }

  if (paciente.altura.length == 0) {
    errores2.push("La altura no puede estar vacía");
  }

  if (paciente.gordura.length == 0) {
    errores2.push("El % de gordura no puede estar vacío");
  }

  if (!validarPeso(paciente.peso)) {
    errores2.push("El peso es incorrecto");
  }

  if (!validarAltura(paciente.altura)) {
    errores2.push("La altura es incorrecta");
  }

  if (!validarAltura(paciente.altura) && !validarPeso(paciente.peso)) {
    errores2.push("TODO MAL CHICO");
  }

  return errores2; // 
}




function exhibirMensajeErrores(errores1) {
  let ul = document.querySelector("#mensaje-errores");

  ul.innerHTML = "";
  errores1.forEach(error=>{
    var li = document.createElement("li");
    li.textContent = error;
    ul.appendChild(li);
  });

}


// function exhibirMensajeErrores(errores1) {
//   let ul = document.querySelector("#mensaje-errores")

//   errores1.forEach(function(error){
//     var li = document.createElement("li");
//     li.textContent = error;
//     ul.appendChild(li);
//   });

// }

