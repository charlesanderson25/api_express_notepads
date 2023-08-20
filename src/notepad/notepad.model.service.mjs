import fs from "fs";

export async function createNotepad(path, notepad) {
  const notepadString = JSON.stringify(notepad, null, 2);
  await fs.promises.writeFile(path, notepadString);
}

export async function readNotepad(path) {
  const notepadBuffer = await fs.promises.readFile(path);
  const notepadString = notepadBuffer.toString();
  const notepad = JSON.parse(notepadString);
  return notepad;
}

export async function updateNotepad(path, partialNotepad) {
  const oldNotepad = await readNotepad(path);
  const nextNotepad = { ...oldNotepad, ...partialNotepad };
  await createNotepad(path, nextNotepad);
}

export async function deleteNotepad(path) {
  await fs.promises.unlink(path);
}
