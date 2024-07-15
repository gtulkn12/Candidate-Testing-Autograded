const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = "";

// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer = "";
const passingGrade = 80;
const failed = "FAILED"
const passed = "PASSED"

//TODO: Variables for Part 2
let questions = [
  "Who was the first American woman in space? ",
  "True or false: 5 kilometer == 5000 meters? ",
  "(5 + 3)/2 * 10 = ? ",
  "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ",
  "What is the minimum crew size for the ISS? "];
let correctAnswers = ["Sally Ride", "true", "40", "Trajectory", "3"];
let candidateAnswers = [];

function askForName() {
  // TODO 1.1b: Ask for candidate's name //
  candidateName = input.question("What is your name? ");
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
  for (question in questions) {
    candidateAnswer = input.question(`${Number(question) + 1}\) ${questions[question]}`);
    candidateAnswers.push(candidateAnswer);
    console.log(`Your Answer: ${candidateAnswer}`);
    console.log(`Corect Answer: ${correctAnswers[question]}`);
    console.log();
  }
}

function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly //
  let grade = 0;
  let result = "";
  let numberOfCorrectAnswers = 0;
  let numberOfQuizQuestions = questions.length;

  //TODO 3.2 use this variable to calculate the candidates score.
  for (answer in candidateAnswers) {
    checkAnswer = candidateAnswers[answer].toLowerCase() === correctAnswers[answer].toLowerCase() ? 1 : 0;
    numberOfCorrectAnswers += checkAnswer;
  }

  grade = (numberOfCorrectAnswers) / (numberOfQuizQuestions) * 100
  console.log(`>>> Overall Grade: ${grade}% \(${numberOfCorrectAnswers} of ${numberOfQuizQuestions} reponses correct\) <<<`)

  result = grade >= passingGrade ? passed : failed
  console.log(`>>> ${result} <<<`)

  return grade;
}

function runProgram() {
  askForName();
  // TODO 1.1c: Greet candidate using their name //
  console.log(`Hello ${candidateName}`);
  console.log();
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// ----------- Don't write any code or change any code below this line ---------- //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};