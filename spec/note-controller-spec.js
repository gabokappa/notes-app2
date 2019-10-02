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

(function(exports) {
function testNoteControllerReturnsList() {

    let noteList = new NoteList();
    let noteController = new NoteController(noteList);

    noteController.insertHTML();
    if(document.getElementById('app').innerHTML !== "<ul><li><div>Default text</div></li></ul>") {
        throw new Error("This doesn't work!")
    } else {
        console.log("This actually worked")
    }
}
testNoteControllerReturnsList();
})(this);
