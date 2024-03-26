function jugar(opcionJugador) {
    var opciones = ["piedra", "papel", "tijeras"];
    var seleccionMaquina = opciones[Math.floor(Math.random() * opciones.length)];
    // Funcion para crear opciones y jugador oponente con un algoritmo random 

// Algoritmo base del juego 
    if (opcionJugador === "piedra" || opcionJugador === "papel" || opcionJugador === "tijeras") {
        var resultado = "";
        resultado += "Tu elegiste: " + opcionJugador + ".<br>";
        resultado += "La computadora eligió: " + seleccionMaquina + ".<br><br>";

        if (opcionJugador === seleccionMaquina) {
            resultado += "¡Empate!";
        } else if ((opcionJugador === "piedra" && seleccionMaquina === "tijeras") ||
                   (opcionJugador === "papel" && seleccionMaquina === "piedra") ||
                   (opcionJugador === "tijeras" && seleccionMaquina === "papel")) {
            resultado += "¡Ganaste!";
        } else {
            resultado += "¡Perdiste!";
        }
        mostrarResultado(resultado);
    } else {
        alert("Por favor, selecciona una opción válida (piedra, papel o tijeras).");
    }
}

function mostrarResultado(resultado) {
    var resultadoElement = document.getElementById("resultado");
    resultadoElement.innerHTML = resultado;
}
// Aqui se imprime el resultado del ganador   