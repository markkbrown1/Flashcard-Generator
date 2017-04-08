//create a constructor for the cloze flash cards objects.
var ClozeCards = function(text, cloze){
	this.text = text;
	this.cloze = cloze;
	this.partial = text.replace(cloze, '...');
	// write and if statement for ClozeCard should throw or log an error when the cloze deletion does not appear in the input text
	this.clozeGame = function(){
		if (!text.includes(cloze)) {
		console.log('ERROR: cloze-deletion did not happen-- <' + cloze + '>');
		return;
	}
};
		


// exporting our easy cards constructor. We will require it in main.js
module.exports = ClozeCards;