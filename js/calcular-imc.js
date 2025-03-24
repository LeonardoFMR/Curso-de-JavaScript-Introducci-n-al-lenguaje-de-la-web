





let pacientes =  document.querySelectorAll(".paciente");

for (let i = 0; i < pacientes.length; i++) {

    let paciente = pacientes[i];

    let tdPeso = paciente.querySelector(".info-peso");
    let peso = tdPeso.textContent;

    let tdAltura = paciente.querySelector(".info-altura");
    let altura = tdAltura.textContent;

    let tdIMC = paciente.querySelector(".info-imc");


    pesoEsValido = validarPeso(peso);
    alturaEsValida = validarAltura(altura);


    if (((peso < 1) || (peso > 300)) && ((altura < 0.1) || (altura > 2.4))) {

        pesoEsValido = false;
        alturaEsValida = false;
        tdIMC.textContent = "Todo está mal a la verga";
        paciente.classList.add("paciente-incorrecto-todo");



    }

    else if (!pesoEsValido ) {

        // pesoEsValido = false;
        // alturaEsValida = true;
        tdIMC.textContent = "Peso no válido papu";
        paciente.classList.add("paciente-incorrecto-peso");

    }


  else  if (!alturaEsValida ) {

        // pesoEsValido = true;
        // alturaEsValida = false;
        tdIMC.textContent = "Altura no válida";
        paciente.classList.add("paciente-incorrecto-altura");

    }



    if (pesoEsValido && alturaEsValida) {
        let imc = peso / (altura * altura);
        tdIMC.textContent = calcularIMC(peso, altura);
    }


}



function calcularIMC(peso, altura){
    let imc = peso / (altura * altura);

    return  imc.toFixed(3);

}

function validarPeso(peso){

    if ((peso >= 0) && (peso <= 300)) {

      return true;


    }else{
        return false;
    }
}


function validarAltura(altura){

    if ((altura >= 0) && (altura <= 2.5)) {

      return true;


    }else{
        return false;
    }
}