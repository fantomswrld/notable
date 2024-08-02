import { arrOfNoteObjects } from "./arrayOfNotes.js"

export const notes = document.querySelectorAll('.note')
export const notesLength = notes.length

export let currentNote = notes[0]
export let currentObjectIndex = 0

export function setNoteStatus(arrOfNoteElements, length) {
    for(let i = 0; i < length; i++) {
        arrOfNoteElements[i].addEventListener('click', () => {
            const confirmNoteChange = confirm('Make sure current note is saved. Confirm?')

            if(confirmNoteChange === true) {
                document.querySelector('textarea').value = arrOfNoteObjects[i].content
                currentObjectIndex = i
                currentNote = arrOfNoteObjects[i]
                arrOfNoteObjects[i].activeState = 'active'
                
                setActive(arrOfNoteElements[i])
        
                // setting all other notes inactive
                for(let j = 0; j < length; j++) {
                    if(arrOfNoteElements[j] != arrOfNoteElements[i]) {
                        arrOfNoteObjects[j].activeState = 'inactive'
                        setInactive(arrOfNoteElements[j])
                    }
                }
            } else {
                return
            }
        })
    }
}

export function setActive(note) {
    note.className = 'note active'
}

export function setInactive(note) {
    note.className = 'note inactive'
}