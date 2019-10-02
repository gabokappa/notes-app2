(function(exports) {
    function NoteController(noteList, text = "Default text"){
        noteList.add(text);
        this.list = noteList;
        this.noteListView = new NoteListView(this.list);
    }
    // document.getElementById('app')
    // TODO: pass this as ana argument when you call innerHTML

    NoteController.prototype.insertHTML = function(app) {
        app.innerHTML = this.noteListView.returnNotesHTML();
    };
    exports.NoteController = NoteController;
})(this);