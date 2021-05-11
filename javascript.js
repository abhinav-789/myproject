console.log("we are ntes taking app here ");
showNotes();

                                      // first of all --> if user add a note  then note add to localstorege//
let addBtn = document.getElementById('addBtn');
addBtn.addEventListener("click", function (e) {
                                                           // target text area element //
    let addTxt = document.getElementById("addTxt");
                                                            // notes take to lopcalstorage//
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesobj = [];                                       //array null//
    }
    else {
        notesobj = JSON.parse(notes);
    }
    notesobj.push(addTxt.value);
    localStorage.setItem("notes", JSON.stringify(notesobj));   //localstore update//
    addTxt.value = "";                                            // textarea to empty//
    console.log(notesobj);
    showNotes();
                                                                    // function to show element to localstoerge//
})
function showNotes() {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesobj = [];
    }
    else {
        notesobj = JSON.parse(notes);
    }
    let html = "";
    notesobj.forEach(function (element, index) {
                                                                     // use of vegtish //
        html += `
        <div class="noteCard my-2 mx-2 card" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">Note ${index + 1}</h5>
                    <p class="card-text"> ${element}</p>
                    <button id="${index}"onclick="deleteNote(this.id)" class="btn btn-primary">Delete Note</button>
                    
                </div>
            </div>`;
        //this.id==> 
    });
    let notesElm = document.getElementById('notes');
    if (notesobj.length != 0) {
        notesElm.innerHTML = html;
    }
}
                                                               //function deletd notes//
function deleteNote(index) {
                                                                 //   console.log("I am deleting", index);

    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }

    notesObj.splice(index, 1);                                     // function return first index//
    localStorage.setItem("notes", JSON.stringify(notesObj));
                                                                       //localstorage update//
    showNotes();
}
