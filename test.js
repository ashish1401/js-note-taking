const addTxt = document.getElementById("addTxt");
const addBtn = document.getElementById("addBtn");
const notesCollection = document.getElementById("notesCollection");
let notesArray = [];
if (localStorage.getItem("notes")) {
    notesArray = JSON.parse(localStorage.getItem("notes"));
}
addBtn.addEventListener("click", function () {
    notesArray.push(addTxt.value);
    localStorage.setItem("notes", JSON.stringify(notesArray));
    addTxt.value = "";
    display();
})

function display() {
    let html = "";
    for (let index = 0; index < notesArray.length; index++) {
        html += `
        <div class="noteCard card mb-4 mx-auto" style="width:18rem;">
        <div class="card-body">
            <h5 class="card-title mb-3">Note ${index + 1}</h5>
            <div class="mb-3">
                <p class="card-text output">
                    ${notesArray[index]}
                </p>
            </div>
            <button class="btn btn-primary" id="${index}" onclick="deleteNote(this.id)" >Delete</button>
        </div>
    </div>     
     `;
    }
    if (notesArray) {
        notesCollection.innerHTML = html;

    }
    else { notesCollection.innerHTML = `<p>NO NEW NOTES</p>` }

}

function deleteNote(index) {

    notesArray.splice(index, 1); //deletes elemnts from index=index till +1
    localStorage.setItem("notes", JSON.stringify(notesArray));
    display()

}
