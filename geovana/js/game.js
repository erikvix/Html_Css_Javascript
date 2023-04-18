const question = document.getElementById('question');
const choices = Array.from(document.getElementsByClassName('choice-text'));

let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuesions = [];

let questions = [
    {
        question: 'Qual nome real do gato de Geovana?',
        choice1: 'Poka',
        choice2: 'Pokinha',
        choice3: 'Pokão',
        choice4: 'Pipoka',
        answer: 4,
    },
    {
        question:
            "Qual grupo de Kpop favorito da Geovana?",
        choice1: "TWICE",
        choice2: "NEW JEANS",
        choice3: "BLACKPINK",
        choice4: "G-IDOL",
        answer: 1,
    },
    {
        question: "Qual é o personagem gostoso sarado favorito da Geovana?",
        choice1: "Vergil",
        choice2: "Nero",
        choice3: "Leon",
        choice4: "Satoru",
        answer: 2,
    },
    {
        question: "A Geovana está?",
        choice1: "no banheiro",
        choice2: "solteira",
        choice3: "no discord",
        choice4: "em Faal Limeira",
        answer: 2,
    },
    {
        question: "Qual nome completo de Geovana?",
        choice1: "Geovana CCamille do Nascimento Camille",
        choice2: "Geovana Camille do Nascimento",
        choice3: "Geovana Camille Aparecida do Nascimento",
        choice4: "Geovana Camile do Nascimento",
        answer: 4,
    },
];

//CONSTANTS
const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 5;

startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuesions = [...questions];
    getNewQuestion();
};

getNewQuestion = () => {
    if (availableQuesions.length === 0 || questionCounter >= MAX_QUESTIONS) {
        if (score == 5){
            return window.location.assign('end.html');
        }
        else{
            return window.location.assign('end2.html')
        }
    }
    questionCounter++;
    const questionIndex = Math.floor(Math.random() * availableQuesions.length);
    currentQuestion = availableQuesions[questionIndex];
    question.innerText = currentQuestion.question;

    choices.forEach((choice) => {
        const number = choice.dataset['number'];
        choice.innerText = currentQuestion['choice' + number];
    });

    availableQuesions.splice(questionIndex, 1);
    acceptingAnswers = true;
};

choices.forEach((choice) => {
    choice.addEventListener('click', (e) => {
        if (!acceptingAnswers) return;

        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset['number'];

        const classToApply =
        selectedAnswer == currentQuestion.answer ? "correct" : "incorrect";

        if (classToApply == "correct"){
            score++;
        }
        console.log(score)
      selectedChoice.parentElement.classList.add(classToApply);
  
      setTimeout(() => {
        selectedChoice.parentElement.classList.remove(classToApply);
        getNewQuestion();
      }, 1000);
    });
    
});
console.log()
startGame();