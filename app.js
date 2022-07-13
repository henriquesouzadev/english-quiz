const form = document.querySelector('.quiz-form')
const title = document.querySelector('.title')
const resultMessage = document.querySelector('.result-message')
const divScore = document.createElement('div')
const correctAnswers = ['C', 'B', 'D', 'A']
let score = 0

const scoreCalculate = (answers = []) => {
   score = 0
   
   answers.forEach((userAnswer, index) => {
      if (userAnswer === correctAnswers[index]) {
         score += 25
      }
   })
}

const showResultMessage = () => {
   title.insertAdjacentElement('beforebegin', divScore)
   divScore.setAttribute('class', 'result-message bg-success rounded text-center text-light p-3')
   divScore.innerHTML = `Você acertou <strong>${score}%</strong> do quiz!`

   scroll({ top, behavior: 'smooth' })
}

const getUserAnswers = () => {
   const answers = [
      form.inputQuestion1.value,
      form.inputQuestion2.value,
      form.inputQuestion3.value,
      form.inputQuestion4.value
   ]

   return answers
}

const submitUserAnswers = (event) => {
   event.preventDefault()

   const userAnswers = getUserAnswers()

   scoreCalculate(userAnswers)
   showResultMessage()
}

form.addEventListener('submit', submitUserAnswers)