/**
 * SELECCIÓN DE NODOS CRUCIALES DEL DOM
 * Usamos document.getElementById para enlazar las referencias de los elementos HTML en memoria.
 */
const inputElemento = document.getElementById('nuevoElemento');
const botonAgregar = document.getElementById('agregarBtn');
const contenedorLista = document.getElementById('lista');

/**
 * FUNCIÓN COORDENADORA: agregarElemento()
 * Se ejecuta al dispararse el evento del click o el envío de datos.
 * Se encarga de construir la interfaz e inyectar de manera segura los nodos hijos.
 */
function agregarElemento() {
    // 1. Extrae el valor actual del input eliminando los espacios marginales en blanco
    const textoLimpio = inputElemento.value.trim();

    // 2. Validación de seguridad: Comprueba que el campo no esté completamente vacío
    if (textoLimpio === '') {
        // Alerta estética en sustitución del comando nativo 'alert'
        Swal.fire({
            title: 'Campo vacío',
            text: 'Por favor, escriba algún texto antes de intentar agregarlo a la lista.',
            icon: 'warning',
            confirmButtonColor: '#630330', // Mantiene la paleta de colores institucional
            confirmButtonText: 'Entendido'
        });
        return; // Cláusula de escape: Termina la ejecución de la función inmediatamente
    }

    // 3. CREACIÓN DEL ELEMENTO CONTENEDOR 'li'
    // Instancia un nuevo nodo de lista en la memoria temporal del navegador
    const nuevoLi = document.createElement('li');
    
    // Le asignamos las clases CSS nativas de Bootstrap para diseñar un renglón moderno y flexible
    // list-group-item: Le da formato de fila.
    // d-flex: Activa el diseño de caja flexible (Flexbox).
    // justify-content-between: Separa el texto a la extrema izquierda y el botón a la extrema derecha.
    // align-items-center: Centra los elementos verticalmente.
    nuevoLi.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center', 'animate__animated', 'animate__fadeIn');

    // 4. CREACIÓN DEL NODO DE TEXTO SEGURO
    // Evita vulnerabilidades de inyección de código (XSS) al tratar la entrada netamente como texto plano, no como HTML
    const nodoTexto = document.createTextNode(textoLimpio);
    
    // Agrega el texto recién creado como el primer elemento hijo dentro de nuestro nuevo renglón 'li'
    nuevoLi.appendChild(nodoTexto);

    // 5. CREACIÓN DEL BOTÓN DE ELIMINACIÓN
    // Instancia un elemento de tipo botón de forma puramente dinámica
    const botonEliminar = document.createElement('button');
    // Asigna el texto descriptivo directo
    botonEliminar.textContent = 'Eliminar';
    
    // Inyecta utilidades de Bootstrap: btn (base), btn-danger (color rojo), btn-sm (tamaño compacto)
    botonEliminar.classList.add('btn', 'btn-danger', 'btn-sm', 'px-3');

    // 6. ASIGNACIÓN DEL ESCUCHADOR DE EVENTOS (EVENT LISTENER) INDIVIDUAL
    // Cada botón de borrado se crea con la memoria y contexto exacto de la fila 'li' a la que pertenece
    botonEliminar.addEventListener('click', function() {
        // Elimina el elemento 'li' correspondiente de manera directa del árbol de renderizado del navegador
        nuevoLi.remove();
    });

    // 7. ENSAMBLAJE DE LA ESTRUCTURA EN EL DOM
    // Introduce el botón de eliminar dentro del renglón 'li' (se posicionará a la derecha por las reglas de Flexbox)
    nuevoLi.appendChild(botonEliminar);
    
    // Inserta de forma efectiva el 'li' completamente configurado al final de la lista 'ul' visible en pantalla
    contenedorLista.appendChild(nuevoLi);

    // 8. LIMPIEZA Y ENFOQUE DEL FORMULARIO
    // Vacía el campo de captura para agilizar el ingreso del siguiente registro
    inputElemento.value = '';
    
    // Reasigna el foco del teclado al input de forma automática
    inputElemento.focus();
}

/**
 * ASIGNACIÓN DE ESCUCHADORES DE EVENTOS GLOBALES
 * Vincula la función controladora al evento de click del botón principal.
 */
botonAgregar.addEventListener('click', agregarElemento);

/**
 * MEJORA DE ACCESIBILIDAD Y EXPERIENCIA DE USUARIO (UX):
 * Permite que el usuario pueda agregar elementos simplemente presionando la tecla "Enter"
 * sin necesidad de recurrir obligatoriamente al puntero del mouse.
 */
inputElemento.addEventListener('keydown', function(evento) {
    // Comprueba si la tecla oprimida por el usuario corresponde exactamente a Enter
    if (evento.key === 'Enter') {
        agregarElemento(); // Dispara la función contenedora
    }
});