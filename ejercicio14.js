function calcular() {

    // Capturar la cadena ingresada
    let entrada = document.getElementById("numeros").value;

    // Validar campo vacío
    if (entrada.trim() === "") {

        Swal.fire({
            title: "¡Atención!",
            text: "Ingrese uno o más números separados por comas.",
            icon: "warning",
            confirmButtonText: "Entendido"
        });

        limpiarResultados();
        return;
    }

    // Convertir cadena a arreglo
    let arreglo = entrada.split(",");

    // Eliminar espacios y convertir a números
    let numeros = arreglo.map(numero => Number(numero.trim()));

    // Validar números
    let datosValidos = numeros.every(numero => !isNaN(numero));

    if (!datosValidos) {

        Swal.fire({
            title: "Error",
            text: "Ingrese únicamente números separados por comas.",
            icon: "error",
            confirmButtonText: "Aceptar"
        });

        limpiarResultados();
        return;
    }

    // Calcular mayor
    let mayor = Math.max(...numeros);

    // Calcular menor
    let menor = Math.min(...numeros);

    // Calcular suma
    let suma = numeros.reduce((acumulador, numero) => acumulador + numero, 0);

    // Calcular promedio
    let promedio = suma / numeros.length;

    // Mostrar resultados

    document.getElementById("mayor").value = mayor;

    document.getElementById("menor").value = menor;

    document.getElementById("promedio").value = promedio.toFixed(2);

}


// Función para limpiar resultados
function limpiarResultados(){

    document.getElementById("mayor").value = "";

    document.getElementById("menor").value = "";

    document.getElementById("promedio").value = "";

}