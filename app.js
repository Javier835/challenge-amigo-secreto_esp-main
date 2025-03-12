
//Variable para almacenar amigos
let amigos = [];

//Funcion para agregar amigos a la variable ya creada
function agregarAmigo(){
    
    //obtener el valor del campo amigo
    let amigo = document.getElementById('amigo').value;

    //validar que el campo amigo no este vacio
    if(amigo == ""){

        alert('Introduzca un nombre');

    }else{
        //Enviar datos a variable de amigos
        amigos.push(amigo);
        //Vaciar campo de amigo
        document.getElementById('amigo').value = "";
        //Actualizar lista
        actualizarListaDeAmigos()
    };

    console.log(amigos);
};

//Funcion para actualizar lista de amigos en la interfaz
function actualizarListaDeAmigos(){

    //Obtener el identificador de la lista
    const lista = document.getElementById('listaAmigos');

    //limpiar la lista
    lista.innerHTML="";

    //recorrer mi array 
    amigos.forEach(amigo => {
        const li = document.createElement("li"); // Crear un <li>
        li.textContent = amigo; // Agregar amigo al <li>
        lista.appendChild(li); // Insertar el <li> en la lista
    });
}

