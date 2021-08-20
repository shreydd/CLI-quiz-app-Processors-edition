const chalk = require("chalk");
var readlineSync = require('readline-sync');

console.log("welcome to the processors quiz, answer in yes or no");
var score = 0;

const userQuestion = ["Are ARM processors based off RISC architecture? ",
                    "Do most processors from ARM use big.LITTLE architecture? ",
                    "Is Intel's i5 series of processors based off RISC architecture? ",
                    "Are Intel's naming scheme of it's processors helpful to the general buyers? ",
                    "Does Mediatek use ARM's architecture? ",
                    "Does Apple's M1 chip use ARM architecture? "
];

var userAnswer = ["yes","yes","no","no","yes","yes"];

var userName;

function userNameInput(){
  userName = readlineSync.question('Enter a username: ');
  console.log(`Welcome to the quiz ${userName}!`)

}

function play(){
  userNameInput();
  for(i=0; i<userQuestion.length; i++) {
    
    let tempAnswer = readlineSync.question(userQuestion[i]).toLowerCase();
    console.log("your entry was "+ tempAnswer);
    
    if (tempAnswer === userAnswer[i]){
      console.log("You are right! ");
      score = score + 1;
      console.log("score is " + chalk.green(score));
    } else{
      console.log("You are wrong ");
      score = score - 1;
      console.log("score is " + chalk.red(score));
    }

  }
  finalMessage();
}

function finalMessage(){
  if(score < userQuestion.length){
    console.log(chalk.red(`You did well ${userName} , GG! `));
  }
  if(score === userQuestion.length){
    console.log(chalk.green(`Wow you know well about processors ${userName}, Good Job :D `));
  }
}

play();


// var questionOne = "Am I older than 20? ";
// var answerOne = "yes";

// var questionTwo = "Do I live in NZ? ";
// var answerTwo = "no";

// var userAnswer = readlineSync.question(questionOne);

// console.log("your entry was "+ userAnswer);

// if (userAnswer === answerOne){
//   console.log("you are right!");
//   score = score +1;
//   console.log("score is " + score)
// }
//   else{
//     console.log("you are wrong!");
//     score = score -1;
//     console.log("score is:"+ score)
// }

// console.log("your entry was "+ userAnswer);

// var userAnswer = readlineSync.question(questionTwo);

// if (userAnswer === answerTwo){
//   console.log("you are right!");
//   score = score +1;
//   console.log(chalk.black.bgWhite.bold("score is " + score));
// }else{
//   console.log("you are wrong!");
//   score = score -1;
//   console.log(chalk.red("score is:"+ score));
// }


// var readd = require("readline-sync");

// // Wait for user's response.
// var userName = readd.question('May I have your name? ');
// console.log('Hi ' + userName + '!');
 
// // Handle the secret text (e.g. password).
// var favFood = readd.question('What is your favorite food? ', {
//   hideEchoBack: true // The typed text on screen is hidden by `*` (default).
// });
// console.log('Oh, ' + userName + ' loves ' + favFood + '!');




//  var person = prompt("Please enter your name", "Harry Potter");
//   if (person != null) {
//     console.log(
//     "Hello " + person + "! How are you today?");
//   }
