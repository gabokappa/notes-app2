(function(exports) {
  var initText = "My favourite language is JavaScript";
  
  function Note(){
     this.text = initText;
  }

  Note.prototype.getText = function(){
    return this.text;
  }
  
  exports.Note = Note;
})(this);