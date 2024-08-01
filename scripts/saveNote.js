import { arrOfNoteObjects } from "./arrayOfNotes.js"
import { currentNote } from "./setActiveNote.js"
import { currentObjectIndex } from "./setActiveNote.js"

const saveNoteButton = document.querySelector('.save-container')

saveNoteButton.addEventListener('click', () => {
    const content = document.querySelector('textarea').value
    currentNote["content"] = content
    arrOfNoteObjects[currentObjectIndex] = currentNote
})