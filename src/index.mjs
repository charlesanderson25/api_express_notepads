import createNotepad from "./notepad/notepad.model.service.mjs";

const notepadTest = {
  id: 1,
  title: "Um título aqui",
  subtitle: "Um subtitulo aqui",
  content: "Esse é um exemplo de conteúdo mais extenso.",
  createdAt: "2023-08-03T22:59:17.534Z",
};

createNotepad("test.JSON", notepadTest);
