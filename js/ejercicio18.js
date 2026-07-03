// Seleccionar elementos

const input = document.getElementById("nuevoElemento");

const botonAgregar = document.getElementById("agregarBtn");

const lista = document.getElementById("lista");


// Función para agregar elementos

function agregarElemento(){

    const texto = input.value.trim();

    if(texto===""){

        Swal.fire({

            title:"Campo vacío",

            text:"Escribe un elemento para agregar.",

            icon:"warning",

            confirmButtonText:"Aceptar"

        });

        return;

    }

    // Crear elemento

    const li = document.createElement("li");

    li.className="list-group-item d-flex justify-content-between align-items-center";

    li.textContent=texto;


    // Botón eliminar

    const botonEliminar=document.createElement("button");

    botonEliminar.textContent="Eliminar";

    botonEliminar.className="btn btn-danger btn-sm";


    botonEliminar.addEventListener("click",function(){

        Swal.fire({

            title:"¿Eliminar elemento?",

            text:"Esta acción no se puede deshacer.",

            icon:"warning",

            showCancelButton:true,

            confirmButtonText:"Sí",

            cancelButtonText:"Cancelar"

        }).then((resultado)=>{

            if(resultado.isConfirmed){

                li.remove();

            }

        });

    });


    li.appendChild(botonEliminar);

    lista.appendChild(li);

    input.value="";

    input.focus();

}


// Evento del botón

botonAgregar.addEventListener("click",agregarElemento);


// Agregar con Enter

input.addEventListener("keypress",function(e){

    if(e.key==="Enter"){

        agregarElemento();

    }

});