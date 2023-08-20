import fs from "fs";

async function createNotepad(path, notepad) {
  const notepadString = JSON.stringify(notepad, null, 2);
  await fs.promises.writeFile(path, notepadString);
}

function readNotepad() {}
function updateNotepad() {}
function deleteNotepad() {}

export default createNotepad;
