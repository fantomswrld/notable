const noteContainer = document.querySelector('.note-container')

// returning Notes in localStorage by converting it back into an object
const notesDeserialized = JSON.parse(localStorage.getItem("Notes"))

for(let i = 0; i < notesDeserialized["notes"]; i++) {
    // console.log(notesDeserialized["content"])
}