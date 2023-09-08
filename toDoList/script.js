// Variables
const entradaTarea= document.getElementById("entradaTarea");
const listaTarea = document.getElementById("listaTarea");
const checkbox=document.getElementById('checklist');

// Función para agregar una tarea
function agregarTarea() {
    const textoTarea = entradaTarea.value;
    if (textoTarea !== "") {
      const li = document.createElement("li");
      const p = document.createElement("p");
      p.innerText = textoTarea;
      
      // Agrega una casilla de verificación para marcar la tarea como resuelta
      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.addEventListener("change", () => {
    
        if (checkbox.checked) {
          p.style.textDecoration = "line-through"; // Aplica un estilo tachado cuando se marca como resuelta
            } else
         {
          p.style.textDecoration = "none"; // Quita el estilo tachado cuando se desmarca
         }
      });

      // Agregar un botón de "Editar" para cada tarea
        const editarButton = document.createElement("button");
        editarButton.addEventListener("click", () => {
         editarTarea(p);
         });

        editarButton.setAttribute("class", "edit-button");
        editarButton.innerText = "Editar";
      
      const button = document.createElement("button");
      button.addEventListener("click", () => {
        eliminarTarea(button);
      });
      button.setAttribute("class", "delete-button");
      button.innerText = "Eliminar";
      
      li.appendChild(checkbox); // Agrega la casilla de verificación
      li.appendChild(p);
      li.appendChild(editarButton); // Agrega el botón de "Editar"
      li.appendChild(button);
      
      listaTarea.appendChild(li);
      entradaTarea.value = "";
    }
    else
    {
        swal("Ingrese texto antes de clickear agregar.");
    }
}

// Función para eliminar una tarea
function eliminarTarea(button) {
        const listItem = button.parentElement;
        swal({
            title: "Estas seguro?",
            text: "Una vez eliminado tu tarea no podra ser recuperada!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
              swal("Tu tarea fue eliminada procastinador.", {
                icon: "success",
              });
            } else {
              swal("Sigue trabajando en esa lista!");
            }
          });
        listaTarea.removeChild(listItem);     
}

//Funcion para editar la tarea (el parrafo)
function editarTarea(parrafo) {
    swal({
      text: "Editar tarea:",
      content: {
        element: "input",
        attributes: {
          value: parrafo.innerText,
        },
      },
    }).then((nuevoTexto) => {
      if (nuevoTexto !== "") {
        parrafo.innerText = nuevoTexto;
        swal("Tarea editada con éxito.", {
          icon: "success",
        });
      }
      else
      {
        swal("No ingreso ningun dato.", {
            icon: "error",
          });
      }
    });
  }


  
  
  
  





