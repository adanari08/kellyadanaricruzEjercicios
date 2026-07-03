// Arreglo donde se almacenarán los objetos
let estudiantes = [];

function agregarEstudiante() {

    let nombre = document.getElementById("nombre").value.trim();
    let calificacion = document.getElementById("calificacion").value.trim();

    // Validaciones
    if (nombre === "" || calificacion === "") {

        Swal.fire({
            title: "¡Atención!",
            text: "Todos los campos son obligatorios.",
            icon: "warning",
            confirmButtonText: "Aceptar"
        });

        return;
    }

    if (isNaN(calificacion)) {

        Swal.fire({
            title: "Error",
            text: "La calificación debe ser un número.",
            icon: "error",
            confirmButtonText: "Aceptar"
        });

        return;
    }

    calificacion = Number(calificacion);

    if (calificacion < 0 || calificacion > 100) {

        Swal.fire({
            title: "Error",
            text: "La calificación debe estar entre 0 y 100.",
            icon: "error",
            confirmButtonText: "Aceptar"
        });

        return;
    }

    // Crear objeto estudiante
    let estudiante = {

        nombre: nombre,

        calificacion: calificacion

    };

    // Agregar al arreglo
    estudiantes.push(estudiante);

    Swal.fire({
        title: "Correcto",
        text: "Estudiante agregado correctamente.",
        icon: "success",
        confirmButtonText: "Aceptar"
    });

    document.getElementById("nombre").value = "";
    document.getElementById("calificacion").value = "";
}

function calcularResultados() {

    if (estudiantes.length === 0) {

        Swal.fire({
            title: "Sin datos",
            text: "Primero agrega estudiantes.",
            icon: "warning",
            confirmButtonText: "Aceptar"
        });

        return;
    }

    // Promedio usando reduce
    let promedio = estudiantes.reduce(

        (total, estudiante) => total + estudiante.calificacion,

        0

    ) / estudiantes.length;

    // Obtener calificaciones
    let calificaciones = estudiantes.map(

        estudiante => estudiante.calificacion

    );

    // Mayor y menor
    let mayor = Math.max(...calificaciones);
    let menor = Math.min(...calificaciones);

    // Buscar estudiantes
    let estudianteMayor = estudiantes.find(

        estudiante => estudiante.calificacion === mayor

    );

    let estudianteMenor = estudiantes.find(

        estudiante => estudiante.calificacion === menor

    );

    document.getElementById("promedio").value = promedio.toFixed(2);

    document.getElementById("mayor").value =
        estudianteMayor.nombre + " (" + mayor + ")";

    document.getElementById("menor").value =
        estudianteMenor.nombre + " (" + menor + ")";

}