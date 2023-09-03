import * as jsonService from "../json/json.service.mjs";

const notepadsPath = "data/notepads";

export async function createNotepad(data) {
  const path = `${notepadsPath}/${nextNotepad.id}.json`;
  await jsonService.createJson(path, data);
  return data;
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
