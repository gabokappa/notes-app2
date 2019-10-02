(function(exports) {
    function NoteController(noteList, text = "Default text"){
        noteList.add(text);
        this.list = noteList;
        this.noteListView = new NoteListView(this.list);
    }

    NoteController.prototype.insertHTML = function() {
     document.getElementById('app').innerHTML = this.noteListView.returnNotesHTML();
    };
    exports.NoteController = NoteController;
})(this);