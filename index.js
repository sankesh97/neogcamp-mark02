const readLineSync = require("readline-sync");

const setOfQuestions = [
  { question: "What is the codename of Android 3?", answer: "Honeycomb" },
  {
    question: "Which animal is present in Firefox logo ?",
    answer: "Red Panda",
  },
  { question: "How much is 1 Petabyte (in TB)?", answer: "1024" },
  { question: "Who is the founder of Android?", answer: "Andy Rubin" },
  {
    question:
      "Which language do you use to create an app for IOS (currently) ?",
    answer: "Swift",
  },
];

const user = {
  name: "",
  score: 0,
};

const welcomeFunc = () => {
  user.name = readLineSync.question("Hey! What's your name ?\n");
  console.log("Hello " + user.name + ", Welcome to the Tech Wiz quiz !");
};

const askQuestion = () => {
  for (i of setOfQuestions) {
    let userAnswer = readLineSync.question(i.question + "\n");
    if (userAnswer.toLowerCase() === i.answer.toLowerCase()) {
      console.log("The Answer is right! :) \n");
      user.score += 1;
    } else {
      console.log("The Answer is wrong! :( \n");
    }
    console.log("-_-_-_-_-_-_-_-_-_-_-_- \n");
  }
};

const displayScores = () => {
  console.log("Thanks for playing the game\n");
  if (user.score === 5) {
    console.log("Wow, You really are the Tech Wiz !!");
  } else {
    console.log("Awww,");
  }
  console.log("Your score is : " + user.score + " out of 5\n");
};

welcomeFunc();
askQuestion();
displayScores();
