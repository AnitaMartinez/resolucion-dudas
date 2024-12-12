"use strict";

const ul = document.querySelector(".js-ul");
const btn = document.querySelector(".js-btn");
const ulPopular = document.querySelector(".js-list-popular");

fetch("http://localhost:5001/breeds")
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        // Limpiamos la lista antes de agregar elementos
        ul.innerHTML = "";

        // Creamos un string con los elementos li
        let listContent = "";
        for (const dog of data.result) {
            listContent += `<li>${dog.breed} - ${dog.characteristic}</li>`;
        }

        // Asignamos el contenido generado al innerHTML del ul
        ul.innerHTML = listContent;
    })
    .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
    });



/* El usuario haga click en un botón, mostraré la lista de razas populares
    Cuando la usuaria hace click en el botón,
        pedir los datos al servidor
            recogeré los datos
            pintaré el listado con esos datos
*/

function handleClick() {
    fetch("http://localhost:5001/breeds/popular")
        .then(res => res.json())
        .then(data => {
            const popularBreeds = data.result;
            for (const breed of popularBreeds) {
                ulPopular.innerHTML += `<li><p>${breed.breed}: ${breed.characteristic}</p></li>`
            }
        })
}

btn.addEventListener("click", handleClick);