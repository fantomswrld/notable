export class Note {
    constructor(id, title, content, activeState) {
        this.id = id
        this.title = title
        this.content = content
        this.activeState = activeState
    }
}

const defaultNoteObject = new Note('12345678', 'Note #1', '', 'active');

export let arrOfNoteObjects = [defaultNoteObject]