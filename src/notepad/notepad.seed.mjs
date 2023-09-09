import {
  createNotepad,
  deleteNotepad,
  listNotepads,
  readNotepad,
  updateNotepad,
} from "./notepad.model.service.mjs";

console.log("Seed");

createNotepad({
  title: "Titulo Seed",
  subtitle: "Subtitulo Seed",
  content: "Conteúdo test do Seed",
  createdAt: "2023/09/09",
});
