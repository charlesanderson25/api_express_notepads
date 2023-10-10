import fs from "fs";
import * as jsonService from "../json/json.service.mjs";
import cors from "cors";
import express from "express";
import { connectionDataBase } from "../db.mjs";
import { error } from "console";

//Teste conexão banco de dados

connectionDataBase.connect((err) => {
  if (err) {
    console.error("Erro na conexão com o Banco de Dados", err);
  } else {
    console.log("Banco de Dados conectado com sucesso");
  }
});

const notepadsConnection = connectionDataBase.query(
  "Select * from notepads",
  (err, results) => {
    if (err) {
      console.error("Erro na consulta ao banco de dados", err);
    } else {
      console.log("Registros Encontrados:");
      console.log(results);
    }
    connectionDataBase.end();
  }
);

// Fim do teste conexão banco de dados

const app = express();
app.use(cors());

const notepadsPath = "data/notepads";
const notepadLatestIdPath = "data/notepadLatestId.json";

// export async function listNotepads({ limit, offset }) { - adiciona paginação
export async function listNotepads() {
  const notepadFiles = await fs.promises.readdir(notepadsPath);
  let notepads = [];
  for (const notepadFile of notepadFiles) {
    const currentNotepad = await jsonService.readJson(
      `${notepadsPath}/${notepadFile}`
    );
    notepads.push(currentNotepad);
  }
  return {
    // notepads: notepads.slice(offset, offset + limit), - adiciona paginação
    notepads,
    count: notepads.length,
  };
}

export async function createNotepad(data) {
  const { notepadLatestId } = await jsonService.readJson(notepadLatestIdPath);
  const notepadId = notepadLatestId + 1;
  const nextNotepad = {
    createdAt: new Date().toJSON(),
    id: notepadId,
    ...data,
  };
  const path = `${notepadsPath}/${nextNotepad.id}.json`;
  await jsonService.createJson(path, nextNotepad);
  await jsonService.updateJson(notepadLatestIdPath, {
    notepadLatestId: notepadId,
  });
  return nextNotepad;
}

export async function readNotepad(id) {
  const notepad = await jsonService.readJson(`${notepadsPath}/${id}.json`);
  return notepad;
}

export async function updateNotepad(id, data) {
  const path = `${notepadsPath}/${id}.json`;
  await jsonService.updateJson(path, data);
  const notepad = await jsonService.readJson(path);
  return notepad;
}

export async function deleteNotepad(id) {
  const path = `${notepadsPath}/${id}.json`;
  const notepad = await jsonService.readJson(path);
  await jsonService.deleteJson(path);
  return notepad; // Quando deleta-se um recurso, normalmente se retorna esse esse recurso deletado
}
