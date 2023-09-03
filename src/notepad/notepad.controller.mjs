import express from "express";
import {
  createNotepad,
  deleteNotepad,
  updateNotepad,
} from "./notepad.model.service.mjs";

const notepadController = express.Router();

//Read Notepad
notepadController.get("/:id", async (req, res) => {
  const notepadId = req.params.id;
  const notepad = await readNotepad(notepadId);
  res.status(200).json(notepad);
});

//Create Notepad

notepadController.post("/", async (req, res) => {
  const notepadData = req.body;
  const notepad = await createNotepad(notepadData);
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
  const notepad = await deleteNotepad(notepadId);
  res.status(200).json(notepad);
});

notepadController.patch("/:id", async (req, res) => {
  const partialNotepad = req.body;
  const notepadId = req.params.id;
  const notepad = await updateNotepad(notepadId, partialNotepad);
  res.status(200).json(notepad);
});

export default notepadController;
