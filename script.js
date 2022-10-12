const quizData = [
    {
        question: "Quem descobriu o Brasil?",
        a: "Chapolin",
        b: "Jojô Todinho",
        c: "Dilma",
        d: "Pedro Alvarez Cabral",
        correct: "d",
    },
    {
        question: "Quanto é 2 + 2?",
        a: "2",
        b: "4",
        c: "-25",
        d: "14",
        correct: "b",
    },
    {
        question: "Qual o maior time de Minas Gerais?",
        a: "Cruzeiro",
        b: "América MG",
        c: "Ituiutaba",
        d: "Guarani de Divinópolis",
        correct: "a",
    },
    {
        question: "Qual a capital do Brasil?",
        a: "Araxá",
        b: "Brasília",
        c: "Favela da Rocinha",
        d: "Distrito Federa",
        correct: "b",
    },

    {
        question: "Qual a capital de Minas Gerais?",
        a: "Araxá",
        b: "Brasília",
        c: "Belo Horizonte",
        d: "Distrito Federa",
        correct: "c",
    },


];

const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')


const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')


let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {

    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}


submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
       if(answer === quizData[currentQuiz].correct) {
           score++
       }

       currentQuiz++

       if(currentQuiz < quizData.length) {
           loadQuiz()
       } else {
           quiz.innerHTML = `
           <h2> Você acertou ${score}/${quizData.length} das questões</h2>

           <button onclick="location.reload()">Tentar Novamente</button>
           `
       }
    }
})