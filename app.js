
console.log('Welcome to note app');

// if user add note ==>
let addBtn = document.getElementById('addBtn')

addBtn.addEventListener('click', (e)=>{
    let inputTxt = document.getElementById('inputTxt')
    let notes = localStorage.getItem('notes')
    if (notes == null) {
        notesObj = []
    }
    else{
        notesObj = JSON.parse(notes)
    }
    notesObj.push(inputTxt.value)
    localStorage.setItem('notes', JSON.stringify(notesObj))
    inputTxt.value = ' '
    console.log(notesObj);

    showNotes()
})
// function to show elements 

function showNotes() {
    let notes = localStorage.getItem('notes')
    if (notes == null) {
        notesObj = []
    }
    else{
        notesObj = JSON.parse(notes)
    }
    let html = ''
    notesObj.forEach((element, index) => {
        html += `
        <div class="card my-2 mx-2" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">Note title ${index}</h5>
                    <p class="card-text">${element}</p>
                    <button id = "${index}" onclick = 'deleteNote(this.id)'  class="btn btn-danger">Delete Note</button>
                </div>
            </div>
        `
    });

    let notesElm = document.getElementById('note')
    if (notesObj.length != 0) {
        notesElm.innerHTML = html
    }
    else{
        notesElm.innerHTML = `Write a Note.`
    }
}

// function to delete note

function deleteNote(index) {
    console.log('im deleting', index);

    let notes = localStorage.getItem('notes')
    if (notes == null) {
        notesObj = []
    }
    else{
        notesObj = JSON.parse(notes)
    }

    notesObj.splice(index, 1)
    localStorage.setItem('notes', JSON.stringify(notesObj))
    showNotes()
}


let search = document.getElementById('searchTxt')
search.addEventListener('input', () =>{
    let inpVal = search.value
    console.log('input', inpVal);
    let noteCard = document.getElementsByClassName
})