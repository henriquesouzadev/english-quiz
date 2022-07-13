const form = document.querySelector('.quiz-form')
const title = document.querySelector('.title')
const resultMessage = document.querySelector('.result-message')
const divScore = document.createElement('div')
const correctAnswers = ['A', 'B', 'B', 'A']

const showResultMessage = (percentage) => {
   title.insertAdjacentElement('beforebegin', divScore)
   divScore.setAttribute('class', 'result-message bg-success rounded text-center text-light p-3')
   divScore.innerHTML = `Você acertou <strong>${percentage}%</strong> do quiz!`
}

const submitUserAnswers = (event) => {
   event.preventDefault()

   let score = 0

   const userAnswers = [
      form.inputQuestion1.value,
      form.inputQuestion2.value,
      form.inputQuestion3.value,
      form.inputQuestion4.value
   ]

   userAnswers.forEach((userAnswer, index) => {
      if (userAnswer === correctAnswers[index]) {
         score += 25
      }
   })

   showResultMessage(score)
}

form.addEventListener('submit', submitUserAnswers)