const notes = document.querySelectorAll('.note');
const notesLength = notes.length

for(let i = 0; i < notesLength; i++) {
    notes[i].addEventListener('click', () => {
        setActive(notes[i])

        for(let j = 0; j < notesLength; j++) {
            if(notes[j] != notes[i]) {
                setInactive(notes[j])
            }
        }
    })
}

function setActive(note) {
    note.className = 'note active'
}

function setInactive(note) {
    note.className = 'note inactive'
}