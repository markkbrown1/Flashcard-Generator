//create a constructor for the basic flash cards objects.
var BasicCards = function(front, back){
	this.front = front;
	this.back = back;
	// try to show the question and answer for front and back of card
	this.cardGame = function(){
		if (this.back === userInput){
		console.log('Question: ' + this.front + ',' + 'Answer: '+ this.back);
	}
	else {
		console.log('Im Sorry the correct answer is ' + this.back);
		}
	}
};


// exporting our basic cards constructor. We will require it in main.js
module.exports = BasicCards;