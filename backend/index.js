import express from "express";
import { fileURLToPath } from "url"; // Esta importación la incorpore para seguir trabajando con modules E26
import path from "path"; // Esta importación la incorpore para seguir trabajando con modules E26
import { writeFile, readFile } from "node:fs/promises";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();

// Middleware para parsear el cuerpo de las peticiones
app.use(bodyParser.json());

// Habilitamos CORS
app.use(cors());

app.listen(5000, () => {
    console.log("Estoy listo 😁, por aquí te escucho en el puerto 👉 5000");
});


// Configurar __filename y __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Función para obtener el fronted proporcionado por el desafio
app.get("/", (req, res) => {
    const filePath = path.join(__dirname, "../client/index.html");
    res.sendFile(filePath);
});

// FUNCOÓN PARA OBTENER CANCIONES

const getSongs = async () => {
    const fsResponse = await readFile("repertorio.json", "utf-8");
    const songs = JSON.parse(fsResponse);
    return songs;
};

// RUTAS

//OBTENER TODAS LAS CANCIONES
app.get("/canciones", async (req, res) => {
    const songs = await getSongs();
    res.json(songs);
});

// OBTENER CANCION POR ID
app.get("/canciones/:id", async (req, res) => {
    const id = req.params;
    const songs = await getSongs();
    const song = songs.find((s) => s.id === parseInt(id));
    if (song) {
        res.json(song);
    } else {
        console.log("Canción no encontrada");
        res.status(404).json({ message: "Canción no encontrada" });
    }
});

// CREAR NUEVA CANCION
app.post("/canciones", async (req, res) => {
    const { id, titulo, artista, tono } = req.body;
    const newSong = {
        id,
        titulo,
        artista,
        tono
    };
    let songs = await getSongs();
    songs.push(newSong);
    await writeFile("repertorio.json", JSON.stringify(songs, null, 2));
    res.json(newSong);
});

// EDITAR CANCION
app.put("/canciones/:id", async (req, res) => {
    const { id } = req.params;
    const song = req.body;
    const songs = await getSongs();
    const index = songs.findIndex((p) => p.id == id);

    if (index !== -1) {
        songs[index] = { ...songs[index], ...song };
        await writeFile("repertorio.json", JSON.stringify(songs, null, 2));
        res.send("Canción modificada con éxito");
    } else {
        console.log("No es posible editar, Canción no encontrada");
        res.status(404).send("Canción no encontrada");
    }
});


// ELIMINAR CANCION
app.delete("/canciones/:id", async (req, res) => {
    const { id }= parseInt(req.params.id);
    const songs = await getSongs();
    const songIndex = songs.findIndex((p) => p.id === id);

    if (songIndex !== -1) {
        songs.splice(songIndex, 1);
        await writeFile("repertorio.json", JSON.stringify(songs, null, 2));
        res.send("Canción eliminada con éxito");
    } else {
        console.log("No es posible eliminar, Canción no encontrada");
        res.status(404).send("No es posible eliminar, canción no encontrada");
    }
});

