function testNoteObjectHasId(){
  try {
    let note = new Note("I love JavaScript!!");
    let note2 = new Note("I hate JavaScript!!");

    console.log(note.id);
    assert.isTrue(note.id === 0);
    assert.isTrue(note2.id === 1);
  }
  catch(err) {
    return "Error - " + arguments.callee.name + " : " + err;
  }
  return "Pass - " + arguments.callee.name;
}

function testCreateNoteWithText(){
  try {
    let note = new Note("I love JavaScript!!");
    assert.isTrue(note.getText() === "I love JavaScript!!");
  }
    catch(err) {
      return "Error - " + arguments.callee.name + " : " + err;
  }
  return "Pass - " + arguments.callee.name;
}

