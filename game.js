//Refrence to the question
const question = document.getElementById("question");
//Refrence to choices
const choices = Array.from(document.getElementsByClassName("choice-text"));
// console.log(choices);

//Current question
let curentQ = {};

//Users choice acceptinglet
let acceptA = true;

//score counter
let scorePTS = 0;

//question counter
let qCounter = 0;

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

//Start game also reset:
const startGame = () => {
  //question counter
  qCounter = 0;
  score = 0;
  availableQuestions = [...questions];
  console.log(availableQuestions);
  getNewQuestion();
};

getNewQuestion =() => {
  qCounter ++;
  const questionIndex = Math.floor(Math.random() * availableQuestions.length);
  const currentQ = availableQuestions[questionIndex];
  question.innerText = currentQ.question;

  choices.forEach( choice => {
    const number = choice.dataset['number'];
    choice.innerText = currentQ['choice' + number]
  });
};

startGame()