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
        content: notesNodeListAsArray
    }

    const notesSerialized = JSON.stringify(notes)
    localStorage.setItem("Notes", notesSerialized)
    
    const notesDeserialized = JSON.parse(localStorage.getItem("Notes"))
    console.log(notesDeserialized)
    console.log(typeof(notesDeserialized))
})