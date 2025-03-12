
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
    };
};
