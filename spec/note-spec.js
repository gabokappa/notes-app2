function testNoteTextDefault(){
  try {
    var note = new Note();
    assert.isTrue(note.getText() === "My favourite language is JavaScript");
  }
    catch(err) {
      return "Error - " + arguments.callee.name + " : " + err;
    }

    return "Pass - " + arguments.callee.name;
  };


