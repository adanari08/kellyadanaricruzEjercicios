function verificarEdad() {

    // Capturar la edad ingresada
    var edadInput = document.getElementById("edad").value;

    // Validar campo vacío o no numérico
    if (edadInput.trim() === "" || isNaN(edadInput)) {

        Swal.fire({
            title: "¡Atención!",
            text: "Ingrese una edad válida.",
            icon: "warning",
            confirmButtonText: "Entendido"
        });

        document.getElementById("resultado").value = "";
        return;
    }

    // Convertir a número
    var edad = parseInt(edadInput);

    // Validar número positivo
    if (edad < 0) {

        Swal.fire({
            title: "Edad inválida",
            text: "La edad debe ser un número positivo.",
            icon: "error",
            confirmButtonText: "Aceptar"
        });

        document.getElementById("resultado").value = "";
        return;
    }

    // Verificar si puede votar
    if (edad >= 18) {

        document.getElementById("resultado").value = "✅ Puedes votar";

    } else {

        document.getElementById("resultado").value = "❌ No puedes votar";

    }

}