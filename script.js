{
    const addTxt = document.getElementById("addTxt");
    const addTitle = document.getElementById("addTitle");
    const addBtn = document.getElementById("addBtn");
    const notesCollection = document.getElementById("notesCollection");
    const search = document.getElementById("search");
    const searchTxt = document.getElementById("search-text")
    let notesArray = [];
    if (localStorage.getItem("notes")) {
        notesArray = JSON.parse(localStorage.getItem("notes"));
    }
    let notesTitle = [];
    if (localStorage.getItem("title")) {
        notesTitle = JSON.parse(localStorage.getItem("title"));
    }
    search.addEventListener("click", function () {
        console.log(searchTxt.value);
        let searchText = [];
        let searchTitle = [];
        let searchIp = searchTxt.value;
        for (let index = 0; index < notesArray.length; index++) {

            if (notesArray[index].includes(searchIp)) {
                console.log("hi");
                searchText.push(notesArray[index]);
                searchTitle.push(notesTitle[index]);
            }
        }
        display(searchText, searchTitle);
    })
    addBtn.addEventListener("click", function () {
        notesArray.push(addTxt.value);
        notesTitle.push(addTitle.value);
        localStorage.setItem("notes", JSON.stringify(notesArray));
        localStorage.setItem("title", JSON.stringify(notesTitle));
        addTxt.value = "Add Your Notes";
        addTitle.value = "Add Your Title";
        display(notesArray, notesTitle);
    })
    function display(array1, array2) {
        let html = "";
        for (let index = 0; index < array1.length; index++) {
            html += `
        <div class="noteCard card mb-4 mx-auto" style="width:18rem;">
        <div class="card-body">
            <h5 class="card-title mb-3">${array2[index]}</h5>
            <div class="mb-3">
                <p class="card-text output">
                    ${array1[index]}
                </p>
            </div>
            <button class="btn btn-primary" id="${index}" onclick="deleteNote(this.id)" >Delete</button>
        </div>
    </div>     
     `;
        }
        if (notesArray && notesTitle) {
            notesCollection.innerHTML = html;
        }
    }
    function deleteNote(index) {
        notesTitle.splice(index, 1); //deletes elemnts from index=index till +1
        localStorage.setItem("title", JSON.stringify(notesTitle));
        notesArray.splice(index, 1); //deletes elemnts from index=index till +1
        localStorage.setItem("notes", JSON.stringify(notesArray));
        display(notesArray, notesTitle)
    }
}