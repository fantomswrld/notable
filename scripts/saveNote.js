import { arrOfNoteObjects } from "./arrayOfNotes.js"
import { currentNote } from "./setActiveNote.js"
import { currentObjectIndex } from "./setActiveNote.js"

const saveNoteButton = document.querySelector('.save-container')

saveNoteButton.addEventListener('click', () => {
    const content = document.querySelector('textarea').value
    currentNote["content"] = content
    arrOfNoteObjects[currentObjectIndex] = currentNote

    const saveDataObject = {
        title: currentNote["title"],
        content: currentNote["content"]
    }

    const saveDataObject_Serialized = JSON.stringify(saveDataObject)
    console.log(saveDataObject_Serialized)

    localStorage.setItem("Note" + currentObjectIndex, saveDataObject_Serialized)
    console.log(localStorage)

    const saveDataObject_Deserialized = JSON.parse(localStorage.getItem("Note"))
    console.log(saveDataObject_Deserialized)
})