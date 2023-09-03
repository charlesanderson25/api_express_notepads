import express from "express";

const notepadController = express.Router();

//Read Notepad
notepadController.get("/:id", async (req, res) => {
  const notepadId = req.params.id;
  const notepad = await readNotepad(notepadId);
  res.status(200).json(notepad);
});

//Create Notepad

notepadController.post("/", async (req, res) => {
  const nextNotepad = req.body;

  res.status(200).json(notepad);

  try {
    console.log(`Notepad criado com sucesso em ${notepadPath}`);
    res.status(201).json(nextNotepad);
  } catch (error) {
    console.error(`Erro ao criar o notepad: ${error}`);
    res.status(500).json({ error: "Erro ao criar o notepad" });
  }
});

notepadController.delete("/:id", async (req, res) => {
  const notepadId = req.params.id;
  const path = `data/notepads/${notepadId}.json`;
  const notepad = await readNotepad(path);
  await deleteNotepad(path);
});

notepadController.patch("/:id", async (req, res) => {
  const notepadId = req.params.id;
  const partialNotepad = req.body;
  const path = `data/notepads/${notepadId}.json`;
  await updateNotepad(path, partialNotepad);
  const notepad = await readNotepad(path);
  res.status(200).json(notepad);
});

export default notepadController;
