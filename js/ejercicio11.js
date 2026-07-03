function convertir() {

    // Capturar el valor ingresado
    var kilometrosInput = document.getElementById("kilometros").value;

    // Validar campo vacío y dato numérico
    if (kilometrosInput.trim() === "" || isNaN(kilometrosInput)) {

        Swal.fire({
            title: "¡Atención!",
            text: "Ingrese una distancia válida en kilómetros.",
            icon: "warning",
            confirmButtonText: "Entendido"
        });

        document.getElementById("millas").value = "";

        return;
    }

    // Convertir a número
    var kilometros = parseFloat(kilometrosInput);

    // Fórmula de conversión
    var millas = kilometros * 0.621371;

    // Mostrar resultado
    document.getElementById("millas").value =
        millas.toFixed(5) + " mi";
}
