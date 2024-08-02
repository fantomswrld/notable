import { arrOfNoteObjects } from "./arrayOfNotes.js"
import { currentNote } from "./setActiveNote.js"
import { currentObjectIndex } from "./setActiveNote.js"

const saveNoteButton = document.querySelector('.save-container')

saveNoteButton.addEventListener('click', () => {
    const content = document.querySelector('textarea').value
    currentNote["content"] = content
    arrOfNoteObjects[currentObjectIndex] = currentNote

    const notesNodeList = document.querySelectorAll('.note')
    const notesNodeListAsArray = Array.from(notesNodeList)
    console.log(notesNodeListAsArray)

    const notes = {
        notes: notesNodeListAsArray
    }

    // converting to string to be readable by localStorage
    const notesSerialized = JSON.stringify(notes)
    localStorage.setItem("Notes", notesSerialized)
    console.log(notesSerialized)
})