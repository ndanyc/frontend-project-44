import readlineSync from 'readline-sync'

const evenGame = () => {
  console.log('Welcome to the Brain Games!')
  const name = readlineSync.question('May I have your name? ')
  console.log(`Hello, ${name}!`)
  console.log('Answer "yes" if the number is even, otherwise answer "no".')

  let correctAnswers = 0
  let rounds = 3

  for (let i = 0; i < rounds; i++) {
    let number = Math.floor(Math.random() * 100)
    let isEven = number % 2 === 0

    console.log(`Question: ${number}`)
    const answer = readlineSync.question('Your answer: ')

    if (isEven && answer === 'yes'
      || !isEven && answer === 'no') {
      console.log('Correct!')
      correctAnswers++
    }
    else {
      const correct = isEven ? 'yes' : 'no'
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correct}'. Let's try again, ${name}!'`)
      return
    }
  }

  if (rounds === 3) {
    console.log(`Congratulations, ${name}!`)
  }
}

export default evenGame
