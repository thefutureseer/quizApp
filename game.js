//Refrence to the question
const question = document.getElementById("question");
//Refrence to choices
const choices = Array.from(document.getElementsByClassName("choice-text"));

//Current question
let currentQ = {};
//Users choice accepting answers false until we load the question
let acceptA = false;
//score counter
let scorePTS = 0;
//question counter
let qCounter = 0;
//Empty array for available questions
let availableQuestions = [];

//Array of questions each with a number to select randomly
let questions = [
  {
    "question": "When a disease is prevalent over, not a small area but the entire country or the whole world it is called a/an:",
    "choice1": "Epidemic",
    "choice2": "<bug>",
    "choice3": "desease like Sars",
    "choice4": "Pandemic",
    "answer": 4
  },
  {
    "question": "What is the correct syntax for referring to an external script called 'xxx.js'?",
    "choice1": "<script href='xxx.js'>",
    "choice2": "<script name='xxx.js'>",
    "choice3": "<script src='xxx.js'>",
    "choice4": "<script file='xxx.js'>",
    "answer": 3
  },
  {
    "question": "Do you use a face covering (9502+), to HELP you or to help save others from YOU?",
    "choice1": "<script href='xxx.js'>",
    "choice2": "Mostly saving myself",
    "choice3": "You save others. Its (Official mask 9502+) keeping things to yourself such as the dropplets coming out of your mouth and nose. If theres much more skin showing your not saving yourself. See user instruction before use",
    "choice4": "<script file='xxx.js'>",
    "answer": 3
  },
  {
    "question": " How do you write 'Hello World' in an alert box?",
    "choice1": "msgBox('Hello World');",
    "choice2": "alertBox('Hello World');",
    "choice3": "msg('Hello World');",
    "choice4": "alert('Hello World');",
    "answer": 4
  }
];

//Constants

//Amount of points if correct
const pointsPerQ = 10;
//How many questions per game 3
const maxQs = 3;

//Start game also reset game:
const startGame = () => {
  //question counter
  qCounter = 0;
  //Users score 
  score = 0;
  //Array for available questions and any we add on later by using the spread operator
  availableQuestions = [ ...questions];
  //Last thing to do, run function named get new question which is below
  getNewQuestion();
};

//Get a random question and display it
getNewQuestion =() => {
  //Check if we are at the end of the available questions list
  if (availableQuestions.length === 0 || qCounter > maxQs) {
     //If no more questions go to the end game screen
     return window.location.assign('/end.html');
  }
  //Count how many questions we've asked
  qCounter ++;
  //Get random number by using the length of the questions array in order to select a question no matter 
  //Forward thinking
  const questionIndex = Math.floor(Math.random() * availableQuestions.length);
  //Use random number above to select index of the available questions array to show an unused question
  currentQ = availableQuestions[questionIndex];
  //Using question's innerText element object to make the question appear on the UI
  question.innerText = currentQ.question;

  //Get choices for the question and display them
  //From choices array loop through each with argument/iterator named choice to give us a reference to each choice
  choices.forEach( choice => {
    //Refrence to the number of the current questions choices by its dataset property get 'number' property out of it
    const number = choice.dataset['number'];
    //Choice iterator using the html innerText element object set to the current questions choices and numbers to populate the html choice container on the UI
    choice.innerText = currentQ['choice' + number]
  });
  //Subtract or splice out the question we ask
  availableQuestions.splice(questionIndex, 1);
  //After we loaded question then we are accepting answers true
  acceptA= true;
};

//Loop through choices
choices.forEach( choice => {
  //when clicked do this
  choice.addEventListener("click", e => {
    // console.log(event.target);
    //If not accepting answers just return 
    if (!acceptA) return;
      //Not accepting answers yet so this is false
      acceptA = false;
      //Refrence to event target and copy it to a variable
      const selectedChoice = e.target;
      //Reference to selected answer and copy it to a variable
      const selectedAnswer = selectedChoice.dataset['number'];
      //Variable with turnary to call when question answered
      const classToApply = selectedAnswer == currentQ.answer ? 'correct' : 'incorrect';
      //Browser pops up the product of the user clicking their answer with game.css providing weather or not the user was right
      selectedChoice.parentElement.classList.add(classToApply);
      //After a moment remove the background color and get new question at the sametime
      setTimeout(() => {
      //Remove the class from the div
      selectedChoice.parentElement.classList.remove(classToApply);
      getNewQuestion();
      }, 450);

      console.log(classToApply);
      //After we answer a question then we run function to get a new question 
      getNewQuestion();
  });
});

startGame()