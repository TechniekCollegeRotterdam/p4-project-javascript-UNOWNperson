//this is a prototype file for testing codes

//To start the game we have to get access to id start-button and question container. 
//And define a function startGame(), which hides the start button and displays the question container.
const startButton = document.getElementById('start-btn')
const questionContainerElement = document.getElementById('question-container')
const nextButton = document.getElementById('next-btn')
//this is to get acces to the question element
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

//shuffledQuestions will use in shuffling the questions and currentQuestionIndex is for the index of the question
let shuffledQuestions, currentQuestionIndex

//a button to start the game and a button to go to the next question
startButton.addEventListener('click', startGame)

nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
  startButton.classList.add('hide')
  questionContainerElement.classList.remove('hide')
  //this is to make sure the questions are random so that it wil not start from the top question in the code
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  setNextQuestion()
}

//this is to make sure that person wil go to the next question
function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}
//this is to make sure that the question are show and to make sure the awnser gets checked if the button is clicked
function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

//this to make sure you can reset the question
function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

//this is to make sure you can click and awnser the question with 
function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
  }
}
//this is to show if awnser is right or wrong
function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}
//this is to remove the right and wrong element when player gets the question or moves on to the next one
function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

//const variable for the questions
const questions = [{
    question: 'The capital of Germany',
    answers: [{
        text: 'A Köln',
        correct: false
      },
      {
        text: 'B Frankfurt',
        correct: false
      },
      {
        text: 'C Berlin',
        correct: true
      },
      {
        text: 'D Dresden',
        correct: false
      }
    ]
  },
  {
    question: 'This country is the origin country of the Pokémon franchise',
    answers: [{
        text: 'A North-America',
        correct: false
      },
      {
        text: 'B South-America',
        correct: false
      },
      {
        text: 'C Japan',
        correct: true
      },
      {
        text: 'D China',
        correct: false
      }
    ]
  },
  {
    question: 'This country discovered nuclear fission',
    answers: [{
        text: 'A Germany',
        correct: true
      },
      {
        text: 'B America',
        correct: false
      },
      {
        text: 'C Russia',
        correct: false
      },
      {
        text: 'D China',
        correct: false
      }
    ]
  },
  {
    question: 'The location of the Eiffel Tower',
    answers: [{
        text: 'A Paris',
        correct: true
      },
      {
        text: 'B New-York',
        correct: false
      },
      {
        text: 'C Tokyo',
        correct: false
      },
      {
        text: 'D London',
        correct: false
      }
    ]
  }
]