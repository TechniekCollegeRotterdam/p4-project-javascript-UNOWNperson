//dit is een bestand om een prototype type van het spel te maken en te testen als het testen goed gaat wordt de code hierin gebruikt en bewerkt voor het eind bestand

//To start the game we have to get access to id start-button and question container. 
//And define a function startGame(), which hides the start button and displays the question container.
const startButton = document.getElementById('start-btn')
const questionContainerElement = document.getElementById('question-container')

startButton.addEventListener('click', startGame)

function startGame() {
    startButton.classList.add('hide')
    questionContainerElement.classList.remove('hide')
    //this is to make sure the questions are random so that it wil not start from the top question in the code
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
}


//const variable for the questions
const questions = [
    {
        questions: 'The capital of Germany',
        answers: [
        {text: 'A Köln', correct: false},
        {text: 'B Frankfurt', correct: false},
        {text: 'C Berlin', correct: true},
        {text: 'D Dresden', correct: false}
        ]
    },
    {
        questions: 'This country is the origin country of the Pokémon franchise',
        answers: [
        {text: 'A North-America', correct: false},
        {text: 'B South-America', correct: false},
        {text: 'C Japan', correct: true},
        {text: 'D China', correct: false}
        ]
    },
    {
        questions: 'This country discovered nuclear?',
        answers: [
        {text: 'A Germany', correct: true},
        {text: 'B America', correct: false},
        {text: 'C Russia', correct: false},
        {text: 'D China', correct: false}
        ]
    }
]

//shuffledQuestions will use in shuffling the questions and currentQuestionIndex is for the index of the question
let shuffledQuestions, currentQuestionIndex

//this is to get acces to the question element
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
