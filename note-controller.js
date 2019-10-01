

function noteController(noteListViewArg, noteListArg, text = "Favourite drink: seltzer ") {
    let noteControllerText = text;

    let noteList = new NoteList();
    noteList.add(noteControllerText);

    let noteListView = new NoteListView(noteList);


    document.getElementById("app").innerHTML = noteListView.returnNotesHTML();

}
console.log("noteController being called");

 noteController(NoteListView,NoteList);