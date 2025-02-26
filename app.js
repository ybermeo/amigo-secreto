// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = []

function agregarAmigo() {
    let nombre = "";
    nombre = document.getElementById('amigo').value.trim();

    if (typeof nombre === "string" && nombre.length === 0) {
        alert('Por favor, inserte un nombre.');
    } else if (nombre === null) {
        alert('Por favor, inserte un nombre.');
    } else {
        if (!amigos.includes(nombre)) {
            amigos.push(nombre);
        } else {
            alert('Nombre repetido: Por favor, inserte otro nombre.');
        }

        document.getElementById('amigo').value = "";

        actualizarAmigos();
    }
}

function actualizarAmigos() {
    let elementoHTML = document.getElementById('listaAmigos');

    elementoHTML.innerHTML = "";

    amigos.forEach(elemento => {
        elementoHTML.innerHTML += `<li>${elemento}</li>`;
    });
}

function sortearAmigo() {
    if (amigos.length > 0) {
        let numeroIndice =  Math.floor(Math.random() * amigos.length) + 1;

        let elementoHTML = document.getElementById('resultado');
        elementoHTML.innerHTML = `<li>El amigo secreto sorteado es: ${amigos[numeroIndice - 1]}</li>`;
        
        document.getElementById('listaAmigos').innerHTML = "";
    } else {
        alert('Lista de amigos vacía: Por favor, inserte un nombre.');
    }
}