//THIS IS CORE PART OF STEP 3

const questionEl = document.querySelector("#question");
let storeAnswer;

// THIS IS CORE PART OF STEP 4

const quertionformEl = document.querySelector("#quertionform");
const scoresEl = document.querySelector("#scores");
let score = 0;
// let score = localStorage.getItem("majid");
console.log(score);

// //STEP 1
//create random number (min and max)

const randomNumber = (max, min) => {
  return Math.round(Math.random() * (max - min + 1) + min);
};

// //STEP 2
// generate question and also change question code
const QuestionGenerate = () => {
  const randomNumber1 = randomNumber(0, 10);
  const randomNumber2 = randomNumber(0, 10);

  //STEP 5
  //multiple types of question like(+,-,*,/)
  const QuestionType = randomNumber(1, 4);
  let firstNumber;
  let secondNumber;
  if (randomNumber1 > randomNumber2 && QuestionType > 2) {
    firstNumber = randomNumber1;
    secondNumber = randomNumber2;
  } else {
    firstNumber = randomNumber2;
    secondNumber = randomNumber1;
  }
  // STEP 6
  //it's check which types of question is render
  let Question;
  let Answer;
  switch (QuestionType) {
    case 1:
      Question = `What is { ${randomNumber1}  *  ${secondNumber} } ?`;
      Answer = firstNumber * secondNumber;
      break;
    case 2:
      Question = `What is { ${firstNumber}  +  ${secondNumber} }  ?`;
      Answer = firstNumber + secondNumber;
      break;
    case 3:
      Question = `What is { ${firstNumber}  -  ${secondNumber} }  ?`;
      Answer = firstNumber - secondNumber;
      break;
    case 4:
      Question = `What is { ${firstNumber}  /  ${secondNumber} }  ?`;
      Answer = firstNumber / secondNumber;
      break;
  }
  return { Question, Answer };
};

// //STEP 3
// //show answer in browser code

const showAnswer = () => {
  const { Question, Answer } = QuestionGenerate();
  questionEl.innerText = Question;
  // scoresEl.innerText = score;

  storeAnswer = Answer;
};
showAnswer();

// //STEP 4
// check answer  and get form data

const AnswerCheck = (event) => {
  event.preventDefault();
  const formData = new FormData(quertionformEl);
  const UserAnswer = parseFloat(formData.get("anser"));
  if (UserAnswer == storeAnswer) {
    score += 1;
  } else {
    score -= 1;
    alert(`${UserAnswer} Wrong Answer ? Correct Answer is ${storeAnswer}`);
  }
  scoresEl.innerText = score;
  // localStorage.setItem("majid", score);
  showAnswer();
  //THIS IS PAGE RESET CODE
  event.target.reset();
};
