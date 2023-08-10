function botoncito()
{
    var boton = document.getElementById("miboton");
boton.innerHTML = "COMPRADO";
boton.style.backgroundColor = "green";
}

function botoncito2()
{
    var boton2 = document.getElementById("miboton2");
boton2.innerHTML = "COMPRADO";
boton2.style.backgroundColor = "green";
}

function botoncito3()
{
    var boton3 = document.getElementById("miboton3");
boton3.innerHTML = "COMPRADO";
boton3.style.backgroundColor = "green";
}


function agregarcomentario() {
    // Obtener el valor del campo de comentario
    var comentarioInput = document.getElementById("comentario").value;
  
    // Verificar si el campo de comentario está vacío
    if (comentarioInput === "") {
      return; // Si no se ingresó ningún texto en el imput, salir de la función sin cambiar ni agregar nada nuevo. (la función termina aca)
    }
  
    // Obtener el contenedor de comentarios
    var contenedorComentarios = document.getElementById("contenedor-comentarios");
  
    // Crear un nuevo elemento div para el comentario
    var nuevoComentario = document.createElement("div");
  
    // Establecer el contenido del nuevo comentario con el valor del campo de comentario
    nuevoComentario.innerHTML = comentarioInput;
  
    // Agregar la clase "comentario" al nuevo comentario
    nuevoComentario.classList.add("comentario");
  
    // Agregar el nuevo comentario al contenedor de comentarios
    contenedorComentarios.appendChild(nuevoComentario);
  
    // Limpiar el campo de comentario después de agregar el comentario
    document.getElementById("comentario").value = "";
  }





function sumar() 
{

    var num1 = parseInt(document.getElementById("num1").value);
    var num2 = parseInt(document.getElementById("num2").value);
    var resultado = num1 + num2;

    alert("El resultado de la suma es: " + resultado);
}

