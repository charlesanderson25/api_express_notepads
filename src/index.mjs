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

const port = 8080;
const host = "0.0.0.0";
const app = express();
app.use(express.json()); //Middleware para trabalhar com JSON

app.get("/notepads/:id", (req, res) => {
  const notepadId = req.params.id;
  res.send({
    id: notepadId,
  });
});

app.listen(port, host, () => {
  console.log(`Servidor express iniciado em: http://${host}:${port}`);
});
