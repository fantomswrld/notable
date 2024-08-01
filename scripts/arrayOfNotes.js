const defaultNoteName = document.querySelector('.default #note-title').textContent
console.log(defaultNoteName)

export class Note {
    constructor(title, content, activeState) {
        this.title = title
        this.content = content
        this.activeState = activeState
    }
}

const defaultNoteObject = new Note(defaultNoteName, '', 'inactive');

export let arrOfNoteObjects = [defaultNoteObject]