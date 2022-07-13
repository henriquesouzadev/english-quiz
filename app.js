const form = document.querySelector('.quiz-form')
const title = document.querySelector('.title')
const resultMessage = document.querySelector('.result-message')
const divScore = document.createElement('div')
const correctAnswers = ['C', 'B', 'D', 'A']
let score = 0

const scoreCalculate = (answers = []) => {
   score = 0
   
   answers.forEach((userAnswer, index) => {
      const isUserAnswerCorrect = userAnswer === correctAnswers[index]
      if (isUserAnswerCorrect) {
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
   const userAnswers = []

   correctAnswers.forEach((_, index) => {
      const userAnswer = form[`inputQuestion${index + 1}`].value
      userAnswers.push(userAnswer)
   })

   return userAnswers
}

const submitUserAnswers = (event) => {
   event.preventDefault()

   const userAnswers = getUserAnswers()

   scoreCalculate(userAnswers)
   showResultMessage()
}

form.addEventListener('submit', submitUserAnswers)