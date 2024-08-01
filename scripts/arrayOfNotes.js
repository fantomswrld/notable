export class Note {
    constructor(title, content, activeState) {
        this.title = title
        this.content = content
        this.activeState = activeState
    }
}

const defaultNoteObject = new Note('Note #1', '', 'active');

export let arrOfNoteObjects = [defaultNoteObject]