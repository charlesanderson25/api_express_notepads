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

export async function updateNotepad(id, partialNotepad) {}

export async function deleteNotepad(id) {}
