// import {
//   createNotepad,
//   deleteNotepad,
//   listNotepads,
//   readNotepad,
//   updateNotepad,
// } from "./notepad.model.service.mjs";

// const limit = 10;

// async function notepadSeed() {
//   console.log("Iniciando Seed...");

//   for (let i = 0; i < limit; i++) {
//     const notepad = await createNotepad({
//       title: "Titulo Seed",
//       subtitle: "Subtitulo Seed",
//       content: "Conteúdo test do Seed",
//     });
//     console.log(`Novo notepad criado com id: ${notepad.id}`);
//   }
//   console.log("Seed realizando com sucesso!");
//   //   console.log(`Resultado do Seed: ${createNotepad}`);
// }

// notepadSeed();

import {
  createNotepad,
  deleteNotepad,
  listNotepads,
  readNotepad,
  updateNotepad,
} from "./notepad.model.service.mjs";

const limit = 5;

async function notepadSeed() {
  console.log("Iniciando seed...");

  for (let i = 0; i < limit; i++) {
    const notepad = await createNotepad({
      title: "Teste Seed 2",
      Subtitle: "Teste Seed 2",
      content: "Teste conteúdo seed 2",
    });
    console.log(`Notepad criado com id: ${notepad.id}`);
  }

  console.log("Seed realizado com sucesso!");
}

notepadSeed();
