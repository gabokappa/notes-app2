function testNoteController() {
    try {
        let noteList = new NoteList();
        let noteController = new NoteController(noteList);

        assert.isTrue(noteController.list === noteList);

    }
    catch(err) {
        return "Error - " + arguments.callee.name + " : " + err;
    }
    return "Pass - " + arguments.callee.name;
}

// (function(exports) {
function testNoteControllerReturnsList() {

    let noteList = new NoteList();
    let noteController = new NoteController(noteList);
    let app = {
        innerHTML: ''
    };
    noteController.insertHTML(app);
    if( app.innerHTML !== "<ul><li><div>Default text</div></li></ul>") {
        throw new Error("This doesn't work!")
    } else {
       return "This actually worked"
    }
}
// testNoteControllerReturnsList();
// })(this);
