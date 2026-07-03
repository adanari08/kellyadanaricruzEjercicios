// Funciones flecha

const sumar = (a, b) => a + b;

const restar = (a, b) => a - b;

const multiplicar = (a, b) => a * b;

const dividir = (a, b) => {

    if (b === 0) {

        return "Error: División entre cero";

    }

    return a / b;

};


// Función principal

function calcularOperacion(operacion){

    let numero1 = document.getElementById("numero1").value;
    let numero2 = document.getElementById("numero2").value;

    // Validar campos vacíos

    if(numero1.trim()==="" || numero2.trim()===""){

        Swal.fire({
            title:"¡Atención!",
            text:"Complete ambos campos.",
            icon:"warning",
            confirmButtonText:"Aceptar"
        });

        document.getElementById("resultado").value="";
        return;

    }

    // Validar números

    if(isNaN(numero1) || isNaN(numero2)){

        Swal.fire({
            title:"Error",
            text:"Ingrese únicamente valores numéricos.",
            icon:"error",
            confirmButtonText:"Aceptar"
        });

        document.getElementById("resultado").value="";
        return;

    }

    numero1 = parseFloat(numero1);
    numero2 = parseFloat(numero2);

    let resultado;

    switch(operacion){

        case "sumar":
            resultado = sumar(numero1,numero2);
            break;

        case "restar":
            resultado = restar(numero1,numero2);
            break;

        case "multiplicar":
            resultado = multiplicar(numero1,numero2);
            break;

        case "dividir":
            resultado = dividir(numero1,numero2);
            break;

    }

    document.getElementById("resultado").value = resultado;

}