//create a constructor for the cloze flash cards objects.
var ClozeCards = function(text, cloze){
	this.text = text;
	this.cloze = cloze;
	this.clozeGame = function(){
		


// exporting our easy cards constructor. We will require it in main.js
module.exports = ClozeCards;