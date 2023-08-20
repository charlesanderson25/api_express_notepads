import fs from "fs";

async function createNotepad(path, notepad) {
  const notepadString = JSON.stringify(notepad, null, 2);
  await fs.promises.writeFile(path, notepadString);
}

export async function readNotepad(path) {
  const notepadBuffer = await fs.promises.readFile(path);
  const notepadString = notepadBuffer.toString();
  console.log(notepadString.id);
}

function updateNotepad() {}
function deleteNotepad() {}

export default createNotepad;
