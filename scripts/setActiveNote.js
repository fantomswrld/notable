export const notes = document.querySelectorAll('.note')
export const notesLength = notes.length

export function setNoteStatus(arrNotes, length) {
    for(let i = 0; i < length; i++) {
        arrNotes[i].addEventListener('click', () => {
            setActive(arrNotes[i])
    
            // setting all other notes inactive
            for(let j = 0; j < length; j++) {
                if(arrNotes[j] != arrNotes[i]) {
                    setInactive(arrNotes[j])
                }
            }
        })
    }
}

setNoteStatus(notes, notesLength)

export function setActive(note) {
    note.className = 'note active'
}

export function setInactive(note) {
    note.className = 'note inactive'
}