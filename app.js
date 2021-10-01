
console.log('Welcome to note app');


let addBtn = document.getElementById('addBtn')

addBtn.addEventListener('click', function(e){
    let notes = localStorage.getItem('notes')
    let inputTxt = document.getElementById('inputTxt')

    if (notes == null) {
        notesObj = [ ]
    }
    else {
        notesObj = JSON.parse(notes)
    }
    notesObj.push(inputTxt.value)
    localStorage.setItem('notes', JSON.stringify(notesObj))
    inputTxt.value = ''
    console.log(notesObj);
    showNotes()
})

function showNotes() {
    let notes = localStorage.getItem('notes')
    if (notes === null) {
        notesObj = []
    }
    else {
        notesObj = JSON.parse(notes)
    }
    let html = ''
    notesObj.forEach(function(element,  index) {
        html += `
        <div class="card my-2 mx-2" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">Note ${index + 1} title</h5>
                    <p class="card-text">${element}</p>
                    <button href="" class="btn btn-danger">Delete Note</button>
                </div>
       </div>`
    });
    let notesElm = document.getElementById('notes')
    if (notes.length != 0) {
        notesElm.innerHTML = html;
    }
}