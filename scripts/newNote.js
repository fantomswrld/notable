import { setActive } from "./setActiveNote.js"
import { setInactive } from "./setActiveNote.js"
import { setNoteStatus } from "./setActiveNote.js"

const newNoteButton = document.getElementById('new-note')
const container = document.querySelector('.top-section')

let noteTitle = ''

newNoteButton.addEventListener('click', () => {
    noteTitle = prompt('Title:')
    createNewNote()
})

function createNewNote() {
    const noteContainer = document.createElement('div')
    noteContainer.classList.add('note')
    setInactive(noteContainer)

    const leftSide = document.createElement('div')
    leftSide.className = 'left'

    const optionsButton = document.createElement('button')
    optionsButton.id = 'note-options'

    const optionsImage = document.createElement('img')
    optionsImage.setAttribute('src', 'images/more.png')
    optionsImage.setAttribute('alt', 'Note Options Button')

    optionsButton.appendChild(optionsImage)
    leftSide.appendChild(optionsButton)
    noteContainer.appendChild(leftSide)

    const rightSide = document.createElement('div')
    rightSide.className = 'right'

    const h3 = document.createElement('h3')
    h3.id = 'note-title'
    h3.textContent = noteTitle

    rightSide.appendChild(h3)
    noteContainer.appendChild(rightSide)
    container.appendChild(noteContainer)

    // get the new notes list to make it possible to set the status of current note
    const notes = document.querySelectorAll('.note')
    const notesLength = notes.length
    setNoteStatus(notes, notesLength)
}