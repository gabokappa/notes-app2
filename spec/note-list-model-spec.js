function testNoteList(){
    try {
        let note1 = new Note();
        let note2 = new Note();
        let noteList = new NoteList();
        noteList.add(note1);
        noteList.add(note2);

        // console.log(noteList.notes)
        // console.log([note1,note2])
        assert.isArrayEqual(noteList.notes , [note1,note2]) ;
        // assert.isTrue(noteList[2].text === "My favourite language is JavaScript");

    }
    catch(err) {
        return "Error - " + arguments.callee.name + " : " + err;
    }
    return "Pass - " + arguments.callee.name;
}


