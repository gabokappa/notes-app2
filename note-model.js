(function(exports) {
var count = 0;
  function Note(text){
     this.text = text;
     this.id = count;
     count++;
  }

  Note.prototype.getText = function(){
    return this.text;
  };
  
  exports.Note = Note;
})(this);