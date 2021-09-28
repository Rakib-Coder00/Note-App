let addBtn = document.getElementById('btn')
addBtn.addEventListener('click', () => {
    let addTxt = document.getElementById('addTxt')
    let notes = localStorage.getItem('notes')
    if (notes === null) {
        notesObj = [];
    }
    else{
        notesObj =JSON.parse(notes)
    }
    notesObj.push(addTxt.value)
    localStorage.setItem('notes', JSON.stringify(notesObj))
    addTxt.value = ''
    console.log(notesObj);
})
