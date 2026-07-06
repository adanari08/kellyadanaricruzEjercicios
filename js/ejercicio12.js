function convertir() {

    // Capturar el valor ingresado
    var pesosInput = document.getElementById("pesos").value;

    // Validaciones
    if (pesosInput.trim() === "" || isNaN(pesosInput)) {

        Swal.fire({
            title: "¡Atención!",
            text: "Ingrese una cantidad válida en pesos mexicanos.",
            icon: "warning",
            confirmButtonText: "Entendido"
        });

        document.getElementById("dolares").value = "";
        return;
    }

    // Convertir a número
    var pesos = parseFloat(pesosInput);

    // Validar que sea positivo
    if (pesos < 0) {

        Swal.fire({
            title: "Valor inválido",
            text: "La cantidad debe ser un número positivo.",
            icon: "error",
            confirmButtonText: "Aceptar"
        });

        document.getElementById("dolares").value = "";
        return;
    }

    // Tasa de cambio
    var tasaCambio = 0.055;

    // Conversión
    var dolares = pesos * tasaCambio;

    // Mostrar resultado
    document.getElementById("dolares").value =
        "$" + dolares.toFixed(2) + " USD";
}