const express = require("express");
const cors = require("cors");

const server = express();

server.use(cors());

const dogBreeds = [
    { breed: "Golden Retriever", characteristic: "Friendly and loyal" },
    { breed: "German Shepherd", characteristic: "Intelligent and versatile" },
    { breed: "Bulldog", characteristic: "Stubborn but affectionate" },
    { breed: "Poodle", characteristic: "Highly intelligent and hypoallergenic" },
    { breed: "Beagle", characteristic: "Curious and good-natured" },
];
const popularBreeds = [
    { breed: "Labrador Retriever", characteristic: "Friendly and outgoing" },
    { breed: "Golden Retriever", characteristic: "Intelligent and devoted" },
    { breed: "French Bulldog", characteristic: "Adaptable and playful" },
];

// API

// Endpoint que devuelva las razas de los perros
/// método GET
// el método/función recibe dos parámetros: string (ruta), función

server.get("/breeds", (request, response) => {
    // tareas que hace este endpoint para devolver la información
    // siempre tendrá que responder a frontend, enviar una respuesta. Con el parámetro response

    // Si no  hay razas de perros, le mando un mensaje en concreto
    if (dogBreeds.length === 0) {
        response.status(404).json({ success: false, error: "No se ha encontrado el recurso" })
    } else {
        // response.status(200).json({ success: true, result: dogBreeds.map(breedDog => breedDog.breed) })
        response.status(200).json({ success: true, result: dogBreeds })
    }
})

// Devolver el número total de razas de perros
server.get("/breeds/count", (req, res) => {
    res.status(200).json({
        success: true,
        count: dogBreeds.length,
        message: `Hay un total de ${dogBreeds.length} razas disponibles`
    })
})

// Devolver una lista de razas populares
server.get("/breeds/popular", (req, res) => {
    res.status(200).json({
        success: true,
        result: popularBreeds
    })
})

// Añadir una raza de perro nueva
server.post("/breed", (req, res) => {
    // recoger lo que me envía frontend en el parámetro req

    // añadirlo a mi base de datos

    // responder a frontend
    res.status(201).json({
        success: true,
        message: "Recurso añadido correctamente"
    })
})

// Actualizar una raza de perro
server.put("/breed/:id", (req, res) => {
    // recojo el id que me envia frontend

    // actualizo mi base de datos

    // envío respuesta
    res.status(200).json({
        success: true,
        message: "Recurso actualizado correctamente"
    })
})


const port = 5001;
server.listen(port, () => {
    console.log(`Server is running. Go to http://localhost:${port}`);
})
