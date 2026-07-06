// Closure que encapsula el manejo de tareas
const manejarTareas = (() => {

    function obtenerTareas(){

        let tareas = localStorage.getItem("tareas");

        return tareas ? JSON.parse(tareas) : [];

    }

    function guardarTareas(tareas){

        localStorage.setItem(
            "tareas",
            JSON.stringify(tareas)
        );

    }

    return{

        agregar(tarea){

            let tareas = obtenerTareas();

            tareas.push({
                nombre:tarea
            });

            guardarTareas(tareas);

        },

        eliminar(indice){

            let tareas = obtenerTareas();

            tareas.splice(indice,1);

            guardarTareas(tareas);

        },

        listar(){

            return obtenerTareas();

        }

    };

})();


// Agregar tarea

function agregarTarea(){

    let tarea = document.getElementById("tarea").value.trim();

    if(tarea===""){

        Swal.fire({
            title:"Atención",
            text:"Ingrese una tarea.",
            icon:"warning"
        });

        return;

    }

    manejarTareas.agregar(tarea);

    document.getElementById("tarea").value="";

    renderizarTareas();

}


// Renderizar tareas

function renderizarTareas(){

    let lista = document.getElementById("listaTareas");

    lista.innerHTML="";

    let tareas = manejarTareas.listar();

    tareas.forEach((tarea,indice)=>{

        let li = document.createElement("li");

        li.innerHTML=`
            ${tarea.nombre}
            <button onclick="eliminarTarea(${indice})">
                Eliminar
            </button>
        `;

        lista.appendChild(li);

    });

}


// Eliminar tarea

function eliminarTarea(indice){

    Swal.fire({

        title:"¿Eliminar tarea?",

        text:"Esta acción no se puede deshacer.",

        icon:"warning",

        showCancelButton:true,

        confirmButtonText:"Eliminar",

        cancelButtonText:"Cancelar"

    }).then((resultado)=>{

        if(resultado.isConfirmed){

            manejarTareas.eliminar(indice);

            renderizarTareas();

            Swal.fire(
                "Eliminada",
                "La tarea fue eliminada.",
                "success"
            );

        }

    });

}


// Al cargar la página

window.onload=renderizarTareas;