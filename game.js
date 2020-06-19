//Refrence to the question
const question = document.getElementById("question");
//Refrence to choices
const choices = Array.from(document.getElementsByClassName("choice-text"));
// console.log(choices);

//Current question
let curentQ = {};
//Users choice accepting answers false until we load the question
let acceptA = false;
//score counter
let scorePTS = 0;
//question counter
let qCounter = 0;
//Empty array for available questions
let availableQuestions = [];

let questions = [
  {
    "question": "Inside which HTML element do we put the JavaScript??",
    "choice1": "<script>",
    "choice2": "<javascript>",
    "choice3": "<js>",
    "choice4": "<scripting>",
    "answer": 1
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
  availableQuestions = [...questions];
  //Lastly in this function run the get new question function which is below
  getNewQuestion();
};

//Get a random question and display it
getNewQuestion =() => {
  //Count how many questions we've asked
  qCounter ++;
  //Get random number by using the length of the questions array in order to select a question no matter 
  //Forward thinking
  const questionIndex = Math.floor(Math.random() * availableQuestions.length);
  //Use random number above to select index of the available questions array
  const currentQ = availableQuestions[questionIndex];
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
  choice.addEventListener("click", event => {
    console.log(event.target);
    //If not accepting answers just return 
    if (!acceptA) {
      return;
      acceptA = false;
    }
  })
})

startGame()