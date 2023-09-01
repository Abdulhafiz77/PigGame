//buttons
const btnNow = document.querySelector('.btn--new')
const btnRoll = document.querySelector('.btn--roll')
const btnHold = document.querySelector('.btn--hold')
//img change
const imgDice = document.querySelector('.dice')

let corentScore = 0
let activePlayer = 0
let score = [0, 0]
let gameOver = true

const allFucsiy = () => {
    corentScore = 0
        document.getElementById(`current--${activePlayer}`).textContent = corentScore
         activePlayer = activePlayer === 0 ? 1 : 0

         document.querySelector('.player--0').classList.toggle('player--active')
         document.querySelector('.player--1').classList.toggle('player--active')
}

imgDice.style.display = 'none'

btnRoll.addEventListener('click', () => {
    if (gameOver) {
    imgDice.style.display = 'block'

    const random = Math.floor(Math.random() * 6 + 1)
    imgDice.src = `./dice-${random}.png`

    if(random !== 1) {
        corentScore += random
        document.getElementById(`current--${activePlayer}`).textContent = corentScore

    }else {
       allFucsiy()
    }
}
})

btnHold.addEventListener('click', ()=>{
    if (gameOver){
    score[activePlayer] += corentScore
    document.getElementById(`score--${activePlayer}`).textContent = score[activePlayer]
   
    if(score[activePlayer] >= 20){
        document.querySelector(`.player--${activePlayer}`).classList.add ('player--winner')
        gameOver = false

    }else{
        allFucsiy()
    }
}
})

btnNow.addEventListener('click', () =>{
   corentScore = 0
   activePlayer = 0
   score = [0, 0]
   gameOver = true
   document.getElementById(`current--0`).textContent = corentScore
   document.getElementById(`current--1`).textContent = corentScore
   document.getElementById(`score--0`).textContent = 0
   document.getElementById(`score--1`).textContent = 0
   document.querySelector(`.player--0`).classList.remove ('player--winner')
   document.querySelector(`.player--1`).classList.remove ('player--winner')
   document.querySelector(`.player--1`).classList.remove ('player--active')
   document.querySelector(`.player--0`).classList.add ('player--active')
})