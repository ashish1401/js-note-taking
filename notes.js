
// LOGIC FOR ACCEPTING TEXT 

showNotes();


let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", function () {
    // let text = document.getElementById("addTxt").value;
    // this doesn't work as on clicking all the work is done and once event ends the program returns to its initial state hence local storage needs to be involved
    // localStorage.setItem("notes", text);
    // ACTUAL CODE 
    let addTxt = document.getElementById("addTxt");
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    notesObj.push(addTxt.value);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    addTxt.value = "";
    console.log(notesObj);
    showNotes();
})
// LOGIC FOR SHOWING THE NOTES
// document.getElementById("output").innerText = localStorage.getItem("notes");
function showNotes() {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    let html = "";
    notesObj.forEach(function (element, index) {
        html += `
        <div class="noteCard card mb-4 mx-auto" style="width:18rem;">
        <div class="card-body">
            <h5 class="card-title mb-3">Note ${index + 1}</h5>
            <div class="mb-3">
                <p class="card-text output">
                    ${element}
                </p>
            </div>
            <button class="btn btn-primary" id="${index}" onclick="deleteNote(this.id)" >Delete</button>
        </div>
    </div>     
     `;
    })
    let notesElm = document.getElementById("notes");
    if (notesObj.length != 0) {
        notesElm.innerHTML = html;
    }
    else {
        innerHTML = `NO NOTES ENTERED`
    }
}

//DELETE NOTE
function deleteNote(index) {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    notesObj.splice(index, 1);
    //deletes elemenrs from [index,index+1)
    localStorage.setItem('notes', JSON.stringify(notesObj));
    showNotes();

}

//search 
