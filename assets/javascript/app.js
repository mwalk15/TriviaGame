$(document).ready(function() { 
	//Create Variable that holds score and current question.
	var score = 0;
	var currentQuestion = 0;
	
	//created variable that holds the quiz so that we can control when hide and display the results and quiz questions.
	var container = $("#quizContainer");
	var resultContainer = $("#result");

	//created variables that push the questions into the individual choice boxes and question box.
	var questionDiv = $("#question");
	var opt1 = $("#opt1");
	var opt2 = $("#opt2");
	var opt3 = $("#opt3");
	var opt4 = $("#opt4");

	//created variable so on that on-click, next question will appear.
	var nextButton = $("#nextButton");
	
	
	// created an array that holds all the questions and the answers, in a property and key format.
	var questions = [{
		"question" : "In what year was Michael Jackson's 'Bad' video released?",
		"option1" : "1991",
		"option2" : "1985",
		"option3" : "1987",
		"option4" : "1994",
		"answer" : "3"
	}, {
		"question" : "How many members were in the original Destiny's Child?",
		"option1" : "Three",
		"option2" : "Four",
		"option3" : "Five",
		"option4" : "Two",
		"answer" : "2"

	}, {
		"question" : "Which Hip Hop Group made the hit song 'Roses'?",
		"option1" : "Migos",
		"option2" : "Outkast",
		"option3" : "Sugar Hill Gang",
		"option4" : "Run DMC",
		"answer" : "2"
	}, {
		"question" : "Which artist was the first to be nominated for a grammy off a mixtape?",
		"option1" : "Chance the Rapper",
		"option2" : "Beyonce",
		"option3" : "Future",
		"option4" : "Cardi B",
		"answer" : "2"
	}];

	//created a variable that holds the questions length so that when function is created, I can use this variable as opposed to writing out questions.length each time.
	var allQuestions = questions.length; 
	console.log(questions)

	// created a function so that on the start of the game, the screen will load the first question into the container div.
	function loadQuestion(questionIndex) {
		var q = questions[questionIndex];
		$(questionDiv).text(q.question);
		$(opt1).text(q.option1);
		$(opt2).text(q.option2);
		$(opt3).text(q.option3);
		$(opt4).text(q.option4);
		//I am hiding the results until the game has ended.
		$(resultContainer).hide();
		$(resultContainer).css("display", " ");
		$(resultContainer).text( "Final Score: " + score + " out of " + questions.length);
		score+=1;

		
	};
	//This is where i was trying to implement the timer but for the life of me i cannot get this thing to work!! :-( 
	//I commented it out so that the code could continue to work.
	
	//public class TimeCounter {
			//static Thread thread = new Thread();
			//public static void main(String args[]) throws InterruptedException
				//{
					//for(int i =60; i>0;i--) {
						//thread.sleep(1000);
					//	system.out.println(i);
					//}
				//}
		//}﻿
	console.log(loadQuestion);

	// Created the function that renders the next question after the current question has been answered.
	$(nextButton).on("click", function () {


		if (currentQuestion <= (allQuestions - 1)) {
          document.querySelector("#question").innerHTML = questions[currentQuestion][0];
        }

        //created a variable that stores the user's choice
		var selectedOption = document.querySelector('input[type=radio]:checked');

		//This statement is saying if the user does not pick a choice and clicks "Next Question", an alert will appear telling the user to go back and choose an answer before continuing.
		if (!selectedOption) {
			alert("Oops! Looks like no response was chosen! Choose an answer!");
			return;
		}

		//created a variable to store the value of the user's choice.
		var userSelection = selectedOption.value;
		//this statement is saying if if the answer in the question array is the same as the user's choice, increase the score by one.
		if (questions[currentQuestion].answer === userSelection) {
			score++;
		}

		selectedOption.checked = false;
		currentQuestion++;

		//If the current question is the last question remaining, update the next-button to say "Finish game".
		if (currentQuestion == allQuestions - 1) {
			$(nextButton).text("Finish");
		}

		//If all questions completed and user has pressed finish, hide questions div and display results div with final score.
		if (currentQuestion === allQuestions) {
			$(".container").css("display", "none");
			$(resultContainer).show();
			$(resultContainer).css("display", " ");
			$(resultContainer).text( "Final Score: " + score + " out of " + questions.length);
			return;
		}
		console.log(this);

		loadQuestion(currentQuestion);
	});

	loadQuestion(currentQuestion);
});