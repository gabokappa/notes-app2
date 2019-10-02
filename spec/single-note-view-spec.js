function testSingleNoteViewInstantiation(){
  try {
       let note = new Note('Favourite food: pesto');
       let singleNoteView = new SingleNoteView(note);

      assert.isTrue(singleNoteView.note.text === 'Favourite food: pesto');

  }
  catch(err) {
      return "Error - " + arguments.callee.name + " : " + err;
  }
  return "Pass - " + arguments.callee.name;
}

function testSingleNoteViewHTML(){
  try {
      let note = new Note('Favourite food: pesto');
      let singleNoteView = new SingleNoteView(note);
      assert.isTrue(singleNoteView.returnNoteHTML() === '<div>Favourite food: pesto</div>');

  }
  catch(err) {
      return "Error - " + arguments.callee.name + " : " + err;
  }
  return "Pass - " + arguments.callee.name;
}