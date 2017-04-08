//Load the NPM Inquirer and other node packages
var inquirer = require("inquirer");
var fs = require("fs");
var basicCard = require("./basiccard.js");
var clozeCard = require("./clozecard.js");
var questions =[
{
		full: 'In 1492 In fourteen hundred ninety-two Columbus sailed the ocean blue',
		cloze: '1492'
	},
	{
		full: 'Jupiter is the largest planet in our solar system.',
		cloze: 'Jupiter'
	},
	{
		full: 'Thomas Jefferson was the third president of the United States.',
		cloze: 'third'
	},
	{
		full: 'Maurice is the name of Belles father in Beauty and the Beast.',
		cloze: 'Maurice'
	},
	{
		full: 'Cuba is the largest island in the Caribbean.',
		cloze: 'island'
	},
	{
		full: "Aluminum is the most abundant metal in the earth's crust.",
		cloze: "Aluminum"
	},
	{
		full: 'The pacific ocean is the largest ocean on planet earth.',
		cloze: 'pacific'
	},
	{
		full: 'O Say can you see by the dawns early light!',
		cloze: 'early'
	},
	{
		full: 'Daenarys Targarean proclaims herself to be mother of dragons',
		cloze: 'mother'
	},
	{
		full: 'The Hundred Years War was fought between England and France.',
		cloze: 'England'
	},
	{
		full: 'The titanic was a ship owned by the white star line company.',
		cloze: 'white'
	},
	{
		full: 'Walt Disney World Theme Park is located in Orlando, Florida',
		cloze: 'Orlando'
	},
	{
		full: 'Beware the Ides of March',
		cloze: 'March'
	}
];

// Variable that holds the cloze-deleted questions list
var clozeQuestions = [];

// Populate the cloze-deleted questions list
for (var i = 0; i < questions.length; i++) {
	var q = new basicCard.ClozeCard(questions[i].full, questions[i].cloze);
	clozeQuestions.push(q);
}

// What question the user is currently on
var currentQuestion = 0;
// How many questions the user has gotten right
var answerRight = 0;
// How many questions the user has gotten wrong
var answerWrong = 0;

// Start the flashcards

function startCards() {
	inquirer.prompt([
		{
			type: 'input',
			message: clozeQuestions[currentQuestion].partial + '\nAnswer: ',
			name: 'userGuess'
		}
	]).then(function (answers) {
		console.log('\n');

		// Check if the user has guessed correctly
		if (answers.userGuess.toLowerCase() === closeQuestions[currentQuestion].cloze.toLowerCase()) {
			console.log('Correct!');
			answerRight++;
		} else {
			console.log('Incorrect!');
			answerWrong++;
		}

		// Show the correct answer
		console.log(clozeQuestions[currentQuestion].full);
		console.log('-------------------------------------\n');

		// Advance to the next question
		if (currentQuestion < clozeQuestions.length - 1) {
			currentQuestion++;
			startCards();
		} else {
			console.log('Game Over!');
			console.log('Correct Answers: ' + answerRight);
			console.log('Incorrect Answers: ' + answerWrong);

			console.log('-------------------------------------\n');

			// Prompt the user to play again
			inquirer.prompt([
				{
					type: 'confirm',
					message: 'Would you like to play again?',
					name: 'playAgain'
				}
			]).then(function (answers) {
				if (answers.playAgain) {
					// Reset the game
					currentQuestion = 0;
					answerRight = 0;
					answerWrong = 0;

					// Begin asking the questions!
					startCards();
				} else {
					// Exit the game
					console.log('Thanks for playing!');
				}
			})
		}
	})
}

// Begin asking the questions!
startCards();
