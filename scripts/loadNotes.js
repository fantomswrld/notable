const noteContainer = document.querySelector('.note-container')

const notesDeserialized = JSON.parse(localStorage.getItem("Notes"))

console.log(notesDeserialized)

for(let i = 0; i < notesDeserialized["content"].length; i++) {
    console.log(notesDeserialized["content"])
}