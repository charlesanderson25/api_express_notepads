// import {
//   readNotepad,
//   deleteNotepad,
//   createNotepad,
//   updateNotepad,
// } from "./notepad/notepad.model.service.mjs";

// const notepadTest = {
//   id: 1,
//   title: "Um título aqui",
//   subtitle: "Um subtitulo aqui",
//   content: "Esse é um exemplo de conteúdo mais extenso.",
//   createdAt: "2023-08-03T22:59:17.534Z",
// };

// // createNotepad("test.JSON", notepadTest);
// // readNotepad("test.JSON");
// // console.log(readNotepad);

// updateNotepad("test.JSON", {
//   title: "Novo Título Update!",
// });

import express from "express";
import {
  readNotepad,
  deleteNotepad,
  createNotepad,
  updateNotepad,
} from "./notepad/notepad.model.service.mjs";

const port = 8080;
const host = "0.0.0.0";
const app = express();
app.use(express.json()); //Middleware para trabalhar com JSON

//Read Notepad
app.get("/notepads/:id", async (req, res) => {
  const notepadId = req.params.id;
  const notepad = await readNotepad(`data/notepads/${notepadId}.json`);
  // res.status(200).json(notepad);
});

//Create Notepad

// app.post("/notepads", async (req, res) => {
//   const nextNotepad = req.body;
//   const notepadPah = `data/notepads/${nextNotepad.id}.json`;
//   await createNotepad(notepadPah, nextNotepad);
//   res.status(201).json(nextNotepad);
// });

app.post("/notepads", async (req, res) => {
  const nextNotepad = req.body;
  const notepadPath = `data/notepads/${nextNotepad.id}.json`;

  try {
    await createNotepad(notepadPath, nextNotepad);
    console.log(`Notepad criado com sucesso em ${notepadPath}`);
    res.status(201).json(nextNotepad);
  } catch (error) {
    console.error(`Erro ao criar o notepad: ${error}`);
    res.status(500).json({ error: "Erro ao criar o notepad" });
  }
});

app.delete("/notepads/:id", async (req, res) => {
  const notepadId = req.params.id;
  const path = `data/notepads/${notepadId}.json`;
  const notepad = readNotepad(path);
  await deleteNotepad(notepad);
  res.status(200).json(notepad);
});

app.listen(port, host, () => {
  console.log(`Servidor express iniciado em: http://${host}:${port}`);
});
